import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './License.module.scss';
const cx = classNames.bind(styles, bootstrapStyles);
const License = () => {
	return (
		<div className={cx('row', 'wrapper')}>
			<div className={cx('col-12 col-sm-3')}>
				<h3>Báo tiếng Việt nhiều người xem nhất</h3>
				<p>
					Thuộc Bộ Khoa học Công nghệ Số giấy phép: 548/GP-BTTTT ngày
					24/08/2021
				</p>
			</div>
			<div className={cx('col-12 col-sm-6')}>
				<p>
					Tổng biên tập: Phạm Hiếu Địa chỉ: Tầng 5, Tòa nhà FPT, 17
					phố Duy Tân, Cầu Giấy, Hà Nội Điện thoại: 024 7300 8899 -
					máy lẻ 4500
				</p>
			</div>
			<div className={cx('col-12 col-sm-3')}>
				<p>© 1997-2022. Toàn bộ bản quyền thuộc VnExpress</p>
			</div>
		</div>
	);
};

export default License;
