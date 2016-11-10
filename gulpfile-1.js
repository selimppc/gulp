

/*
============================
Native GULP
============================
 */





var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer');


/*
    === Task Scripts ===
 */
gulp.task('scripts', function ()
{
    gulp.src(['js/!**!/!*.js', '!js/!**!/!*.min.js'])
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(plumber())
        .pipe(reload({stream: true}));
});

/*
 === Default Task  ===
 */
gulp.task('default', ['scripts', 'browser-sync', 'compass', 'html', 'watch']);


/*
 === Watch Task  ===
 */
gulp.task('watch', function ()
{
    gulp.watch('js/!**!/!*.js', ['scripts']);
    gulp.watch('scss/!**!/!*.css', ['compass']);
    //gulp.watch('js/!**!/!*.html', ['html']);
});



/*
 === System Task / Compass Task  ===
 */
/*gulp.task('compass', function ()
{
    gulp.src('scss/style.scss')
        .pipe(plumber())
        .pipe(compass({
            config_file : '../config.rb',
            css : 'css',
            sass : 'scss',
            require : ['susy']
        }))
        .pipe(autoprefixer("last 2 versions"))
        .pipe(gulp.dest('css/'))
        .pipe(reload({stream : true}));
});*/

/*
 ===  HTML Task  ===
 */
gulp.task('html', function ()
{
    gulp.src('!**!/!*.html')
        .pipe(reload({stream : true}));
});

/*
 === Browser Sync   ===
 */
gulp.task('browser-sync', function ()
{
    browserSync({
        server : {
            baseDir : "./public/"
        }
    });
});





/*
    ========= Build Task =============
    ==================================
 */

// copy
gulp.task('build:copy', function () {
    return gulp.src('app/!**!/!*')
        .pipe(gulp.dest('build/'));
});
// run in terminal # gulp build:copy

//Clean Folder
gulp.task('build:cleanfolder', function (cb) {
    del ([
        'build/!*'
    ], cb);
});


// delete un-necessary files
gulp.task('build:remove', ['build"copy'], function (cb) {
    del([
        'build/scss',
        'build/js/!(*.min.js)'
    ], cb);
});

