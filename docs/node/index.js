var fs = require('fs'),
    util = require('util'),
    marked = require('marked'),
    cheerio = require('cheerio'),
    http = require('http');
//     entry = process.cwd() + '/docs/node/components',
//     output = process.cwd() + '/docs/node/md'
// // 读取文件夹下所有的md文件
// function explorer(path) {
//     fs.readdir(path, function (err, files) {
//         //err 为错误 , files 文件名列表包含文件夹与文件
//         if (err) {
//             console.log('error:\n' + err);
//             return;
//         }

//         files.forEach(function (file) {

//             fs.stat(path + '/' + file, function (err, stat) {
//                 if (err) { console.log(err); return; }
//                 if (stat.isDirectory()) {
//                     // 如果是文件夹遍历
//                     explorer(path + '/' + file);
//                 } else {
//                     // 读出所有的文件
//                     getFileValue(path + '/' + file);
//                     // console.log('文件名:' + path + '/' + file);

//                 }
//             });

//         });

//     });
// }
function getFileValue(filePath) {
    // 2.读取note.md文件的内容  
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                throw err
            } else {
                resolve(data)
            }
        })
    })
}
// explorer(entry);




// 定义网络爬虫的目标地址：自如友家的主页
// var url = 'http://127.0.0.1:8085/components/button';

// http.get(url, function (res) {
//     // 获取页面数据
//     res.on('data', function (data) {
//         html += data;
//     });
//     // 数据获取结束
//     res.on('end', function () {
//         // 通过过滤页面信息获取实际需求的轮播图信息
//         var slideListData = filterSlideList(html);
//         // 打印信息
//         printInfo(slideListData);
//     });
// }).on('error', function () {
//     console.log('获取数据出错！');
// });
filterSlideList()
/* 过滤页面信息 */
function filterSlideList() {
    const path = process.cwd() + '/docs/node/html/button.html'
    getFileValue(path).then((data) => {
        ishtml(data)
    })

}
function ishtml(html) {
    if (html) {
        var $ = cheerio.load(html)
        var headerCode = getHeader($)

        // getThead(dom_table)
        // 返回轮播图列表信息
        return slideListData;

    } else {
        console.log('无数据传入！');
    }
}
function Trim(str)
 { 
  return str.replace(/(^\s*)|(\s*$)/g, ""); 
}
function iGetInnerText(testStr) {
    var resultStr = testStr.replace(/\s+/g, ""); //去掉空格
    resultStr = testStr.replace(/[ ]/g, "");    //去掉空格
    resultStr = testStr.replace(/[\r\n]/g, ""); //去掉回车换行
    return resultStr;
}
function getHeader($) {
    var output = process.cwd() + '/docs/node/md/button.md'
    var dom_item = $('.example')
    dom_item.each(function (item) {
        var dom = $(this);
        // 找到标题
        var header = `### ${Trim(dom.find('.example-header span').text()).replace(/\#/, '')}`;
        var desc = desc + `${dom.find('.example-desc').text()}`
        // var obj = {
        //     header: header,
        //     desc: iGetInnerText(desc)
        // }
        // console.log(Trim(iGetInnerText(header)))
        console.log(desc)
    });
    // writeFile(output, mdValue)
}
// 获取表头
const getThead = function (params) {
    params.find('thead tr th').each(function (item) {
        var dom = $(this);
        var table_tr = dom.text()
        var table_td = dom.find('td').text()
        console.log(table_tr + "99999999999999")
    });
}
/* 打印信息 */
function printInfo(slideListData) {
    var fs = require("fs");
    var output = process.cwd() + '/docs/node/md/button.md'
    var data = JSON.stringify(slideListData);
    var data2 = data.replace(/\"header\":/g, "")
    data2 = data.replace(/\"desc\":/g, "")
    data2 = data2.replace(/\[{"/g, "")
    data2 = data2.replace(/\",\"/g, "")


    data2 = data2.replace(/\\n/g, "<br />")
    // console.log(data2)
    fs.writeFile(output, data2, { flag: 'w', encoding: 'utf-8', mode: '0777' }, function (err) {
        if (err) {
            console.log("文件写入失败")
        } else {
            console.log("文件写入成功");

        }

    })
}
function writeFile(output, data) {
    fs.writeFile(output, data, { flag: 'w', encoding: 'utf-8', mode: '0777' }, function (err) {
        if (err) {
            console.log("文件写入失败")
        } else {
            console.log("文件写入成功");

        }

    })
}
