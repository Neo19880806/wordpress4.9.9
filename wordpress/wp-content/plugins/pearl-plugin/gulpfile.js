const gulp = require('gulp'),
    zip = require('gulp-zip'),
    notify = require('gulp-notify'),
    wpPot = require('gulp-wp-pot');

gulp.task('default', function () {
    // to use as test command
});

gulp.task('plugin-zip', function () {
    return gulp.src([
        // Include
        './**/*',

        // Exclude
        '!./**/.DS_Store',
        '!./node_modules/**',
        '!./node_modules',
        '!./package.json',
        '!./gulpfile.js'
    ])
        .pipe(zip('pearl-plugin.zip'))
        .pipe(gulp.dest('../'))
        .pipe(notify('Pearl plugin zip is ready!'));
});

gulp.task('pot', function () {
    return gulp.src('./**/*.php')
        .pipe(wpPot({
            domain: 'pearl-plugin',
            package: 'Pearl Plugin',
            team: 'PearlThemes'
        }))
        .pipe(gulp.dest('languages/pearl-plugin.pot'));
});