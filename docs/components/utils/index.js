export const getAttributes = (elem) => {
	if (!elem) return {};
	const attrs = {};
	const attrSource = Object.values(elem.attributes);

	attrSource &&
		attrSource.length > 0 &&
		attrSource.forEach((ele) => {
			const { name, value } = ele;
			attrs[name] = value;
		});

	return attrs;
};

export const isElement = (el) => {
	return (
		el != null &&
		typeof el == 'object' &&
		'nodeType' in el &&
		el.nodeType === Node.ELEMENT_NODE
	);
};
