import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import CardItem from './CardItem';
import styles from './Cards.module.scss';

const cx = classNames.bind(styles, bootstrapStyles);
const Cards = () => {
	return (
		<div className={cx('row', 'wrapper')}>
			<div className={cx('col-12 col-lg-4 col-md-6 ps-0')}>
				<CardItem />
			</div>
			<div className={cx('col-12 col-lg-4 col-md-6 ps-0')}>
				<CardItem />
			</div>
			<div className={cx('col-12 col-lg-4 col-md-6 ps-0')}>
				<CardItem />
			</div>
		</div>
	);
};

export default Cards;
