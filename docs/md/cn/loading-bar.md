## LoadingBar 加载进度条

### 概述
全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。

### 说明

 LoadingBar 只会在全局创建一个，因此在任何位置调用的方法都会控制这同一个组件。主要使用场景是路由切换和Ajax，因为这两者都不能拿到精确的进度，LoadingBar 会模拟进度，当然也可以通过`update()`方法来传入一个精确的进度，比如在文件上传时会很有用，具体见API。

### 在路由中使用

```
// 部分代码省略
import iView from 'iview';
Vue.use(iView);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
});
```

<!--divider-->

### 在异步请求中使用

```
<script>
// 以jQuery的Ajax为例，部分代码省略
import $ from 'jquery';
export default {
    methods: {
        getData () {
            this.$Loading.start();
            $.ajax({
                url: '/api/someurl',
                type: 'get',
                success: () => {
                    this.$Loading.finish();
                }
                error: () => {
                    this.$Loading.error();
                }
            });
        }
    }
}
</script>
```

<!--divider-->

### 基本用法
点击 Start 开始进度，点击 Finish 结束。在调用start()方法后，组件会自动模拟进度，当调用finish()或error()时，补全进度并自动消失。

```
<template>
    <Button @click="start">Start</Button>
    <Button @click="finish">Finish</Button>
    <Button @click="error">Error</Button>
</template>
<script>
    export default {
        methods: {
            start () {
                this.$Loading.start();
            },
            finish () {
                this.$Loading.finish();
            },
            error () {
                this.$Loading.error();
            }
        }
    }
</script>

```


<!--divider-->

### API



### LoadingBar instance
<!--table-->
| 函数名    | 说明                   | 参数               |
| :----- | :------------------- | :--------------- |
| start  | 开始从 0 显示进度条，并自动加载进度  | 无                |
| finish | 结束进度条，自动补全剩余进度       | 无                |
| error  | 以错误的类型结束进度条，自动补全剩余进度 | 无                |
| update | 精确加载到指定的进度           | percent，指定的进度百分比 |
<!--table-->
<!--divider-->
