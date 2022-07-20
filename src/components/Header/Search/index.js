import { SearchIcon } from '@/assets/icons';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
const cx = classNames.bind(styles, bootstrapStyles);
const Search = () => {
	return (
		<form className={cx('d-none d-lg-block', 'wrapper')}>
			<input className={cx('input')} type='text' placeholder='Tìm kiếm' />
			<button className={cx('button')} type='submit'>
				<SearchIcon />
			</button>
		</form>
	);
};

export default Search;
