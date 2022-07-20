import { CommentIcon } from '@/assets/icons';
import { newsImg } from '@/assets/imgs';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './NewsItem.module.scss';

const cx = classNames.bind(styles, bootstrapStyles);
const NewsItem = () => {
	return (
		<article className={cx('wrapper', 'common')}>
			<h3 className={cx('title-news')}>
				<Link to={'/'} className={cx('title-news-link')}>
					Nắng nóng giáng đòn vào khủng hoảng khí đốt châu Âu
				</Link>
			</h3>
			<div className={cx('container-fluid px-0', 'content')}>
				<div className={cx('row')}>
					<div className={cx('col-12 col-sm-6', 'thumb-art')}>
						<Link to={'/'} className={cx('thumb', 'thumb-img')}>
							<img src={newsImg} alt='news' />
						</Link>
					</div>
					<p className={cx('col-12 col-sm-6', 'description')}>
						<Link to={'/'} className={cx('description-link')}>
							Người dân châu Âu đang phải bật điều hòa tối đa khi
							thời tiết nắng nóng kỷ lục, kéo theo lượng khí đốt
							cần để sản xuất điện tăng vọt.
						</Link>
						<span>
							<CommentIcon />
							<span>104</span>
						</span>
					</p>
				</div>
			</div>
		</article>
	);
};

export default NewsItem;
