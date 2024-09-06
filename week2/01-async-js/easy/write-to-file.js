const fs = require("fs");

const content = 'hey there I am testing again';

fs.writeFile('file/test.txt', content, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('file got saved');
});
