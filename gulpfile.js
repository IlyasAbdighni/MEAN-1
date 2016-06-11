var gulp = require('gulp');
// var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {

});



// gulp.task('sass', function(){
// 	gulp.src('./app/sass/**/*.scss')
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(autoprefixer({
// 			browsers: ['last 2 versions']
// 		}))
// 		.pipe(gulp.dest('./app/css/'))
// });

gulp.task('serve', function() {

	browserSync.init({
        proxy: "http://localhost:3000"
    });

    // gulp.watch("./app/scss/*.scss", ['sass']);
    gulp.watch("./public/**/*.*").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);