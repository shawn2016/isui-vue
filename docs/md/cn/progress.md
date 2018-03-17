## Progress 进度条

### 概述
展示操作或任务的当前进度，比如上传文件。
### 基本用法
处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success。

```
<template>
    <Progress :percent="25"></Progress>
    <Progress :percent="45" status="active"></Progress>
    <Progress :percent="65" status="wrong"></Progress>
    <Progress :percent="100"></Progress>
    <Progress :percent="25" hide-info></Progress>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 垂直方向
设置属性 vertical 将以垂直方向显示。

```
<template>
    <div style="height: 100px;">
        <Progress vertical :percent="25"></Progress>
        <Progress vertical :percent="45" status="active"></Progress>
        <Progress vertical :percent="65" status="wrong"></Progress>
        <Progress vertical :percent="100"></Progress>
        <Progress vertical :percent="25" hide-info></Progress>
    </div>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 配合外部组件使用
通过数据的联动和逻辑控制，实现动态效果。

```
<template>
    <Progress :percent="percent"></Progress>
    <ButtonGroup size="large">
        <Button icon="ios-plus-empty" @click="add"></Button>
        <Button icon="ios-minus-empty" @click="minus"></Button>
    </ButtonGroup>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>

```

<!--divider-->

### 自定义更多样式
通过自定义slot和属性stroke-width改变进度条效果。

```
<template>
    <Progress :percent="25" :stroke-width="5"></Progress>
    <Progress :percent="100">
        <Icon type="checkmark-circled"></Icon>
        <span>成功</span>
    </Progress>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### API



### Progress props
<!--table-->
| 属性           | 说明                                 | 类型      | 默认值    |
| :----------- | :--------------------------------- | :------ | :----- |
| percent      | 百分比                                | Number  | 0      |
| status       | 状态，可选值为normal、active、wrong、success | String  | normal |
| stroke-width | 进度条的线宽，单位 px                       | Number  | 10     |
| hide-info    | 隐藏数值或状态图标                          | Boolean | false  |
| vertical     | 是否在垂直方向显示                          | Boolean | false  |
<!--table-->
<!--divider-->



### Progress slot
<!--table-->
| 名称   | 说明        |
| :--- | :-------- |
| 无    | 自定义显示状态内容 |
<!--table-->
<!--divider-->
