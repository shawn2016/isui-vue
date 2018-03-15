## Color 色彩

### 概述

 `isui-vue`推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。

### 主色

 `isui-vue `使用较为安全的蓝色作为主色调，其中 Light Primary 常用于 hover，Dark Primary 常用于 active。

```js
<template>
    <Row style="margin-left: -8px; margin-right: -8px;">
        <Col span="8" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(45, 140, 240);">
            <div style="color: #fff;font-size: 16px;">Primary</div>
            <div style="color: #fff;opacity: .7;">#2d8cf0</div>
        </Card>
        </Col>
        <Col span="8" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(92, 173, 255);">
            <div style="color: #fff;font-size: 16px;">Light Primary</div>
            <div style="color: #fff;opacity: .7;">#5cadff</div>
        </Card>
        </Col>
        <Col span="8" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(43, 133, 228);">
            <div style="color: #fff;font-size: 16px;">Dark Primary</div>
            <div style="color: #fff;opacity: .7;">#2b85e4</div>
        </Card>
        </Col>
    </Row>
</template>
<script>
export default {

}
</script>
```

 <!--divider-->

### 辅助色

辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。

```js
<template>
    <Row style="margin-left: -8px; margin-right: -8px;">
        <Col span="6" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(45, 140, 240);">
            <div style="color: #fff;font-size: 16px;">Info</div>
            <div style="color: #fff;opacity: .7;">#2d8cf0</div>
        </Card>
        </Col>
        <Col span="6" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(25, 190, 107);">
            <div style="color: #fff;font-size: 16px;">Success</div>
            <div style="color: #fff;opacity: .7;">#19be6b</div>
        </Card>
        </Col>
        <Col span="6" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(255, 153, 0);">
            <div style="color: #fff;font-size: 16px;">Warning</div>
            <div style="color: #fff;opacity: .7;">#ff9900</div>
        </Card>
        </Col>
        <Col span="6" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(237, 63, 20);">
            <div style="color: #fff;font-size: 16px;">Error</div>
            <div style="color: #fff;opacity: .7;">#ed3f14</div>
        </Card>
        </Col>
    </Row>
</template>
<script>
export default {

}
</script>
```

 <!--divider-->

### 中性色

中性色常用于文本、背景、边框、阴影等，可以体现出页面的层次结构。

```js
<template>
    <Row style="margin-left: -8px; margin-right: -8px;">
        <Col span="6" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(28, 36, 56);">
            <div style="color: #fff;font-size: 16px;">标题 Title</div>
            <div style="color: #fff;opacity: .7;">#1c2438</div>
        </Card>
        </Col>
        <Col span="6" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(73, 80, 96);">
            <div style="color: #fff;font-size: 16px;">正文 Content</div>
            <div style="color: #fff;opacity: .7;">#495060</div>
        </Card>
        </Col>
        <Col span="6" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(128, 132, 143);">
            <div style="color: #fff;font-size: 16px;">辅助/图标 Sub Color</div>
            <div style="color: #fff;opacity: .7;">#80848f</div>
        </Card>
        </Col>
        <Col span="6" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(187, 190, 196);">
            <div style="color: #fff;font-size: 16px;">失效 Disabled</div>
            <div style="color: #fff;opacity: .7;">#bbbec4</div>
        </Card>
        </Col>
    </Row>
    <br>
    <Row style="margin-left: -8px; margin-right: -8px;">
        <Col span="6" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(221, 222, 225);">
            <div style="color: ##657180;font-size: 16px;">边框 Border</div>
            <div style="color: ##657180;opacity: .7;">#dddee1</div>
        </Card>
        </Col>
        <Col span="6" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(233, 234, 236);">
            <div style="color: ##657180;font-size: 16px;">分割线 Divider</div>
            <div style="color: ##657180;opacity: .7;">#e9eaec</div>
        </Card>
        </Col>
        <Col span="6" style="padding-left: 8px; padding-right: 8px;">
        <Card class="ivu-card" style="background: rgb(248, 248, 249);">
            <div style="color: ##657180;font-size: 16px;">背景 Background</div>
            <div style="color: ##657180;opacity: .7;">#f8f8f9</div>
        </Card>
        </Col>
    </Row>
</template>
<script>
export default {

}
</script>
```

 <!--divider-->