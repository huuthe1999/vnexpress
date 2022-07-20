import { HomeIcon, LogoIcon, MenuOutlineIcon } from '@/assets/icons';

import HeadlessTippy from '@tippyjs/react/headless';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './MainNav.module.scss';

const cx = classNames.bind(styles, bootstrapStyles);

const subMenus = [
	{
		id: 1,
		name: 'Chính trị',
	},
	{
		id: 2,
		name: 'Dân sinh',
	},
	{
		id: 3,
		name: 'Lao động - Việc làm',
	},
	{
		id: 4,
		name: 'Giao thông',
	},
	{
		id: 5,
		name: 'Mekong',
	},
];
const items = [
	{
		id: 0,
		name: 'Mới nhất',
		isNewest: true,
	},
	{
		id: 1,
		name: 'Thời sự',
	},
	{
		id: 2,
		name: 'Góc nhìn',
	},
	{
		id: 3,
		name: 'Thế giới',
	},
	{
		id: 4,
		name: 'Video',
	},
	{
		id: 5,
		name: 'Podcasts',
	},
	{
		id: 6,
		name: 'Kinh doanh',
	},
	{
		id: 7,
		name: 'Khoa học',
	},
	{
		id: 8,
		name: 'Giải trí',
	},
	{
		id: 9,
		name: 'Thể thao',
	},
	{
		id: 10,
		name: 'Pháp luật',
	},
	{
		id: 11,
		name: 'Giáo dục',
	},
	{
		id: 12,
		name: 'Sức khỏe',
	},
	{
		id: 13,
		name: 'Đời sống',
	},
	{
		id: 14,
		name: 'Du lịch',
	},
	{
		id: 15,
		name: 'Số hóa',
	},
	{
		id: 16,
		name: 'Xe',
	},
	{
		id: 17,
		name: 'Ý kiến',
	},
	{
		id: 18,
		name: 'Tâm sự',
	},
	{
		id: 19,
		name: 'Hài',
	},
];

const homeItem = {
	iconHome: <HomeIcon className={cx('icon-home')} />,
	iconLogo: <LogoIcon className={cx('icon-logo')} />,
	isHome: true,
};
const allItem = {
	name: 'Tất cả',
	isEnd: true,
};

const MainNav = ({ visible }) => {
	return (
		<nav
			className={cx('container-fluid', 'wrapper', {
				sticky: visible,
			})}>
			<ul
				className={cx(
					'd-flex justify-content-start mx-auto my-0',
					'list',
				)}>
				<li
					className={cx('list-item', {
						home: homeItem.isHome,
						newest: homeItem.isNewest,
						active: visible,
					})}>
					<Link
						to={'/'}
						className={cx('list-item-link', {
							home: homeItem.isHome,
							newest: homeItem.isNewest,
						})}>
						<span
							className={cx('icon', {
								'icon-home': homeItem.isHome,
								'icon-logo': homeItem.isNewest,
							})}>
							{homeItem.isHome && homeItem.iconHome}
							{homeItem.isHome && homeItem.iconLogo}
						</span>

						{homeItem.name}
					</Link>
				</li>

				{items.map(item => (
					<div key={item.id}>
						<HeadlessTippy
							offset={[0, 0]}
							interactive
							placement='bottom-start'
							render={attrs => (
								<div
									className={cx('dropdown')}
									tabIndex={-1}
									{...attrs}>
									<div className={cx('dropdown-item', 'sub')}>
										{subMenus.map(subMenu => (
											<Link
												key={subMenu.id}
												to={'/'}
												className={cx(
													'dropdown-link',
													'sub',
												)}>
												{subMenu.name}
											</Link>
										))}
									</div>
								</div>
							)}>
							<li
								className={cx('list-item', {
									home: item.isHome,
									newest: item.isNewest,
									active: visible,
								})}>
								<Link
									to={'/'}
									className={cx('list-item-link', {
										home: item.isHome,
										newest: item.isNewest,
									})}>
									<span
										className={cx('icon', {
											'icon-home': item.isHome,
											'icon-logo': item.isNewest,
										})}>
										{item.isHome && item.icon}
										{item.isHome && item.iconLogo}
									</span>

									{item.name}
								</Link>
							</li>
						</HeadlessTippy>
					</div>
				))}

				<li
					className={cx('list-item', {
						end: allItem.isEnd,
					})}>
					<Link to={'/'} className={cx('list-item-link')}>
						{allItem.name}
						<MenuOutlineIcon />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MainNav;
