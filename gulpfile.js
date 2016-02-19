
var gulp = require('gulp'),
 		babel = require('gulp-babel'),
 		browserSync = require('browser-sync'),
    notify = require('gulp-notify'),
 		plumber = require('gulp-plumber'),
 		sass = require('gulp-sass'),
		rename = require('gulp-rename'),
		autoprefixer = require('gulp-autoprefixer'),
		minifyCSS = require('gulp-minify-css'),
    webpack = require('webpack-stream'),
    historyApiFallback = require('connect-history-api-fallback');

gulp.task('compile-react', function() {
	return gulp.src('./src/main.jsx')
    .pipe(plumber())
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(browserify({
			insertGlobals: true,
			debug: true
		}))
		.pipe(gulp.dest('./build'));
});

gulp.task('sass', function(){
	gulp.src('./src/scss/*.scss')
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: ['last 2 versions']
	}))
	.pipe(gulp.dest('build/css'))
	.pipe(minifyCSS())
	.pipe(rename({extname: '.min.css'}))
	.pipe(gulp.dest('./build'));
});

gulp.task('copy-html', function() {
    gulp.src('src/index.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('browser-sync', ['compile-react', 'copy-html'], function() {
	browserSync.init({
		server: {
       baseDir: './build',
       middleware: [historyApiFallback()]
    }
	});

	gulp.watch(('./src/scss/*.scss'), ['sass']);
	gulp.watch(['./src/main.jsx', './src/components/*.jsx'], ['compile-react']);
	gulp.watch(['./build/main.js', './build/index.html', './build/*.min.css']).on('change', browserSync.reload);
  gulp.watch(['./src/index.html'], ['copy-html']);
});

gulp.task('default', ['browser-sync']);

gulp.task('compile-react', function() {
	return gulp.src('./src/main.jsx')
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(webpack({
		output: {
			filename: 'main.js'
		},
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					query: {
						presets: ['react', 'es2015']
					}
				}
			]
		}
	}))
	.pipe(gulp.dest('./build'));
});
