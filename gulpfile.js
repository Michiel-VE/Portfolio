let gulp = require('gulp');
let browserSync = require('browser-sync').create();


gulp.task('default', function () {
    browserSync.init({
        startPath: 'index.html',
        server: {
            baseDir: "./public/",
            directory: true
        }
    });
    gulp.watch('**/*.{html,css,js,php}').on('change', browserSync.reload);
});
