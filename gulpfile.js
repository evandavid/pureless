// Include gulp 
var gulp = require('gulp'),
	less = require('gulp-less'),
	prefix = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
	minifyCSS = require('gulp-minify-css'),
	watch = require('gulp-watch');

// Compile LESS & distribute expanded/minified CSS
gulp.task('styles', function() {
	gulp.src('./src/less/styles.less')
	.pipe(less())
	.pipe(prefix('last 2 versions'))
	.pipe(gulp.dest('./dist/css'))
	.pipe(minifyCSS())
	.pipe(rename('styles.min.css'))
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('old-ie-styles', function() {
	gulp.src('./src/less/old-ie-styles.less')
	.pipe(less())
	.pipe(prefix('last 2 versions'))
	.pipe(gulp.dest('./dist/css'))
	.pipe(minifyCSS())
	.pipe(rename('old-ie-styles.min.css'))
	.pipe(gulp.dest('./dist/css'));
});


// Watch .less files
gulp.task('watch', function() {
	gulp.watch('./src/less/**/*.less', ['styles', 'old-ie-styles']);
});

// Define default gulp task
gulp.task('default', ['styles', 'old-ie-styles', 'watch']);