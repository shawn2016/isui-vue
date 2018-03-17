## Tag 标签

### 概述
对不同维度进行简单的标记和分类。
### 基本用法
简单的展示，添加属性closable可以关闭标签。 点击关闭标签时，会触发 on-close 事件，需自己实现关闭逻辑。
```
<template>
    <Tag>标签一</Tag>
    <Tag>标签二</Tag>
    <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>
</template>
<script>
    export default {
        data () {
            return {
                show: true
            }
        },
        methods: {
            handleClose () {
                this.show = false;
            }
        }
    }
</script>

```

<!--divider-->
### 样式类型
通过设置 type 属性为 border 或 dot 来选择不同的样式类型。建议有关闭的某些场景下使用 border，图例的场景下使用 dot。

```
<template>
    <Tag type="border">标签三</Tag>
    <Tag type="border" closable>标签四</Tag>
    <Tag type="dot">标签一</Tag>
    <Tag type="dot" closable>标签二</Tag>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 各种颜色
四种预设颜色，可自定义颜色

```
<template>
    <Tag closable color="blue">标签一</Tag>
    <Tag closable color="green">标签二</Tag>
    <Tag closable color="red">标签三</Tag>
    <Tag closable color="yellow">标签四</Tag>
    <br><br>
    <Tag type="border" closable color="blue">标签一</Tag>
    <Tag type="border" closable color="green">标签二</Tag>
    <Tag type="border" closable color="red">标签三</Tag>
    <Tag type="border" closable color="yellow">标签四</Tag>
    <br><br>
    <Tag type="dot" closable color="blue">标签一</Tag>
    <Tag type="dot" closable color="green">标签二</Tag>
    <Tag type="dot" closable color="red">标签三</Tag>
    <Tag type="dot" closable color="yellow">标签四</Tag>
    <br><br>
    <Tag closable color="#EF6AFF" checkable>标签一</Tag>
    <Tag type="border" closable color="#EF6AFF" checkable>标签二</Tag>
    <Tag type="dot" closable color="#EF6AFF" checkable>标签三</Tag>
    <Tag closable color="default" checkable>标签四</Tag>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 可选择
设置属性 checkable，可以对标签进行选择，属性 checked 控制当前选择状态。

```
<template>
    <Tag checkable color="blue">标签一</Tag>
    <Tag checkable color="green">标签二</Tag>
    <Tag checkable color="red">标签三</Tag>
    <Tag checkable color="yellow">标签四</Tag>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 动态添加和删除
用数组生成一组标签，可以动态添加和删除。

<template>

    <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>
    <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>
</template>
<script>
    export default {
        data () {
            return {
                count: [0, 1, 2]
            }
        },
        methods: {
            handleAdd () {
                if (this.count.length) {
                    this.count.push(this.count[this.count.length - 1] + 1);
                } else {
                    this.count.push(0);
                }
            },
            handleClose2 (event, name) {
                const index = this.count.indexOf(name);
                this.count.splice(index, 1);
            }
        }
    }
</script>

<!--divider-->

### API



### Tag props
<!--table-->
| 属性        | 说明                                       | 类型      | 默认值    |
| :-------- | :--------------------------------------- | :------ | :----- |
| closable  | 标签是否可以关闭                                 | Boolean | false  |
| checkable | 标签是否可以选择                                 | Boolean | false  |
| checked   | 标签的选中状态                                  | Boolean | true   |
| type      | 标签的样式类型，可选值为 border、dot或不填               | String  | -      |
| color     | 标签颜色，预设颜色值为blue、green、red、yellow、default，你也可以自定义颜色值。 | String  | -      |
| name      | 当前标签的名称，使用 v-for，并支持关闭时，会比较有用            | String  | Number |
<!--table-->
<!--divider-->



### Tag events
<!--table-->
| 事件名      | 说明    | 返回值         |
| :------- | :---- | :---------- |
| on-close | 关闭时触发 | event, name |
<!--table-->
<!--divider-->
