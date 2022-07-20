import { CommentIcon } from '@/assets/icons';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './BoxItem.module.scss';
import NewsItemCustom from './NewsItemCustom';

const cx = classNames.bind(styles, bootstrapStyles);
const BoxItem = () => {
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
					<li className={cx('d-none d-lg-block', 'item')}>
						<Link to={'/'}>Bất động sản</Link>
					</li>
					<li className={cx('d-none d-lg-block', 'item')}>
						<Link to={'/'}>Bảo hiểm</Link>
					</li>
				</ul>
			</header>
			<div className={cx('container-fluid')}>
				<div className={cx('row')}>
					<div className={cx('col-12 col-lg-8', 'leftPanel')}>
						<NewsItemCustom />
					</div>
					<div className={cx('col-12 col-lg-4', 'leftPanel')}>
						<NewsItemCustom isOnlyContent />
					</div>
				</div>
				<div className={cx('row')}>
					<div className={cx('col-12 col-lg-4', 'item-news')}>
						<Link to={'/'}>
							&#x2022; Các tỷ phú Nga kiện EU vì bị trừng phạt
							<span className={cx('comment')}>
								<CommentIcon />
								<span>104</span>
							</span>
						</Link>
					</div>
					<div className={cx('col-12 col-lg-4', 'item-news')}>
						<Link to={'/'}>
							&#x2022; Giá vàng SJC biến động mạnh
							<span className={cx('comment')}>
								<CommentIcon />
								<span>104</span>
							</span>
						</Link>
					</div>
					<div className={cx('col-12 col-lg-4', 'item-news')}>
						<Link to={'/'}>
							&#x2022; Giảm 10% thuế nhập khẩu ưu đãi - khó hạ giá
							xăng
							<span className={cx('comment')}>
								<CommentIcon />
								<span>104</span>
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoxItem;
