<template>
  <div class="hello">
    111111111111
    <i-code lang="html" slot="code">{{ code }}</i-code>
    <!-- <vue-markdown>{{code}}</vue-markdown> -->
    <div v-html="code"></div>
  </div>
</template>

<script>
import iCode from './code'
import markdown from '../../docs/md/cn/loading-bar.md'
import VueMarkdown from 'vue-markdown'
export default {
  // name: 'HelloWorld',
  components: {
    iCode,
    markdown,
    VueMarkdown
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      code: markdown.replace(/```/g, '')
    }
  },
  mounted () {
console.log(markdown.replace(/```/g, ''))
}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
