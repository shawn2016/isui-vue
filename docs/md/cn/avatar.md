## Avatar 头像

### 概述
用来代表用户或事物，支持图片、图标或字符展示。
### 基础用法
头像有三种尺寸，两种形状可选。

```
<template>
    <div>
        <div class="demo-avatar">
            <Avatar icon="person" size="large" />
            <Avatar icon="person" />
            <Avatar icon="person" size="small" />
        </div>
        <div class="demo-avatar">
            <Avatar shape="square" icon="person" size="large" />
            <Avatar shape="square" icon="person" />
            <Avatar shape="square" icon="person" size="small" />
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 类型
支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

```
<template>
    <div class="demo-avatar">
        <Avatar icon="person" />
        <Avatar>U</Avatar>
        <Avatar>USER</Avatar>
        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>
        <Avatar style="background-color: #87d068" icon="person" />
    </div>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 带徽标的头像
通常用于消息提示。

```
<template>
    <div class="demo-avatar-badge">
        <Badge count="1">
            <Avatar shape="square" icon="person" />
        </Badge>
        <Badge dot>
            <Avatar shape="square" icon="person" />
        </Badge>
    </div>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 自动调整字符大小
对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。

```
<template>
    <div class="demo-avatar-badge">
        <Badge count="1">
            <Avatar shape="square" icon="person" />
        </Badge>
        <Badge dot>
            <Avatar shape="square" icon="person" />
        </Badge>
    </div>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->

### API



### Avatar props
<!--table-->
| 属性    | 说明                               | 类型     | 默认值     |
| :---- | :------------------------------- | :----- | :------ |
| shape | 指定头像的形状，可选值为 circle、square       | String | circle  |
| size  | 设置头像的大小，可选值为 large、small、default | String | default |
| src   | 图片类头像的资源地址                       | String | -       |
| icon  | 设置头像的图标类型，参考 Icon 组件             | String | -       |
<!--table-->
<!--divider-->
