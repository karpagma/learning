function LengthFromKms(length) {
	return {
		length,
		unit: 'km'
	};
};

const len = LengthFromKms(2);
console.log(len);
