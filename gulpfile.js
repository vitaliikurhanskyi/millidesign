var gulp = require('gulp');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

gulp.task('sass', () =>
sass('scss/*.scss')
    .on('error', sass.logError)
    .pipe(autoprefixer({
        browsers: ['last 12 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('app/css/'))
    .pipe(browserSync.stream())
);

gulp.task('browser-sync', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

/* image min */

gulp.task('images', () =>
    gulp.src('images_not_compress/*')
        .pipe(imagemin())
        .pipe(gulp.dest('app/img'))
);

gulp.task('default', ['browser-sync']);
