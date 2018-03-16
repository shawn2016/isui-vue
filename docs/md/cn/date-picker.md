## DatePicker 日期选择器

### 概述

选择或输入日期，支持年、月、日期等类型，支持选择范围。

### 基础用法 

设置属性 `type` 为 `date` 或 `daterange` 分别显示**选择单日**和**选择范围**类型。

设置属性 `placement` 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。

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

### ButtonGroup
<!--table-->
| 参数       | 说明                                       | 类型      | 默认值   |
| :------- | :--------------------------------------- | :------ | :---- |
| size     | 按钮组合大小，可选值为`large`、`small`、`default`或者不设置 | String  | -     |
| shape    | 按钮组合形状，可选值为`circle`或者不设置                 | String  | -     |
| vertical | 是否纵向排列按钮组                                | Boolean | false |
<!--table-->
<!--divider-->