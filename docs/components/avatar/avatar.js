import renderTemplate from './template.js';
import { PREFIX } from '../config/constant.js';
import { getAttributes } from '../utils';

export const selector = `${PREFIX}-avatar`;

const defaultConfig = {
	alt: '',
};

class Avatar extends HTMLElement {
	shadowRoot = null;
	config = defaultConfig;

	static get observedAttributes() {
		return ['src', 'icon', 'alt', 'shape', 'onerror'];
	}

	constructor() {
		super();
		this.render();
	}

	render() {
		this.shadowRoot = this.attachShadow({ mode: 'closed' });
	}

	updateStyle() {
		this.config = { ...defaultConfig, ...getAttributes(this) };
		this.shadowRoot.innerHTML = renderTemplate(this.config, selector);
	}

	get src() {
		return this.getAttribute('src') !== null;
	}

	get onerror() {
		return this.getAttribute('onerror');
	}

	set onerror(value) {
		if (value) {
			this.setAttribute('onerror', value);
		} else {
			this.removeAttribute('onerror');
		}
	}

	set src(value) {
		if (value === null) {
			this.removeAttribute('src');
		} else {
			this.setAttribute('src', '');
		}
	}

	connectedCallback() {
		this.updateStyle();

		this.selector = this.shadowRoot.querySelector(`.${selector}`);

		this.onerror = this.onerror;
		this.src = this.src;
	}

	attributeChangedCallback(name, oldValue, newValue) {}

	disconnectedCallback() {
		this.selector = null;
	}
}

if (!customElements.get(selector)) {
	customElements.define(selector, Avatar);
}
