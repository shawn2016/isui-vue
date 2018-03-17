## Scroll 无限滚动

### 概述
常用于滚动至底部时，触发加载更多数据。
### 底部触发
当滚动至底部时，触发加载更多。 需返回 Promise。
<!--divider-->
### 顶部触发
当滚动至顶部时，触发加载更多。 需返回 Promise。
<!--divider-->
### 边缘触发
当滚动至底部或顶部时，触发加载更多。 需返回 Promise。
<!--divider-->

### API



### Scroll props
<!--table-->
|  属性 | 说明 | 类型 | 默认值 |
| :--------- | :--------- | :--------- | :--------- |
| height | 滚动区域的高度，单位像素 | String | Number | 300 |
| loading-text | 加载中的文案 | String | 加载中 |
| on-reach-top | 滚动至顶部时触发，需返回 Promise | Function | - |
| on-reach-bottom | 滚动至底部时触发，需返回 Promise | Function | - |
| on-reach-edge | 滚动至顶部或底部时触发，需返回 Promise | Function | - |
| distance-to-edge | 从边缘到触发回调的距离。如果是负的，回调将在到达边缘之前触发。值最好在 24 以下。 | Number | Array | [20, 20] |
<!--table-->
<!--divider-->
