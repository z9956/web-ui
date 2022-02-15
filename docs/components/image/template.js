import defaultStyles from '../config/defaultStyle.js';

export default (config, selector, hasErr) => {
	const { src, alt, style } = config;

	if (hasErr) {
		const errClass = `${selector}-error`;

		return `
			<style>
				.${errClass} {
					width: 200px;
					height: 200px;
					background-color: rgb(245, 245, 245);
					position: relative;
					box-sizing: border-box;
				}
				
				.${errClass} > span {
					width: 60px;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					box-sizing: border-box;
				}
				
				.${errClass} > span > svg {
					width: 100%;
					height: auto;
					fill: #ccc;
				}
		
		</style>
		<div class="${errClass}">
			<span>
				<svg t="1644896402133" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1465" width="200" height="200"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792z m0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z" p-id="1466"></path><path d="M304 456c48.6 0 88-39.4 88-88s-39.4-88-88-88-88 39.4-88 88 39.4 88 88 88z m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z" p-id="1467"></path></svg>
			</span>
		</div>`;
	}

	return `
        <style>
            .${selector} {
            	width: 200px;
				height: auto;
				cursor: pointer;
				display: inline-flex;
				box-sizing: border-box;
				font-size: 0;
				position: relative;
            }
            
            .${selector} > img {
            	width: 100%;
				height: 100%;
				object-fit: cover;
				box-sizing: border-box;
            }
            
            .${selector} > .image-mask {
            	display: none;
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background-color: rgba(0, 0, 0, 0.5);
				caret-color: transparent;
				user-select: none;
            }
            
            .${selector}:hover > .image-mask {
            	display: block;
            }
            
            .${selector} > .image-mask > span {
            	position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				color: #fff;
				font-size: ${defaultStyles.fontSize};
            }
        </style>
        <div class="${selector}" style="${style}">
        	<div class="image-mask">
				<span>预览</span>
			</div>
        
        	<img src="${src}" alt="${alt}">
		</div>
    `;
};
