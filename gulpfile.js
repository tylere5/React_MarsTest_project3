
var gulp = require('gulp'),
 		babel = require('gulp-babel'),
 		browserify = require('gulp-browserify'),
 		browserSync = require('browser-sync'),
 		plumber = require('gulp-plumber'),
 		sass = require('gulp-sass'),
		rename = require('gulp-rename'),
		autoprefixer = require('gulp-autoprefixer'),
		minifyCSS = require('gulp-minify-css');

gulp.task('compile-react', function() {
	return gulp.src('main.jsx')
		.pipe(plumber())
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(browserify({
			insertGlobals: true,
			debug: true
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('sass', function(){
	gulp.src('scss/*scss')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(gulp.dest('build/css'))
	.pipe(minifyCSS())
	.pipe(rename({extname: 'min.css'}))
	.pipe(gulp.dest('build/css'));
});

gulp.task('browser-sync', ['compile-react'], function() {
	browserSync.init({
		server: './'
	});
	gulp.watch(('scss/*scss'), ['sass']);
	gulp.watch('main.jsx', ['compile-react']);
	gulp.watch(['main.js', 'index.html', 'build/css/*.min.css']).on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);
