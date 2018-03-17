## Poptip 气泡提示

### 概述
Poptip 与 Tooltip 类似，具有很多相同配置，不同点是 Poptip 以卡片的形式承载了更多的内容，比如链接、表格、按钮等。
### 基础用法
支持三种触发方式：鼠标悬停、点击、聚焦。默认是点击。 注意 Poptip 内的文本使用了 white-space: nowrap;，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式 white-space: normal;。

```
<template>
    <Poptip trigger="hover" title="提示标题" content="提示内容">
        <Button>hover 激活</Button>
    </Poptip>
    <Poptip title="提示标题" content="提示内容">
        <Button>click 激活</Button>
    </Poptip>
    <Poptip trigger="focus" title="提示标题" content="提示内容">
        <Button>focus 激活</Button>
    </Poptip>
    <Poptip trigger="focus" title="提示标题" content="提示内容">
        <i-input placeholder="输入框的 focus"></i-input>
    </Poptip>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 位置
组件提供了12个不同的方向显示Poptip，具体配置可查看API。。

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
        <Poptip title="提示标题" content="提示内容" placement="top-start">
            <Button>上左</Button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容" placement="top">
            <Button>上边</Button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容" placement="top-end">
            <Button>上右</Button>
        </Poptip>
    </div>
    <div class="center">
        <div class="center-left">
            <Poptip title="提示标题" content="提示内容" placement="left-start">
                <Button>左上</Button>
            </Poptip><br><br>
            <Poptip title="提示标题" content="提示内容" placement="left">
                <Button>左边</Button>
            </Poptip><br><br>
            <Poptip title="提示标题" content="提示内容" placement="left-end">
                <Button>左下</Button>
            </Poptip>
        </div>
        <div class="center-right">
            <Poptip title="提示标题" content="提示内容" placement="right-start">
                <Button>右上</Button>
            </Poptip><br><br>
            <Poptip title="提示标题" content="提示内容" placement="right">
                <Button>右边</Button>
            </Poptip><br><br>
            <Poptip title="提示标题" content="提示内容" placement="right-end">
                <Button>右下</Button>
            </Poptip>
        </div>
    </div>
    <div class="bottom">
        <Poptip title="提示标题" content="提示内容" placement="bottom-start">
            <Button>下左</Button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容" placement="bottom">
            <Button>下边</Button>
        </Poptip>
        <Poptip title="提示标题" content="提示内容" placement="bottom-end">
            <Button>下右</Button>
        </Poptip>
    </div>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 从浮层内关闭
通过v-model来控制提示框的显示和隐藏。

```
<template>
    <Poptip v-model="visible">
        <a>click 激活</a>
        <div slot="title"><i>自定义标题</i></div>
        <div slot="content">
            <a @click="close">关闭提示框</a>
        </div>
    </Poptip>
</template>
<script>
    export default {
        data () {
            return {
                visible: false
            }
        },
        methods: {
            close () {
                this.visible = false;
            }
        }
    }
</script>

```

<!--divider-->

### 嵌套复杂内容
通过自定义 slot 来实现复杂的内容。

```
<template>
    <Poptip placement="right" width="400">
        <Button type="ghost">click 激活</Button>
        <div class="api" slot="content">
            <table>
                <thead>
                    <tr>
                        <th>版本号</th>
                        <th>更新时间</th>
                        <th>说明</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0.9.5</td>
                        <td>2016-10-26</td>
                        <td>新增信息提示组件 <code>Tooltip</code>和<code>Poptip</code></td>
                    </tr>
                    <tr>
                        <td>0.9.4</td>
                        <td>2016-10-25</td>
                        <td>新增对话框组件 <code>Modal</code></td>
                    </tr>
                    <tr>
                        <td>0.9.2</td>
                        <td>2016-09-28</td>
                        <td>新增选择器组件 <code>Select</code></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </Poptip>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 确认框
通过设置属性confirm开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。

```
<template>
    <Poptip
        confirm
        title="您确认删除这条内容吗？"
        @on-ok="ok"
        @on-cancel="cancel">
        <Button>删除</Button>
    </Poptip>
    <Poptip
        confirm
        title="Are you sure delete this task?"
        @on-ok="ok"
        @on-cancel="cancel"
        ok-text="yes"
        cancel-text="no">
        <Button>国际化</Button>
    </Poptip>
</template>
<script>
    export default {
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>

```

<!--divider-->

### API



### Poptip props
<!--table-->
| 版本号   | 更新时间       | 说明                      |
| :---- | :--------- | :---------------------- |
| 0.9.5 | 2016-10-26 | 新增信息提示组件 Tooltip和Poptip |
| 0.9.4 | 2016-10-25 | 新增对话框组件 Modal           |
| 0.9.2 | 2016-09-28 | 新增选择器组件 Select          |
<!--table-->
<!--divider-->



### Poptip events
<!--table-->
| 属性          | 说明                                       | 类型      | 默认值    |
| :---------- | :--------------------------------------- | :------ | :----- |
| trigger     | 触发方式，可选值为hover（悬停）click（点击）focus（聚焦）,在 confirm 模式下，只有 click 有效 | String  | click  |
| title       | 显示的标题                                    | String  | Number |
| content     | 显示的正文内容，只在非 confirm 模式下有效                | String  | Number |
| placement   | 提示框出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end | String  | top    |
| width       | 宽度，最小宽度为 150px，在 confirm 模式下，默认最大宽度为 300px | String  | Number |
| confirm     | 是否开启对话框模式                                | Boolean | false  |
| ok-text     | 确定按钮的文字，只在 confirm 模式下有效                 | String  | 确定     |
| cancel-text | 取消按钮的文字，只在 confirm 模式下有效                 | String  | 取消     |
| transfer    | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean | false  |
<!--table-->
<!--divider-->



### Poptip slot
<!--table-->
| 事件名            | 说明                       | 返回值  |
| :------------- | :----------------------- | :--- |
| on-popper-show | 在提示框显示时触发                | 无    |
| on-popper-hide | 在提示框消失时触发                | 无    |
| on-ok          | 点击确定的回调，只在 confirm 模式下有效 | 无    |
| on-cancel      | 点击取消的回调，只在 confirm 模式下有效 | 无    |
<!--table-->
<!--divider-->
