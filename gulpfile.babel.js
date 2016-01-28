import gulp from 'gulp';
import requireDir from 'require-dir';
import runSequence from 'run-sequence';
import { reload } from 'browser-sync';
import DIR from './conf/dir';

requireDir('./gulp/tasks');

gulp.task('predefault', cb => {
  runSequence(
    ['jade', 'sass'],
    'rollup',
    'serve',
    cb
  );
});

gulp.task('scripts', cb => {
  runSequence(
    'eslint',
    'rollup',
    cb
  );
});

gulp.task('build', cb => {
  runSequence(
    'clean',
    ['jade', 'sass', 'rollup', 'imagemin'],
    'uglify',
    'copy:build',
    cb
  );
});

gulp.task('default', ['predefault'], () => {
  gulp.watch(
    [`./${DIR.SRC}/**/*.jade`],
    ['jade', reload]
  );
  gulp.watch(
    [`./${DIR.SRC}/**/*.{scss,sass}`],
    ['sass', reload]
  );
  gulp.watch(
    [`./${DIR.SRC}/**/*.js`],
    ['scripts', reload]
  );
});
