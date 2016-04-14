var gulp = require('gulp');

var files = {
	libs: 'libs/**/*.js'
};

var babelOptions = {
	presets: ['es2015-node5', 'stage-3']
};

gulp.task('lint', function() {
	gulp.src('libs/**/*.js')
		.pipe(eslint())
		.pipe(eslint.formatEach('compact', process.stderr))
		.pipe(eslint.failOnError());
});

gulp.task('test', []);

gulp.task('default', ['test']);