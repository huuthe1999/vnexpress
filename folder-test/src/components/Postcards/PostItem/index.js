import { CommentIcon } from '@/assets/icons';
import { newsImg } from '@/assets/imgs';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './PostItem.module.scss';

const cx = classNames.bind(styles, bootstrapStyles);
const PostItem = () => {
	return (
		<article className={cx('container-fluid wrapper', 'common')}>
			<div className={cx('row')}>
				<div
					className={cx(
						'col-12 col-md-6 d-flex flex-column order-2 order-md-1',
						'content',
					)}>
					<h3 className={cx('title-news')}>
						<Link to={'/'} className={cx('title-news-link')}>
							Nắng nóng giáng đòn vào khủng hoảng khí đốt châu Âu
						</Link>
					</h3>
					<p className={cx('description')}>
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
				<div
					className={cx(
						'col-12 col-md-6 order-1 order-md-2',
						'thumb-art',
					)}>
					<Link to={'/'} className={cx('thumb', 'thumb-img')}>
						<img src={newsImg} alt='news' />
					</Link>
				</div>
			</div>
		</article>
	);
};

export default PostItem;
