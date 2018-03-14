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
import Vue from 'vue'
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
    this.newMarkdownList=this.getDomList(markdownString);
  },
  methods: {
  }
};
</script>
