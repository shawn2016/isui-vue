## 定制主题


iView 默认提供了一套 UI 主题，并且可以在一定程度上定制新主题，以满足业务和品牌上的多样化视觉需求。

iView 的样式是基于 [Less](http://lesscss.org/) 进行开发的，默认以前缀 `.ivu-` 作为命名空间，并且定义了一套样式变量，定制主题，就是编辑这个变量列表。

### 变量覆盖（推荐）

如果你的项目使用了 webpack 工程，可以通过变量覆盖的方式来实现主题定制。

首先在项目中先建一个目录，比如 `my-theme`，然后在 my-theme 下建立一个 less 文件 `index.less`，并写入下面内容：

```
@import '~iview/src/styles/index.less';

// Here are the variables to cover, such as:
@primary-color: #8c0776;
```

<!--divider-->

完整的变量列表可以查看 [默认样式变量](https://github.com/iview/iview/blob/2.0/src/styles/custom.less)。

然后在入口文件 `main.js` 内导入这个 less 文件即可：

```
import Vue from 'vue';
import iView from 'iview';
import '../my-theme/index.less';

Vue.use(iView);
```

<!--divider-->

 