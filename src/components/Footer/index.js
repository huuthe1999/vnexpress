import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
const cx = classNames.bind(styles, bootstrapStyles);
const Footer = () => {
	return (
		<div className={cx('row', 'wrapper')}>
			<div className={cx('col-6 col-lg-2 col-sm-4 mt-sm-5 mt-md-0')}>
				<ul className={cx('list')}>
					<li className={cx('list-item')}>
						<Link to={'/'}>Trang chủ</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Video</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Podcasts</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Ảnh</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Infographics</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Mới nhất</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Xem nhiều</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Tin nóng</Link>
					</li>
				</ul>
			</div>
			<div className={cx('col-6 col-lg-2 col-sm-4 mt-sm-5 mt-md-0')}>
				<ul className={cx('list', 'normal')}>
					<li className={cx('list-item')}>
						<Link to={'/'}>Thời sự</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Góc nhìn</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Thế giới</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Kinh doanh</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Giải trí</Link>
					</li>
				</ul>
			</div>
			<div className={cx('col-6 col-lg-2 col-sm-4 mt-sm-5 mt-md-0')}>
				<ul className={cx('list', 'normal')}>
					<li className={cx('list-item')}>
						<Link to={'/'}>Thể thao</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Pháp luật</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Giáo dục</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Sức khỏe</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Đời sống</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Du lịch</Link>
					</li>
				</ul>
			</div>
			<div className={cx('col-6 col-lg-2 col-sm-4 mt-sm-5 mt-md-0')}>
				<ul className={cx('list', 'normal')}>
					<li className={cx('list-item')}>
						<Link to={'/'}>Khoa học</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Số hóa</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Xe</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Ý kiến</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Tâm sự</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Hài</Link>
					</li>
				</ul>
			</div>
			<div className={cx('col-6 col-lg-2 col-sm-4 mt-sm-5 mt-md-0')}>
				<ul className={cx('list', 'normal')}>
					<li className={cx('list-item')}>
						<Link to={'/'}>Rao vặt</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Startup</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Mua ảnh</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>VnExpress</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Vhome</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>eBox</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>eWork</Link>
					</li>
				</ul>
			</div>
			<div className={cx('col-6 col-lg-2 col-sm-4 mt-sm-5 mt-md-0')}>
				<ul className={cx('list', 'normal')}>
					<li className={cx('list-item')}>
						<Link to={'/'}>Rao vặt</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Startup</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Mua ảnh</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>VnExpress</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>Vhome</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>eBox</Link>
					</li>
					<li className={cx('list-item')}>
						<Link to={'/'}>eWork</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
