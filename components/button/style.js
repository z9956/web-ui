import defaultStyles from '../defaultStyle.js';

const getButtonColors = (variant) => {
	const colors = {
		secondary: `
			border-color: ${defaultStyles.border};
			color: ${defaultStyles.defaultColor};
			background: ${defaultStyles.background};
		`,
		primary: `
			border-color: ${defaultStyles.primary};
			color: #fff;
			background: ${defaultStyles.primary};
		`,
		error: `
			border-color: ${defaultStyles.error};
			color: #fff;
			background: ${defaultStyles.error};
		`,
	};

	return colors[variant];
};

const getButtonHoverColors = (variant) => {
	const colors = {
		secondary: `
			border-color: ${defaultStyles.primary};
			color: ${defaultStyles.primary};
		`,
		primary: `opacity: 0.8;`,
		error: `opacity: 0.8;`,
	};

	return colors[variant];
};

export const disabledStyles = `
    border-color: ${defaultStyles.disabled};
    color: ${defaultStyles.disabledColor};
    background: ${defaultStyles.disabledBorder};
`;

export const getButtonStyles = (props) => {
	const { size, variant } = props;
	const sizeStyles = getButtonSize(size);
	const variantStyles = getButtonColors(variant);
	const hoverStyles = getButtonHoverColors(variant);

	return {
		button: `
			box-sizing: border-box;
        	cursor: pointer;
        	user-select: none;
        	text-align: center;
        	border: 1px solid transparent;
        	border-radius: 5px;
        	${sizeStyles}
        	${variantStyles}
			transition: 0.1s all;
		`,
		icon: `
			display: inline-flex;
			margin-right: 8px;
			vertical-align: -0.125em;
		`,
		hover: hoverStyles,
	};
};

const getButtonSize = (size) => {
	const defaultSize = `
	    height: 32px;
        padding: 4px 15px;
        font-size: 14px;
        line-height: 1.5715;
	`;

	switch (size) {
		case 'sm':
			return {
				height: '24px',
				padding: '0 7px',
				fontSize: '14px',
				borderRadius: '2px',
				lineHeight: '1.5715',
			};
		case 'md':
			return defaultSize;
		case 'lg':
			return {
				height: '40px',
				padding: '6px 15px',
				fontSize: '14px',
				lineHeight: '1.5715',
			};
		default:
			return defaultSize;
	}
};
