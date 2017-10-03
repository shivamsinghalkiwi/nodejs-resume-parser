var ParseBoy = require('../src/ParseBoy');
var processing = require('../src/libs/processing');
var _ = require('underscore');
var logger = require('tracer').colorConsole();

var parser = {
  parseResume: function (file,savePath,cb) {
    var objParseBoy = new ParseBoy(), savedFiles = 0;

    var onFileReady = function (preppedFile,cb) {
      objParseBoy.parseFile(preppedFile, function (Resume) {
        cb(null, Resume.parts);
      });
    }
    processing.run(file, onFileReady, cb);
  }
}
module.exports = parser;
