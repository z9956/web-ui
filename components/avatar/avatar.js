import renderTemplate from './template.js';
import { PREFIX } from '../../config/constant.js';

const defaultConfig = {
	buttonPrimary: 'default',
};

// const Selector = `${PREFIX}-avatar`;
const Selector = `w-avatar`;

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
		this.shadowRoot.innerHTML = renderTemplate(this.config);
	}
}

if (!customElements.get(Selector)) {
	customElements.define(Selector, Avatar);
}
