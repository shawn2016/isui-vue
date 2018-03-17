## Tooltip 文字提示

### 概述
文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。
### 基础用法
最简单的用法。 注意 Tooltip 内的文本使用了 white-space: nowrap;，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式 white-space: normal;。

```
<template>
    <Tooltip content="这里是提示文字">
        当鼠标经过这段文字时，会显示一个气泡框
    </Tooltip>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 位置
组件提供了12个不同的方向显示Tooltip，具体配置可查看API。

```
<style scoped>
    .top,.bottom{
        text-align: center;
    }
    .center{
        width: 300px;
        margin: 10px auto;
        overflow: hidden;
    }
    .center-left{
        float: left;
    }
    .center-right{
        float: right;
    }
</style>
<template>
    <div class="top">
        <Tooltip content="Top Left 文字提示" placement="top-start">
            <Button>上左</Button>
        </Tooltip>
        <Tooltip content="Top Center 文字提示" placement="top">
            <Button>上边</Button>
        </Tooltip>
        <Tooltip content="Top Right 文字提示" placement="top-end">
            <Button>上右</Button>
        </Tooltip>
    </div>
    <div class="center">
        <div class="center-left">
            <Tooltip content="Left Top 文字提示" placement="left-start">
                <Button>左上</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Center 文字提示" placement="left">
                <Button>左边</Button>
            </Tooltip><br><br>
            <Tooltip content="Left Bottom 文字提示" placement="left-end">
                <Button>左下</Button>
            </Tooltip>
        </div>
        <div class="center-right">
            <Tooltip content="Right Top 文字提示" placement="right-start">
                <Button>右上</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Center 文字提示" placement="right">
                <Button>右边</Button>
            </Tooltip><br><br>
            <Tooltip content="Right Bottom 文字提示" placement="right-end">
                <Button>右下</Button>
            </Tooltip>
        </div>
    </div>
    <div class="bottom">
        <Tooltip content="Bottom Left 文字提示" placement="bottom-start">
            <Button>下左</Button>
        </Tooltip>
        <Tooltip content="Bottom Center 文字提示" placement="bottom">
            <Button>下边</Button>
        </Tooltip>
        <Tooltip content="Bottom Right 文字提示" placement="bottom-end">
            <Button>下右</Button>
        </Tooltip>
    </div>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 自定义内容
通过自定义 slot 显示多行文本或更复杂的样式。

```
<template>
    <Tooltip placement="top">
        <Button>多行</Button>
        <div slot="content">
            <p>显示多行信息</p>
            <p><i>可以自定义样式</i></p>
        </div>
    </Tooltip>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 禁用
通过设置属性disabled可以禁用文字提示。

```
<template>
    <Tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">
        <Button @click="disabled = true">点击关闭提示</Button>
    </Tooltip>
</template>
<script>
    export default {
        data () {
            return {
                disabled: false
            }
        }
    }
</script>

```

<!--divider-->

### 延时
通过设置属性delay可以延时显示文字提示，单位毫秒。

```
<template>
    <Tooltip placement="top" content="Tooltip 文字提示" :delay="1000">
        <Button @click="disabled = true">延时1秒显示</Button>
    </Tooltip>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### API



### Tooltip props
<!--table-->
| 属性        | 说明                                       | 类型      | 默认值    |
| :-------- | :--------------------------------------- | :------ | :----- |
| content   | 显示的内容                                    | String  | Number |
| placement | 提示框出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end | String  | bottom |
| disabled  | 是否禁用提示框                                  | Boolean | false  |
| delay     | 延迟显示，单位毫秒                                | Number  | 0      |
| always    | 是否总是可见                                   | Boolean | false  |
| transfer  | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean | false  |
<!--table-->
<!--divider-->



### Tooltip events
<!--table-->
| 事件名            | 说明        | 返回值  |
| :------------- | :-------- | :--- |
| on-popper-show | 在提示框显示时触发 | 无    |
| on-popper-hide | 在提示框消失时触发 | 无    |
<!--table-->
<!--divider-->



### Tooltip slot
<!--table-->
| 名称      | 说明                                   |
| :------ | :----------------------------------- |
| 无       | 主体内容                                 |
| content | 提示框的内容，定义此 slot 时，会覆盖 props content。 |
<!--table-->
<!--divider-->
