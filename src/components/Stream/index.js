import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './Stream.module.scss';

const cx = classNames.bind(styles, bootstrapStyles);
const Stream = ({ leftPanel, rightPanel }) => {
	return (
		<div className={cx('row')}>
			<div className={cx('col-12 col-sm-4', 'leftPanel')}>
				{leftPanel}
			</div>
			<div className={cx('col-12 col-sm-8', 'rightPanel')}>
				{rightPanel}
			</div>
		</div>
	);
};

export default Stream;
