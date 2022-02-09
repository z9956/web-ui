import { LIBRARY_NAME } from '../../config/constant.js';

export default (config) => {
	const { width, radius, url } = config;

	const className = `${LIBRARY_NAME}-avatar`;

	return `
		<style>
			.[className] {
			width: ${width}px;
			height: ${width}px;
			border-radius: ${radius}px;
			/*background-image: url(${url});*/
			/*background-size: cover;*/
			/*background-position: center;*/
		}
		</style>
		
		<div class="${className}">
			<img src="${url}" alt="">
		</div>
	`;
};
