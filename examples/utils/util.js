export default{
    install(Vue,options)
    {
      Vue.prototype.getDomList = function (methodOptions) {
        let markdownList = methodOptions.split("<!--divider-->");
        let newMarkdownList = []
        for (let index = 0; index < markdownList.length; index++) {
          let obj = {
            description: "",
            highlight: "",
            source: ""
          };
          let document = markdownList[index].match(/([^]*)\n?(```[^]+```)/);
        //   console.log(document)
          if (document) {
            obj.source = markdownList[index].match(/```(.*)\n([^]+)```/);
            obj.description = document[1];
            obj.highlight = document[2].replace(/^```js/g, "```");
            newMarkdownList.push(obj);
          }
        }
        return newMarkdownList
      }
    }
  }