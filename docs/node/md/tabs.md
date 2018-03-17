## Tabs 标签页

### 概述
选项卡切换组件，常用于平级区域大块内容的的收纳和展现。
### 基础用法
value 与 TabPane 的 name 对应，用于标识当前激活的是哪一项，name 值默认从 0 开始，默认激活第一项。可以使用 v-model 双向绑定数据。
<!--divider-->
### 禁用
禁用某一项。
<!--divider-->
### 图标
通过设置属性 icon，可以显示一个图标。
<!--divider-->
### 迷你型
设置属性 size 为 small 可以显示为迷你型，只在 type 为 line 时有效。
<!--divider-->
### 卡片样式
设置属性 type 为 card 可以显示卡片样式，常用于容器顶部。
<!--divider-->
### 可关闭
通过设置属性 closable 可以关闭某一项，仅在 type 为 card 时有效。 需结合 @on-tab-remove 事件手动关闭标签页。
<!--divider-->
### 自定义标签页
设置 label 为 Render 函数后，可以自定义标签页的内容。   学习 Render 函数的内容  
<!--divider-->
### 附加内容
设置 slot extra 可以在页签右边添加附加操作。
<!--divider-->
### 不使用动画
通过设置属性 animated 为 false 可以禁用动画。
<!--divider-->
### 其它样式
可以根据业务自定义 UI，需要一点额外的样式覆盖。
<!--divider-->

### API



### Tabs props
<!--table-->
|  属性 | 说明 | 类型 | 默认值 |
| :--------- | :--------- | :--------- | :--------- |
| value | 当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据 | String | 默认为第一项的 name |
| type | 页签的基本样式，可选值为 line 和 card | String | line |
| size | 尺寸，可选值为 default 和 small，仅在 type="line" 时有效 | String | default |
| closable | 是否可以关闭页签，仅在 type="card" 时有效 | Boolean | false |
| animated | 是否使用 CSS3 动画 | Boolean | true |
<!--table-->
<!--divider-->



### Tabs events
<!--table-->
|  事件名 | 说明 | 返回值 |
| :--------- | :--------- | :--------- |
| on-click | tab 被点击时触发 | name |
| on-tab-remove | tab 被关闭时触发 | name |
<!--table-->
<!--divider-->



### Tabs slot
<!--table-->
|  名称 | 说明 |
| :--------- | :--------- |
| extra | 附加内容 |
<!--table-->
<!--divider-->



### TabPane props
<!--table-->
|  属性 | 说明 | 类型 | 默认值 |
| :--------- | :--------- | :--------- | :--------- |
| name | 用于标识当前面板，对应 value，默认为其索引值 | String | Number | - |
| label | 选项卡头显示文字，支持 Render 函数。  学习 Render 函数的内容   | String | Function | 空 |
| icon | 选项卡图标 | String | - |
| disabled | 是否禁用该选项卡 | Boolean | false |
| closable | 是否可以关闭页签，仅在 type="card" 时有效 | Boolean | null |
<!--table-->
<!--divider-->
