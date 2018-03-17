安装
---

```
npm install isui-vue --save
```

<!--divider-->

ps: **通过GitHub仓库安装**的 win 用户请在 `Git Bash` 下执行，因为需要用到 git。

### 使用

```
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import isui from 'isui-vue';
import 'isui-vue/src/dist/styles/iview.css';
Vue.use(VueRouter);
Vue.use(isui);
```
<!--divider-->

### 组件冲突

重新取一个名字

```js
import { Button as ButtonView } from 'isui-vue';
```

<!--divider-->

### 按需加载组件

借助插件 babel-plugin-import可以实现按需加载组件，减少文件体积。首先安装，并在文件 .babelrc 中配置：
```js
npm install babel-plugin-import --save-dev

// .babelrc
{
  "plugins": [["import", {
    "libraryName": "isui-vue",
    "libraryDirectory": "src/components"
  }]]
}
```
<!--divider-->
```Js
- import { Alert } from 'uiw';
+ import { Alert } from 'uiw/lib/alert';
```

<!--divider-->

### 开发

要开发，运行自重新构建，获取代码：

```
$ git clone https://github.com/shawn2016/isui-vue.git
$ cd isui-vue
$ npm install # or  yarn install
# or 解决phantomjs下载失败问题
$ npm install --phantomjs_cdnurl=http://npm.taobao.org/mirrors/phantomjs
```

<!--divider-->

要开发，运行自重新构建

```
# Run the app
# Restart the app automatically every time code changes. 
# Useful during development.
$ npm start
```

<!--divider-->

打开浏览器并访问：[http://127.0.0.1:8080](http://127.0.0.1:8080/)

<!--divider-->

### 文件目录说明

```
├── dist           # 生成的文档静态文件目录
├── docs           # 文档的源文件  
|————├── locales
|    ├── md     md源文件
|    ├── node   md生成器
|    └── pages  vue页面       
├── package.json
├── examples
└── src            # Vue组件在此
```

<!--divider-->

## License

Licensed under the MIT License.

<!--divider-->