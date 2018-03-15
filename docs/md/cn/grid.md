## Grid 栅格

### 基础用法

水平排列的布局。

`col`必须放在`row`里面。

```js
<template>
    <Row>
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
    </Row>
    <br>
    <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
    </Row>
    <br>
    <Row>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
```

 <!--divider-->

### 区块间隔

通过给 `row` 添加 `gutter` 属性，可以给下属的 `col` 添加间距，推荐使用 `(16+8n)px`作为栅格间隔。

```
<template>
    <Row :gutter="16">
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
        <Col span="6">
            <div>col-6</div>
        </Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
```

 <!--divider-->

### 栅格顺序(Flex)

通过 Flex 布局的`order`来改变栅格的顺序。

```
<template>
    <Row type="flex">
        <Col span="6" order="4">1 | order-4</Col>
        <Col span="6" order="3">2 | order-3</Col>
        <Col span="6" order="2">3 | order-2</Col>
        <Col span="6" order="1">4 | order-1</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
```

 <!--divider-->

### 栅格排序

通过设置`push`和`pull`来改变栅格的顺序。

```
<template>
    <Row>
        <Col span="18" push="6">col-18 | push-6</Col>
        <Col span="6" pull="18">col-6 | pull-18</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
```

 <!--divider-->

### 左右偏移

通过设置`offset`属性，将列进行左右偏移，偏移栅格数为offset的值。

```
<template>
    <Row>
        <Col span="8">col-8</Col>
        <Col span="8" offset="8">col-8 | offset-8</Col>
    </Row>
    <br>
    <Row>
        <Col span="6" offset="8">col-6 | offset-8</Col>
        <Col span="6" offset="4">col-6 | offset-4</Col>
    </Row>
    <br>
    <Row>
        <Col span="12" offset="8">col-12 | offset-8</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
```

 <!--divider-->

### Flex布局

通过给`row`设置参数`justify`为不同的值，来定义子元素的排布方式。在`flex`模式下有效。

```
<template>
    <p>子元素向左排列</p>
    <Row type="flex" justify="start" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <p>子元素向右排列</p>
    <Row type="flex" justify="end" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <p>子元素居中排列</p>
    <Row type="flex" justify="center" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <p>子元素等宽排列</p>
    <Row type="flex" justify="space-between" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
    <p>子元素分散排列</p>
    <Row type="flex" justify="space-around" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
```

 <!--divider-->

### Flex对齐

通过给`row`设置参数`align`为不同的值，来定义子元素在垂直方向上的排布方式。在`flex`模式下有效。

```
<template>
    <p>顶部对齐</p>
    <Row type="flex" justify="center" align="top" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
    </Row>
    <p>底部对齐</p>
    <Row type="flex" justify="center" align="bottom" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
    </Row>
    <p>居中对齐</p>
    <Row type="flex" justify="center" align="middle" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>

```

 <!--divider-->

### 响应式布局

参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设四个响应尺寸：xs sm md lg，详见 API。

调整浏览器尺寸来查看效果。

```
<template>
    <Row>
        <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
        <Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>
        <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
```

 <!--divider-->

### 其它属性的响应式

`span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg`属性中来使用。

其中 `:xs="6"` 相当于 `:xs="{ span: 6 }"`。

```
<template>
    <Row>
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
        <Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
        <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</Col>
    </Row>
</template>
<script>
    export default {
        
    }
</script>
```

 <!--divider-->

### 使用

### Row

<!--table-->

| 参数         | 说明                                       | 类型     | 默认值  |
| ---------- | ---------------------------------------- | ------ | ---- |
| gutter     | 栅格间距，单位 px，左右平分                          | Number | 0    |
| type       | 布局模式，可选值为`flex`或不选，在现代浏览器下有效             | String | -    |
| align      | flex 布局下的垂直对齐方式，可选值为`top`、`middle`、`bottom` | String | -    |
| justify    | flex 布局下的水平排列方式，可选值为`start`、`end`、`center`、`space-around`、`space-between` | String | -    |
| class-name | 自定义的class名称                              | String | -    |

<!--table-->
<!--divider-->

### Col

<!--table-->

| 参数         | 说明                                       | 类型               | 默认值  |
| ---------- | ---------------------------------------- | ---------------- | ---- |
| span       | 栅格的占位格数，可选值为0~24的整数，为 0 时，相当于`display:none` | Number \| String | -    |
| order      | 栅格的顺序，在`flex`布局模式下有效                     | Number \| String | -    |
| offset     | 栅格左侧的间隔格数，间隔内不可以有栅格                      | Number \| String | -    |
| push       | 栅格向右移动格数                                 | Number \| String | -    |
| pull       | 栅格向左移动格数                                 | Number \| String | -    |
| class-name | 自定义的class名称                              | String           | -    |
| xs         | `<768px` 响应式栅格，可为栅格数或一个包含其他属性的对象         | Number \| Object | -    |
| sm         | `≥768px` 响应式栅格，可为栅格数或一个包含其他属性的对象         | Number \| Object | -    |
| md         | `≥992px` 响应式栅格，可为栅格数或一个包含其他属性的对象         | Number \| Object | -    |
| lg         | `≥1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象        | Number \| Object | -    |

<!--table-->
<!--divider-->