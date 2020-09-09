const $ = require('dekko');
const chalk = require('chalk');

$('dist')
  .isDirectory()
  .hasFile('ss-ui-library-with-locales.js')
  .hasFile('ss-ui-library-with-locales.min.js')
  .hasFile('ss-ui-library.css')
  .hasFile('ss-ui-library.min.css')
  .hasFile('ss-ui-library.js')
  .hasFile('ss-ui-library.min.js')
  .hasFile('ss-ui-library.less');

// eslint-disable-next-line
console.log(chalk.green('✨ `dist` directory is valid.'));
