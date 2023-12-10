console.log('remove all');
var fs = require('fs');
var path = require('path');
var dir = path.join(__dirname, 'tmp');
fs.readdir(dir, function(err, files) {
  if (err) throw err;
  for (var i = 0; i < files.length; i++) {
    fs.unlink(path.join(dir, files[i]), function(err) {
      if (err) throw err;
      console.log('successfully deleted');
    });
  }
});