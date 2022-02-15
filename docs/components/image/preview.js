export default (config) => {
	const { src, alt } = config;

	let rotate = 0;
	let zoom = 1;

	const imgStyle = `
		transform: scale3d(${zoom}, ${zoom}, ${zoom}) rotate(${
		rotate * 90
	}deg) translate(-50%, -50%);
	`;

	return `
        <style>
		 .image-mask {
				position: fixed;
				width: 100%;
				height: 100%;
				box-sizing: border-box;
				overflow: auto;
				inset: 0;
				background-color: black;
				opacity: 0.25;
				z-index: 1000;
				-webkit-tap-highlight-color: transparent;
			}
			
			.image-content {
				width: 100%;
				height: 100%;
				position: absolute;
				overflow: hidden;
				inset: 0;
				opacity: 1;
				z-index: 1000;
			}
			
			.image-content > img {
				position: absolute;
				top: 50%;
				left: 50%;
				transform-origin: 0 0;
				transition: transform 0.3s ease-in-out;
			}
			
			.image-content .operations {
				list-style: none;
				box-sizing: border-box;
				margin: 0;
				display: flex;
				position: absolute;
				top: 0;
				right: 0;
				z-index: 1;
			}
			
			.image-content .operations > li {
				width: 42px;
				height: 42px;
				padding: 12px;
				margin-left: 12px;
				list-style: none;
				box-sizing: border-box;
				cursor: pointer;
				color: #fff;
			}
			
			.image-content .operations > li >  img {
				width: 18px;
				height: 18px;
			}
        </style>
        <div class='image-modal'>
				<div class='image-mask'></div>
				<div class='image-content'>
				<ul class='operations'>
						<li class="modal-close">
							<img class="modal-close" src="/docs/components/static/close.svg" alt="">
						</li>
					</ul>
					<img style="${imgStyle}" src="${src}" alt="${alt}"/>
				</div>
			</div>
    `;
};
