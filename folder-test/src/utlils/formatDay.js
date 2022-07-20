const options = {
	weekday: 'long',
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
};

export default function formatDay(date) {
	return new Intl.DateTimeFormat('vi-VI', options).format(date);
}
