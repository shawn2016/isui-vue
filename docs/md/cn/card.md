## Card 卡片

### 概述
基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。
### 基本用法
自定义标题、额外操作和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。

```
<template>
    <Card style="width:350px">
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            Classic film
        </p>
        <a href="#" slot="extra" @click.prevent="changeLimit">
            <Icon type="ios-loop-strong"></Icon>
            Change
        </a>
        <ul>
            <li v-for="item in randomMovieList">
                <a :href="item.url" target="_blank">{{ item.name }}</a>
                <span>
                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>
                    {{ item.rate }}
                </span>
            </li>
        </ul>
    </Card>
</template>
<script>
    export default {
        data () {
            return {
                movieList: [
                    {
                        name: 'The Shawshank Redemption',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: 'Leon:The Professional',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: 'Farewell to My Concubine',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: 'Forrest Gump',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: 'Life Is Beautiful',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: 'Spirited Away',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    },
                    {
                        name: 'Schindler's List',
                        url: 'https://movie.douban.com/subject/1295124/',
                        rate: 9.4
                    },
                    {
                        name: 'The Legend of 1900',
                        url: 'https://movie.douban.com/subject/1292001/',
                        rate: 9.2
                    },
                    {
                        name: 'WALL·E',
                        url: 'https://movie.douban.com/subject/2131459/',
                        rate: 9.3
                    },
                    {
                        name: 'Inception',
                        url: 'https://movie.douban.com/subject/3541415/',
                        rate: 9.2
                    }
                ],
                randomMovieList: []
            }
        },
        methods: {
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            }
        },
        mounted () {
            this.changeLimit();
        }
    }
</script>

```

<!--divider-->

### 无边框
通过设置属性bordered为 false ，可以不添加边框，建议在灰色背景下使用。

```
<template>
    <div style="background:#eee;padding: 20px">
        <Card :bordered="false">
            <p slot="title">No border title</p>
            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
        </Card>
    </div>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### 禁用悬停阴影
通过设置属性dis-hover来禁用鼠标悬停显示阴影的效果。

```
<template>
    <Row>
        <Col span="11">
            <Card>
                <p slot="title">The standard card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card dis-hover>
                <p slot="title">Disable card with hover shadows</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
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

### 卡片阴影
通过设置属性shadow来显示卡片阴影，使用该属性后，bordered和dis-hover将无效，建议在灰色背景下使用。

```
<template>
    <Row style="background:#eee;padding:20px">
        <Col span="11">
            <Card :bordered="false">
                <p slot="title">Borderless card</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card shadow>
                <p slot="title">Use a card with a shadow effect</p>
                <p>Content of card</p>
                <p>Content of card</p>
                <p>Content of card</p>
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

### 简洁卡片
只包含内容区域，没有标题。

```
<template>
    <Card style="width:320px">
        <div style="text-align:center">
            <img src="http://127.0.0.1:8085/76ecb6e76d2c438065f90cd7f8fa7371.png">
            <h3>A high quality UI Toolkit based on Vue.js</h3>
        </div>
    </Card>
</template>
<script>
    export default {
        
    }
</script>

```

<!--divider-->

### API



### Card props
<!--table-->
| 属性        | 说明                | 类型      | 默认值   |
| :-------- | :---------------- | :------ | :---- |
| bordered  | 是否显示边框，建议在灰色背景下使用 | Boolean | true  |
| dis-hover | 禁用鼠标悬停显示阴影        | Boolean | false |
| shadow    | 卡片阴影，建议在灰色背景下使用   | Boolean | false |
| padding   | 卡片内部间距，单位 px      | Number  | 16    |
<!--table-->
<!--divider-->



### Card slot
<!--table-->
| 名称    | 说明                            |
| :---- | :---------------------------- |
| title | 自定义卡片标题，如果是简单文字，可以使用`<p>`标签包裹 |
| extra | 额外显示的内容，默认位置在右上角              |
| 无     | 卡片主体内容                        |
<!--table-->
<!--divider-->
