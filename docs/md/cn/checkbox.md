### Checkbox 多选框

### 概述

基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。

### 单独使用

使用 v-model 可以双向绑定数据。

```
<template>
    <Checkbox v-model="single">Checkbox</Checkbox>
</template>
<script>
    export default {
        data () {
            return {
                single: false
            }
        }
    }
</script>

```

<!--divider-->

### 组合使用

使用`CheckboxGroup`配合数组来生成组合。在组合使用时，`Checkbox` 使用 `label` 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。

```
<template>
    <CheckboxGroup v-model="social">
        <Checkbox label="twitter">
            <Icon type="social-twitter"></Icon>
            <span>Twitter</span>
        </Checkbox>
        <Checkbox label="facebook">
            <Icon type="social-facebook"></Icon>
            <span>Facebook</span>
        </Checkbox>
        <Checkbox label="github">
            <Icon type="social-github"></Icon>
            <span>Github</span>
        </Checkbox>
        <Checkbox label="snapchat">
            <Icon type="social-snapchat"></Icon>
            <span>Snapchat</span>
        </Checkbox>
    </CheckboxGroup>
    <CheckboxGroup v-model="fruit">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
</template>
<script>
    export default {
        data () {
            return {
                social: ['facebook', 'github'],
                fruit: ['苹果']
            }
        }
    }
</script>

```

<!--divider-->

### 不可用

通过设置`disabled`属性来禁用多选框。

```
<template>
    <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>
    <CheckboxGroup v-model="disabledGroup">
        <Checkbox label="香蕉" disabled></Checkbox>
        <Checkbox label="苹果" disabled></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
</template>
<script>
    export default {
        data () {
            return {
                disabledSingle: true,
                disabledGroup: ['苹果']
            }
        }
    }
</script>

```

<!--divider-->

### 与其它组件通信

与其它组件进行数据联动。

```
<template>
    <Checkbox v-model="checked" :disabled="disabled">
        <span v-if="checked">Checked</span>
        <span v-else>Unchecked</span>
         - 
        <span v-if="!disabled">Usable</span>
        <span v-else>Disabled</span>
    </Checkbox>
    <br>
    <Button type="primary" @click="checked = !checked">
        <span v-if="!checked">Checked</span>
        <span v-else>Unchecked</span>
    </Button>
    <Button type="primary" @click="disabled = !disabled">
        <span v-if="disabled">Usable</span>
        <span v-else>Disabled</span>
    </Button>
</template>
<script>
    export default {
        data () {
            return {
                checked: true,
                disabled: false
            }
        }
    }
</script>

```

<!--divider-->

### 全选

在实现全选效果时，你可能会用到 `indeterminate` 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。

```
<template>
    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
        <Checkbox
            :indeterminate="indeterminate"
            :value="checkAll"
            @click.prevent.native="handleCheckAll">全选</Checkbox>
    </div>
    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
        <Checkbox label="香蕉"></Checkbox>
        <Checkbox label="苹果"></Checkbox>
        <Checkbox label="西瓜"></Checkbox>
    </CheckboxGroup>
</template>
<script>
    export default {
        data () {
            return {
                indeterminate: true,
                checkAll: false,
                checkAllGroup: ['香蕉', '西瓜']
            }
        },
        methods: {
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            }
        }
    }
</script>

```

<!--divider-->

### 使用

### Checkbox props

<!--table-->

| 参数            | 说明                                       | 类型                          | 默认值   |
| :------------ | :--------------------------------------- | :-------------------------- | :---- |
| value         | 只在单独使用时有效。可以使用 v-model 双向绑定数据            | Boolean                     | false |
| label         | 只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中    | String \| Number \| Boolean | -     |
| disabled      | 是否禁用当前项                                  | Boolean                     | false |
| indeterminate | 设置 indeterminate 状态，只负责样式控制              | Boolean                     | false |
| size          | 多选框的尺寸，可选值为 `large`、`small`、`default` 或者不设置 | String                      | -     |
| true-value    | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用           | String, Number, Boolean     | true  |
| false-value   | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用         | String, Number, Boolean     | false |

<!--table-->
<!--divider-->

### Checkbox events

<!--table-->

| 事件名       | 说明                                      | 返回值           |
| :-------- | :-------------------------------------- | :------------ |
| on-change | 只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发 | true \| false |

<!--table-->
<!--divider-->

### CheckboxGroup props

<!--table-->

| 参数    | 说明                                       | 类型     | 默认值  |
| :---- | :--------------------------------------- | :----- | :--- |
| value | 指定选中项目的集合，可以使用 v-model 双向绑定数据            | Array  | []   |
| size  | 多选框组的尺寸，可选值为 `large`、`small`、`default` 或者不设置 | String | -    |

<!--table-->
<!--divider-->

### CheckboxGroup events

<!--table-->

| 事件名       | 说明                                     | 返回值   |
| :-------- | :------------------------------------- | :---- |
| on-change | 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发 | [...] |

<!--table-->
<!--divider-->