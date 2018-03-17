## Spin 加载中

### 概述
当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验。
### 基础用法
最简单使用 Spin 的方法。

```
<template>
    <Spin ></Spin>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 各种尺寸
通过设置size属性为large和small将 Spin 设置为大和小尺寸，不设置为默认（中）尺寸。

```
<template>
    <Spin size="small"></Spin>
    <Spin></Spin>
    <Spin size="large"></Spin>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 居中固定
在容器内部垂直居中固定，需要父级有relative或absolute。

```
<style>
    .demo-spin-container{
    	display: inline-block;
        width: 200px;
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<template>
    <div class="demo-spin-container">
        <Spin fix></Spin>
    </div>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 自定义内容
自定义 Spin 的内容，可以是简单的文字，也可以是很复杂的动画。

```
<style>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
<template>
    <Row>
        <Col class="demo-spin-col" span="8">
            <Spin fix>加载中...</Spin>
        </Col>
        <Col class="demo-spin-col" span="8">
            <Spin fix>
                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
                <div>Loading</div>
            </Spin>
        </Col>
        <Col class="demo-spin-col" span="8">
            <Spin fix>
                <div class="loader">
                    <svg class="circular" viewBox="25 25 50 50">
                        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
                    </svg>
                </div>
            </Spin>
        </Col>
    </Row>
</template>
<script>
    // 部分样式代码冗长，未作展示
    export default {
        
    }
</script>

```


<!--divider-->
### 状态切换
控制 Spin 组件的显示和消失。

```
<template>
    <div class="demo-spin-article">
        <h3>登金陵凤凰台</h3>
        <address>李白</address>
        <article>
            <p>凤凰台上凤凰游，凤去台空江自流。</p>
            <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
            <p>三山半落青天外，二水中分白鹭洲。</p>
            <p>总为浮云能蔽日，长安不见使人愁。</p>
        </article>
        <Spin size="large" fix v-if="spinShow"></Spin>
    </div>
    <br>
    切换显示状态：<i-switch @on-change="spinShow = !spinShow"></i-switch>
</template>
<script>
    export default {
        data () {
            return {
                spinShow: false
            }
        }
    }
</script>

```


<!--divider-->
### 整页加载
使用内置的 $Spin 方法可以全局加载。 可以使用 Render 函数自定义显示内容。  学习 Render 函数的内容 

```
<template>
    <div>
        <Button type="primary" @click="handleSpinShow">整页显示，3秒后关闭</Button>
        <Button type="primary" @click="handleSpinCustom">自定义显示内容</Button>
    </div>
</template>
<script>
    export default {
        methods: {
            handleSpinShow () {
                this.$Spin.show();
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            },
            handleSpinCustom () {
                this.$Spin.show({
                    render: (h) => {
                        return h('div', [
                            h('Icon', {
                                'class': 'demo-spin-icon-load',
                                props: {
                                    type: 'load-c',
                                    size: 18
                                }
                            }),
                            h('div', 'Loading')
                        ])
                    }
                });
                setTimeout(() => {
                    this.$Spin.hide();
                }, 3000);
            }
        }
    }
</script>
<style>
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
</style>

```

 
<!--divider-->

### API



### Spin props
<!--table-->
| 属性   | 说明                          | 类型      | 默认值   |
| :--- | :-------------------------- | :------ | :---- |
| size | Spin尺寸，可选值为large和small或者不设置 | String  | -     |
| fix  | 是否固定，需要父级有relative或absolute | Boolean | false |
<!--table-->
<!--divider-->



### Spin slot
<!--table-->
| 名称   | 说明                            |
| :--- | :---------------------------- |
| 无    | 自定义 Spin 的内容，设置slot后，默认的样式不生效 |
<!--table-->
<!--divider-->
