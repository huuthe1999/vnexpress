import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CardItem.module.scss';
import NewsItemCustom from './NewsItemCustom';

const cx = classNames.bind(styles, bootstrapStyles);
const CardItem = () => {
	return (
		<div className={cx('wrapper')}>
			<header className={cx('container-fluid px-0', 'header')}>
				<ul className={cx('container-fluid px-0', 'list')}>
					<li className={cx('item')}>
						<Link to={'/'}>Kinh doanh</Link>
					</li>
					<li className={cx('d-none d-lg-block', 'item')}>
						<Link to={'/'}>Quốc tế</Link>
					</li>
					<li className={cx('d-none d-lg-block', 'item')}>
						<Link to={'/'}>Doanh nghiệp</Link>
					</li>
					<li className={cx('d-none d-lg-block', 'item')}>
						<Link to={'/'}>Chứng khoán</Link>
					</li>
					<li className={cx('d-none d-sm-none ', 'item')}>
						<Link to={'/'}>Bất động sản</Link>
					</li>
					<li className={cx('d-none d-sm-none', 'item')}>
						<Link to={'/'}>Bảo hiểm</Link>
					</li>
				</ul>
			</header>
			<div className={cx('container-fluid')}>
				<div className={cx('row')}>
					<div className={cx('col')}>
						<NewsItemCustom />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardItem;
