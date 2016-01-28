import npm from 'rollup-plugin-npm'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import DIR from './conf/dir.js';

export default {
  entry: `${DIR.SRC}/js/main.js`,
  dest: `${DIR.DST}/js`,
  config: {
    format: 'umd',
    moduleName: 'Main',
    plugins: [
      npm({ jsnext: true }),
      commonjs(),
      babel()
    ]
  }
}
