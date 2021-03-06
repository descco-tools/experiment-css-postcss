var gulp       = require('gulp');
var postcss    = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var cssnano    = require('gulp-cssnano');

gulp.task('default', function () {
	return gulp.src('source/**/*.css')
    .pipe( sourcemaps.init() )
    .pipe( postcss([ require('autoprefixer'), require('precss') ]) )
    .pipe(cssnano())
    .pipe( sourcemaps.write('.') )
    .pipe( gulp.dest('dist/') );
});