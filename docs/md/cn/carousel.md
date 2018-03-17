## Carousel 走马灯

### 概述
常用于一组图片或卡片轮播，当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
### 基础用法
最基本的用法。

```
<template>
    <Carousel v-model="value1" loop>
        <CarouselItem>
            <div class="demo-carousel" style="height: 200px;line-height: 200px;text-align: center;color: #fff;font-size: 20px;background: #506b9e;}">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" style="height: 200px;line-height: 200px;text-align: center;color: #fff;font-size: 20px;background: #506b9e;}">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" style="height: 200px;line-height: 200px;text-align: center;color: #fff;font-size: 20px;background: #506b9e;}">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" style="height: 200px;line-height: 200px;text-align: center;color: #fff;font-size: 20px;background: #506b9e;}">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>

```

<!--divider-->

### 自动切换
设置属性 autoplay 可以自动轮播，同时可以设置属性 autoplay-speed 改变自动播放的速度。

```
<template>
    <Carousel autoplay v-model="value2" loop>
        <CarouselItem>
            <div class="demo-carousel" style="height: 200px;line-height: 200px;text-align: center;color: #fff;font-size: 20px;background: #506b9e;}">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" style="height: 200px;line-height: 200px;text-align: center;color: #fff;font-size: 20px;background: #506b9e;}">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" style="height: 200px;line-height: 200px;text-align: center;color: #fff;font-size: 20px;background: #506b9e;}">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" style="height: 200px;line-height: 200px;text-align: center;color: #fff;font-size: 20px;background: #506b9e;}">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value2: 0
            }
        }
    }
</script>

```

<!--divider-->

### 综合设置
动态调整各配置。

```
<template>
    <Form :model="setting" :label-width="100">
        <FormItem label="Automatic switching">
            <Switch v-model="setting.autoplay">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </Switch>
        </FormItem>
        <FormItem label="Circular indicator">
            <Switch v-model="setting.radiusDot">
                <span slot="open">On</span>
                <span slot="close">Off</span>
            </Switch>
        </FormItem>
        <FormItem label="Automatic switching speed">
            <Slider v-model="setting.autoplaySpeed" :min="300" :max="10000" :step="100"></Slider>
        </FormItem>
        <FormItem label="Indicator position">
            <RadioGroup v-model="setting.dots" type="button">
                <Radio label="inside">interior</Radio>
                <Radio label="outside">exterior</Radio>
                <Radio label="none">Don't show</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Switch the arrow">
            <RadioGroup v-model="setting.arrow" type="button">
                <Radio label="hover">Hover displayed when</Radio>
                <Radio label="always">Always show</Radio>
                <Radio label="never">Don't show</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem label="Indicator trigger mode">
            <RadioGroup v-model="setting.trigger" type="button">
                <Radio label="click">Click</Radio>
                <Radio label="hover">Hover</Radio>
            </RadioGroup>
        </FormItem>
    </Form>
    <Carousel
        v-model="value3"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
        <CarouselItem>
            <div class="demo-carousel" style="height: 200px;line-height: 200px;text-align: center;color: #fff;font-size: 20px;background: #506b9e;}">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" style="height: 200px;line-height: 200px;text-align: center;color: #fff;font-size: 20px;background: #506b9e;}">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" style="height: 200px;line-height: 200px;text-align: center;color: #fff;font-size: 20px;background: #506b9e;}">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel" style="height: 200px;line-height: 200px;text-align: center;color: #fff;font-size: 20px;background: #506b9e;}">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value3: 0,
                setting: {
                    autoplay: false,
                    autoplaySpeed: 2000,
                    dots: 'inside',
                    radiusDot: false,
                    trigger: 'click',
                    arrow: 'hover'
                }
            }
        },
    }
</script>

```

<!--divider-->

### API



### Carousel props
<!--table-->
| 属性             | 说明                                       | 类型      | 默认值    |
| :------------- | :--------------------------------------- | :------ | :----- |
| value          | 幻灯片的索引，从 0 开始，可以使用 v-model 双向绑定数据        | Number  | 0      |
| height         | 走马灯的高度，可填 auto 或具体高度数值，单位 px             | String  | Number |
| loop           | 是否开启循环                                   | Boolean | false  |
| autoplay       | 是否自动切换                                   | Boolean | false  |
| autoplay-speed | 自动切换的时间间隔，单位为毫秒                          | Number  | 2000   |
| dots           | 指示器的位置，可选值为 inside （内部），outside（外部），none（不显示） | String  | inside |
| radius-dot     | 是否显示圆形指示器                                | Boolean | false  |
| trigger        | 指示器的触发方式，可选值为 click（点击），hover（悬停）        | String  | click  |
| arrow          | 切换箭头的显示时机，可选值为 hover（悬停），always（一直显示），never（不显示） | String  | hover  |
| easing         | 动画效果                                     | String  | ease   |
<!--table-->
<!--divider-->



### Carousel events
<!--table-->
| 事件名       | 说明                           | 返回值             |
| :-------- | :--------------------------- | :-------------- |
| on-change | 幻灯片切换时触发，目前激活的幻灯片的索引，原幻灯片的索引 | oldValue, value |
<!--table-->
<!--divider-->
