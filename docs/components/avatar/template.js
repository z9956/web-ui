import defaultStyles from '../config/defaultStyle.js';
import { isElement } from '../utils';

export default (config, selector) => {
	const { icon, src, alt, shape, size } = config;

	const isNode = isElement(icon);

	let childrenToRender;

	if (isNode) {
		childrenToRender = icon;
	} else if (src) {
	}

	return `
        <style>
            .${selector} {
            	box-sizing: border-box;
				width: ${size ? size + 'px' : '36px'};
				height: ${size ? size + 'px' : '36px'};
				display: inline-block;
				border-radius: ${shape === 'square' ? 0 : '50%'};
				overflow: hidden;
				position: relative;
				font-size: ${defaultStyles.fontSize};
            }
            
            .${selector} > img {
            	width: 100%;
            	height: 100%;
            }
            
            .${selector} > .text {
            	box-sizing: border-box;
            	position: absolute;
				line-height: 36px;
				left: 50%;
				transform-origin: 0 center;
				transform: scale(1) translateX(-50%);
            }

        </style>

        <span class="${selector}">
       
        	<img src="${src}" alt="${alt}">
		</span>
    `;
};
