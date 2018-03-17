## Affix 图钉

### 概述
使用图钉，可以将内容固定在屏幕上，并且不随页面的滚动而滚动。常用于侧边菜单等。
### 基础用法
简单使用，当元素不可见时，直接固定在最顶端。

```
<template>
    <Affix>
        <span class="demo-affix" style = "display: inline-block;color: #fff;padding: 10px 30px;text-align: center;background: rgba(0, 153, 229, .9);">Fixed at the top</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 偏移
当滚动到一定距离时再固定。

```
<template>
    <Affix :offset-top="50">
        <span class="demo-affix" style = "display: inline-block;color: #fff;padding: 10px 30px;text-align: center;background: rgba(0, 153, 229, .9);">Fixed at the top 50px from the top</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 固定在底部
在屏幕下方固定，可以通过缩小浏览器窗口高度来查看效果。 注意，offset-top和offset-bottom只可以设置一个，如果都设置，会使用offset-top。

```
<template>
    <Affix :offset-bottom="20">
        <span class="demo-affix" style = "display: inline-block;color: #fff;padding: 10px 30px;text-align: center;background: rgba(0, 153, 229, .9);">Fix at the bottom 20px</span>
    </Affix>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 固定状态改变时的回调
当固定状态发生改变时，会触发事件。

```
<template>
    <Affix :offset-top="100" @on-change="change">
        <span class="demo-affix" style = "display: inline-block;color: #fff;padding: 10px 30px;text-align: center;background: rgba(0, 153, 229, .9);">Fix the position at the top of 100px at the top</span>
    </Affix>
</template>
<script>
    export default {
        methods: {
            change (status) {
                this.$Message.info(`Status: ${status}`);
            }
        }
    }
</script>

```


<!--divider-->

### API



### Affix props
<!--table-->
| 属性            | 说明               | 类型     | 默认值  |
| :------------ | :--------------- | :----- | :--- |
| offset-top    | 距离窗口顶部达到指定偏移量后触发 | Number | 0    |
| offset-bottom | 距离窗口底部达到指定偏移量后触发 | Number | -    |
<!--table-->
<!--divider-->



### Affix events
<!--table-->
| 事件名       | 说明           | 返回值  |
| :-------- | :----------- | :--- |
| on-change | 在固定状态发生改变时触发 | true |
<!--table-->
<!--divider-->
