## Steps 步骤条

### 概述
拆分某项流程的步骤，引导用户按流程完成任务。
### 基础用法
基本用法，组件会根据current自动判断各步骤状态。
<!--divider-->
### 迷你版
设置属性size为small启用迷你版。
<!--divider-->
### 带图标的步骤条
通过设置Step的icon属性可以自定义图标。
<!--divider-->
### 切换步骤
点击下一步按钮可以切换当前进度状态。
<!--divider-->
### 垂直方向
设置属性direction为vertical在垂直方向展示。
<!--divider-->
### 步骤运行错误
设置Steps的属性status为error指定当前步骤状态。
<!--divider-->

### API



### Steps props
<!--table-->
|  属性 | 说明 | 类型 | 默认值 |
| :--------- | :--------- | :--------- | :--------- |
| current | 当前步骤，从 0 开始计数 | Number | 0 |
| status | 当前步骤的状态，可选值为wait、process、finish、error | String | process |
| size | 步骤条的尺寸，可选值为small或者不写 | String | - |
| direction | 步骤条的方向，可选值为horizontal（水平）或vertical（垂直） | String | horizontal |
<!--table-->
<!--divider-->



### Step props
<!--table-->
|  属性 | 说明 | 类型 | 默认值 |
| :--------- | :--------- | :--------- | :--------- |
| status | 步骤的状态，可选值为wait、process、finish、error，不设置时自动判断 | String | process |
| title | 标题 | String | 空 |
| content | 步骤的详细描述，可选 | String | - |
| icon | 步骤的图标，可选 | String | - |
<!--table-->
<!--divider-->
