## Cascader 级联选择

### 概述
从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。

### 基础用法
级联选择对数据有较严格要求，请参照示例的格式使用data，每项数据至少包含 value、label 两项，子集为 children，以此类推。 value 为当前选择的数据的 value 值的数组，比如 ['beijing', 'gugong'] ，按照级联顺序依次排序，使用 v-model 进行双向绑定。

```
<template>
    <Cascader :data="data" v-model="value1"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                value1: [],
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>
```

<!--divider-->

### 默认值
指定 value 默认值，组件会在初始化时选定数据。

```
<template>
    <Cascader :data="data" v-model="value2"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>

```

<!--divider-->

### 移入展开
设置属性 trigger 为 hover，当鼠标悬停时就会展开子集。

```
<template>
    <Cascader :data="data" trigger="hover"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>

```

<!--divider-->

### 自定义显示
通过设置 slot 可以自定义显示内容，不局限于输入框。

```
<template>
    <Cascader :data="data3" :render-format="format"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                data3: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖',
                            code: 310000
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门',
                            code: 210000
                        }]
                    }]
                }]
            }
        },
        methods: {
            format (labels, selectedData) {
                const index = labels.length - 1;
                const data = selectedData[index] || false;
                if (data && data.code) {
                    return labels[index] + ' - ' + data.code;
                }
                return labels[index];
            }
        }
    }
</script>

```

<!--divider-->

### 禁用
设置属性 disabled 可以禁用组件。 给某项数据设置 disabled: true 可以禁用某一项。

```
<template>
    <Cascader :data="data2" disabled></Cascader>
    <br>
    <Cascader :data="data2"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                data2: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖'
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    disabled: true,
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门'
                        }]
                    }]
                }]
            }
        }
    }
</script>

```

<!--divider-->

### 选择即改变
设置属性 change-on-select 点任何一级都可以选择。

```
<template>
    <Cascader :data="data" change-on-select></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>

```

<!--divider-->

### 自定义已选项
对于显示的结果，可以通过 render-format 接收一个函数来自定义。 其中第一个参数 labels 是当前选择的label的集合，第二个参数 selectedData 是当前选择的数据集合，可以利用它们组合出你想要显示的内容。

```
<template>
    <Cascader :data="data3" :render-format="format"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                data3: [{
                    value: 'zhejiang',
                    label: '浙江',
                    children: [{
                        value: 'hangzhou',
                        label: '杭州',
                        children: [{
                            value: 'xihu',
                            label: '西湖',
                            code: 310000
                        }]
                    }]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [{
                        value: 'nanjing',
                        label: '南京',
                        children: [{
                            value: 'zhonghuamen',
                            label: '中华门',
                            code: 210000
                        }]
                    }]
                }]
            }
        },
        methods: {
            format (labels, selectedData) {
                const index = labels.length - 1;
                const data = selectedData[index] || false;
                if (data && data.code) {
                    return labels[index] + ' - ' + data.code;
                }
                return labels[index];
            }
        }
    }
</script>

```

<!--divider-->

### 尺寸
通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。

```
<template>
    <Cascader :data="data" size="large"></Cascader>
    <br>
    <Cascader :data="data"></Cascader>
    <br>
    <Cascader :data="data" size="small"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        }
    }
</script>

```

<!--divider-->

### 动态加载选项
使用 load-data 属性可以异步加载子选项，需要给数据增加 loading 来标识当前是否在加载中。 load-data 的第二个参数为回调，如果执行，则会自动展开当前项的子列表。

```
<template>
    <Cascader :data="data4" :load-data="loadData"></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                data4: [
                    {
                        value: 'beijing',
                        label: '北京',
                        children: [],
                        loading: false
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州',
                        children: [],
                        loading:false
                    }
                ]
            }
        },
        methods: {
            loadData (item, callback) {
                item.loading = true;
                setTimeout(() => {
                    if (item.value === 'beijing') {
                        item.children = [
                            {
                                value: 'talkingdata',
                                label: 'TalkingData'
                            },
                            {
                                value: 'baidu',
                                label: '百度'
                            },
                            {
                                value: 'sina',
                                label: '新浪'
                            }
                        ];
                    } else if (item.value === 'hangzhou') {
                        item.children = [
                            {
                                value: 'ali',
                                label: '阿里巴巴'
                            },
                            {
                                value: '163',
                                label: '网易'
                            }
                        ];
                    }
                    item.loading = false;
                    callback();
                }, 1000);
            }
        }
    }
</script>

```

<!--divider-->

### 搜索
使用属性 filterable 可直接搜索选项并选择。 暂不支持服务端搜索。

```
<template>
    <Cascader v-model="value3" :data="data" filterable></Cascader>
</template>
<script>
    export default {
        data () {
            return {
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                value3: []
            }
        }
    }
</script>

```

<!--divider-->

### 使用


### Cascader props
<!--table-->
| 属性               | 说明                                       | 类型       | 默认值                        |
| :--------------- | :--------------------------------------- | :------- | :------------------------- |
| data             | 可选项的数据源，格式参照示例说明                         | Array    | []                         |
| value            | 当前已选项的数据，格式参照示例说明                        | Array    | []                         |
| render-format    | 选择后展示的函数，用于自定义显示格式                       | Function | label => label.join(' / ') |
| disabled         | 是否禁用选择器                                  | Boolean  | false                      |
| clearable        | 是否支持清除                                   | Boolean  | true                       |
| placeholder      | 输入框占位符                                   | String   | 请选择                        |
| trigger          | 次级菜单展开方式，可选值为 click 或 hover              | String   | click                      |
| change-on-select | 当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例     | Boolean  | false                      |
| size             | 输入框大小，可选值为large和small或者不填                | String   | -                          |
| load-data        | 动态获取数据，数据源需标识 loading                    | Function | -                          |
| filterable       | 是否支持搜索                                   | Boolean  | false                      |
| not-found-text   | 当搜索列表为空时显示的内容                            | String   | 无匹配数据                      |
| transfer         | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean  | false                      |
| element-id       | 给表单元素设置 id，详见 Form 用法。                   | String   | -                          |
<!--table-->
<!--divider-->



### Cascader events
<!--table-->
| 事件名               | 说明                                       | 返回值                 |
| :---------------- | :--------------------------------------- | :------------------ |
| on-change         | 选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据 | value, selectedData |
| on-visible-change | 展开和关闭弹窗时触发                               | 显示状态，Boolean        |
<!--table-->
<!--divider-->
