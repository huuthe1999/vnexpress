import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Postcards.module.scss';
import PostItem from './PostItem';

const cx = classNames.bind(styles, bootstrapStyles);
const Postcards = () => {
	return (
		<div className={cx('container-fluid wrapper')}>
			<header className={cx('container-fluid px-0', 'header')}>
				<ul className={cx('container-fluid px-0', 'list')}>
					<li className={cx('item')}>
						<Link to={'/'}>Podcasts</Link>
					</li>
				</ul>
			</header>
			<div className={cx('row')}>
				{[...Array(3)].map((_, index) => (
					<div key={index} className={cx('col-12 col-sm-4')}>
						<PostItem />
					</div>
				))}
			</div>
		</div>
	);
};

export default Postcards;
