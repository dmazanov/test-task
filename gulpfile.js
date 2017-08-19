'use strict';

var gulp = require('gulp'),
		sass = require('gulp-sass'),
		minifyCss = require("gulp-csso"),
		rename = require("gulp-rename"),
		sourcemaps = require('gulp-sourcemaps'),
		autoprefixer = require('gulp-autoprefixer'),
		browserify = require('browserify'),
		source = require('vinyl-source-stream'),
		buffer = require('vinyl-buffer'),
		uglify = require('gulp-uglify'),
		gutil = require('gulp-util'),
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


gulp.task('javascript', function() {
		var b = browserify({
			entries: './src/js/main.js',
			debug: true
		});

		return b.bundle()
		.pipe(source('./build.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
				// Add transformation tasks to the pipeline here
				.pipe(uglify())
				.on('error', gutil.log)
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./js/'))
		.pipe(browserSync.stream())
});


// Static Server + watching scss/js/html files
gulp.task('watch', ['sass', 'javascript'], function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch("*.html").on('change', browserSync.reload);
	gulp.watch("./src/scss/**/*.scss", ['sass', reload]);
	gulp.watch("./src/js/**/*.js", ['javascript']);
});

gulp.task('default', ['watch']);