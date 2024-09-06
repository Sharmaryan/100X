const fs = require('fs');

fs.readFile('file/test.txt','utf-8',(_, data) => {
    console.log(data)
})