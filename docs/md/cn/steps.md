## Steps 步骤条

### 概述
拆分某项流程的步骤，引导用户按流程完成任务。
### 基础用法
基本用法，组件会根据current自动判断各步骤状态。

```
<template>
    <Steps :current="1">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 迷你版
设置属性size为small启用迷你版。

```
<template>
    <Steps :current="2" size="small">
        <Step title="已完成"></Step>
        <Step title="进行中"></Step>
        <Step title="待进行"></Step>
        <Step title="待进行"></Step>
    </Steps>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 带图标的步骤条
通过设置Step的icon属性可以自定义图标。

```
<template>
    <Steps :current="1">
        <Step title="注册" icon="person-add"></Step>
        <Step title="上传头像" icon="camera"></Step>
        <Step title="验证邮箱" icon="email"></Step>
    </Steps>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 切换步骤
点击下一步按钮可以切换当前进度状态。

```
<template>
    <p>当前正在进行第 {{ current + 1 }} 步</p>
    <Steps :current="current">
        <Step title="步骤1"></Step>
        <Step title="步骤2"></Step>
        <Step title="步骤3"></Step>
        <Step title="步骤4"></Step>
    </Steps>
    <Button type="primary" @click="next">Next step</Button>
</template>
<script>
    export default {
        data () {
            return {
                current: 0
            }
        },
        methods: {
            next () {
                if (this.current == 3) {
                    this.current = 0;
                } else {
                    this.current += 1;
                }
            }
        }
    }
</script>

```


<!--divider-->
### 垂直方向
设置属性direction为vertical在垂直方向展示。

```
<template>
    <Steps :current="2" direction="vertical">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 步骤运行错误
设置Steps的属性status为error指定当前步骤状态。

```
<template>
    <Steps :current="1" status="error">
        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
    </Steps>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->

### API



### Steps props
<!--table-->
| 属性        | 说明                                     | 类型     | 默认值        |
| :-------- | :------------------------------------- | :----- | :--------- |
| current   | 当前步骤，从 0 开始计数                          | Number | 0          |
| status    | 当前步骤的状态，可选值为wait、process、finish、error  | String | process    |
| size      | 步骤条的尺寸，可选值为small或者不写                   | String | -          |
| direction | 步骤条的方向，可选值为horizontal（水平）或vertical（垂直） | String | horizontal |
<!--table-->
<!--divider-->



### Step props
<!--table-->
| 属性      | 说明                                       | 类型     | 默认值     |
| :------ | :--------------------------------------- | :----- | :------ |
| status  | 步骤的状态，可选值为wait、process、finish、error，不设置时自动判断 | String | process |
| title   | 标题                                       | String | 空       |
| content | 步骤的详细描述，可选                               | String | -       |
| icon    | 步骤的图标，可选                                 | String | -       |
<!--table-->
<!--divider-->
