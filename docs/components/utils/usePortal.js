import { LIBRARY_NAME } from '../config/constant.js';

const getId = () => crypto.randomUUID();

const createElement = (id) => {
	const el = document.createElement('div');
	el.setAttribute('id', id);

	return el;
};

const usePortal = (id = getId(), getContainer) => {
	const currentId = `${LIBRARY_NAME}-${id}`;

	const container = getContainer ? getContainer : null;
	const parent = container ? container : document.body;
	const hasEle = parent.querySelector(`#${currentId}`);
	const el = hasEle ? hasEle : createElement(currentId);

	if (!hasEle) {
		parent.appendChild(el);
	}

	return el;
};

export default usePortal;
