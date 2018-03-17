## Circle 进度环42,001,776

### 概述
图表类组件。一般有两种用途：
### 基础用法
圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。
<!--divider-->
### 配合外部组件使用
通过数据的联动和逻辑控制，实现交互效果。
<!--divider-->
### 自定义更多样式
通过自定义slot和丰富的配置，可以组合出很多统计效果。
<!--divider-->

### API



### Circle props
<!--table-->
|  属性 | 说明 | 类型 | 默认值 |
| :--------- | :--------- | :--------- | :--------- |
| percent | 百分比 | Number | 0 |
| size | 图表的宽度和高度，单位 px | Number | 120 |
| stroke-linecap | 进度环顶端的形状，可选值为square（方）和round（圆） | String | round |
| stroke-width | 进度环的线宽，单位 px | Number | 6 |
| stroke-color | 进度环的颜色 | String | #2db7f5 |
| trail-width | 进度环背景的线宽，单位 px | Number | 5 |
| trail-color | 进度环背景的颜色 | String | #eaeef2 |
<!--table-->
<!--divider-->



### Circle slot
<!--table-->
|  名称 | 说明 |
| :--------- | :--------- |
| 无 | 自定义显示中间内容，内容默认垂直居中 |
<!--table-->
<!--divider-->
