## Message 全局提示

### 概述
轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。
### 普通提示
最基本的提示，默认在1.5秒后消失。

```
<template>
    <Button type="primary" @click="info">Display info prompt</Button>
</template>
<script>
    export default {
        methods: {
            info () {
                this.$Message.info('This is a info tip');
            }
        }
    }
</script>

```

<!--divider-->

### 提示类型
不同的提示状态：成功、警告、错误。

```
<template>
    <Button @click="success">Display success prompt</Button>
    <Button @click="warning">Display warning prompt</Button>
    <Button @click="error">Display error prompt</Button>
</template>
<script>
    export default {
        methods: {
            success () {
                this.$Message.success('This is a success tip');
            },
            warning () {
                this.$Message.warning('This is a warning tip');
            },
            error () {
                this.$Message.error('This is an error tip');
            }
        }
    }
</script>

```

<!--divider-->

### 加载中
Loading 的状态，并异步在某个时机移除。

```
<template>
    <Button @click="loading">Display loading...</Button>
</template>
<script>
    export default {
        methods: {
            loading () {
                const msg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                setTimeout(msg, 3000);
            },
        }
    }
</script>

```

<!--divider-->

### 自定义时长
自定义时长，也可以在Message.config()中全局配置，详见API。

```
<template>
    <Button @click="time">Displays a 10 second prompt</Button>
</template>
<script>
    export default {
        methods: {
            time(){
              this.$Message.info({
                content: "I'll be gone in 10 seconds",
                duration: 10
            });
            }
        }
    }
</script>

```

<!--divider-->

### 可关闭
将参数设置为一个对象，并指定 closable 为 true 后可以手动关闭提示，完整参数详见API。

```
<template>
    <Button @click="closable">Display a closable message</Button>
</template>
<script>
    export default {
        methods: {
            closable () {
                this.$Message.info({
                    content: 'Tips for manual closing',
                    duration: 10,
                    closable: true
                });
            }
        }
    }
</script>

```

<!--divider-->

### 自定义 Render 函数
使用 Render 函数自定义内容。

```
<template>
<Button @click="renderFunc">show message</Button>
</template>
<script>
    export default {
        methods: {
            renderFunc () {
                this.$Message.info({
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

### Message instance

通过直接调用以下方法来使用组件：

- `this.$Message.info(config)`
- `this.$Message.success(config)`
- `this.$Message.warning(config)`
- `this.$Message.error(config)`
- `this.$Message.loading(config)`

以上方法隐式的创建及维护 Vue 组件。参数 config 可以是字符串或对象，当为字符串时，直接显示内容，当为对象时，具体说明如下：

<!--table-->
| 属性       | 说明                         | 类型       | 默认值   |
| :------- | :------------------------- | :------- | :---- |
| content  | 提示内容                       | String   | -     |
| render   | 自定义描述内容，使用 Vue 的 Render 函数 | Function | -     |
| duration | 自动关闭的延时，单位秒，不关闭可以写 0       | Number   | 1.5   |
| onClose  | 关闭时的回调                     | Function | -     |
| closable | 是否显示关闭按钮                   | Boolean  | false |
<!--table-->
<!--divider-->



另外提供了全局配置和全局销毁的方法：

- `this.$Message.config(options)`
- `this.$Message.destroy()`

```
this.$Message.config({
    top: 50,
    duration: 3
});
```
<!--table-->

| 属性       | 说明               | 类型     | 默认值  |
| :------- | :--------------- | :----- | :--- |
| top      | 提示组件距离顶端的距离，单位像素 | Number | 24   |
| duration | 默认自动关闭的延时，单位秒    | Number | 1.5  |

<!--table-->
<!--divider-->