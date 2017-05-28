var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack');
var plumber = require('gulp-plumber');
var autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var clean = require('postcss-clean');
var svginline = require('postcss-inline-svg');
var eslint = require('gulp-eslint');
var webpackConfig = require("./webpack.config.js");


gulp.task('compile:client:scripts', function(callback) {

    var devWebpack = Object.create(webpackConfig);

    webpack(devWebpack,function(err, stats) {

        if(err) throw new gutil.PluginError("compile:client:scripts", err);

        gutil.log("[compile:client:scripts]", stats.toString({
            colors: true
        }));

        callback();
    });
});

gulp.task('lint', function(){
    return gulp.src(['src/client/**/*.jsx'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('compile:client:style', function() {
    var postcssProcess = [
        svginline({path: 'src/client/styles/svg/'}),
        autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Android 4.4']}),
        clean()
    ];

    gulp.src('src/client/styles/style.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss(postcssProcess))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task("copy:static", function() {
    return gulp.src('src/static/index.html')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/'));
});

gulp.task("watch", function() {
    gulp.watch('src/client/**/*.jsx', ['compile:client:scripts']);
    gulp.watch('src/client/styles/**/*.scss', ['compile:client:style']);
});

gulp.task('client', ['compile:client:scripts', 'compile:client:style', 'copy:static']);