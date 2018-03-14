<template>
  <div >
    <div v-for="x in newMarkdownList">
    <Demo slot="demo" :description="x.description" :source="x.source" :highlight="x.highlight"></Demo>
    </div>
  </div>
</template>

<script>
import Demo from "../../examples/components/demo";
import markdownString from "../md/cn/button.md";
import marked from "marked";

export default {
  name: "ButtonPage",
  components: {
    Demo,
    markdownString,
    marked
  },
  data() {
    return {
      description: "",
      newMarkdownList: []
    };
  },
  created() {
    this.getCodeList();
  },
  methods: {
    getCodeList() {
      let markdownList = markdownString.split("<!--divider-->");
      for (let index = 0; index < markdownList.length; index++) {
        let obj = {
          description: "",
          highlight: "",
          source: ""
        };
        let document = markdownList[index].match(/([^]*)\n?(```[^]+```)/);
        if (document) {
          obj.source = markdownList[index].match(/```(.*)\n([^]+)```/);
          obj.description = document[1];
          obj.highlight = document[2].replace(/```js/, "```");
        this.newMarkdownList.push(obj);
          
        }
      }
      console.log(this.newMarkdownList);
    }
  }
};
</script>
