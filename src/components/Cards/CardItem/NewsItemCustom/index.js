import { CommentIcon } from '@/assets/icons';
import { cardsImg } from '@/assets/imgs';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './NewsItemCustom.module.scss';

const cx = classNames.bind(styles, bootstrapStyles);
const NewsItemCustom = () => {
	return (
		<article className={cx('row g-0 flex-column', 'wrapper', 'common')}>
			<div className={cx('container-fluid', 'thumb-art')}>
				<Link to={'/'} className={cx('thumb', 'thumb-img')}>
					<img src={cardsImg} alt='news' />
				</Link>
			</div>

			<div className={cx('container-fluid', 'content')}>
				<h3 className={cx('title-news')}>
					<Link to={'/'} className={cx('title-news-link')}>
						Hai mẹ con chăm sóc nghĩa trang liệt sĩ
					</Link>
				</h3>
				<p className={cx('description')}>
					<Link to={'/'} className={cx('description-link')}>
						QUẢNG TRỊ - Sau 40 năm làm quản trang Nghĩa trang liệt
						sĩ huyện Vĩnh Linh, bà Nguyệt nghỉ hưu, nhưng vẫn cùng
						con gái tiếp tục chăm sóc các phần mộ.
					</Link>
					<span>
						<CommentIcon />
						<span>10</span>
					</span>
				</p>
			</div>
		</article>
	);
};

export default NewsItemCustom;
