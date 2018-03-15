Button 按钮
---
基础组件，触发业务逻辑时使用。

### 按钮类型

按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。

通过设置`type`为`primary`、`ghost`、`dashed`、`text`、`info`、`success`、`warning`、`error`创建不同样式的按钮，不设置为默认样式。
```js
<template>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
</template>
<script>
    export default {
        
    }
</script>
```
<!--divider-->

### 图标按钮及按钮形状

通过设置`icon`属性在`Button`内嵌入一个`Icon`，或者直接在`Button`内使用`Icon`组件。

使用`Button`的`icon`属性，图标位置将在最左边，如果需要自定义位置，需使用`Icon`组件。

通过设置`shape`属性为`circle`，可将按钮置为圆的形状。

```js
<template>
    <Button type="primary" shape="circle" icon="ios-search"></Button>
    <Button type="primary" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle" icon="ios-search">Search</Button>
    <Button type="primary" shape="circle">Circle</Button>
    <br><br>
    <Button type="ghost" shape="circle" icon="ios-search"></Button>
    <Button type="ghost" icon="ios-search">Search</Button>
    <Button type="ghost" shape="circle" icon="ios-search">Search</Button>
    <Button type="ghost" shape="circle">Circle</Button>
</template>
<script>
    export default {
        
    }
</script>
```
<!--divider-->

### 按钮尺寸

按钮有三种尺寸：大、默认（中）、小

通过设置`size`为`large`和`small`将按钮设置为大和小尺寸，不设置为默认（中）尺寸。

```js
<template>
    <Button type="primary" size="large">Large</Button>
    <Button type="primary">Default</Button>
    <Button type="primary" size="small">Small</Button>
    <br><br>
    <Button type="primary" shape="circle" size="large">Large</Button>
    <Button type="primary" shape="circle">Default</Button>
    <Button type="primary" shape="circle" size="small">Small</Button>
</template>
<script>
    export default {
        
    }
</script>
```
<!--divider-->

### 长按钮

通过设置属性 `long` 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。

使用者也可以直接通过给组件添加 `style` 来设置更细节的样式，比如定宽。

```js
<template>
    <Button type="success" long>SUBMIT</Button>
    <br><br>
    <Button type="error" long>DELETE</Button>
</template>
<script>
    export default {
        
    }
</script>
```
<!--divider-->

### 不可用状态 

通过添加`disabled`属性可将按钮设置为不可用状态。

```js
<template>
    <Button>Default</Button>
    <Button disabled>Default(Disabled)</Button>
    <br>
    <br>
    <Button type="primary">Primary</Button>
    <Button type="primary" disabled>Primary(Disabled)</Button>
    <br>
    <br>
    <Button type="ghost">Ghost</Button>
    <Button type="ghost" disabled>Ghost(Disabled)</Button>
    <br>
    <br>
    <Button type="dashed">Dashed</Button>
    <Button type="dashed" disabled>Dashed(Disabled)</Button>
    <br>
    <br>
    <Button type="text">Text</Button>
    <Button type="text" disabled>Text(Disabled)</Button>
</template>
<script>
    export default {
        
    }
</script>
```
<!--divider-->

### 加载中状态

通过添加`loading`属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。

```js
<template>
    <Button type="primary" loading>Loading...</Button>
    <Button type="primary" :loading="loading" @click="toLoading">
        <span v-if="!loading">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
    <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">
        <span v-if="!loading2">Click me!</span>
        <span v-else>Loading...</span>
    </Button>
</template>
<script>
    export default {
        data () {
            return {
                loading: false,
                loading2: false
            }
        },
        methods: {
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            }
        }
    }
</script>
```
<!--divider-->

### 按钮组合

将多个`Button`放入`ButtonGroup`内，可实现按钮组合的效果。

通过设置`ButtonGroup`的属性`size`为`large`和`small`，可将按钮组尺寸设置为大和小，不设置`size`，则为默认（中）尺寸。

通过设置`ButtonGroup`的属性`shape`为`circle`，可将按钮组形状设置为圆角。

```js
<template>
    <h4>Basic</h4>
    <br><br>
    <ButtonGroup>
        <Button>Cancel</Button>
        <Button type="primary">Confirm</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button disabled>Yesterday</Button>
        <Button disabled>Today</Button>
        <Button disabled>Tomorrow</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button type="ghost">M</Button>
        <Button type="dashed">R</Button>
    </ButtonGroup>
    <br><br>
    <h4>Icons</h4>
    <br><br>
    <ButtonGroup>
        <Button type="primary">
            <Icon type="chevron-left"></Icon>
            Backward
        </Button>
        <Button type="primary">
            Forward
            <Icon type="chevron-right"></Icon>
        </Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="primary" icon="ios-skipbackward"></Button>
        <Button type="primary" icon="ios-skipforward"></Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="ghost" icon="ios-color-wand-outline"></Button>
        <Button type="ghost" icon="ios-sunny-outline"></Button>
        <Button type="ghost" icon="ios-crop"></Button>
        <Button type="ghost" icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br><br>
    <h4>Circle</h4>
    <br><br>
    <ButtonGroup shape="circle">
        <Button type="primary">
            <Icon type="chevron-left"></Icon>
            Backward
        </Button>
        <Button type="primary">
            Forward
            <Icon type="chevron-right"></Icon>
        </Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button type="primary" icon="ios-skipbackward"></Button>
        <Button type="primary" icon="ios-skipforward"></Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button type="ghost" icon="ios-color-wand-outline"></Button>
        <Button type="ghost" icon="ios-sunny-outline"></Button>
        <Button type="ghost" icon="ios-crop"></Button>
        <Button type="ghost" icon="ios-color-filter-outline"></Button>
    </ButtonGroup>
    <br><br>
    <h4>Size</h4>
    <br><br>
    <ButtonGroup size="large">
        <Button type="ghost">Large</Button>
        <Button type="ghost">Large</Button>
    </ButtonGroup>
    <ButtonGroup>
        <Button type="ghost">Default</Button>
        <Button type="ghost">Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
        <Button type="ghost">Small</Button>
        <Button type="ghost">Small</Button>
    </ButtonGroup>
    <br><br>
    <ButtonGroup size="large" shape="circle">
        <Button type="ghost">Large</Button>
        <Button type="ghost">Large</Button>
    </ButtonGroup>
    <ButtonGroup shape="circle">
        <Button type="ghost">Default</Button>
        <Button type="ghost">Default</Button>
    </ButtonGroup>
    <ButtonGroup size="small" shape="circle">
        <Button type="ghost">Small</Button>
        <Button type="ghost">Small</Button>
    </ButtonGroup>
</template>
<script>
    export default {
        
    }
</script>
```
<!--divider-->

### 按钮组纵向排列

通过设置`ButtonGroup`的属性`vertical`，可以使按钮组纵向排列。

```js
<template>
    <ButtonGroup vertical>
        <Button type="ghost" icon="social-facebook"></Button>
        <Button type="ghost" icon="social-twitter"></Button>
        <Button type="ghost" icon="social-googleplus"></Button>
        <Button type="ghost" icon="social-tumblr"></Button>
    </ButtonGroup>
</template>
<script>
    export default {
        
    }
</script>
```
<!--divider-->

### 安装和使用


```js
npm install isui-vue --save
```

<!--divider-->


```js
import { Button } from 'isui-vue';
// or
import Button from 'isui-vue/lib/button';
const ButtonGroup = Button.Group;
```

<!--divider-->

### Button
<!--table-->
| 参数        | 说明                                       | 类型      | 默认值    |
| :-------- | :--------------------------------------- | :------ | :----- |
| type      | 按钮类型，可选值为`primary`、`ghost`、`dashed`、`text`、`info`、`success`、`warning`、`error`或者不设置 | String  | -      |
| size      | 按钮大小，可选值为`large`、`small`、`default`或者不设置  | String  | -      |
| shape     | 按钮形状，可选值为`circle`或者不设置                   | String  | -      |
| long      | 开启后，按钮的长度为 100%                          | Boolean | false  |
| html-type | 设置`button`原生的`type`，可选值为`button`、`submit`、`reset` | String  | button |
| disabled  | 设置按钮为禁用状态                                | Boolean | false  |
| loading   | 设置按钮为加载中状态                               | Boolean | false  |
| icon      | 设置按钮的图标类型                                | String  | -      |
<!--table-->
<!--divider-->
### ButtonGroup
<!--table-->
| 参数       | 说明                                       | 类型      | 默认值   |
| :------- | :--------------------------------------- | :------ | :---- |
| size     | 按钮组合大小，可选值为`large`、`small`、`default`或者不设置 | String  | -     |
| shape    | 按钮组合形状，可选值为`circle`或者不设置                 | String  | -     |
| vertical | 是否纵向排列按钮组                                | Boolean | false |
<!--table-->
<!--divider-->