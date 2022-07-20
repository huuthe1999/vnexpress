import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './BoxCategory.module.scss';
import BoxItem from './BoxItem';

const cx = classNames.bind(styles, bootstrapStyles);
const BoxCategory = () => {
	return (
		<div className={cx('wrapper')}>
			{[...Array(9)].map((_, index) => (
				<BoxItem key={index} />
			))}
		</div>
	);
};

export default BoxCategory;
