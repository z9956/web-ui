import renderTemplate from './template.js';
import { PREFIX } from '../../config/constant.js';

export const selector = `${PREFIX}-button`;

const defaultConfig = {
	variant: 'secondary',
	size: 'md',
};

class Button extends HTMLElement {
	shadowRoot = null;
	config = defaultConfig;

	// https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#using_the_lifecycle_callbacks
	static get observedAttributes() {
		return ['disabled', 'onclick', 'href'];
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

	get onclick() {
		return this.getAttribute('onclick');
	}

	set onclick(value) {
		if (value && !this.disabled) {
			this.setAttribute('onclick', value);
		} else {
			this.removeAttribute('onclick');
		}
	}

	set disabled(value) {
		if (value === null || value === false) {
			this.removeAttribute('disabled');
		} else {
			this.setAttribute('disabled', '');
		}
	}

	handleJump(href) {
		if (window && href) {
			window.location.href = href;
		}
	}

	connectedCallback() {
		this.selector = this.shadowRoot.querySelector(`.${selector}`);

		this.disabled = this.disabled;
		this.onclick = this.onclick;

		this.selector.addEventListener('click', () => {
			if (!this.disabled) this.handleJump(this.getAttribute('href'));
		});
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

	disconnectedCallback() {
		this.selector = null;
	}
}

if (!customElements.get(selector)) {
	customElements.define(selector, Button);
}
