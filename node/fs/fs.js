var fs = require('fs');

fs.open('index.txt',function(err,fd){
    if (err) {
        if (err.code === 'EEXIST') {
          console.error('myfile already exists');
          return;
        }
    
        throw err;
      }
    
      writeMyData(fd);
})