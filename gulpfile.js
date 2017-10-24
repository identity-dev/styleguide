// Include Our Plugins
var autoprefixer  = require('gulp-autoprefixer'),
    clean         = require('gulp-clean'),
    concat        = require('gulp-concat'),
    cssmin        = require('gulp-cssmin'),
    exec          = require('gulp-exec'),
    fs            = require('fs'),
    gulp          = require('gulp'),
    include       = require('gulp-include'),
    rename        = require('gulp-rename'),
    replace       = require('gulp-replace'),
    runSequence   = require('run-sequence'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    stylelint     = require('gulp-stylelint'),
    swig          = require('gulp-swig');

var config = {
   packages: './node_modules' ,
  import_path: './src/sass/'
};

var args = {
  string: 'defcon',
  default: { defcon: process.env.NODE_ENV || 'patch' }
};

gulp.task('compile', ['clean'], function(){
  runSequence('sass', 'minify', 'kss-html', 'kss', 'kss-public');
});

// Clean build
gulp.task('clean', function() {
  return gulp.src([
      './dist',
      './temp',
      './docs',
      './styleguide.zip'
    ])
    .pipe(clean({force: true}));
});

gulp.task('default', ['compile'], function(){
  runSequence('watch');
});

// KSS for CSS documentation
gulp.task('kss', ['kss-html'], function(cb) {
  var options = {
    continueOnError: false,
    pipeStdout: true
  };
  var reportOptions = {
    err: true,
    stderr: true,
    stdout: true
  };

  fs.readFile("./kss-html/html/includes/kss-markup.html", "UTF8", function(err, kss_markup) {
    if (err) { throw err };

    gulp.src('./kss-html/html/layouts/kss-template.html')
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(rename("index.html"))
    .pipe(replace(/INJECT_KSS_MARKUP/g, kss_markup))
    .pipe(gulp.dest('./temp/kss'));

  });

  return gulp.src('./src/sass/**/*.*')
    .pipe(concat('kss'))
    .pipe(exec('./node_modules/kss/bin/kss-node --config=.kss-node.json', options))
    .pipe(exec.reporter(reportOptions));
});

// Compile Templates
gulp.task('kss-html', ['temp'], function(){

  return gulp.src('./kss-html/homepage.md')
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(rename("homepage.md"))
    .pipe(gulp.dest('./temp/kss'));
});

gulp.task('kss-public', ['kss'], function(){

  gulp.src('./kss-html/img/**/*.*')
    .pipe(gulp.dest('./docs/public/img'));

  gulp.src('./dist/css/styleguide.css')
    .pipe(gulp.dest('./docs/public/css'));

  gulp.src('./kss-html/sass/kss.scss')
    .pipe(sourcemaps.init())
      .pipe(sass({
          includePaths: ['./src/sass']
        }).on('error', sass.logError))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./docs/public/css'));

  return gulp.src([
      './kss-html/js/jquery-2.2.4.min.js',
      './kss-html/js/run_prettify.js',
      './kss-html/js/kss.js'
    ])
    .pipe(concat('kss.js'))
    .pipe(gulp.dest('./docs/public/js'));
});

gulp.task('sass', function() {
  gulp.src('./src/sass/**/*.*')
    .pipe(gulp.dest('./dist/scss'));

  return gulp.src('./src/sass/styleguide.scss')
    .pipe(stylelint({
      reporters: [
        {formatter: 'string', console: true}
      ]
    }))
    .pipe(sourcemaps.init())
      .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('minify', ['sass'], function() {
  return gulp.src('./dist/css/styleguide.css')
    .pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'));
});

// Move source over for compiling
gulp.task('temp', function(){
  // Sass
  return gulp.src('./src/sass/**/*.scss')
    .pipe(gulp.dest('./temp/sass/'));

});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('./src/sass/**/*.scss', ['sass', 'kss-html', 'kss', 'kss-public']);
  gulp.watch('./kss-html/**/*.*', ['kss-html', 'kss', 'kss-public']);
});
