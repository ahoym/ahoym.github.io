'use strict';

var babelJest = require('babel-jest');

// Ignore requires of .scss files in React Component files
module.exports = {
  process: function (src, filename) {
    if (filename.match(/node_modules/)) {
      return src;
    } else if (filename.match(/sass/)) {
      return '';
    }

    return babelJest.process(src, filename)
      .replace(/^import.*\.scss.*;$/gm, '');
  }
};
