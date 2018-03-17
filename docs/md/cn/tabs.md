## Tabs 标签页

### 概述
选项卡切换组件，常用于平级区域大块内容的的收纳和展现。
### 基础用法
value 与 TabPane 的 name 对应，用于标识当前激活的是哪一项，name 值默认从 0 开始，默认激活第一项。可以使用 v-model 双向绑定数据。

```
<template>
    <Tabs value="name1">
        <TabPane label="标签一" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 禁用
禁用某一项。

```
<template>
    <Tabs>
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二" disabled>标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 图标
通过设置属性 icon，可以显示一个图标。

```
<template>
    <Tabs>
        <TabPane label="macOS" icon="social-apple">标签一的内容</TabPane>
        <TabPane label="Windows" icon="social-windows">标签二的内容</TabPane>
        <TabPane label="Linux" icon="social-tux">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 迷你型
设置属性 size 为 small 可以显示为迷你型，只在 type 为 line 时有效。

```
<template>
    <Tabs size="small">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 卡片样式
设置属性 type 为 card 可以显示卡片样式，常用于容器顶部。

```
<template>
    <Tabs type="card">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 可关闭
通过设置属性 closable 可以关闭某一项，仅在 type 为 card 时有效。 需结合 @on-tab-remove 事件手动关闭标签页。

```
<template>
    <Tabs type="card" closable @on-tab-remove="handleTabRemove">
        <TabPane label="标签一" v-if="tab0">标签一的内容</TabPane>
        <TabPane label="标签二" v-if="tab1">标签二的内容</TabPane>
        <TabPane label="标签三" v-if="tab2">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tab0: true,
                tab1: true,
                tab2: true
            }
        },
        methods: {
            handleTabRemove (name) {
                this['tab' + name] = false;
            }
        }
    }
</script>

```


<!--divider-->
### 自定义标签页
设置 label 为 Render 函数后，可以自定义标签页的内容。   学习 Render 函数的内容  

```
<template>
    <Tabs value="name1">
        <TabPane :label="label" name="name1">标签一的内容</TabPane>
        <TabPane label="标签二" name="name2">标签二的内容</TabPane>
        <TabPane label="标签三" name="name3">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                label: (h) => {
                    return h('div', [
                        h('span', '标签一'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                }
            }
        }
    }
</script>

```


<!--divider-->
### 附加内容
设置 slot extra 可以在页签右边添加附加操作。

```
<template>
    <Tabs type="card">
        <TabPane v-for="tab in tabs" :key="tab" :label="'标签' + tab">标签{{ tab }}</TabPane>
        <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra">增加</Button>
    </Tabs>
</template>
<script>
    export default {
        data () {
            return {
                tabs: 2
            }
        },
        methods: {
            handleTabsAdd () {
                this.tabs ++;
            }
        }
    }
</script>

```


<!--divider-->
### 不使用动画
通过设置属性 animated 为 false 可以禁用动画。

```
<template>
    <Tabs :animated="false">
        <TabPane label="标签一">标签一的内容</TabPane>
        <TabPane label="标签二">标签二的内容</TabPane>
        <TabPane label="标签三">标签三的内容</TabPane>
    </Tabs>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 其它样式
可以根据业务自定义 UI，需要一点额外的样式覆盖。

```
<style>
    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content {
        height: 120px;
        margin-top: -16px;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
        background: #fff;
        padding: 16px;
    }

    .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
        border-color: transparent;
    }

    .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
        border-color: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab{
        border-radius: 0;
        background: #fff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active{
        border-top: 1px solid #3399ff;
    }
    .demo-tabs-style2 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active:before{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #3399ff;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
<template>
    <Row :gutter="32">
        <Col span="12" class="demo-tabs-style1" style="background: #e3e8ee;padding:16px;">
            <Tabs type="card">
                <TabPane label="标签一">标签一的内容</TabPane>
                <TabPane label="标签二">标签二的内容</TabPane>
                <TabPane label="标签三">标签三的内容</TabPane>
            </Tabs>
        </Col>
        <Col span="12" class="demo-tabs-style2">
            <Tabs type="card">
                <TabPane label="标签一">标签一的内容</TabPane>
                <TabPane label="标签二">标签二的内容</TabPane>
                <TabPane label="标签三">标签三的内容</TabPane>
            </Tabs>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->

### API



### Tabs props
<!--table-->
| 属性       | 说明                                       | 类型      | 默认值          |
| :------- | :--------------------------------------- | :------ | :----------- |
| value    | 当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据    | String  | 默认为第一项的 name |
| type     | 页签的基本样式，可选值为 line 和 card                 | String  | line         |
| size     | 尺寸，可选值为 default 和 small，仅在 type="line" 时有效 | String  | default      |
| closable | 是否可以关闭页签，仅在 type="card" 时有效              | Boolean | false        |
| animated | 是否使用 CSS3 动画                             | Boolean | true         |
<!--table-->
<!--divider-->



### Tabs events
<!--table-->
| 事件名           | 说明         | 返回值  |
| :------------ | :--------- | :--- |
| on-click      | tab 被点击时触发 | name |
| on-tab-remove | tab 被关闭时触发 | name |
<!--table-->
<!--divider-->



### Tabs slot
<!--table-->
| 名称    | 说明   |
| :---- | :--- |
| extra | 附加内容 |
<!--table-->
<!--divider-->



### TabPane props
<!--table-->
| 属性       | 说明                                      | 类型      | 默认值      |
| :------- | :-------------------------------------- | :------ | :------- |
| name     | 用于标识当前面板，对应 value，默认为其索引值               | String  | Number   |
| label    | 选项卡头显示文字，支持 Render 函数。  学习 Render 函数的内容 | String  | Function |
| icon     | 选项卡图标                                   | String  | -        |
| disabled | 是否禁用该选项卡                                | Boolean | false    |
| closable | 是否可以关闭页签，仅在 type="card" 时有效             | Boolean | null     |
<!--table-->
<!--divider-->
