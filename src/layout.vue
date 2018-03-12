<template>
  <div class="w-docs">
      <div class="w-docs-menu-warpper">
   <div class="w-docs-menu-content">
    <div class="w-docs-logo">
     <a href="https://uiw-react.github.io"><img src="https://uiw-react.github.io/static/media/logo.3d8ef350.svg" alt="logo" /><span>uiw <i class="version">1.7.1 </i> <sup>beta</sup></span></a>
    </div>
    <ul class="w-docs-menu-list">
     <li v-html="menuList"></li>
    </ul>
    <div class="w-docs-info">
     <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiw-react/uiw/issues"><i class="w-icon-message"></i> 反馈建议</a>
     <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiw-react/uiw/issues/new"><i class="w-icon-question-circle"></i> 提交bug</a>
     <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiw-react/uiw"><i class="w-icon-github"></i> Github</a>
    </div>
   </div>
  </div> 




  <div class="w-docs-content">
   <div>
    <div class="w-docs-content-warpper">
     <router-view/>
    </div>
    <div class="w-docs-docinfo">
     犯了错误还是想对文件做出贡献？ 
     <a href="https://github.com/uiw-react/uiw/blob/master/docs/md/cn/color.md" target="_blank" rel="noopener noreferrer">在Github上编辑本页！</a> 
     <br />
     <a href="https://github.com/uiw-react/uiw/issues" target="_blank" rel="noopener noreferrer">反馈建议</a> | 
     <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiw-react/uiw/issues/new">提交bug</a> | 
     <a target="_blank" rel="noopener noreferrer" href="https://github.com/uiw-react/uiw">Github</a>
    </div>
   </div>
  <back-to-top text="Back to top"></back-to-top>
  </div>
   
  </div>
</template>

<script>
import BackToTop from "vue-backtotop";
import routes from "./router/routers";
import  {getLang } from './utils/getLang'
export default {
  name: "Layout",
  components: {
    BackToTop
  },
  data() {
    return {
      menuList: ""
    };
  },
  created() {
    this.renderMenu();
  },
  methods: {
    renderMenu(obj) {
      let _obj = obj || routes;
      let html = [];
        console.log(_obj)
      
      for (let a in _obj) {
        if (_obj[a] instanceof Array) {
          html = html.concat(
            _obj[a].map((item, idx) => this.renderMenuLi(item, idx))
          );
        } else if (_obj[a] instanceof Object) {
          for (let e in _obj[a]) {
            if (_obj[a][e] instanceof Array) {
            console.log(_obj[a][e])              
                
              html = html.concat(
                <ul key={`${e}`}>
                  <li class="title">{getLang(`category.${e}`)}</li>
                  {_obj[a][e].map((item, item_idx) =>
                    this.renderMenuLi(item, item_idx)
                  )}
                </ul>
              );
            }
          }
        }
      }
      return html;
    },
    renderMenuLi(item, idx) {
        console.log('renderMenuLi')
        
      if (!item.path) return null;
      if (getPageName(window.location.href) === getPageName(item.path)) {
        return (
          <li key={`${idx}`} class="active" key={idx}>
            {getLang(`page.${getPageName(item.path)}`)}
          </li>
        );
      }
      return (
        <li key={`${idx}`}>
          <Link to={`/${this.getLangName()}/${this.getPageName(item.path)}`}>
            {getLang(`page.${this.getPageName(item.path)}`)}
          </Link>
        </li>
      );
    },
    getPageName(location) {
      const routes = location.match(/(?:\/(.+))?(\/(.+)\?|\/(.+))/);
      if (routes) {
        return routes[3] || routes[4];
      }
      return "quick-start";
    }
  }
};
</script>

<style>

</style>
