// Start with a gruntfile
var gulp = require('gulp');
var jade = require('gulp-jade');
var coffee = require('gulp-coffee');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

// errror log finction
function errorLog(error) {
    console.error.bind(console);
    this.emit('end');
}

gulp.task('jade', function() {
    gulp.src('**/*.jade')
    .pipe(jade({
        pretty: true
    }))
    .on('error', errorLog)
    .pipe(gulp.dest('build/'));
});

gulp.task('coffee', function() {
    gulp.src('coffee/**/*.coffee')
    .pipe(coffee())
    .on('error', errorLog)
    .pipe(gulp.dest('build/assets/js/'));
});

gulp.task('sass', function() {
    sass('sass/**/*.sass', {
        style: 'expanded'
    })
    .on('error', errorLog)
    .pipe(gulp.dest('build/assets/css/'));
});

gulp.task('prefix', function() {
    gulp.src('build/assets/css/app.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('build/assets/css/'));
});

gulp.task('watching', function() {
    gulp.watch('**/*.jade', ['jade']);
    gulp.watch('coffee/**/*.coffee', ['coffee']);
    gulp.watch('sass/**/*.sass', ['sass']);
    gulp.watch('build/assets/css/app.css', ['prefix']);
});

gulp.task('default', ['jade', 'sass', 'coffee', 'watching']);
