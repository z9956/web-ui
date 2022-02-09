import renderTemplate from './template.js';
import { PREFIX } from '../../config/constant.js';

const selector = `${PREFIX}-button`;

const defaultConfig = {
	variant: 'secondary',
};

class Button extends HTMLElement {
	shadowRoot = null;
	config = defaultConfig;

	static get observedAttributes() {
		return ['disabled', 'icon', 'loading', 'href'];
	}

	constructor() {
		super();
		this.render();
	}

	render() {
		this.shadowRoot = this.attachShadow({ mode: 'closed' });
		this.shadowRoot.innerHTML = renderTemplate(this.config, selector);
	}

	get disabled() {
		return this.getAttribute('disabled') !== null;
	}

	// get onclick() {
	// 	return this.getAttribute('onclick');
	// }
	//
	// set onclick(value) {
	//
	// }

	set disabled(value) {
		if (value === null || value === false) {
			this.removeAttribute('disabled');
		} else {
			this.setAttribute('disabled', '');
		}
	}

	connectedCallback() {
		this.selector = this.shadowRoot.querySelector(`.${selector}`);

		this.disabled = this.disabled;
	}

	disconnectedCallback() {
		this.selector = null;
	}

	attributeChangedCallback(name, oldValue, newValue) {
		if (name === 'disabled' && this.selector) {
			if (newValue !== null) {
				this.selector.setAttribute('disabled', 'disabled');
			} else {
				this.selector.removeAttribute('disabled');
			}
		}
	}
}

if (!customElements.get(selector)) {
	customElements.define(selector, Button);
}
