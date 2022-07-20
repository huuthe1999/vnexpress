import Tippy, { useSingleton } from '@tippyjs/react';
import React from 'react';

const DropdownSingleTon = ({ children }) => {
	const [source, target] = useSingleton({
		overrides: ['placement'],
	});

	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, { singleton: target });
		}
		return child;
	});

	return (
		<>
			<Tippy
				delay={[0, 0]}
				singleton={source}
				moveTransition='transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
			/>
			{childrenWithProps}
		</>
	);
};

export default DropdownSingleTon;
