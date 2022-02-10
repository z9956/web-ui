import renderTemplate from './template.js';
import { PREFIX } from '../../config/constant.js';

const defaultConfig = {
	buttonPrimary: 'default',
};

const selector = `${PREFIX}-avatar`;

class Avatar extends HTMLElement {
	shadowRoot = null;
	config = defaultConfig;

	constructor() {
		super();
		this.render();

		console.log(this.config);
	}

	render() {
		this.shadowRoot = this.attachShadow({ mode: 'closed' });
		this.shadowRoot.innerHTML = renderTemplate(this.config, selector);
	}
}

if (!customElements.get(selector)) {
	customElements.define(selector, Avatar);
}
