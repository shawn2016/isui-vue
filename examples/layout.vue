<template>
  <div class="is-docs">
      <div class="is-docs-menu-warpper">
   <div class="is-docs-menu-content">
    <div class="is-docs-logo">
     <a href="https://github.com/shawn2016/isui-vue"><img src="http://nodedai.com/isui/static/media/logo.fef9640b.png" alt="logo" /><span>{{packageValue.name}} <i class="version">{{packageValue.version}} </i> <sup>beta</sup></span></a>
    </div>
    <ul class="is-docs-menu-list">
     <li ref="markedContent"></li>
    </ul>
    <div class="is-docs-info">
     <a target="_blank" rel="noopener noreferrer" href="https://github.com/shawn2016/isui-vue/issues"><i class="is-icon-message"></i> 反馈建议</a>
     <a target="_blank" rel="noopener noreferrer" href="https://github.com/shawn2016/isui-vue/issues/new"><i class="is-icon-question-circle"></i> 提交bug</a>
     <a target="_blank" rel="noopener noreferrer" href="https://github.com/shawn2016/isui-vue"><i class="is-icon-github"></i> Github</a>
    </div>
   </div>
  </div> 
  <div class="is-docs-content">
   <div>
    <div class="is-docs-content-warpper">
     <router-view/>
    </div>
    <div class="is-docs-docinfo">
     犯了错误还是想对文件做出贡献？ 
     <a :href="mdUrl" target="_blank" rel="noopener noreferrer">在Github上编辑本页！</a> 
     <br />
     <a href="https://github.com/shawn2016/isui-vue/issues" target="_blank" rel="noopener noreferrer">反馈建议</a> | 
     <a target="_blank" rel="noopener noreferrer" href="https://github.com/shawn2016/isui-vue/issues/new">提交bug</a> | 
     <a target="_blank" rel="noopener noreferrer" href="https://github.com/shawn2016/isui-vue">Github</a>
    </div>
   </div>
  <back-to-top class="is-docs-totop" text=""></back-to-top>
  </div>
   
  </div>
</template>

<script>
import Vue from "vue";
import BackToTop from "vue-backtotop";
import routes from "./router/routerList";
import { getLang } from "./utils/getLang";
const packageValue = require("../package.json");
export default {
  name: "Layout",
  components: {
    BackToTop
  },
  data() {
    return {
      menuList: "",
      mdUrl: "",
      packageValue
    };
  },
  mounted() {
    this.renderMenu();
  },
  methods: {
    renderMenu(obj) {
      let _obj = obj || routes;
      let html = [];
      for (let a in _obj) {
        if (_obj[a] instanceof Array) {
          html = html.concat(
            _obj[a].map((item, idx) => this.renderMenuLi(item, idx))
          );
        } else if (_obj[a] instanceof Object) {
          for (let e in _obj[a]) {
            if (_obj[a][e] instanceof Array) {
              html =
                html +
                `<ul key=${e}>
                  <li class="title">${getLang(`category.${e}`)}</li>
                  ${_obj[a][e].map((item, item_idx) =>
                    this.renderMenuLi(item, item_idx)
                  )}
                </ul>`;
            }
          }
        }
      }
      this.menuList = html.replace(/,/g, "");
      this.getMdUrl();
      this.compile();
    },
    renderMenuLi(item, idx) {
      this._item = item;
      if (!item.path) return "";
      if (
        this.getPageName(window.location.href) === this.getPageName(item.path)
      ) {
        return `<li  class="active" href="item.path" key='${idx}'>
        <a @click=goto($event) title=${item.path} >
            ${getLang(`page.${this.getPageName(item.path)}`)}
            </a>
          </li>`;
      }
      return `<li key='${idx}'>
          <a @click=goto($event) href=${item.path} title=${item.path} >
           ${getLang(`page.${this.getPageName(item.path)}`)}
          </a>
        </li>`;
    },
    compile() {
      let _this = this;
      const Component = Vue.extend({
        template: `<span>${this.menuList}</span>`,
        methods: {
          goto(e) {
            // _this.$router.push(e.target.title);
            // _this.isROuter = window.location.href;
          }
        }
      });
      const markedComponent = new Component().$mount();
      this.$refs["markedContent"].appendChild(markedComponent.$el);
    },
    getMdUrl() {
      this.mdUrl = `https://github.com/shawn2016/isui-vue/blob/master/docs/md${
        this.$route.path
      }.md`;
    },
    getPageName(location) {
      const routes = location.match(/(?:\/(.+))?(\/(.+)\?|\/(.+))/);
      if (routes) {
        return routes[3] || routes[4];
      }
      return "quick-start";
    },
    getLangName() {
      return localStorage.getItem("WUI_LANG") || "cn";
    }
  }
};
</script>

<style>

</style>
