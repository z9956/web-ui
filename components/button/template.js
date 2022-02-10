import { getButtonStyles, disabledStyles } from './style.js';

export default (config, selector) => {
	const styles = getButtonStyles(config);

	return `
        <style>
            .${selector} {
            	${styles.button}
            }
            
            .${selector}:active {
            	transform: scale(0.95);
            }
            
            .${selector}:hover {
            	${styles.hover}
            }
            
            :host([disabled]) .${selector} { 
            	cursor: not-allowed;
                ${disabledStyles}
            }
            
            :host([disabled]) .${selector}:active { 
            	transform: none;
            }
            
            :host([disabled]) .${selector}:hover { 
            	opacity: 1;
            }
           
        </style>
        
        <button class="${selector}">
        	<slot></slot>
		</button>
    `;
};
