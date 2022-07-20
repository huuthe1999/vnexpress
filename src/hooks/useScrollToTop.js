const { useState, useEffect } = require('react');

const useScrollToTop = (offset = 50) => {
	const [visible, setVisible] = useState(false);
	const toggleVisible = () => {
		if (window.pageYOffset > offset) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisible);
		return () => {
			window.removeEventListener('scroll', toggleVisible);
		};
	}, []);

	return { visible, scrollToTop };
};

export default useScrollToTop;
