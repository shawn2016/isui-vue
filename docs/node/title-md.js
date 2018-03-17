var cheerio = require('cheerio');
var fs = require('fs');
var utils = require('./utils.js');
var table = process.cwd() + '/docs/node/html/title.html'
var md = process.cwd() + '/docs/node/md/title.md'
var output = process.cwd() + '/docs/node/md/'
var entry = process.cwd() + '/docs/node/html';
// 处理title --- html
function title_md(html, titleData) {
    var $ = cheerio.load(html)
    var article = $('article')
    var title_header = $('article').find('h1').text()
    var title_header_desc = $('article').find('p').first().text()
    var title_header_first = $('article').find('.anchor h2').first().text()
    var newTitleData = "## " + title_header + '\n\n' + "### " + title_header_first + '\n' + title_header_desc + '\n'
    article.find('.example').each(function (item) {
        // 标题
        var title_item = "### " + $(this).attr('id')
        // 描述
        var desc_item = $(this).find('.example-desc').text()
        newTitleData = newTitleData + title_item + '\n' + desc_item + '\n' + "<!--divider-->" + "\n"
    })
    return newTitleData
}
// 处理table --- html
function table_md(html, title, tableData) {
    var theadStr = "| ";
    var theadSplit = "|"
    var tbodyTrStr = "";
    var $ = cheerio.load(html)
    var thead = $('thead')
    var tbodyTr = $('tbody tr')
    var tbodyTd = $('tbody tr td')
    thead.find('tr th').each(function (item) {
        var dom = $(this);
        theadStr = theadStr + ` ${dom.text()} |`
        theadSplit = theadSplit + ` :--------- |`
    })
    tbodyTr.each(function (item) {
        $(this).find('td').each(function (item1) {
            var dom = $(this);
            if (item1 === 0) {
                tbodyTrStr = tbodyTrStr + `| ${dom.text()} |`
            } else {
                tbodyTrStr = tbodyTrStr + ` ${dom.text()} |`
            }

        })

        tbodyTrStr = tbodyTrStr + '\n'
    })
    return tableData + '\n\n' + "### " + title + '\n' + "<!--table-->" + '\n' + theadStr + '\n' + theadSplit + '\n' + tbodyTrStr + "<!--table-->" + "\n" + "<!--divider-->" + "\n"
}


function getHtml(obj, titleData, tableData) {
    utils.readFile(obj.path).then((data) => {
        // 处理文本
        var lastTitleData = title_md(data, titleData);
        var lastTableData = ""
        var $ = cheerio.load(data)
        var article = $('article')
        var table_api = $('.api')
        article.find('table').each(function (item, element) {
            table_api.find('.anchor h3').each(function (item1) {
                if (item === item1) {
                    lastTableData = lastTableData + '\n' + table_md(element, $(this).text(), tableData)
                }
            })
        })
        var html_md = lastTitleData + '\n' + "### API" + '\n' + lastTableData
        utils.writeFile(output + obj.name + '.md', html_md, output + obj.name)
    })
}
utils.explorer(entry).then((data) => {

    for (var i = 0; i < data.length; i++) {
        var titleData = ""
        var tableData = ""
        getHtml(data[i], titleData, tableData)
    }
})
