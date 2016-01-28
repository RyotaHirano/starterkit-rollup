import gulp from 'gulp';
import { plumber, notify, rollup, sourcemaps } from '../plugins';
import conf from '../../rollup.config';

gulp.task('rollup', () => {
  return gulp.src(conf.entry)
    .pipe(plumber(
      {
        errorHandler: notify.onError('<%= error.message %>')
      }
    ))
    .pipe(rollup(conf.config))
    .pipe(gulp.dest(conf.dest));
});
