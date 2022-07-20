import { CommentIcon } from '@/assets/icons';
import { newsImg } from '@/assets/imgs';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './NewsItemCustom.module.scss';

const cx = classNames.bind(styles, bootstrapStyles);
const NewsItemCustom = ({ isOnlyContent }) => {
	return (
		<article className={cx('row g-0', 'wrapper', 'common')}>
			<div
				className={cx('col', 'thumb-art', {
					'd-none': isOnlyContent,
				})}>
				<Link to={'/'} className={cx('thumb', 'thumb-img')}>
					<img src={newsImg} alt='news' />
				</Link>
			</div>

			<div
				className={cx(
					'col col-12',
					{
						'col-sm-6': isOnlyContent ? false : true,
					},
					'content',
				)}>
				<h3 className={cx('title-news')}>
					<Link to={'/'} className={cx('title-news-link')}>
						Nắng nóng giáng đòn vào khủng hoảng khí đốt châu Âu
					</Link>
				</h3>
				<p className={cx('description')}>
					<Link to={'/'} className={cx('description-link')}>
						Người dân châu Âu đang phải bật điều hòa tối đa khi thời
						tiết nắng nóng kỷ lục, kéo theo lượng khí đốt cần để sản
						xuất điện tăng vọt.
					</Link>
					<span>
						<CommentIcon />
						<span>104</span>
					</span>
				</p>
			</div>
		</article>
	);
};

export default NewsItemCustom;
