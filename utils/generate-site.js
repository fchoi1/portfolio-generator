const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
                }
            // if promise is fullfilled send the data back
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err){
                reject(err);
                return;
            };
            resolve({
                ok:true,
                message: 'Style sheet copied sucessfully'
            });
        });
    });
}

//ES6 Shorthand property names
module.exports = { writeFile, copyFile}