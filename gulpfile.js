'use strict';
const
    gulp = require('gulp'),
    webpack = require('webpack-stream'),
    WP_CONFIG = require('./webpack.config');

const
    SCRIPTS = 'assets/scripts',
    SCRIPTS_ENTRY = SCRIPTS + 'index.js',
    BUILD = {
        JS : 'build/js'
    };

gulp.task('build', function() {
    return gulp.src(SCRIPTS_ENTRY)
        .pipe(webpack(WP_CONFIG))
        .pipe(gulp.dest(BUILD.JS));
});