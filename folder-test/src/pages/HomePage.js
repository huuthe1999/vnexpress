// import classNames from 'classnames/bind';
// import styles from './HomePage.module.scss';
// const cx = classNames.bind(styles);

import BoxCategory from '@/components/BoxCategory';
import Cards from '@/components/Cards';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import License from '@/components/License';
import MainNav from '@/components/MainNav';
import News from '@/components/News';
import Postcards from '@/components/Postcards';
import Story from '@/components/Story';
import Stream from '@/components/Stream';
import useScrollToTop from '@/hooks/useScrollToTop';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
const cx = classNames.bind(styles, bootstrapStyles);

const HomePage = () => {
	const { visible } = useScrollToTop();
	return (
		<div className={cx('wrapper')}>
			<Header />
			<section className={cx('position-sticky sticky-top', 'main-nav')}>
				<MainNav visible={visible} />
			</section>
			<div className={cx('container-xl')}>
				<section className={cx('story')}>
					<Story />
				</section>
			</div>
			<div className={cx('container-xl')}>
				<section className={cx('news')}>
					<Stream leftPanel={<News />} rightPanel={<BoxCategory />} />
				</section>
			</div>
			<div className={cx('container-xl')}>
				<section className={cx('post-cards')}>
					<Postcards />
				</section>
			</div>
			<div className={cx('container-xl')}>
				<section className={cx('cards')}>
					<Cards />
				</section>
			</div>
			<div className={cx('container-xl')}>
				<footer className={cx('footer')}>
					<Footer />
				</footer>
			</div>

			<div className={cx('container-xl')}>
				<div className={cx('license')}>
					<License />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
