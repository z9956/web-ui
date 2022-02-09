const borderStyle = {
	solid: 'solid',
	dashed: 'dashed',
};

const buttonTypeMap = {
	secondary: { textColor: '#222', bgColor: '#FFF', borderColor: '#222' },
	primary: { textColor: '#FFF', bgColor: '#5FCE79', borderColor: '#5FCE79' },
	error: { textColor: '#222', bgColor: '#FFF', borderColor: '#FFF' },
};

export default (config, selector) => {
	const { buttonRadius, variant } = config;

	const borderStyleCSS =
		variant && borderStyle[variant]
			? borderStyle[variant]
			: borderStyle['solid'];

	const backgroundCSS =
		variant && buttonTypeMap[variant]
			? buttonTypeMap[variant]
			: buttonTypeMap['default'];

	return `
        <style>
            .[selector] {
                border: 1px ${borderStyleCSS} ${backgroundCSS.borderColor};
                color: ${backgroundCSS.textColor};
                background-color: ${backgroundCSS.bgColor};
                font-size: 12px;
                text-align: center;
                padding: 4px 10px;
                border-radius: ${buttonRadius};
                cursor: pointer;
                display: inline-block;
                height: 28px;
            }
            :host([disabled]) .[selector]{ 
                cursor: not-allowed; 
                pointer-events: all; 
                border: 1px solid #D6D6D6;
                color: #ABABAB;
                background-color: #EEE;
            }
            :host([loading]) .[selector]{ 
                cursor: not-allowed; 
                pointer-events: all; 
                border: 1px solid #D6D6D6;
                color: #ABABAB;
                background-color: #F9F9F9;
            }
        </style>
        
        <button class="${selector}">
        	<slot></slot>
		</button>
    `;
};
