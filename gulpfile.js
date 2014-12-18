var gulp = require('gulp'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
      host: process.env.IP,
      port: process.env.PORT
  });
});

gulp.task('default', ['connect']);