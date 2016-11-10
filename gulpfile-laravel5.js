const elixir = require('laravel-elixir');
var gulp = require("gulp");
require('laravel-elixir-vue-2');

/*elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js')
});*/


var bowerDir = './resources/assets/bower/';

elixir(function(mix) {
    mix.scripts([
        'jquery/dist/jquery.min.js',
        'bootstrap/dist/js/bootstrap.min.js'
    ], 'public/js/app.js', bowerDir);

});




