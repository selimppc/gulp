  const elixir = require("laravel-elixir");
  require("laravel-elixir-vue");

  elixir(function(mix) {
    //Fontend
    mix.sass(["frontend.scss"], "public/css/frontend.css");
    mix.webpack("frontend.js", "public/js/frontend.js");

    //Backend
    mix.sass([
        "../../../node_modules/medium-editor/dist/css/medium-editor.css",
        "../../../node_modules/medium-editor/dist/css/themes/default.css",
        "backend.scss"
    ], "public/css/backend.css");
    mix.webpack("backend.js", "public/js/backend.js");

    //Copy files
    mix.copy("node_modules/font-awesome/fonts", "public/build/fonts");
    mix.copy("resources/assets/sass/vendor/inspinia/patterns", "public/build/css/patterns");

    //Make versions
    mix.version(["css/frontend.css","js/frontend.js","css/backend.css","js/backend.js"]);
  });


  /// another way 
  var gulp = require('gulp');
  var elixir = require('laravel-elixir');
  require('laravel-elixir-vue');


  Elixir.ready(() => {

    Elixir.webpack.mergeConfig({
        babel: {
            presets: ['es2015'],
            plugins: ['transform-runtime'],
        },
        module: {
            loaders: [{
                test: /\.html$/,
                loader: 'vue-html'
            }]
        }
    });

  });

/**
 * Copy any needed files.
 */
   gulp.task('copyfiles', function() {

    // admin panel + plugins
    gulp.src('resources/assets/images/admin/**')
        .pipe(gulp.dest('public/build/assets/css/'));

    //font awesome
    gulp.src('vendor/bower_dl/font-awesome/fonts/**')
        .pipe(gulp.dest('public/build/assets/fonts'));

  });

/*
 * Mix the assets
 */

  elixir(function(mix) {

    // main
    mix.sass('resources/assets/sass/main.scss', 'public/assets/css/main.css');
    mix.webpack('resources/assets/js/main.js', 'public/assets/js/main.js');

    // admin 
    mix.sass('resources/assets/sass/admin.scss', 'public/assets/css/admin.css')
    mix.webpack('admin.js', 'public/assets/js/admin.js');

    // versions for cache-busting
    mix.version([
        'assets/js/main.js',
        'assets/css/main.css',
        'assets/js/admin.js',
        'assets/css/admin.css'
    ]);

  });




// another way 

const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// elixir(mix => {
//     mix.sass('app.scss')
//        .webpack('app.js');
// });

// Sources relative to: resources/assets/css
// Results go into public/css/all.css:
elixir(function(mix) {
    mix.styles([
        'imports.css', // @import statements must come first in execution
        'bootstrap/bootstrap_3.3.7.css',
        'font-awesome_4.6.3.css',
        'sweetalert2/sweetalert2_4.2.6.css',
        'bootstrap-datepicker/bootstrap-datepicker3_1.6.4.css',
        'inspinia/animate.css',
        'inspinia/style.css',
        'custom.css', // Should be last!
    ], 'public/compile');
});

elixir(function(mix) {
    mix.scripts([
        // Vue
        'vue/vue_2.0.0RC5.js',
        'vue/vue-resource_0.9.3.js',
        // 'vue/vue.common.js',
        'jquery-3.1.0.js',
        'promise-7.0.4.js',
        'bootstrap_3.3.7.js', // relies on jQuery
        'inspinia/inspinia.js',
        'inspinia/plugins/metisMenu/jquery.metisMenu.js', // Auto-collapsing of side menu
        'inspinia/plugins/slimscroll/jquery.slimscroll.js', // Mini-scrollbars in DIVs
        'moment/moment_2.14.1.js',
        'sweetalert2/sweetalert2_4.2.6.js',
        'bootstrap-datepicker/bootstrap-datepicker_1.6.4.js',
        // 'jquery-validate/jquery.validate-1.15.1.js',
        // 'jquery-validate/additional-methods-1.15.1.js',
        'custom.js',
    ], 'public/compile');
});

// Cache-busts the CSS/JS files so that it gets a new hash whenever
// the source details change.
elixir(function(mix) {
    mix.version([
        'public/compile/all.js',
        'public/compile/all.css'
    ]);
});

elixir(function(mix) {
    mix.browserSync({
        proxy: 'psapp.com.dev'
    });
});






// mix pattern 

elixir(function(mix) {

    mix.less(/* ... */);
    mix.sass(/* ... */);
    mix.scripts(/* ... */);
    mix.scripts(/* ... */);
    mix.styles(/* ... */);
    mix.sass(/* ... */);

    mix.webpack(/* ... */);    // <-- This causes the error sometimes
    // mix.scripts(/* ... */); // <-- This causes the error very rarely

    mix.scripts(/* ... */);
    mix.styles(/* ... */);
    // inFiles is declared elsewhere
    Object.keys(inFiles.copyFiles).forEach(function(key) {
        mix.copy(key, inFiles.copyFiles[key]);
    })
    mix.version(/* ... */); // About 8 files, plus public/fonts/**/*, plus public/images/**/*

    mix.browserSync({
        proxy: /* ... */,
        files: [
            'app/**/*.php',
            'resources/**/*.php',
            'public/build/rev-manifest.json',
        ],
    });

});




// another way 

var gulp = require('gulp');
var elixir = require('laravel-elixir');
require('laravel-elixir-vue');


Elixir.ready(() => {

    Elixir.webpack.mergeConfig({
        babel: {
            presets: ['es2015'],
            plugins: ['transform-runtime'],
        },
        module: {
            loaders: [{
                test: /\.html$/,
                loader: 'vue-html'
            }]
        }
    });

});

/**
 * Copy any needed files.
 */
gulp.task('copyfiles', function() {

    // admin panel + plugins
    gulp.src('resources/assets/images/admin/**')
        .pipe(gulp.dest('public/build/assets/css/'));

    //font awesome
    gulp.src('vendor/bower_dl/font-awesome/fonts/**')
        .pipe(gulp.dest('public/build/assets/fonts'));

});

/*
 * Mix the assets
 */

elixir(function(mix) {

    // main
    mix.sass('resources/assets/sass/main.scss', 'public/assets/css/main.css');
    mix.webpack('resources/assets/js/main.js', 'public/assets/js/main.js');

    // admin 
    mix.sass('resources/assets/sass/admin.scss', 'public/assets/css/admin.css')
    mix.webpack('admin.js', 'public/assets/js/admin.js');

    // versions for cache-busting
    mix.version([
        'assets/js/main.js',
        'assets/css/main.css',
        'assets/js/admin.js',
        'assets/css/admin.css'
    ]);

});

// another way 

const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

// elixir(mix => {
//     mix.sass('app.scss')
//        .webpack('app.js');
// });

// Sources relative to: resources/assets/css
// Results go into public/css/all.css:
elixir(function(mix) {
    mix.styles([
        'imports.css', // @import statements must come first in execution
        'bootstrap/bootstrap_3.3.7.css',
        'font-awesome_4.6.3.css',
        'sweetalert2/sweetalert2_4.2.6.css',
        'bootstrap-datepicker/bootstrap-datepicker3_1.6.4.css',
        'inspinia/animate.css',
        'inspinia/style.css',
        'custom.css', // Should be last!
    ], 'public/compile');
});

elixir(function(mix) {
    mix.scripts([
        // Vue
        'vue/vue_2.0.0RC5.js',
        'vue/vue-resource_0.9.3.js',
        // 'vue/vue.common.js',
        'jquery-3.1.0.js',
        'promise-7.0.4.js',
        'bootstrap_3.3.7.js', // relies on jQuery
        'inspinia/inspinia.js',
        'inspinia/plugins/metisMenu/jquery.metisMenu.js', // Auto-collapsing of side menu
        'inspinia/plugins/slimscroll/jquery.slimscroll.js', // Mini-scrollbars in DIVs
        'moment/moment_2.14.1.js',
        'sweetalert2/sweetalert2_4.2.6.js',
        'bootstrap-datepicker/bootstrap-datepicker_1.6.4.js',
        // 'jquery-validate/jquery.validate-1.15.1.js',
        // 'jquery-validate/additional-methods-1.15.1.js',
        'custom.js',
    ], 'public/compile');
});

// Cache-busts the CSS/JS files so that it gets a new hash whenever
// the source details change.
elixir(function(mix) {
    mix.version([
        'public/compile/all.js',
        'public/compile/all.css'
    ]);
});

elixir(function(mix) {
    mix.browserSync({
        proxy: 'psapp.com.dev'
    });
});
