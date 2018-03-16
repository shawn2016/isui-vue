## Select 选择器

### 概述

使用模拟的增强下拉选择器来代替浏览器原生的选择器。

选择器支持单选、多选、搜索，以及键盘快捷操作。

```
注意：非 template/render 模式下，需使用 i-select、i-option。
```

<!--divider-->

### 基础用法 

基本用法。可以使用 v-model 双向绑定数据。

单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据`Option`的`value`来返回选中的数据。

可以给`Select`添加 style 样式，比如宽度。

在展开选择器后，可以使用键盘的`up`和`down`快速上下选择，按下`Enter`选择，按下`Esc`收起选择器。

```
<template>
    <Select v-model="model1" style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: ''
            }
        }
    }
</script>

```

<!--divider-->

### 禁用

通过给`Select`设置属性`disabled`禁用整个选择器。

通过给`Option`设置属性`disabled`可以禁用当前项。

```
<template>
    <Select v-model="model5" disabled style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    <Select v-model="model6" style="width:200px">
        <Option value="beijing">New York</Option>
        <Option value="shanghai" disabled>London</Option>
        <Option value="shenzhen">Sydney</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model5: '',
                model6: ''
            }
        }
    }
</script>

```

<!--divider-->

### 可清空

通过设置属性`clearable`可以清空已选项，仅适用于单选模式。

```
<template>
    <Select v-model="model8" clearable style="width:200px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model8: ''
            }
        }
    }
</script>

```

<!--divider-->

### 分组

使用`OptionGroup`可将选项进行分组。

```
<template>
    <Select v-model="model7" style="width:200px">
        <OptionGroup label="Hot Cities">
            <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </OptionGroup>
        <OptionGroup label="Other Cities">
            <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </OptionGroup>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                cityList1: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    }
                ],
                cityList2: [
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model7: ''
            }
        }
    }
</script>

```

<!--divider-->

### 自定义模板

对选项内容可以进行自定义。注意在`Option`中使用`label`属性，可以让选择器优先读取该属性的值以显示，否则选中时显示的内容会和自定义的一样，这往往不是我们想要的。

对于选项显示内容的逻辑：优先显示 slot 内容，如果没有定义 slot，则显示`label`的值，如果没有设置 label，则显示`value`的值。

```
<template>
    <Select v-model="model9" style="width:200px">
        <Option value="New York" label="New York">
            <span>New York</span>
            <span style="float:right;color:#ccc">America</span>
        </Option>
        <Option value="London" label="London">
            <span>London</span>
            <span style="float:right;color:#ccc">U.K.</span>
        </Option>
        <Option value="Sydney" label="Sydney">
            <span>Sydney</span>
            <span style="float:right;color:#ccc">Australian</span>
        </Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                model9: ''
            }
        }
    }
</script>

```

<!--divider-->

### 多选

通过设置属性`multiple`可以开启多选模式。多选模式下，model 接受数组类型的数据，所返回的也是数组。

```
<template>
    <Select v-model="model10" multiple style="width:260px">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model10: []
            }
        }
    }
</script>

```

<!--divider-->

### 可搜索

通过设置属性`filterable`可以开启搜索模式。单选和多选都支持搜索模式。多选搜索时，可以使用键盘`Delete`快捷删除最后一个已选项。

```
<template>
    <Row>
        <Col span="12" style="padding-right:10px">
            <Select v-model="model11" filterable>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </Col>
        <Col span="12">
            <Select v-model="model12" filterable multiple>
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model11: '',
                model12: []
            }
        }
    }
</script>

```

<!--divider-->

### 远程搜索

远程搜索需同时设置 `filterable`、`remote`、`remote-method`、`loading` 四个 props，其中 loading 用于控制是否正在搜索中，remote-method 是远程搜索的方法。

注意：需要给 Option 设置 key。

设置初始显示值，需设置 `label` 属性。

本例为美国州名，尝试输入一些字母。

```
<template>
    <Row>
        <Col span="12" style="padding-right:10px">
            <Select
                v-model="model13"
                filterable
                remote
                :remote-method="remoteMethod1"
                :loading="loading1">
                <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
            </Select>
        </Col>
        <Col span="12">
        <Select
            v-model="model14"
            multiple
            filterable
            remote
            :remote-method="remoteMethod2"
            :loading="loading2">
            <Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>
        </Select>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                model13: '',
                loading1: false,
                options1: [],
                model14: [],
                loading2: false,
                options2: [],
                list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming']
            }
        },
        methods: {
            remoteMethod1 (query) {
                if (query !== '') {
                    this.loading1 = true;
                    setTimeout(() => {
                        this.loading1 = false;
                        const list = this.list.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options1 = [];
                }
            },
            remoteMethod2 (query) {
                if (query !== '') {
                    this.loading2 = true;
                    setTimeout(() => {
                        this.loading2 = false;
                        const list = this.list.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options2 = [];
                }
            }
        }
    }
</script>

```

<!--divider-->

### Select props

<!--table-->
| 参数             | 说明                                       | 类型                        | 默认值    |
| :------------- | :--------------------------------------- | :------------------------ | :----- |
| value          | 指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array | String \| Number \| Array | 空      |
| multiple       | 是否支持多选                                   | Boolean                   | false  |
| disabled       | 是否禁用                                     | Boolean                   | false  |
| clearable      | 是否可以清空选项，只在单选时有效                         | Boolean                   | false  |
| filterable     | 是否支持搜索                                   | Boolean                   | false  |
| remote         | 是否使用远程搜索                                 | Boolean                   | false  |
| remote-method  | 远程搜索的方法                                  | Function                  | -      |
| loading        | 当前是否正在远程搜索                               | Boolean                   | false  |
| loading-text   | 远程搜索中的文字提示                               | String                    | 加载中    |
| label          | 仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。 | String \| Number \| Array | 空      |
| size           | 选择框大小，可选值为`large`、`small`、`default`或者不填  | String                    | -      |
| placeholder    | 选择框默认文字                                  | String                    | 请选择    |
| not-found-text | 当下拉列表为空时显示的内容                            | String                    | 无匹配数据  |
| label-in-value | 在返回选项时，是否将 label 和 value 一并返回，默认只返回 value | Boolean                   | false  |
| placement      | 弹窗的展开方向，可选值为 `bottom` 和 `top`            | String                    | bottom |
| transfer       | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean                   | false  |
| element-id     | 给表单元素设置 `id`，详见 Form 用法。                 | String                    | -      |
<!--table-->
<!--divider-->

### Select events

<!--table-->

| 事件名             | 说明                                       | 返回值   |
| :-------------- | :--------------------------------------- | :---- |
| on-change       | 选中的`Option`变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性 | 当前选中项 |
| on-query-change | 搜索词改变时触发                                 | query |

<!--table-->
<!--divider-->

### Select methods

<!--table-->

| 方法名               | 说明                                     | 参数    |
| :---------------- | :------------------------------------- | :---- |
| setQuery          | 设置搜索词，为空时清空，仅在 `filterable="true"` 时有效 | query |
| clearSingleSelect | 清空单选项，仅在 `clearable="true"` 时有效        | 无     |

<!--table-->
<!--divider-->

### Option props

<!--table-->

| 参数       | 说明                                       | 类型               | 默认值   |
| :------- | :--------------------------------------- | :--------------- | :---- |
| value    | 选项值，默认根据此属性值进行筛选，必填                      | String \| Number | 无     |
| label    | 选项显示的内容，默认会读取 slot，无 slot 时，优先读取该 label 值，无 label 时，读取 value。当选中时，选择器会显示 label 为已选文案。大部分情况不需要配置此项，直接写入 slot 即可，在自定义选项时，该属性非常有用。 | String           | -     |
| disabled | 是否禁用当前项                                  | Boolean          | false |

<!--table-->
<!--divider-->

### OptionGroup props

<!--table-->

| 属性    | 说明    | 类型     | 默认值  |
| :---- | :---- | :----- | :--- |
| label | 分组的组名 | String | 空    |

<!--table-->
<!--divider-->