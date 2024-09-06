const fs = require('fs');

fs.readFile('file/test.txt','utf-8',(_, data) => {
    console.log(data)
})


// expensive operation
let a = 0
for (let i = 0; i < 999999999; i++) {
  a= a+i  
}
console.log(a)