import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './News.module.scss';
import NewsItem from './NewsItem';

const cx = classNames.bind(styles, bootstrapStyles);
const News = () => {
	return (
		<div className={cx('wrapper')}>
			{[...Array(14)].map((_, index) => (
				<NewsItem key={index} />
			))}
		</div>
	);
};

export default News;
