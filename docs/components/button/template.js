import defaultStyles from '../config/defaultStyle.js';
import getButtonStyles from './style.js';

export default (config, selector) => {
	const [buttonStyles, buttonSize, hoverStyle] = getButtonStyles(config);

	return `
        <style>
            .${selector} {
            	box-sizing: border-box;
        		cursor: pointer;
        		user-select: none;
        		text-align: center;
        		border: 1px solid transparent;
        		border-radius: 5px;
				transition: 0.1s all;
        		display: inline-block;
        		${buttonStyles}
        		${buttonSize}
            }
            
            .${selector}:active {
            	transform: scale(0.95);
            }
			
			.${selector}:hover {
            	 ${hoverStyle};
			}
            
            :host([disabled]) .${selector} { 
            	cursor: not-allowed;
                border-color: ${defaultStyles.disabled};
    			color: ${defaultStyles.disabledColor};
    			background: ${defaultStyles.disabledBorder};
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
