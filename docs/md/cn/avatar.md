## Badge 徽标数

### 概述99999999
主要用于通知未读数的角标，提醒用户点击。
### 基础用法
最简单的使用方法。

```
<style scoped>
    .demo-badge{
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
    }
</style>
<template>
    <Badge count="3">
        <a href="#" class="demo-badge"></a>
    </Badge>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 小红点
强迫症患者慎用！

```
<template>
    <Badge dot>
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge dot>
        <Icon type="ios-bell-outline" size="26"></Icon>
    </Badge>
    <Badge dot>
        <a href="#">可以是一个链接</a>
    </Badge>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 封顶数字
通过设置overflow-count属性设置一个封顶值，当超过时，会显示${overflowCount}+

```
<template>
    <Badge count="100">
        <a href="#" class="demo-badge"></a>
    </Badge>
    <Badge count="1000" overflow-count="999">
        <a href="#" class="demo-badge"></a>
    </Badge>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 独立使用及自定义样式
可以没有 slot 独立展示。

```
<style>
    .demo-badge-alone{
        background: #5cb85c !important;
    }
</style>
<template>
    <Badge count="10"></Badge>
    <Badge count="20" class-name="demo-badge-alone"></Badge>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### API



### Badge props
<!--table-->
| 属性             | 说明                                       | 类型      | 默认值    |
| :------------- | :--------------------------------------- | :------ | :----- |
| count          | 显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏 | Number  | String |
| overflow-count | 展示封顶的数字值                                 | Number  | String |
| dot            | 不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0     | Boolean | false  |
| class-name     | 自定义的class名称，dot 模式下无效                    | String  | -      |
<!--table-->
<!--divider-->
