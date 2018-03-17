

### 基础用法
设置属性 type 为 date 或 daterange 分别显示选择单日和选择范围类型。 设置属性 placement 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。 2.10.0 版本开始支持从右往左选择。
```
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>

```
<!--divider-->


### 快捷方式
设置属性 options 对象中的 shortcuts 可以设置快捷选项，详见示例代码。 其中 value 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。 value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。
```
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                options1: {
                    shortcuts: [
                        {
                            text: 'Today',
                            value () {
                                return new Date();
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click today');
                            }
                        },
                        {
                            text: 'Yesterday',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click yesterday');
                            }
                        },
                        {
                            text: 'One week',
                            value () {
                                const date = new Date();
                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                                return date;
                            },
                            onClick: (picker) => {
                                this.$Message.info('Click a week ago');
                            }
                        }
                    ]
                },
                options2: {
                    shortcuts: [
                        {
                            text: '1 week',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                return [start, end];
                            }
                        },
                        {
                            text: '1 month',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                return [start, end];
                            }
                        },
                        {
                            text: '3 months',
                            value () {
                                const end = new Date();
                                const start = new Date();
                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                return [start, end];
                            }
                        }
                    ]
                }
            }
        }
    }
</script>

```
<!--divider-->


### 面板不联动
开启属性 split-panels 后，左右两面板在切换年、月时不联动。 2.10.0 版本开始支持。
```
<template>
    <DatePicker type="daterange" split-panels placeholder="Select date" style="width: 200px"></DatePicker>
</template>
<script>
    export default {

    }
</script>

```
<!--divider-->


### 多选
开启属性 multiple 后，可以多选。 2.10.0 版本开始支持。
```
<template>
    <DatePicker type="date" multiple placeholder="Select date" style="width: 300px"></DatePicker>
</template>
<script>
    export default {

    }
</script>

```
<!--divider-->


### 显示星期数
开启属性 show-week-numbers 后，可以显示星期数。 2.10.0 版本开始支持。
```
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" show-week-numbers placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>

```
<!--divider-->


### 起始日期
设置属性 start-date 后，可以将默认显示的日期面板设置为指定日期。 2.10.0 版本开始支持。
```
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" :start-date="new Date(1991, 4, 14)" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" :start-date="new Date(1991, 4, 14)" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>

```
<!--divider-->


### 日期格式
设置属性 format 可以改变日期的显示格式，详见  Date。 注意，format 只是改变显示的格式，并非改变 value 值。
```
<template>
    <Row>
        <Col span="12">
            <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                value1: '2016-01-01',
                value2: ['2016-01-01', '2016-02-15']
            }
        }
    }
</script>

```
<!--divider-->


### 日期时间选择
设置属性 type 为 datetime 或 datetimerange 可以选择时间。 设置 format 并且忽略秒，可以只设置小时和分钟维度。
```
<template>
    <DatePicker type="datetime" placeholder="Select date and time" style="width: 200px"></DatePicker>
    <br>
    <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 200px"></DatePicker>
    <br>
    <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 300px"></DatePicker>
    <br>
    <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 300px"></DatePicker>
</template>
<script>
    export default {
        
    }
</script>

```
<!--divider-->


### 年和月
设置属性 type 为 year 或 month 可以使用选择年或月的功能。
```
<template>
    <Row>
        <Col span="12">
            <DatePicker type="year" placeholder="Select year" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="month" placeholder="Select month" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>

```
<!--divider-->


### 不可选日期
设置属性 options 对象中的 disabledDate 可以设置不可选择的日期。 disabledDate 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。
```
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" :options="options3" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {
        data () {
            return {
                options3: {
                    disabledDate (date) {
                        return date && date.valueOf() < Date.now() - 86400000;
                    }
                },
                options4: {
                    disabledDate (date) {
                        const disabledDay = date.getDate();
                        return disabledDay === 15;
                    }
                }
            }
        }
    }
</script>

```
<!--divider-->


### 带有确认操作
设置属性 confirm，选择日期后，选择器不会主动关闭，需用户确认后才可关闭。 确认按钮并没有影响日期的正常选择。
```
<template>
    <Row>
        <Col span="12">
            <DatePicker type="date" confirm placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
        <Col span="12">
            <DatePicker type="daterange" confirm placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>

```
<!--divider-->


### 手动控制组件
对于一些定制化的场景，可以使用 slot 配合参数 open 及事件来手动控制组件的显示状态，详见示例和 API。
```
<template>
    <DatePicker
        :open="open"
        :value="value3"
        confirm
        type="date"
        @on-change="handleChange"
        @on-clear="handleClear"
        @on-ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
            <Icon type="ios-calendar-outline"></Icon>
            <template v-if="value3 === ''">Select date</template>
            <template v-else>{{ value3 }}</template>
        </a>
    </DatePicker>
</template>
<script>
    export default {
        data () {
            return {
                open: false,
                value3: ''
            }
        },
        methods: {
            handleClick () {
                this.open = !this.open;
            },
            handleChange (date) {
                this.value3 = date;
            },
            handleClear () {
                this.open = false;
            },
            handleOk () {
                this.open = false;
            }
        }
    }
</script>

```
<!--divider-->


### 尺寸
通过设置属性 size 为 large 或 small 可以调整选择器尺寸为大或小，默认不填为中。
```
<template>
    <Row>
        <Col span="8">
            <DatePicker size="small" type="date" placeholder="Select date"></DatePicker>
        </Col>
        <Col span="8">
            <DatePicker type="date" placeholder="Select date"></DatePicker>
        </Col>
        <Col span="8">
            <DatePicker size="large" type="date" placeholder="Select date"></DatePicker>
        </Col>
    </Row>
</template>
<script>
    export default {

    }
</script>

```
<!--divider-->

### DatePicker props


<!--table-->
| 属性                  | 说明                                       | 类型      | 默认值          |
| :------------------ | :--------------------------------------- | :------ | :----------- |
| type                | 显示类型，可选值为 date、daterange、datetime、datetimerange、year、month | String  | date         |
| value               | 日期，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的日期格式，点击右边查看注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用 | Date    | -            |
| format              | 展示的日期格式                                  | Date    | date         |
| placement           | 日期选择器出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end | String  | bottom-start |
| placeholder         | 占位文本                                     | String  | 空            |
| options             | 选择器额外配置，比如不可选日期与快捷选项，具体项详见下表             | Object  | -            |
| split-panels        | 开启后，左右面板不联动，仅在 daterange 和 datetimerange 下可用。 | Boolean | false        |
| multiple            | 开启后，可以选择多个日期，仅在 date 下可用。                | Boolean | false        |
| show-week-numbers   | 开启后，可以显示星期数。                             | Boolean | false        |
| start-date          | 设置默认显示的起始日期。                             | Date    | -            |
| confirm             | 是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭 | Boolean | false        |
| open                | 手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用 | Boolean | null         |
| size                | 尺寸，可选值为large、small、default或者不设置          | String  | -            |
| disabled            | 是否禁用选择器                                  | Boolean | false        |
| clearable           | 是否显示清除按钮                                 | Boolean | true         |
| readonly            | 完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效        | Boolean | false        |
| editable            | 文本框是否可以输入，只在没有使用 slot 时有效                | Boolean | true         |
| transfer            | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean | false        |
| element-id          | 给表单元素设置 id，详见 Form 用法。                   | String  | -            |
| time-picker-options | 可以在 type 为 datetime 和 datetimerange 下，配置 TimePicker 的属性，比如时间间隔 steps：:time-picker-options="{steps: [1, 10, 10]}" | Object  | {}           |
<!--table-->

<!--divider-->

### options

选择器额外配置

<!--table-->
| 属性           | 说明                                     | 类型                 | 默认值                                      |
| :----------- | :------------------------------------- | :----------------- | :--------------------------------------- |
| shortcuts    | 设置快捷选项，每项内容：text                       | String：显示的文案 value | Function：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调 onClick |
| disabledDate | 设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天 | Function           | -                                        |
<!--table-->

<!--divider-->

### DatePicker events


<!--table-->
| 事件名            | 说明                                       | 返回值                     |
| :------------- | :--------------------------------------- | :---------------------- |
| on-change      | 日期发生变化时触发                                | 已经格式化后的日期，比如 2016-01-01 |
| on-open-change | 弹出日历和关闭日历时触发                             | true                    |
| on-ok          | 在 confirm 模式下有效，点击确定按钮时触发                | -                       |
| on-clear       | 在 confirm 模式或 clearable = true 时有效，在清空日期时触发 | -                       |
<!--table-->

<!--divider-->

### DatePicker slot

<!--table-->

| 名称   | 说明                                |
| :--- | :-------------------------------- |
| 无    | 自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例 |
<!--table-->

<!--divider-->
