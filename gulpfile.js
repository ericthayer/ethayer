/******************************************************
 * PATTERN LAB NODE
 * EDITION-NODE-GULP
 * The gulp wrapper around patternlab-node core, providing tasks to interact with the core library and move supporting frontend assets.
******************************************************/
const gulp = require('gulp');
const criticalCss = require('gulp-critical-css');
 
gulp.task('default', () => {
    gulp.src('css/styles.css')
        .pipe(criticalCss())
        .pipe(gulp.dest('dist'))
);



/******************************************************
 * COMPOUND TASKS
******************************************************/
gulp.task('default');
