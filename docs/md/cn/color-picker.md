## ColorPicker 颜色选择器

### 概述
用于颜色选择，支持多种颜色格式，支持颜色预设。
### 基础用法
基本用法，可以使用 v-model 实现数据的双向绑定。

```
<template>
    <Row>
        <Col span="12">
            有默认值
            <ColorPicker v-model="color1" />
        </Col>
        <Col span="12">
            无默认值
            <ColorPicker v-model="color2" />
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                color1: '#19be6b',
                color2: ''
            }
        }
    }
</script>

```

<!--divider-->

### 透明度
开启属性 alpha，可以选择带 Alpha 通道的颜色。

```
<template>
    <ColorPicker v-model="color3" alpha />
</template>
<script>
    export default {
        data () {
            return {
                color3: 'rgba(25, 190,107, .5)'
            }
        }
    }
</script>

```

<!--divider-->

### 色彩
设置属性 hue 为 false，可以禁用色彩选项。

```
<template>
    <ColorPicker v-model="color7" :hue="false" />
</template>
<script>
    export default {
        data () {
            return {
                color7: '#19be6b'
            }
        }
    }
</script>

```

<!--divider-->

### 颜色预设
开启属性 recommend 可以显示推荐的颜色预设，或设置属性 colors 来自定义预设颜色。

```
<template>
    <Row>
        <Col span="12">
            <ColorPicker v-model="color4" recommend />
        </Col>
        <Col span="12">
            <ColorPicker v-model="color5" :colors="colors" />
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                color4: '#19be6b',
                color5: '#19be6b',
                colors: ['#311B92', '#512DA8', '#673AB7', '#9575CD', '#D1C4E9']
            }
        }
    }
</script>

```

<!--divider-->

### 尺寸
选择器有三种尺寸：大、默认（中）、小。

```
<template>
    <Row>
        <Col span="8">
            <ColorPicker v-model="color6" size="large" />
        </Col>
        <Col span="8">
            <ColorPicker v-model="color6" />
        </Col>
        <Col span="8">
            <ColorPicker v-model="color6" size="small" />
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                color6: '#19be6b'
            }
        }
    }
</script>

```

<!--divider-->

### 使用


### ColorPicker props
<!--table-->
| 属性        | 说明                              | 类型      | 默认值                     |
| :-------- | :------------------------------ | :------ | :---------------------- |
| value     | 绑定的值，可使用 v-model 双向绑定           | String  | -                       |
| alpha     | 是否支持透明度选择                       | Boolean | false                   |
| hue       | 是否支持色彩选择                        | Boolean | true                    |
| recommend | 是否显示推荐的颜色预设                     | Boolean | false                   |
| colors    | 自定义颜色预设                         | Array   | []                      |
| format    | 颜色的格式，可选值为 hsl、hsv、hex、rgb      | String  | 开启 alpha 时为 rgb，其它为 hex |
| size      | 尺寸，可选值为large、small、default或者不设置 | String  | -                       |
<!--table-->
<!--divider-->



### ColorPicker events
<!--table-->
| 事件名              | 说明                | 返回值      |
| :--------------- | :---------------- | :------- |
| on-change        | 当绑定值变化时触发         | 当前值      |
| on-active-change | 面板中当前显示的颜色发生改变时触发 | 当前显示的颜色值 |
<!--table-->
<!--divider-->
