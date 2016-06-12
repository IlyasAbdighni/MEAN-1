var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {

});



gulp.task('sass', function(){
	gulp.src('./public/sass/**/*.scss')
		// .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('./public/css/'))
});


gulp.task('serve',['sass'], function() {

	browserSync.init({
        proxy: "http://localhost:3000"
    });

    gulp.watch("./public/sass/**/*.scss", ['sass']);
    gulp.watch("./public/**/*.*").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);