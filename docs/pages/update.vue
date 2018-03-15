<template>
  <div >
    <page-template :markdownString="markdownString"></page-template>
  </div>
</template>

<script>
import pageTemplate from "../../examples/components/template";
import markdownString from "../md/cn/update.md";
import Vue from "vue";
export default {
  name: "updatePage",
  components: {
    "page-template": pageTemplate,
    markdownString
  },
  created() {
    this.markdownString = markdownString;
  },
  methods: {}
};
</script>
