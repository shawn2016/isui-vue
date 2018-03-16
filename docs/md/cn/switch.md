## Switch 开关

### 概述

在两种状态间切换时用到的开关选择器。

<!--divider-->

### 基本

基本用法，状态切换时会触发事件。

```js
<template>
    <i-switch v-model="switch1" @on-change="change"></i-switch>
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

```js
<template>
    <i-switch size="large"></i-switch>
    <i-switch></i-switch>
    <i-switch size="small"></i-switch>
</template>
<script>
    export default {
        
    }
</script>


```

<!--divider-->

### 文字和图标

自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。

```js
<template>
    <i-switch>
        <span slot="open">开</span>
        <span slot="close">关</span>
    </i-switch>
    <i-switch>
        <Icon type="android-done" slot="open"></Icon>
        <Icon type="android-close" slot="close"></Icon>
    </i-switch>
    <br><br>
    <i-switch size="large">
        <span slot="open">开启</span>
        <span slot="close">关闭</span>
    </i-switch>
    <i-switch size="large">
        <span slot="open">ON</span>
        <span slot="close">OFF</span>
    </i-switch>
</template>
<script>
    export default {
        
    }
</script>
```

<!--divider-->

### 不可用

禁用开关。

```js
<template>
    <i-switch :disabled="disabled"></i-switch>
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true
            }
        },
    }
</script>
```

<!--divider-->

### 使用

### Switch props

<!--table-->
| 参数          | 说明                                       | 类型                      | 默认值   |
| :---------- | :--------------------------------------- | :---------------------- | :---- |
| value       | 指定当前是否选中，可以使用 v-model 双向绑定数据             | Boolean                 | false |
| size        | 开关的尺寸，可选值为`large`、`small`、`default`或者不写。建议开关如果使用了2个汉字的文字，使用 large。 | String                  | -     |
| disabled    | 禁用开关                                     | Boolean                 | false |
| true-value  | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用           | String, Number, Boolean | true  |
| false-value | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用         | String, Number, Boolean | false |
<!--table-->
<!--divider-->

### Switch events

<!--table-->

| 事件名       | 说明              | 返回值           |
| :-------- | :-------------- | :------------ |
| on-change | 开关变化时触发，返回当前的状态 | true \| false |

<!--table-->
<!--divider-->

### Switch slot

<!--table-->

| 名称    | 说明          |
| :---- | :---------- |
| open  | 自定义显示打开时的内容 |
| close | 自定义显示关闭时的内容 |

<!--table-->
<!--divider-->