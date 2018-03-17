var fs = require('fs');
// 读取文件
const readFile = function readFile(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                throw err
            } else {
                resolve(data)
            }
        })
    })
}



// 写入文件
const writeFile = function writeFile(output, data, fileName) {
    fs.writeFile(output, data, { flag: 'w', encoding: 'utf-8', mode: '0777' }, function (err) {
        if (err) {
            console.log(fileName + ".md 文件写入失败")
        } else {
            console.log(fileName + ".md 文件写入成功");
        }
    })
}

// 读取html文件夹下所有的html文件
const explorer = function (path) {
    var urlList = []
    return new Promise((resolve, reject) => {
        fs.readdir(path, function (err, files) {
            if (err) {
                console.log('error:\n' + err);
                return;
            }
            console.log('准备读取文件夹...')
            files.forEach(function (file) {
                urlList.push({
                    path: path + '/' + file,
                    name: file.split('.')[0]
                })
            });
            resolve(urlList)
        });
    })
}

module.exports = {
    writeFile,
    readFile,
    explorer
}
