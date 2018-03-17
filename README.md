<p align="center">
  <a href="https://github.com/shawn2016/isui.git">
    <img width="150" src="https://github.com/shawn2016/icons/blob/master/favicon.png?sanitize=true">
  </a>
</p>

isui-vue
---

A high quality UI Toolkit, A Component Library for vue 2.0. 💘

### 文档

Visit the [http://nodedai.com/isui-vue](http://nodedai.com/isui-vue) website for more information.

### 构思

借用[isui](http://nodedai.com/isui-vue)的思想，维护markdown文档就可以实现代码和效果的vue组件

### 面临的问题

- 维护md文档，用一套代码实现代码复制和实例
- 选择代码高亮
- 按组件打包出来
- 又想结合iview写法
- iview组件太多，由页面转markdown文档太慢，太累

### 解决方案

- 使用vue-cli快速搭建项目
- 基本引用isui项目目录结构与样式
- 组件沿用iview样式与写法（以后有时间好好注意细节）
- 使用vue-markdown，vue-marked-loader，text-loader等组件对md文件处理
- 不想拷贝，那就用node，fs读写操作
- 使用了cheerio对html进行解析，实现了一般table转成markdown写法

### 预览效果
<p align="center">
<a href="https://github.com/shawn2016/isui-vue.git"><img src="https://github.com/shawn2016/isui-vue/blob/master/static/home.png" /></a>
</p>
<p align="center">
<a href="https://github.com/shawn2016/isui-vue.git"><img src="https://github.com/shawn2016/isui-vue/blob/master/static/color.png" /></a>
</p>
<p align="center">
<a href="https://github.com/shawn2016/isui-vue.git"><img src="https://github.com/shawn2016/isui-vue/blob/master/static/md.png" /></a>
</p>

### 安装

```
npm install isui-vue --save
```

### 引入isui-vue

```
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import isui from 'isui-vue';
Vue.use(VueRouter);
Vue.use(isui);
```

### 按需引用

借助插件 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)可以实现按需加载组件，减少文件体积。首先安装，并在文件 `.babelrc` 中配置：

```
npm install babel-plugin-import --save-dev

// .babelrc
{
  "plugins": [["import", {
    "libraryName": "isui-vue",
    "libraryDirectory": "src/components"
  }]]
}
```

然后这样按需引入组件，就可以减小体积了：

```
import { Button, Table } from 'isui-vue';
Vue.component('Button', Button);
Vue.component('Table', Table);
```

### 构建

``` bash
// 下载
git clone https://github.com/shawn2016/isui-vue.git
// 安装依赖
npm install
// 运行 #8080
npm start
// 构建
npm run build
```

### 感谢

本组件库基于 [iview](https://www.iviewui.com) 修改，感谢！

### License

Licensed under the MIT License.