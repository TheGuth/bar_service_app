exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                       'mongodb://localhost/bar_app_development';

// mongodb://james:pass55@ds137040.mlab.com:37040/bar_app

exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL ||
	'mongodb://localhost/test_bar_app');

exports.PORT = process.env.PORT || 8080;

exports.SECRET = { secret: 'DrunkFast for the win!' }
