## Timeline 时间轴

### 概述
对一系列信息进行时间排序时，垂直地展示。
### 基础用法
最简单定义一个时间轴的用法。

```
<style scoped>
    .time{
        font-size: 14px;
        font-weight: bold;
    }
    .content{
        padding-left: 5px;
    }
</style>
<template>
    <Timeline>
        <TimelineItem>
            <p class="time">1976年</p>
            <p class="content">Apple I 问世</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">1984年</p>
            <p class="content">发布 Macintosh</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2007年</p>
            <p class="content">发布 iPhone</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2010年</p>
            <p class="content">发布 iPad</p>
        </TimelineItem>
        <TimelineItem>
            <p class="time">2011年10月5日</p>
            <p class="content">史蒂夫·乔布斯去世</p>
        </TimelineItem>
    </Timeline>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 圆圈颜色
用各种颜色来标识不同状态，可以使用green、red、blue或自定义的颜色，默认是 blue 。

```
<template>
    <Timeline>
        <TimelineItem color="green">发布1.0版本</TimelineItem>
        <TimelineItem color="green">发布2.0版本</TimelineItem>
        <TimelineItem color="red">严重故障</TimelineItem>
        <TimelineItem color="blue">发布3.0版本</TimelineItem>
    </Timeline>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 最后一个
通过添加pending属性来标记最后一个为幽灵节点，标识还未完成。

```
<template>
    <Timeline pending>
        <TimelineItem>发布1.0版本</TimelineItem>
        <TimelineItem>发布2.0版本</TimelineItem>
        <TimelineItem>发布3.0版本</TimelineItem>
        <TimelineItem><a href="#">查看更多</a></TimelineItem>
    </Timeline>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 自定义时间轴点
接受一个 slot 来自定义轴点的内容，比如一个图标。

```
<template>
    <Timeline>
        <TimelineItem color="green">
            <Icon type="trophy" slot="dot"></Icon>
            <span>发布里程碑版本</span>
        </TimelineItem>
        <TimelineItem>发布1.0版本</TimelineItem>
        <TimelineItem>发布2.0版本</TimelineItem>
        <TimelineItem>发布3.0版本</TimelineItem>
    </Timeline>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### API



### Timeline props
<!--table-->
| 属性      | 说明              | 类型      | 默认值   |
| :------ | :-------------- | :------ | :---- |
| pending | 指定是否最后一个节点为幽灵节点 | Boolean | false |
<!--table-->
<!--divider-->



### TimelineItem props
<!--table-->
| 属性    | 说明                             | 类型     | 默认值  |
| :---- | :----------------------------- | :----- | :--- |
| color | 圆圈颜色，可选值为blue、red、green，或自定义色值 | String | blue |
<!--table-->
<!--divider-->



### TimelineItem slot
<!--table-->
| 名称   | 说明        |
| :--- | :-------- |
| dot  | 自定义时间轴点内容 |
| 无    | 基本内容      |
<!--table-->
<!--divider-->
