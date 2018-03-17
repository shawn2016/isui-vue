## Breadcrumb 面包屑

### 概述
显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。
### 基础用法
最基础的用法，通过设置to属性添加链接。

```
<template>
    <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 带图标的
可自定义每项的内容，比如带有一个图标。

```
<template>
    <Breadcrumb>
        <BreadcrumbItem to="/">
            <Icon type="ios-home-outline"></Icon> Home
        </BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">
            <Icon type="social-buffer-outline"></Icon> Components
        </BreadcrumbItem>
        <BreadcrumbItem>
            <Icon type="pound"></Icon> Breadcrumb
        </BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 分隔符
通过设置separator属性来自定义分隔符，比如 > ，也可以接受自定义的HTML字符串。

```
<style>
    .demo-breadcrumb-separator{
        color: #ff5500;
        padding: 0 5px;
    }
</style>
<template>
    <Breadcrumb separator=">">
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
    <Breadcrumb separator="<b class='demo-breadcrumb-separator'>=></b>">
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
        <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
    </Breadcrumb>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->

### API



### Breadcrumb props
<!--table-->
| 属性        | 说明     | 类型     | 默认值            |
| :-------- | :----- | :----- | :------------- |
| separator | 自定义分隔符 | String | Element String |
<!--table-->
<!--divider-->



### BreadcrumbItem props
<!--table-->
| 属性      | 说明                                  | 类型      | 默认值    |
| :------ | :---------------------------------- | :------ | :----- |
| to      | 链接，不传则没有链接                          | String  | Object |
| href    | 同 to，未来将废弃                          | String  | Object |
| replace | 路由跳转时，开启 replace 将不会向 history 添加新记录 | Boolean | false  |
<!--table-->
<!--divider-->
