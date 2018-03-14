var fs = require('fs'),
    util = require('util'),
    marked = require('marked'),
    entry = process.cwd() + '/docs/md/cn',
    output = process.cwd() + '/src/components'
// 读取文件夹下所有的md文件
function explorer(path) {
    fs.readdir(path, function (err, files) {
        //err 为错误 , files 文件名列表包含文件夹与文件
        if (err) {
            console.log('error:\n' + err);
            return;
        }

        files.forEach(function (file) {

            fs.stat(path + '/' + file, function (err, stat) {
                if (err) { console.log(err); return; }
                if (stat.isDirectory()) {
                    // 如果是文件夹遍历
                    explorer(path + '/' + file);
                } else {
                    // 读出所有的文件
                    getFileValue(path + '/' + file);
                    // console.log('文件名:' + path + '/' + file);

                }
            });

        });

    });
}
function getFileValue(filePath) {
        // 2.读取note.md文件的内容  
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                throw err
            } else {
                // 3.使用marked方法，将md格式的文件转化为html格式  
                // let htmlStr = marked(data.toString());
                console.log(data)                
                // console.log(htmlStr)
                // 4.将转化的html格式的字符串，写入到新的文件中  
                // fs.writeFile('./new.html', htmlStr, err => {
                //     if (err) {
                //         throw err
                //     } else {
                //         console.log("success")
                //     }
                // })
            }
        })
}
explorer(entry);