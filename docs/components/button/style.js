import defaultStyles from '../config/defaultStyle.js';

const getButtonSize = {
	sm: `
	  height: 24px;
	  padding: 0 7px;
	  font-size: 14px;
	  border-radius: 2px;
	  line-height: 1.5715;
	`,
	md: `
	  height: 32px;
      padding: 4px 15px;
      font-size: 14px;
 	  line-height: 1.5715;
	`,
	lg: `
	  height: 40px;
	  padding: 6px 15px;
	  font-size: 14px;
	  line-height: 1.5715;
	`,
};

const getButtonHover = {
	secondary: `
	  border-color: ${defaultStyles.primary};
	  color: ${defaultStyles.primary};
	`,
	primary: `
	  opacity: 0.8;
	`,
	error: `
	  opacity: 0.8;
	`,
};

const getButtonVariant = {
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

const getButtonStyles = (config) => {
	const { size, variant } = config;

	const variantStyle = getButtonVariant[variant];
	const sizeStyle = getButtonSize[size];
	const hoverStyle = getButtonHover[variant];

	return [variantStyle, sizeStyle, hoverStyle];
};

export default getButtonStyles;
