var gulp = require('gulp'),
	sass = require('gulp-sass'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer-core'),
	concat = require('gulp-concat');

var paths = {
	sass: ['assets/sass/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function () {
	gulp.src(paths.sass)
	    .pipe(sass())
	    .pipe(postcss([autoprefixer]))
	    .pipe(concat('all.css'))
	    .pipe(gulp.dest('css'))
	    .pipe(minifyCss({
	      keepSpecialComments: 0
	    }))
	    .pipe(rename({ extname: '.min.css' }))
	    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
	gulp.watch(paths.sass, ['sass']);
});