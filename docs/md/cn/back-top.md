## BackTop 返回顶部

### 概述
当页面内容冗长，需要快捷返回顶部时使用，一般放置在页面右下角位置。
### 基础用法
默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。

```
<template>
    <BackTop></BackTop>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 自定义样式
自定义了位置在页面底部 200px,滚动至距顶端 200px 时显示。

```
<style scoped>
    .top{
        padding: 10px;
        background: rgba(0, 153, 229, .7);
        color: #fff;
        text-align: center;
        border-radius: 2px;
    }
</style>
<template>
    <BackTop :height="100" :bottom="200">
        <div class="top">返回顶端</div>
    </BackTop>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->

### API



### BackTop props
<!--table-->
| 属性       | 说明                      | 类型     | 默认值  |
| :------- | :---------------------- | :----- | :--- |
| height   | 页面滚动高度达到该值时才显示BackTop组件 | Number | 400  |
| bottom   | 组件距离底部的距离               | Number | 30   |
| right    | 组件距离右部的距离               | Number | 30   |
| duration | 滚动动画持续时间，单位 毫秒          | Number | 1000 |
<!--table-->
<!--divider-->



### BackTop events
<!--table-->
| 事件名      | 说明      | 返回值  |
| :------- | :------ | :--- |
| on-click | 点击按钮时触发 | 无    |
<!--table-->
<!--divider-->
