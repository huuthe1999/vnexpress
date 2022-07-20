import { LogoIcon, TimeIcon, UserIcon } from '@/assets/icons';
import Button from '@/components/Button';
import formatDay from '@/utlils/formatDay';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import Search from './Search';

const cx = classNames.bind(styles, bootstrapStyles);
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className={cx('container-fluid', 'custom')}>
			<div
				className={cx(
					'w-100 my-0 mx-auto px-0 d-flex align-items-center justify-content-start justify-content-sm-between',
					'inner',
				)}>
				{/* <div className={cx('d-block d-sm-none')}>
					{isOpen ? (
						<MenuOutlineIcon
							onClick={handleToggle}
							className={cx('icon-toggle')}
						/>
					) : (
						<CloseOutlineIcon
							onClick={handleToggle}
							className={cx('icon-toggle')}
						/>
					)}
				</div> */}
				<div className={cx('inner-left')}>
					<Link to={'/'} className={cx('logo')}>
						<img
							className={cx('mw-100')}
							src='https://s1.vnecdn.net/vnexpress/restruct/i/v626/v2_2019/pc/graphics/logo.svg'
							alt='VnExpress - Bao tieng Viet nhieu nguoi xem nhat'
						/>
					</Link>
					<span className={cx('d-none d-xl-block', 'time-now')}>
						{formatDay(new Date())}
					</span>
				</div>
				<div className={cx('d-none d-sm-flex', 'inner-right')}>
					<Button to={'/'} icon={<TimeIcon />}>
						Mới nhất
					</Button>
					<Button to={'/'} icon={<LogoIcon />}>
						International
					</Button>
					<Search />
					<Button
						to={'/'}
						icon={<UserIcon />}
						className={cx('logIn-btn')}>
						Đăng nhập
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
