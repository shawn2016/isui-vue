## Menu 导航菜单

### 概述
为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。
### 顶部导航
水平的顶部导航菜单。 通过设置属性 theme 为 light、dark、primary 可以选择主题。 通过事件 on-select 可以得到点击菜单的 name 值，从而控制页面路由或自定义操作。
<!--divider-->
### 侧栏导航
垂直导航菜单，可以内嵌子菜单。 设置 active-name 可以选中指定的菜单，设置 open-names 可以展开指定的子菜单。 设置属性 accordion 可以开启手风琴模式，每次只能展开一个子菜单。 通过设置属性 theme 为 light、dark 可以选择主题，侧栏菜单不支持 primary 主题。
<!--divider-->
### 内嵌菜单
垂直菜单，子菜单内嵌在菜单区域。
<!--divider-->
### 分组
使用 MenuGroup 组件进行分组。
<!--divider-->

### API



### Menu props
<!--table-->
|  属性 | 说明 | 类型 | 默认值 |
| :--------- | :--------- | :--------- | :--------- |
| mode | 菜单类型，可选值为 horizontal（水平） 和 vertical（垂直） | String | vertical |
| theme | 主题，可选值为 light、dark、primary，其中 primary 只适用于 mode="horizontal" | String | light |
| active-name | 激活菜单的 name 值 | String | Number | - |
| open-names | 展开的 Submenu 的 name 集合 | Array | [] |
| accordion | 是否开启手风琴模式，开启后每次至多展开一个子菜单 | Boolean | false |
| width | 导航菜单的宽度，只在 mode="vertical" 时有效，如果使用 Col 等布局，建议设置为 auto | String | 240px |
<!--table-->
<!--divider-->



### Menu events
<!--table-->
|  事件名 | 说明 | 返回值 |
| :--------- | :--------- | :--------- |
| on-select | 选择菜单（MenuItem）时触发 | name |
| on-open-change | 当 展开/收起 子菜单时触发 | 当前展开的 Submenu 的 name 值数组 |
<!--table-->
<!--divider-->



### Menu methods
<!--table-->
|  方法名 | 说明 | 参数 |
| :--------- | :--------- | :--------- |
| updateOpened | 手动更新展开的子目录，注意要在 $nextTick 里调用 | 无 |
| updateActiveName | 手动更新当前选择项，注意要在 $nextTick 里调用 | 无 |
<!--table-->
<!--divider-->



### MenuItem props
<!--table-->
|  属性 | 说明 | 类型 | 默认值 |
| :--------- | :--------- | :--------- | :--------- |
| name | 菜单项的唯一标识，必填 | String | Number | - |
<!--table-->
<!--divider-->



### Submenu props
<!--table-->
|  属性 | 说明 | 类型 | 默认值 |
| :--------- | :--------- | :--------- | :--------- |
| name | 子菜单的唯一标识，必填 | String | Number | - |
<!--table-->
<!--divider-->



### Submenu slot
<!--table-->
|  名称 | 说明 |
| :--------- | :--------- |
| 无 | 菜单项 |
| title | 子菜单标题 |
<!--table-->
<!--divider-->



### MenuGroup props
<!--table-->
|  属性 | 说明 | 类型 | 默认值 |
| :--------- | :--------- | :--------- | :--------- |
| title | 分组标题 | String | 空 |
<!--table-->
<!--divider-->
