'use strict';

var gulp = require('gulp'),
		sass = require('gulp-sass'),
		minifyCss = require("gulp-csso"),
		rename = require("gulp-rename"),
		sourcemaps = require('gulp-sourcemaps'),
		autoprefixer = require('gulp-autoprefixer'),
		browserSync = require('browser-sync').create(),
		reload = browserSync.reload;


// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
		return gulp.src([
			"src/scss/**/*.scss"
			])
				.pipe(sourcemaps.init())
				.pipe(sass().on('error', sass.logError))
				.pipe(autoprefixer())
				.pipe(minifyCss())
				.pipe(rename("main.min.css"))
				.pipe(sourcemaps.write())
				.pipe(gulp.dest("./css"))
				.pipe(browserSync.stream());
});


// Static Server + watching scss/js/html files
gulp.task('watch', ['sass'], function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch("*.html").on('change', browserSync.reload);
	gulp.watch("./src/scss/**/*.scss", ['sass']);
	gulp.watch("./src/js/**/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['watch']);