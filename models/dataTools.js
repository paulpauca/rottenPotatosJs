var fs = require('fs');

function readJsonFile(file, callback) {
   var obj;
   fs.readFile(file,'utf8', function (err, data) {
      if (err) throw err;
      obj = JSON.parse(data);
      callback(obj);
   });
}

module.exports = {readJsonFile};

//usage:
//readTextFile("/Users/Documents/workspace/test.json", function(text){
//    var data = JSON.parse(text);
//    console.log(data);
//
//});
