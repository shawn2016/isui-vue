<template>
    <div>
        <vue-markdown>{{description}}</vue-markdown>
        <div v-show="highlight" class="is-docs-demo-warpper is-docs-button">
            <div v-show="showBlockBtn" class="is-docs-demo-source" ref="markedContent"></div>
            <div class="is-docs-demo-meta"></div>
            <div v-show="showBlock" class="is-docs-demo-highlight">
                <i-code lang="html" slot="code">{{ highlight }}</i-code>
            </div>
            <div v-show="showBlockBtn" class="is-docs-demo-control" @click="blockControl"><span>{{showText}}</span>
            </div>
        </div>
        <!-- 表格 -->
        <VueMarkdown class="is-docs-content-warpper is-docs-table" v-show="!highlight">{{this.codeString}}</VueMarkdown>
        <slot name="demo"></slot>
    </div>
</template>
<script>
import iCode from "./code";
import VueMarkdown from "vue-markdown";
import marked from "marked";
import Vue from "vue";

export default {
    name: "ButtonPage",
    components: {
        iCode,
        VueMarkdown,
        marked
    },
    props: ["description", "highlight", "source"],
    data() {
        return {
            document: [],
            showBlock: false,
            showText: "显示代码",
            showBlockBtn: true
        };
    },
    methods: {
        blockControl() {
            this.showBlock = !this.showBlock;
            this.showText = this.showBlock ? "隐藏代码" : "显示代码";
        },
        getHtml() {
            this.codeString.indexOf("<template>");
        },
        compile() {
            let jsCode = {};
            if (this.jsCode) {
                jsCode = eval("({" + this.jsCode + "})");
            }
            let obj = Object.assign({
                    template: `<div>${this.htmlCode}</div>`
                },
                jsCode
            );
            const Component = Vue.extend(obj);
            const markedComponent = new Component().$mount();
            this.$refs["markedContent"].appendChild(markedComponent.$el);
        }
    },
    created() {
        this.codeString = this.source[2];
        if (
            this.codeString.indexOf("<template>") == -1 &&
            this.codeString.indexOf("<!--table-->") == -1
        ) {
            this.htmlCode = "";
            this.jsCode = "";
            this.showBlock = true;
            this.showBlockBtn = false;
        } else if (
            this.codeString.indexOf("<template>") == -1 &&
            this.codeString.indexOf("<!--table-->") != -1
        ) {
            console.log(table);
        } else {
            this.htmlCode = this.codeString.match(
                /<template>(.*)\n([^]+)<\/template>/
            )[2];
            this.jsCode = this.codeString
                .match(/<script>(.*)\n([^]+)<\/script>/)[2]
                .match(/export default(.*)\n([^]+)}/)[2];
        }
    },
    mounted() {
        this.compile();
    }
};
</script>