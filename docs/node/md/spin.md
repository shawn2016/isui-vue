## Spin 加载中

### 概述
当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验。
### 基础用法
最简单使用 Spin 的方法。
<!--divider-->
### 各种尺寸
通过设置size属性为large和small将 Spin 设置为大和小尺寸，不设置为默认（中）尺寸。
<!--divider-->
### 居中固定
在容器内部垂直居中固定，需要父级有relative或absolute。
<!--divider-->
### 自定义内容
自定义 Spin 的内容，可以是简单的文字，也可以是很复杂的动画。
<!--divider-->
### 状态切换
控制 Spin 组件的显示和消失。
<!--divider-->
### 整页加载
使用内置的 $Spin 方法可以全局加载。 可以使用 Render 函数自定义显示内容。  学习 Render 函数的内容  
<!--divider-->

### API



### Spin props
<!--table-->
|  属性 | 说明 | 类型 | 默认值 |
| :--------- | :--------- | :--------- | :--------- |
| size | Spin尺寸，可选值为large和small或者不设置 | String | - |
| fix | 是否固定，需要父级有relative或absolute | Boolean | false |
<!--table-->
<!--divider-->



### Spin slot
<!--table-->
|  名称 | 说明 |
| :--------- | :--------- |
| 无 | 自定义 Spin 的内容，设置slot后，默认的样式不生效 |
<!--table-->
<!--divider-->
