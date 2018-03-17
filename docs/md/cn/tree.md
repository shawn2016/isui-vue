## Tree 树形控件

### 概述
文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用树控件可以完整展现其中的层级关系，并具有展开收起选择等交互功能。
### 基础用法
最简单的用法，展示可选中，默认展开功能。

```
<template>
    <Tree :data="data1"></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data1: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

```

<!--divider-->

### 可勾选
设置属性 show-checkbox 可以对节点进行勾选。

```
<template>
    <Tree :data="data2" show-checkbox></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data2: [
                    {
                        title: 'parent 1',
                        expand: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1'
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1'
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

```

<!--divider-->

### 异步加载子节点
使用 load-data 属性可以异步加载子节点，需要给数据增加 loading 来标识当前是否在加载中。 load-data 第一个参数为当前节点信息；执行 load-data 的第二个参数，将需要添加的数据传入。 如果某节点不包含 loading 和 children 字段，则不会应用异步加载效果。

```
<template>
    <Tree :data="data3" :load-data="loadData" show-checkbox></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data3: [
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    }
                ]
            }
        },
        methods: {
            loadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        },
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            }
        }
    }
</script>

```

<!--divider-->

### 默认展开、选中、勾选和禁用
给节点设置 expand、selected、checked 和 disabled 可以将节点设置为展开、选中、勾选和禁用。 设置属性 multiple 可进行多选。

```
<template>
    <Tree :data="data4" show-checkbox multiple></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data4: [
                    {
                        title: 'parent 1',
                        expand: true,
                        selected: true,
                        children: [
                            {
                                title: 'parent 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        disabled: true
                                    },
                                    {
                                        title: 'leaf 1-1-2'
                                    }
                                ]
                            },
                            {
                                title: 'parent 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        checked: true
                                    },
                                    {
                                        title: 'leaf 1-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

```


<!--divider-->
### 自定义节点内容
使用强大的 Render 函数可以自定义节点显示内容和交互，比如添加图标，按钮等。 Render 函数的第二个参数，包含三个字段： root <Array>：树的根节点 node <Object>：当前节点 data <Object>：当前节点的数据 通过合理地使用 root、node 和 data 可以实现各种效果，其中，iView 给每个节点都设置了一个 nodeKey 字段，用来标识节点的 id。 Render 函数分两种，一种是给当前树的每个节点都设置同样的渲染内容，此 render 通过 Tree 组件的属性 render 传递；另一种是单独给某个节点设置，在该节点的 render 字段内设置；同时设置时，会优先使用当前节点的 Render 函数。   学习 Render 函数的内容  

```
<template>
    <Tree :data="data5" :render="renderContent"></Tree>
</template>
<script>
    export default {
        data () {
            return {
                data5: [
                    {
                        title: 'parent 1',
                        expand: true,
                        render: (h, { root, node, data }) => {
                            return h('span', {
                                style: {
                                    display: 'inline-block',
                                    width: '100%'
                                }
                            }, [
                                h('span', [
                                    h('Icon', {
                                        props: {
                                            type: 'ios-folder-outline'
                                        },
                                        style: {
                                            marginRight: '8px'
                                        }
                                    }),
                                    h('span', data.title)
                                ]),
                                h('span', {
                                    style: {
                                        display: 'inline-block',
                                        float: 'right',
                                        marginRight: '32px'
                                    }
                                }, [
                                    h('Button', {
                                        props: Object.assign({}, this.buttonProps, {
                                            icon: 'ios-plus-empty',
                                            type: 'primary'
                                        }),
                                        style: {
                                            width: '52px'
                                        },
                                        on: {
                                            click: () => { this.append(data) }
                                        }
                                    })
                                ])
                            ]);
                        },
                        children: [
                            {
                                title: 'child 1-1',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-1-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-1-2',
                                        expand: true
                                    }
                                ]
                            },
                            {
                                title: 'child 1-2',
                                expand: true,
                                children: [
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    },
                                    {
                                        title: 'leaf 1-2-1',
                                        expand: true
                                    }
                                ]
                            }
                        ]
                    }
                ],
                buttonProps: {
                    type: 'ghost',
                    size: 'small',
                }
            }
        },
        methods: {
            renderContent (h, { root, node, data }) {
                return h('span', {
                    style: {
                        display: 'inline-block',
                        width: '100%'
                    }
                }, [
                    h('span', [
                        h('Icon', {
                            props: {
                                type: 'ios-paper-outline'
                            },
                            style: {
                                marginRight: '8px'
                            }
                        }),
                        h('span', data.title)
                    ]),
                    h('span', {
                        style: {
                            display: 'inline-block',
                            float: 'right',
                            marginRight: '32px'
                        }
                    }, [
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-plus-empty'
                            }),
                            style: {
                                marginRight: '8px'
                            },
                            on: {
                                click: () => { this.append(data) }
                            }
                        }),
                        h('Button', {
                            props: Object.assign({}, this.buttonProps, {
                                icon: 'ios-minus-empty'
                            }),
                            on: {
                                click: () => { this.remove(root, node, data) }
                            }
                        })
                    ])
                ]);
            },
            append (data) {
                const children = data.children || [];
                children.push({
                    title: 'appended node',
                    expand: true
                });
                this.$set(data, 'children', children);
            },
            remove (root, node, data) {
                const parentKey = root.find(el => el === node).parent;
                const parent = root.find(el => el.nodeKey === parentKey).node;
                const index = parent.children.indexOf(data);
                parent.children.splice(index, 1);
            }
        }
    }
</script>

```


<!--divider-->

### API



### Tree props
<!--table-->
| 属性            | 说明                      | 类型       | 默认值   |
| :------------ | :---------------------- | :------- | :---- |
| data          | 可嵌套的节点属性的数组，生成 tree 的数据 | Array    | []    |
| multiple      | 是否支持多选                  | Boolean  | false |
| show-checkbox | 是否显示多选框                 | Boolean  | false |
| empty-text    | 没有数据时的提示                | String   | 暂无数据  |
| load-data     | 异步加载数据的方法，见示例           | Function | -     |
| render        | 自定义渲染内容，见示例             | Function | -     |
<!--table-->
<!--divider-->



### Tree events
<!--table-->
| 事件名              | 说明          | 返回值        |
| :--------------- | :---------- | :--------- |
| on-select-change | 点击树节点时触发    | 当前已选中的节点数组 |
| on-check-change  | 点击复选框时触发    | 当前已勾选节点的数组 |
| on-toggle-expand | 展开和收起子列表时触发 | 当前节点的数据    |
<!--table-->
<!--divider-->



### Tree methods
<!--table-->
| 方法名              | 说明       | 参数   |
| :--------------- | :------- | :--- |
| getCheckedNodes  | 获取被勾选的节点 | 无    |
| getSelectedNodes | 获取被选中的节点 | 无    |
<!--table-->
<!--divider-->



### children
<!--table-->
| 属性              | 说明                   | 类型       | 默认值            |
| :-------------- | :------------------- | :------- | :------------- |
| title           | 标题                   | String   | Element String |
| expand          | 是否展开直子节点             | Boolean  | false          |
| disabled        | 禁掉响应                 | Boolean  | false          |
| disableCheckbox | 禁掉 checkbox          | Boolean  | false          |
| selected        | 是否选中子节点              | Boolean  | false          |
| checked         | 是否勾选(如果勾选，子节点也会全部勾选) | Boolean  | false          |
| children        | 子节点属性数组              | Array    | -              |
| render          | 自定义当前节点渲染内容，见示例      | Function | -              |
<!--table-->
<!--divider-->
