import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);

const Button = React.forwardRef(
	({ to, href, icon, onClick, children, className, ...restProps }, ref) => {
		let Component = 'button';
		const styles = cx('wrapper', {
			[className]: className,
		});
		const props = {
			onClick,
			...restProps,
		};
		if (to) {
			props.to = to;
			Component = Link;
		} else if (href) {
			props.href = href;
			Component = 'a';
		}
		return (
			<Component className={styles} ref={ref} {...props}>
				{icon}
				{children}
			</Component>
		);
	},
);

export default Button;
