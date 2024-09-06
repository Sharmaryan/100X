const fs = require("fs");

fs.readFile('file.txt', 'utf-8', (err, data) => {
    const contentWithoutSpace = data.replace(/\s+/g, ' ').trim()
    if (!err) {
        fs.writeFile('file.txt', contentWithoutSpace, (err) => {
            if (!err) {
                console.log('file got saved successfully')
            }
        })
    }
})

