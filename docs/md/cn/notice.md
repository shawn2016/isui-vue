## Notice 通知提醒

### 概述
在界面右上角显示可关闭的全局通知，常用于以下场景：
### 基础用法
基本用法，默认在 4.5秒后关闭。如果 desc 参数为空或不填，则自动应用仅标题模式下的样式。 建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。

```
<template>
    <Button type="primary" @click="open(false)">Open notice</Button>
    <Button @click="open(true)">Open notice(only title)</Button>
</template>
<script>
    export default {
        methods: {
            open (nodesc) {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            }
        }
    }
</script>

```

<!--divider-->

### 提醒类型
带有状态图标的提醒。

```
<template>
    <p>With desc</p>
    <Button @click="info(false)">Info</Button>
    <Button @click="success(false)">Success</Button>
    <Button @click="warning(false)">Warning</Button>
    <Button @click="error(false)">Error</Button>
    <p>Only title</p>
    <Button @click="info(true)">Info</Button>
    <Button @click="success(true)">Success</Button>
    <Button @click="warning(true)">Warning</Button>
    <Button @click="error(true)">Error</Button>
</template>
<script>
    export default {
        methods: {
            info (nodesc) {
                this.$Notice.info({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            success (nodesc) {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            warning (nodesc) {
                this.$Notice.warning({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            error (nodesc) {
                this.$Notice.error({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            }
        }
    }
</script>

```

<!--divider-->

### 自定义时长
自定义时长，为 0 则不自动关闭。也可以在Notice.config()中全局配置，详见API。

```
<template>
    <Button type="primary" @click="time">Open notice</Button>
</template>
<script>
    export default {
        methods: {
            time () {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: 'This notification does not automatically close, and you need to click the close button to close.',
                    duration: 0
                });
            }
        }
    }
</script>

```

<!--divider-->

### Render 函数
你可以自定义 Render 函数来替代 desc

```
<template>
    <Button type="primary" @click="renderFunc">Open notice</Button>
</template>
<script>
    export default {
        methods: {
            renderFunc () {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: 'The desc will hide when you set render.',
                    render: h => {
                        return h('span', [
                            'This is created by ',
                            h('a', 'render'),
                            ' function'
                        ])
                    }
                });
            }
        }
    }
</script>

```

<!--divider-->

### API



### Notice instance
<!--table-->
| 属性       | 说明                                       | 类型       | 默认值  |
| :------- | :--------------------------------------- | :------- | :--- |
| title    | 通知提醒的标题                                  | String   | -    |
| desc     | 通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式             | String   | -    |
| render   | 自定义描述内容，使用 Vue 的 Render 函数，如果同时设置了 render 和 desc，则只显示 render 的内容 | Function | -    |
| duration | 自动关闭的延时，单位秒，不关闭可以写 0                     | Number   | 4.5  |
| name     | 当前通知的唯一标识                                | String   | 自动   |
| onClose  | 关闭时的回调                                   | Function | -    |
<!--table-->
<!--divider-->
