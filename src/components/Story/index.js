import { CommentIcon } from '@/assets/icons';
import { advStory, authorStory, imgStory } from '@/assets/imgs';
import bootstrapStyles from 'bootstrap/dist/css/bootstrap.min.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Story.module.scss';

const cx = classNames.bind(styles, bootstrapStyles);
const Story = () => {
	return (
		<div className={cx('w-100', 'wrapper')}>
			<div className={cx('row mx-0 g-0')}>
				<div className={cx('col-sm-12 col-lg-9')}>
					<div className={cx('row g-0', 'item')}>
						<div className={cx('col-12 col-sm-6 col-md-8')}>
							<div className={cx('thumb')}>
								<Link to={'/'} className={cx('thumb-link')}>
									<img
										className={cx('thumb-img')}
										src={imgStory}
										alt='thumb'
									/>
								</Link>
							</div>
						</div>
						<div className={cx('col-12 col-sm-6 col-md-4', 'desc')}>
							<h3 className={cx('thumb-title')}>
								<Link to={'/'} className={cx('link')}>
									Nghiên cứu mở thêm 22 phố đi bộ ở trung tâm
									Sài Gòn
								</Link>
							</h3>
							<p className={cx('thumb-desc', 'desc')}>
								<Link to={'/'}>
									22 đường ở trung tâm TP HCM dự kiến được tổ
									chức thành phố đi bộ trong ba năm tới, giúp
									hạn chế xe vào nội đô, thúc đẩy phát triển
									du lịch, kinh tế đêm.
								</Link>
							</p>
							<p className={cx('thumb-desc', 'more')}>
								Nội dung được đề cập trong Đề án tổ chức các
								tuyến phố đi bộ ở khu trung tâm, vừa được Sở
								Giao thông vận tải gửi UBND TP HCM. Theo đó, từ
								nay đến năm 2023, phố đi bộ sẽ tổ chức ở vòng
								xoay Công trường Quốc tế, đường Phạm Ngọc Thạch,
								Công xã Paris (từ đường Lê Duẩn đến Nguyễn Du),
								Lê Lợi (từ Nguyễn Huệ đến vòng xoay Quách Thị
								Trang), Đồng Khởi (từ Nguyễn Du đến Lê Lợi),
								Phan Chu Trinh, Phan Bội Châu. Các tuyến này cấm
								xe chạy khi tổ chức phố đi bộ. Giai đoạn này
								thành phố sẽ hạn chế xe, để ưu tiên người đi bộ
								trên các đường Nguyễn An Ninh và Lưu Văn Lang.
							</p>
							<p className={cx('thumb-time', 'desc')}>2h trước</p>
							<p className={cx('thumb-meta', 'desc')}>Thời sự</p>
							<p className={cx('thumb-meta', 'desc')}>
								<Link to={'/'}>
									<CommentIcon />
									<span>104</span>
								</Link>
							</p>
						</div>
					</div>
					<div className={cx('row', 'sub-new')}>
						<div className={cx('col-12 col-sm-4', 'sub-new-item')}>
							<Link to={'/'} className={cx('sub-new-link')}>
								<h3 className={cx('sub-new-title')}>
									Hãng năng lượng hàng đầu của Đức hết tiền để
									cầm cự
								</h3>
								<p className={cx('sub-new-desc')}>
									Uniper - công ty nhập nhiều khí đốt Nga nhất
									tại Đức - đã dùng hết khoản vay 2 tỷ euro và
									phải nộp đơn xin thêm.
								</p>
							</Link>
						</div>
						<div className={cx('col-12 col-sm-4', 'sub-new-item')}>
							<Link to={'/'} className={cx('sub-new-link')}>
								<h3 className={cx('sub-new-title')}>
									Hãng năng lượng hàng đầu của Đức hết tiền để
									cầm cự
								</h3>
								<p className={cx('sub-new-desc')}>
									TP HCM - Các hãng Vietjet, Bamboo Airways mở
									dịch vụ thu thêm 100.000-140.000 đồng tùy
									chuyến đối với khách muốn làm thủ tục nhanh
									ở sân bay Tân Sơn Nhất
								</p>
							</Link>
						</div>
						<div className={cx('col-12 col-sm-4', 'sub-new-item')}>
							<Link to={'/'} className={cx('sub-new-link')}>
								<h3 className={cx('sub-new-title')}>
									Vì sao khó chống tham nhũng?
								</h3>
								<p className={cx('sub-new-desc')}>
									Chống tham nhũng không thể chỉ dựa vào hình
									phạt hoặc kêu gọi 'tự giác, nêu gương'.
								</p>
								<div className={cx('sub-new-author')}>
									<p className={cx('sub-new-info')}>
										<i>Nguyễn Khắc Giang</i>
										<span
											className={cx(
												'thumb-meta',
												'desc',
											)}>
											<CommentIcon />
											<span>67</span>
										</span>
									</p>
									<div
										className={cx('sub-new-author-avatar')}>
										<img src={authorStory} alt='author' />
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className={cx('col-sm-12 col-lg-3 d-none d-lg-block')}>
					<div className={cx('advertis')}>
						<Link to={'/'}>
							<img
								className={cx('advertis-img')}
								src={advStory}
								alt='adv'
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Story;
