import defaultStyles from '../config/defaultStyle.js';

export default (config, selector) => {
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
            }
            
            .${selector}:active {
            	transform: scale(0.95);
            }
            
            
            :host([size="sm"]) .${selector}{
            	height: 24px;
				padding: 0 7px;
				font-size: 14px;
				border-radius: 2px;
				line-height: 1.5715;
			}
			
			:host([size="md"]) .${selector}{
            	height: 32px;
        		padding: 4px 15px;
        		font-size: 14px;
				line-height: 1.5715;
			}
			
			:host([size="lg"]) .${selector}{
            	height: 40px;
				padding: 6px 15px;
				font-size: 14px;
				line-height: 1.5715;
			}
			
			:host([variant="secondary"]) .${selector}{
            	border-color: ${defaultStyles.border};
				color: ${defaultStyles.defaultColor};
				background: ${defaultStyles.background};
			}
			
			:host([variant="primary"]) .${selector}{
            	border-color: ${defaultStyles.primary};
				color: #fff;
				background: ${defaultStyles.primary};
			}
            
            
            :host([variant="error"]) .${selector}{
            	border-color: ${defaultStyles.error};
				color: #fff;
				background: ${defaultStyles.error};
			}
			
			:host([variant="secondary"]) .${selector}:hover {
            	border-color: ${defaultStyles.primary};
				color: ${defaultStyles.primary};
			}
			
			:host([variant="primary"]) .${selector}:hover {
            	opacity: 0.8;
			}
            
            :host([variant="error"]) .${selector}:hover {
            	opacity: 0.8;
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
