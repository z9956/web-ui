import renderTemplate from './template.js';
import renderPreview from './preview.js';
import { PREFIX } from '../config/constant.js';
import { getAttributes } from '../utils';
import usePortal from '../utils/usePortal.js';

export const selector = `${PREFIX}-image`;

const defaultConfig = {
	alt: '',
};

class Image extends HTMLElement {
	shadowRoot = null;
	config = defaultConfig;

	static get observedAttributes() {
		return ['src', 'icon', 'alt', 'shape', 'onerror', 'style'];
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
		const imgEle = this.selector.querySelector('img');

		this.onerror = this.onerror;
		this.src = this.src;

		imgEle.addEventListener('error', (e) => {
			if (e)
				this.shadowRoot.innerHTML = renderTemplate(this.config, selector, true);
		});

		const el = usePortal('image');

		this.selector.addEventListener('click', () => {
			el.onclick = (e) => {
				console.log('className', e.target.className);
				if (['modal-close', 'image-content'].includes(e.target.className)) {
					el.remove();
				}
			};

			el.innerHTML = renderPreview(this.config);
			document.body.appendChild(el);
		});
	}

	attributeChangedCallback(name, oldValue, newValue) {}

	disconnectedCallback() {
		this.selector = null;
	}
}

if (!customElements.get(selector)) {
	customElements.define(selector, Image);
}
