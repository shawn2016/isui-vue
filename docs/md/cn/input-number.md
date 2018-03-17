## InputNumber 数字输入框

### 概述
使用鼠标或键盘输入一定范围的标准数值。
### 基础用法
可以通过输入、鼠标点击或键盘的上下键来改变数值大小。

```
<template>
    <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value1: 1
            }
        }
    }
</script>

```

<!--divider-->

### 小数
通过设置step属性控制每次改变的精度。

```
<template>
    <InputNumber :max="10" :min="1" :step="1.2" v-model="value2"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value2: 1
            }
        }
    }
</script>

```

<!--divider-->

### 格式化展示
通过 formatter 格式化数字，以展示具有具体含义的数据，往往需要配合 parser 一起使用。

```
<template>
    <div>
        <InputNumber
            :max="10000"
            v-model="value9"
            :formatter="value => `$ ${value}`.replace(/B(?=(d{3})+(?!d))/g, ',')"
            :parser="value => value.replace(/$s?|(,*)/g, '')"></InputNumber>
        <InputNumber
            :max="100"
            v-model="value10"
            :formatter="value => `${value}%`"
            :parser="value => value.replace('%', '')"></InputNumber>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value9: 1000,
                value10: 100
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
    <InputNumber v-model="value3" size="small"></InputNumber>
    <InputNumber v-model="value4"></InputNumber>
    <InputNumber v-model="value5" size="large"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value3: 2,
                value4: 2,
                value5: 2
            }
        }
    }
</script>

```

<!--divider-->

### 不可用
通过设置disabled属性禁用输入框，点击按钮切换状态。

```
<template>
    <InputNumber v-model="value6" :disabled="disabled"></InputNumber>
    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>
</template>
<script>
    export default {
        data () {
            return {
                disabled: true,
                value6: 1
            }
        }
    }
</script>

```

<!--divider-->

### 只读
通过设置readonly属性开启只读。

```
<template>
    <InputNumber v-model="value7" readonly></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value7: 1
            }
        }
    }
</script>

```

<!--divider-->

### 不可编辑
通过设置editable属性控制是否能编辑。

```
<template>
    <InputNumber v-model="value8" :editable="false"></InputNumber>
</template>
<script>
    export default {
        data () {
            return {
                value8: 1
            }
        }
    }
</script>

```

<!--divider-->

### 使用


### InputNumber props
<!--table-->
| 属性         | 说明                                       | 类型       | 默认值       |
| :--------- | :--------------------------------------- | :------- | :-------- |
| max        | 最大值                                      | Number   | Infinity  |
| min        | 最小值                                      | Number   | -Infinity |
| value      | 当前值，可以使用 v-model 双向绑定数据                  | Number   | 1         |
| step       | 每次改变的步伐，可以是小数                            | Number   | 1         |
| size       | 输入框尺寸，可选值为large、small、default或者不填        | String   | -         |
| disabled   | 设置禁用状态                                   | Boolean  | false     |
| formatter  | 指定输入框展示值的格式                              | Function | -         |
| parser     | 指定从 formatter 里转换回数字的方式，和 formatter 搭配使用 | Function | -         |
| readonly   | 是否设置为只读                                  | Boolean  | false     |
| editable   | 是否可编辑                                    | Boolean  | true      |
| precision  | 数值精度                                     | Number   | -         |
| element-id | 给表单元素设置 id，详见 Form 用法。                   | String   | -         |
<!--table-->
<!--divider-->



### InputNumber events
<!--table-->
| 事件名       | 说明             | 返回值  |
| :-------- | :------------- | :--- |
| on-change | 数值改变时的回调，返回当前值 | 当前值  |
| on-focus  | 聚焦时触发          | -    |
| on-blur   | 失焦时触发          | -    |
<!--table-->
<!--divider-->
