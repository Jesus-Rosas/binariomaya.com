'use strict'
//Cargar modulos
let gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');

//Tarea para SCSS
gulp.task('sass', function(){
  gulp.src('src/scss/*.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('build/css/'));
});

gulp.task('sass:watch', function(){
  gulp.watch('src/scss/*.scss', ['sass']);
});

gulp.task('js', function(){
  gulp.src('src/js/script.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/js/'));
});

gulp.task('js:watch', function(){
  gulp.watch('src/js/*.js', ['js']);
});

gulp.task('default', ['sass:watch', 'js:watch'])
