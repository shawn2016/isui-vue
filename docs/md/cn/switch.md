## Switch 开关

### 概述

在两种状态间切换时用到的开关选择器。

```
注意：没有使用 iview-loader 时，必须使用 i-switch 标签。
```

<!--divider-->

### 基本

基本用法，状态切换时会触发事件。

```js
<template>
    <Switch value="switch1" @on-change="change"></Switch>
</template>
<script>
    export default {
        data () {
            return {
                switch1: false
            }  
        },
        methods: {
            change (status) {
                this.$Message.info('开关状态：' + status);
            }
        }
    }
</script>
```

<!--divider-->

### 尺寸

设置`size`为 `large` 或 `small` 使用大号和小号的开关。

```
<template>
    <Switch size="large"></Switch>
    <Switch></Switch>
    <Switch size="small"></Switch>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### ButtonGroup
<!--table-->
| 参数       | 说明                                       | 类型      | 默认值   |
| :------- | :--------------------------------------- | :------ | :---- |
| size     | 按钮组合大小，可选值为`large`、`small`、`default`或者不设置 | String  | -     |
| shape    | 按钮组合形状，可选值为`circle`或者不设置                 | String  | -     |
| vertical | 是否纵向排列按钮组                                | Boolean | false |
<!--table-->
<!--divider-->