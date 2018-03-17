## Page 分页

### 概述
当数据量较多时，使用分页可以快速进行数据切换。
### 基本
基本的分页，页数过多时会自动折叠。
<!--divider-->
### 每页数量
可以切换每页显示的数量。
<!--divider-->
### 电梯
快速跳转到某一页。
<!--divider-->
### 总数
显示总共多少条数据，接受 slot 来自定义内容，默认显示共{{ total }}条
<!--divider-->
### 迷你型
设置size为small使用迷你型，迷你型拥有普通的所有功能。
<!--divider-->
### 简洁
设置simple属性即可使用简洁版的分页，通过输入页码回车切换，或使用鼠标点击切换页码，或使用键盘的上下键来切换。简洁分页不能使用总数、电梯和切换数量。
<!--divider-->

### API



### Page props
<!--table-->
|  属性 | 说明 | 类型 | 默认值 |
| :--------- | :--------- | :--------- | :--------- |
| current | 当前页码，支持 .sync 修饰符 | Number | 1 |
| total | 数据总数 | Number | 0 |
| page-size | 每页条数 | Number | 10 |
| page-size-opts | 每页条数切换的配置 | Array | [10, 20, 30, 40] |
| placement | 条数切换弹窗的展开方向，可选值为 bottom 和 top | String | bottom |
| size | 可选值为small（迷你版）或不填（默认） | String | - |
| simple | 简洁版 | Boolean | false |
| show-total | 显示总数 | Boolean | false |
| show-elevator | 显示电梯，可以快速切换到某一页 | Boolean | false |
| show-sizer | 显示分页，用来改变page-size | Boolean | false |
| class-name | 自定义 class 名称 | String | - |
| styles | 自定义 style 样式 | Object | - |
| transfer | 是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果 | Boolean | false |
<!--table-->
<!--divider-->



### Page events
<!--table-->
|  事件名 | 说明 | 返回值 |
| :--------- | :--------- | :--------- |
| on-change | 页码改变的回调，返回改变后的页码 | 页码 |
| on-page-size-change | 切换每页条数时的回调，返回切换后的每页条数 | page-size |
<!--table-->
<!--divider-->



### Page slot
<!--table-->
|  名称 | 说明 |
| :--------- | :--------- |
| 无 | 自定义显示总数的内容 |
<!--table-->
<!--divider-->
