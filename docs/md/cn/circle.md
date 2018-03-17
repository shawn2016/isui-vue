## Circle 进度环

### 概述
图表类组件。一般有两种用途：

```
注意：没有使用 iview-loader 时，必须使用 i-circle 标签。
```

<!--divider-->

### 基础用法
圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。

```
<template>
    <i-circle :percent="80">
        <span class="demo-Circle-inner" style="font-size:24px">80%</span>
    </i-circle>
    <i-circle :percent="100" stroke-color="#5cb85c">
        <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
    </i-circle>
    <i-circle :percent="35" stroke-color="#ff5500">
        <span class="demo-Circle-inner">
            <Icon type="ios-close-empty" size="50" style="color:#ff5500"></Icon>
        </span>
    </i-circle>
</template>
<script>
    export default {
        
    }
</script>
```


<!--divider-->
### 配合外部组件使用
通过数据的联动和逻辑控制，实现交互效果。

```
<template>
    <i-circle :percent="percent" :stroke-color="color">
        <Icon v-if="percent == 100" type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
        <span v-else style="font-size:24px">{{ percent }}%</span>
    </i-circle>
    <ButtonGroup size="large">
        <Button icon="ios-plus-empty" @click="add"></Button>
        <Button icon="ios-minus-empty" @click="minus"></Button>
    </ButtonGroup>
</template>
<script>
    export default {
        data () {
            return {
                percent: 0
            }
        },
        computed: {
            color () {
                let color = '#2db7f5';
                if (this.percent == 100) {
                    color = '#5cb85c';
                }
                return color;
            }
        },
        methods: {
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            }
        }
    }
</script>


```


<!--divider-->
### 自定义更多样式
通过自定义slot和丰富的配置，可以组合出很多统计效果。

```
<style lang="less">
    .demo-Circle-custom{
        & h1{
            color: #3f414d;
            font-size: 28px;
            font-weight: normal;
        }
        & p{
            color: #657180;
            font-size: 14px;
            margin: 10px 0 15px;
        }
        & span{
            display: block;
            padding-top: 15px;
            color: #657180;
            font-size: 14px;
            &:before{
                content: '';
                display: block;
                width: 50px;
                height: 1px;
                margin: 0 auto;
                background: #e0e3e6;
                position: relative;
                top: -15px;
            };
        }
        & span i{
            font-style: normal;
            color: #3f414d;
        }
    }
</style>
<template>
    <i-circle
        :size="250"
        :trail-width="4"
        :stroke-width="5"
        :percent="75"
        stroke-linecap="square"
        stroke-color="#43a3fb">
        <div class="demo-Circle-custom">
            <h1>42,001,776</h1>
            <p>消费人群规模</p>
            <span>
                总占人数
                <i>75%</i>
            </span>
        </div>
    </i-circle>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->

### API



### Circle props
<!--table-->
| 属性             | 说明                              | 类型     | 默认值     |
| :------------- | :------------------------------ | :----- | :------ |
| percent        | 百分比                             | Number | 0       |
| size           | 图表的宽度和高度，单位 px                  | Number | 120     |
| stroke-linecap | 进度环顶端的形状，可选值为square（方）和round（圆） | String | round   |
| stroke-width   | 进度环的线宽，单位 px                    | Number | 6       |
| stroke-color   | 进度环的颜色                          | String | #2db7f5 |
| trail-width    | 进度环背景的线宽，单位 px                  | Number | 5       |
| trail-color    | 进度环背景的颜色                        | String | #eaeef2 |
<!--table-->
<!--divider-->



### Circle slot
<!--table-->
| 名称   | 说明                 |
| :--- | :----------------- |
| 无    | 自定义显示中间内容，内容默认垂直居中 |
<!--table-->
<!--divider-->
