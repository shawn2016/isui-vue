## AutoComplete 自动完成

### 概述

输入框自动完成功能。

### 基础用法

基本用法，通过 data 设置自动完成的数据源。

```
<template>
    <AutoComplete
        v-model="value1"
        :data="data1"
        @on-search="handleSearch1"
        placeholder="input here"
        style="width:200px"></AutoComplete>
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                data1: []
            }
        },
        methods: {
            handleSearch1 (value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            }
        }
    }
</script>

```

<!--divider-->

### 自定义选项

除了使用 data，还可以直接传入 `Option` 组件作为 slot 使用，这样可以自定义显示效果。

```
<template>
    <AutoComplete
        v-model="value2"
        @on-search="handleSearch2"
        placeholder="input here"
        style="width:200px">
        <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>
    </AutoComplete>
</template>
<script>
    export default {
        data () {
            return {
                value2: '',
                data2: []
            }
        },
        methods: {
            handleSearch2 (value) {
                this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
                ];
            }
        }
    }
</script>

```

<!--divider-->

### 不区分大小写

不区分大小写的 AutoComplete，及过滤的用法。

```
<template>
    <AutoComplete
        v-model="value3"
        :data="data3"
        :filter-method="filterMethod"
        placeholder="input here"
        style="width:200px">
    </AutoComplete>
</template>
<script>
    export default {
        data () {
            return {
                value3: '',
                data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive']
            }
        },
        methods: {
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            }
        }
    }
</script>

```

<!--divider-->

### 查询模式

完全自定义 Option，显示复杂的布局。

```
<template>
    <AutoComplete
        v-model="value4"
        icon="ios-search"
        placeholder="input here"
        style="width:300px">
        <div class="demo-auto-complete-item" v-for="item in data4">
            <div class="demo-auto-complete-group">
                <span>{{ item.title }}</span>
                <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>
            </div>
            <Option v-for="option in item.children" :value="option.title" :key="option.title">
                <span class="demo-auto-complete-title">{{ option.title }}</span>
                <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>
            </Option>
        </div>
        <a href="https://www.google.com/search?q=iView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>
    </AutoComplete>
</template>
<script>
    export default {
        data () {
            return {
                value4: '',
                data4: [
                    {
                        title: '话题',
                        children: [
                            {
                                title: 'iView',
                                count: 10000,

                            },
                            {
                                title: 'iView UI',
                                count: 10600,

                            }
                        ]
                    },
                    {
                        title: '问题',
                        children: [
                            {
                                title: 'iView UI 有多好',
                                count: 60100,

                            },
                            {
                                title: 'iView 是啥',
                                count: 30010,

                            }
                        ]
                    },
                    {
                        title: '文章',
                        children: [
                            {
                                title: 'iView 是一个设计语言',
                                count: 100000,

                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
<style>
    .demo-auto-complete-item{
        padding: 4px 0;
        border-bottom: 1px solid #F6F6F6;
    }
    .demo-auto-complete-group{
        font-size: 12px;
        padding: 4px 6px;
    }
    .demo-auto-complete-group span{
        color: #666;
        font-weight: bold;
    }
    .demo-auto-complete-group a{
        float: right;
    }
    .demo-auto-complete-count{
        float: right;
        color: #999;
    }
    .demo-auto-complete-more{
        display: block;
        margin: 0 auto;
        padding: 4px;
        text-align: center;
        font-size: 12px;
    }
</style>

```

<!--divider-->

### AutoComplete props

<!--table-->
| 参数            | 说明                                       | 类型                  | 默认值    |
| :------------ | :--------------------------------------- | :------------------ | :----- |
| value         | 绑定的值，可使用 v-model 双向绑定                    | String \| Number    | -      |
| data          | 自动完成的数据源                                 | Array               | []     |
| clearable     | 是否可以清空选项                                 | Boolean             | false  |
| disabled      | 是否禁用                                     | Boolean             | false  |
| placeholder   | 占位文本                                     | String              | -      |
| size          | 输入框尺寸，可选值为 `large`、`small`、`default` 或者不设置 | String              | -      |
| icon          | 输入框尾部图标                                  | String              | -      |
| filter-method | 是否根据输入项进行筛选。当其为一个函数时，会接收 `value` 和 `option` 两个参数，当 option 符合筛选条件时，应返回 true，反之则返回 false | Function \| Boolean | false  |
| placement     | 弹窗的展开方向，可选值为 `bottom` 和 `top`            | String              | bottom |
| transfer      | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean             | false  |
| element-id    | 给表单元素设置 `id`，详见 Form 用法。                 | String              | -      |
<!--table-->
<!--divider-->

### AutoComplete events

<!--table-->

| 事件名       | 说明                                  | 返回值   |
| :-------- | :---------------------------------- | :---- |
| on-change | 选中 option，或 input 的 value 变化时，调用此函数 | value |
| on-select | 被选中时调用，参数为选中项的 value 值              | value |
| on-search | 搜索补全项的时候调用                          | query |

<!--table-->
<!--divider-->