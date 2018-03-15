<template>
  <div >
    <div v-for="x in newMarkdownList">
    <Demo slot="demo" :description="x.description" :source="x.source" :highlight="x.highlight"></Demo>
    </div>
  </div>
</template>

<script>
import Demo from "../../examples/components/demo";
export default {
  name: "pageTemplate",
  components: {
    Demo
  },
  props:['markdownString'],
  data() {
    return {
      newMarkdownList: []
    };
  },
  created() {
    this.newMarkdownList=this.getDomList(this.markdownString);
  }
};
</script>
