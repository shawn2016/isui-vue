isui-vue

### 构思

借用isui[https://github.com/shawn2016/isui]的思想，维护markdown文档就可以实现代码和效果的vue组件

### 问题

- [ ] 维护md文档，用一套代码实现代码复制和实例
- [ ] 选择代码高亮
- [ ] 按组件打包出来
- [ ] 又想结合iview写法
- [ ] iview组件太多，由页面转markdown文档太慢，太累

### 解决方案

- 使用vue-cli快速搭建项目
- 基本引用isui项目目录结构与样式
- 组件沿用iview样式与写法（以后有时间好好注意细节）
- 使用vue-markdown，vue-marked-loader，text-loader等组件对md文件处理
- 不想拷贝，那就用node，fs读写操作
- 使用了cheerio对html进行解析，实现了一般table转成markdown写法

### 预览效果

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
