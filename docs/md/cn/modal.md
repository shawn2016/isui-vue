## Modal 对话框

### 概述
模态对话框，在浮层中显示，引导用户进行相关操作。
### 基础用法
最简单的使用方法，通过控制属性visible来显示 / 隐藏对话框。 可以使用 v-model 实现双向绑定。 默认按键盘ESC键也可以关闭。

```
<template>
    <Button type="primary" @click="modal1 = true">Display dialog box</Button>
    <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal1: false
            }
        },
        methods: {
            ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
        }
    }
</script>

```

<!--divider-->

### 自定义样式
Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。 通过和其它组件的交互，能实现更复杂的功能，满足了大多业务场景。

```
<template>
    <Button @click="modal2 = true">Custom header and footer</Button>
    <Modal v-model="modal2" width="360">
        <p slot="header" style="color:#f60;text-align:center">
            <Icon type="information-circled"></Icon>
            <span>Delete confirmation</span>
        </p>
        <div style="text-align:center">
            <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>
            <p>Will you delete it?</p>
        </div>
        <div slot="footer">
            <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>
        </div>
    </Modal>
    <Button @click="modal3 = true">No title bar</Button>
    <Modal v-model="modal3">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal4 = true">Internationalization</Button>
    <Modal
        v-model="modal4"
        title="Modal Title"
        ok-text="OK"
        cancel-text="Cancel">
        <p>Something...</p>
        <p>Something...</p>
        <p>Something...</p>
    </Modal>
    <Button @click="modal5 = true">Set the width</Button>
    <Modal
        v-model="modal5"
        title="Custom width"
        width="300">
        <p>Customize width, unit px, default 520px.</p>
        <p>The width of the dialog box is responsive, and the width becomes <code>auto</code> when the screen size is less than 768px.</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false
            }
        },
        methods: {
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('Successfully delete');
                }, 2000);
            }
        }
    }
</script>

```

<!--divider-->

### 异步关闭
给Modal添加属性loading后，点击确定按钮对话框不会自动消失，并显示 loading 状态，需要手动关闭对话框，常用于表单提交。

```
<template>
    <Button type="primary" @click="modal6 = true">Display dialog box</Button>
    <Modal
        v-model="modal6"
        title="Title"
        :loading="loading"
        @on-ok="asyncOK">
        <p>After you click ok, the dialog box will close in 2 seconds.</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal6: false,
                loading: true
            }
        },
        methods: {
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
        }
    }
</script>

```

<!--divider-->

### 禁用关闭
可以禁用关闭和遮罩层关闭。

```
<template>
    <Button @click="modal7 = true">Disable upper right corner (including Esc key)</Button>
    <Modal
        title="Title"
        v-model="modal7"
        :closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal8 = true">Disable mask layer closure</Button>
    <Modal
        title="Title"
        v-model="modal8"
        :mask-closable="false">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal7: false,
                modal8: false,
            }
        }
    }
</script>

```

<!--divider-->

### 自定义位置
可以自定义 Modal 的对话框样式 以及 对话框 Wrap 的 class 名称，从而实现更多自定义的样式，比如垂直居中。

```
<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>
<template>
    <Button @click="modal9 = true">20px from the top</Button>
    <Modal
        title="Title"
        v-model="modal9"
        :styles="{top: '20px'}">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
    <Button @click="modal10 = true">Vertical center</Button>
    <Modal
        title="Title"
        v-model="modal10"
        class-name="vertical-center-modal">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
</template>
<script>
    export default {
        data () {
            return {
                modal9: false,
                modal10: false,
            }
        }
    }
</script>

```

<!--divider-->

### 基本用法
四种基本的对话框，只提供一个确定按钮。

```
<template>
    <Button @click="instance('info')">Info</Button>
    <Button @click="instance('success')">Success</Button>
    <Button @click="instance('warning')">Warning</Button>
    <Button @click="instance('error')">Error</Button>
</template>
<script>
    export default {
        methods: {
            instance (type) {
                const title = 'Title';
                const content = '<p>Content of dialog</p><p>Content of dialog</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content
                        });
                        break;
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    case 'warning':
                        this.$Modal.warning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: title,
                            content: content
                        });
                        break;
                }
            }
        }
    }
</script>

```

<!--divider-->

### 确认对话框
快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。

```
<template>
    <Button @click="confirm">Normal</Button>
    <Button @click="custom">Custom button text</Button>
    <Button @click="async">Asynchronous closing</Button>
</template>
<script>
    export default {
        methods: {
            confirm () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
            custom () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    okText: 'OK',
                    cancelText: 'Cancel'
                });
            },
            async () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>The dialog box will be closed after 2 seconds</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('Asynchronously close the dialog box');
                        }, 2000);
                    }
                });
            }
        }
    }
</script>

```

<!--divider-->

### 自定义内容
使用 render 字段可以基于 Render 函数来自定义内容。 使用 render 后，将不再限制类型，content 也将无效。   学习 Render 函数的内容  

```
<template>
    <p>
        Name: {{ value }}
    </p>
    <p>
        <Button @click="handleRender">Custom content</Button>
    </p>
</template>
<script>
    export default {
        data () {
            return {
                value: ''
            }            
        },
        methods: {
            handleRender () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value = val;
                                }
                            }
                        })
                    }
                })
            }
        }
    }
</script>

```

<!--divider-->

### API



### Modal props
<!--table-->
| 属性               | 说明                                       | 类型      | 默认值              |
| :--------------- | :--------------------------------------- | :------ | :--------------- |
| value            | 对话框是否显示，可使用 v-model 双向绑定数据。              | Boolean | false            |
| title            | 对话框标题，如果使用 slot 自定义了页头，则 title 无效        | String  | -                |
| closable         | 是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭              | Boolean | true             |
| mask-closable    | 是否允许点击遮罩层关闭                              | Boolean | true             |
| loading          | 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置visible来关闭对话框 | Boolean | false            |
| scrollable       | 页面是否可以滚动                                 | Boolean | false            |
| ok-text          | 确定按钮文字                                   | String  | 确定               |
| cancel-text      | 取消按钮文字                                   | String  | 取消               |
| width            | 对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto。当其值不大于 100 时以百分比显示，大于 100 时为像素 | Number  | String           |
| styles           | 设置浮层样式，调整浮层位置等，该属性设置的是.ivu-modal的样式      | Object  | -                |
| class-name       | 设置对话框容器.ivu-modal-wrap的类名，可辅助实现垂直居中等自定义效果 | String  | -                |
| transition-names | 自定义显示动画，第一项是模态框，第二项是背景                   | Array   | ['ease', 'fade'] |
| transfer         | 是否将弹层放置于 body 内                          | Boolean | true             |
<!--table-->
<!--divider-->



### Modal events
<!--table-->
| 事件名               | 说明          | 返回值          |
| :---------------- | :---------- | :----------- |
| on-ok             | 点击确定的回调     | 无            |
| on-cancel         | 点击取消的回调     | 无            |
| on-visible-change | 显示状态发生变化时触发 | true / false |
<!--table-->
<!--divider-->



### Modal slot
<!--table-->
| 名称     | 说明         |
| :----- | :--------- |
| header | 自定义页头      |
| footer | 自定义页脚内容    |
| close  | 自定义右上角关闭内容 |
| 无      | 对话框主体内容    |
<!--table-->
<!--divider-->



### Modal instance
<!--table-->
| 属性         | 说明                                       | 类型       | 默认值            |
| :--------- | :--------------------------------------- | :------- | :------------- |
| title      | 标题                                       | String   | Element String |
| content    | 内容                                       | String   | Element String |
| render     | 自定义内容，使用后不再限制类型， content 也无效。  学习 Render 函数的内容 | Function | -              |
| width      | 宽度，单位 px                                 | Number   | String         |
| okText     | 确定按钮的文字                                  | String   | 确定             |
| cancelText | 取消按钮的文字，只在Modal.confirm()下有效             | String   | 取消             |
| loading    | 点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用Modal.remove()来关闭对话框 | Boolean  | false          |
| scrollable | 页面是否可以滚动                                 | Boolean  | false          |
| closable   | 是否可以按 Esc 键关闭                            | Boolean  | false          |
| onOk       | 点击确定的回调                                  | Function | -              |
| onCancel   | 点击取消的回调，只在Modal.confirm()下有效             | Function | -              |
<!--table-->
<!--divider-->
