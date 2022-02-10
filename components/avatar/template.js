export default (config, selector) => {
	const { width, radius, src } = config;

	return `
		<style>
			.[className] {
			width: ${width}px;
			height: ${width}px;
			border-radius: ${radius}px;
		}
		</style>
		
		<span class="${selector}">
			<img src="${src}" alt="avatar" />
		</span>
	`;
};
