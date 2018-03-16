## Table 表格

### 概述

主要用于展示大量结构化数据。

支持排序、筛选、分页、自定义操作、导出 csv 等复杂功能。

```
注意：非 template/render 模式下，需使用 i-table。
```

<!--divider-->

### 基础用法

表格的最简单用法。

```
<template>
    <Table :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

```

<!--divider-->

### 斑马纹

设置属性 `stripe` ，表格会间隔显示不同颜色，用于区分不同行数据。

```
<template>
    <Table stripe :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

```

<!--divider-->

### 带边框

添加表格的边框线。

```
<template>
    <Table border :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

```

<!--divider-->

### 特定样式 

**行**：通过属性 `row-class-name` 可以给某一行指定一个样式名称。

**列**：通过给列 columns 设置字段 `className` 可以给某一列指定一个样式。

**单元格**：通过给数据 data 设置字段 `cellClassName` 可以给任意一个单元格指定样式。

```
<style>
    .ivu-table .demo-table-info-row td{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-error-row td{
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table td.demo-table-info-column{
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-name {
        background-color: #2db7f5;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-age {
        background-color: #ff6600;
        color: #fff;
    }
    .ivu-table .demo-table-info-cell-address {
        background-color: #187;
        color: #fff;
    }
</style>
<template>
    <p>Custom row styles:</p>
    <Table :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
    <p>Custom column styles:</p>
    <Table :columns="columns9" :data="data1"></Table>
    <p>Custom arbitrary cell styles:</p>
    <Table :columns="columns1" :data="data8"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                columns9: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        className: 'demo-table-info-column'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                data8: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 25,
                        address: 'London No. 1 Lake Park',
                        cellClassName: {
                            age: 'demo-table-info-cell-age',
                            address: 'demo-table-info-cell-address'
                        }
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        cellClassName: {
                            name: 'demo-table-info-cell-name'
                        }
                    }
                ]
            }
        },
        methods: {
            rowClassName (row, index) {
                if (index === 1) {
                    return 'demo-table-info-row';
                } else if (index === 3) {
                    return 'demo-table-error-row';
                }
                return '';
            }
        }
    }
</script>

```

<!--divider-->

### 固定表头

通过设置属性 `height` 给表格指定高度后，会自动固定表头。当纵向内容过多时可以使用。

```
<template>
    <Table height="200" :columns="columns1" :data="data2"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data2: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

```

<!--divider-->

### 固定列 

通过给数据 `columns` 的项设置 `fixed` 为 `left` 或 `right`，可以左右固定需要的列。当横向内容过多时可以使用。

```
<template>
    <Table width="550" border :columns="columns2" :data="data3"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
                data3: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ]
            }
        }
    }
</script>

```

<!--divider-->

### 固定表头和列

同时应用上述两个属性，可以同时固定表头和列。

```
<template>
    <Table width="550" height="200" border :columns="columns2" :data="data4"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns2: [
                    {
                        title: 'Name',
                        key: 'name',
                        width: 100,
                        fixed: 'left'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        width: 100
                    },
                    {
                        title: 'Province',
                        key: 'province',
                        width: 100
                    },
                    {
                        title: 'City',
                        key: 'city',
                        width: 100
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        width: 200
                    },
                    {
                        title: 'Postcode',
                        key: 'zip',
                        width: 100
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    }
                                }, 'Edit')
                            ]);
                        }
                    }
                ],
                data4: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        province: 'America',
                        city: 'New York',
                        zip: 100000
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'Washington, D.C. No. 1 Lake Park',
                        province: 'America',
                        city: 'Washington, D.C.',
                        zip: 100000
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        province: 'Australian',
                        city: 'Sydney',
                        zip: 100000
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        province: 'Canada',
                        city: 'Ottawa',
                        zip: 100000
                    }
                ]
            }
        }
    }
</script>

```

<!--divider-->

### 单选

通过设置属性 `highlight-row`，可以选中某一行。

当选择时，触发事件 `@on-current-change`，可以自定义操作，事件返回两个值 `currentRow` 和 `oldCurrentRow`，分别为当前行的数据和上一次选择的数据。

通过给 `columns` 数据设置一项，指定 `type: 'index'`，可以自动显示一个从 1 开始的索引列。

给 data 项设置特殊 key `_highlight: true` 可以默认选中当前项。

调用 `clearCurrentRow` 方法可以手动清除选中项。

```
<template>
    <div>
        <Table highlight-row ref="currentRowTable" :columns="columns3" :data="data1"></Table>
        <br>
        <Button @click="handleClearCurrentRow">Clear</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns3: [
                    {
                        type: 'index',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods: {
            handleClearCurrentRow () {
                this.$refs.currentRowTable.clearCurrentRow();
            }
        }
    }
</script>
```

<!--divider-->

### 多选

通过给 `columns` 数据设置一项，指定 `type: 'selection'`，即可自动开启多选功能。

给 data 项设置特殊 key `_checked: true` 可以默认选中当前项。

给 data 项设置特殊 key `_disabled: true` 可以禁止选择当前项。

正确使用好以下事件，可以达到需要的效果：

- `@on-select`，选中某一项触发，返回值为 `selection` 和 `row`，分别为已选项和刚选择的项。
- `@on-select-all`，点击全选时触发，返回值为 `selection`，已选项。
- `@on-selection-change`，只要选中项发生变化时就会触发，返回值为 `selection`，已选项。

```
<template>
    <div>
        <Table border ref="selection" :columns="columns4" :data="data1"></Table>
        <br>
        <Button @click="handleSelectAll(true)">Set all selected</Button>
        <Button @click="handleSelectAll(false)">Cancel all selected</Button>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                columns4: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        },
        methods: {
            handleSelectAll (status) {
                this.$refs.selection.selectAll(status);
            }
        }
    }
</script>
```

<!--divider-->

### 排序

通过给 `columns` 数据的项，设置 `sortable: true`，即可对该列数据进行排序。

排序默认使用升序和降序，也可以通过设置属性 `sortMethod` 指定一个自定义排序函数，接收三个参数 a 、 b 和 type。

通过给某一列设置 `sortType` 可以在初始化时使用排序。

如果使用远程排序，可以设置 `sortable： 'custom'`，然后在触发排序事件 `@on-sort-change`后，进行远程排序，并手动设置新的 data，详见 API。

注意，排序并不会影响到源数据 data。

```
<template>
    <Table border :columns="columns5" :data="data5"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns5: [
                    {
                        title: 'Date',
                        key: 'date',
                        sortable: true
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        sortable: true
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data5: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

```

<!--divider-->

### 筛选

通过给 `columns` 数据的项，设置 `filters`，可进行筛选，filters 接收一个数组，详见 Demo 和 API。

必须指定一个筛选函数 `filterMethod` 才可以进行筛选，filterMethod 传入两个参数 value 和 row，详见 Demo 和 API。

如果指定 `filterMultiple: false`，则使用单选，默认为多选。

注意，筛选并不会影响到源数据 data。

```
<template>
    <Table border :columns="columns6" :data="data5"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns6: [
                    {
                        title: 'Date',
                        key: 'date'
                    },
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        filters: [
                            {
                                label: 'Greater than 25',
                                value: 1
                            },
                            {
                                label: 'Less than 25',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.age > 25;
                            } else if (value === 2) {
                                return row.age < 25;
                            }
                        }
                    },
                    {
                        title: 'Address',
                        key: 'address',
                        filters: [
                            {
                                label: 'New York',
                                value: 'New York'
                            },
                            {
                                label: 'London',
                                value: 'London'
                            },
                            {
                                label: 'Sydney',
                                value: 'Sydney'
                            }
                        ],
                        filterMethod (value, row) {
                            return row.address.indexOf(value) > -1;
                        }
                    }
                ],
                data5: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
            }
        }
    }
</script>

```

<!--divider-->

### 自定义列模板

通过给 `columns` 数据的项，设置一个函数 `render`，可以自定义渲染当前列，包括渲染自定义组件，它基于 Vue 的 Render 函数。

`render` 函数传入两个参数，第一个是 h，第二个是对象，包含 `row`、`column` 和 `index`，分别指当前单元格数据，当前列数据，当前是第几行。

[** 学习 Render 函数的内容](https://segmentfault.com/l/1500000008892728)

```
<template>
    <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns7: [
                    {
                        title: 'Name',
                        key: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
                data6: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park'
                    }
                ]
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>

```

<!--divider-->

### 可展开????

当表格内容较多不能一次性完全展示时使用。

通过给 `columns` 数据设置一项，指定 `type: 'expand'`，即可开启扩展功能。

给行数据 data 的某项设置 `_expanded` 为 true，可以默认展开当前行，设置 `_disableExpand` 可以禁用当前行的展开功能。

渲染展开区域与自定义列模板方法类似，使用 render 函数。当内容较复杂时，可拆分为组件或使用 JSX。

[** 学习 Render 函数的内容](https://segmentfault.com/l/1500000008892728)

```

<template>
    <div>
        <Row class="expand-row">
            <Col span="8">
                <span class="expand-key">Job: </span>
                <span class="expand-value">{{ row.job }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Interest: </span>
                <span class="expand-value">{{ row.interest }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Birthday: </span>
                <span class="expand-value">{{ row.birthday }}</span>
            </Col>
        </Row>
        <Row>
            <Col span="8">
                <span class="expand-key">Favorite book: </span>
                <span class="expand-value">《{{ row.book }}》</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Favorite movie: </span>
                <span class="expand-value">{{ row.movie }}</span>
            </Col>
            <Col span="8">
                <span class="expand-key">Favorite music: </span>
                <span class="expand-value">{{ row.music }}</span>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        data() {
        return {
          row: {
              job:'计算机',
              interest:'计算机',
              birthday:'计算机',
              book:'计算机',
              movie:'计算机',
              music:'计算机'
            }
        }
        }
    };
</script>
```

<!--divider-->

### 加载中 

通过设置属性 `loading` 可以让表格处于加载中状态，在异步请求数据、分页时建议使用。

```
<template>
    <div>
        <Table :loading="loading" :columns="columns1" :data="data1"></Table>
        <br>
        Change Loading Status <i-switch v-model="loading"></i-switch>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                loading: true,
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>

```

<!--divider-->

### 尺寸

通过设置属性 `size` 为 `large` 或 `small` 可以调整表格尺寸为大或小，默认不填或填写 `default` 为中。

```
<template>
    <Table size="large" :columns="columns1" :data="data1"></Table>
    <br><br>
    <Table size="small" :columns="columns1" :data="data1"></Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
            }
        }
    }
</script>
```

<!--divider-->

### 导出csv

通过调用 `exportCsv()` 方法，可以将数据导出为 `.csv` 的表格文件，详见 API。

说明：

- 支持IE9~IE11、Edge、Chrome、Safari、Firefox 全系列浏览器。
- IE9、Safari 需要手动修改后缀名为 `.csv`。
- IE9暂时只支持英文，中文会显示为乱码。

```
<template>
    <Table :columns="columns8" :data="data7" size="small" ref="table"></Table>
    <br>
    <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> Export source data</Button>
    <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> Export sorting and filtered data</Button>
    <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> Export custom data</Button>
</template>
<script>
    export default {
        data () {
            return {
                columns8: [
                    {
                        "title": "Name",
                        "key": "name",
                        "fixed": "left",
                        "width": 200
                    },
                    {
                        "title": "Show",
                        "key": "show",
                        "width": 150,
                        "sortable": true,
                        filters: [
                            {
                                label: 'Greater than 4000',
                                value: 1
                            },
                            {
                                label: 'Less than 4000',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        }
                    },
                    {
                        "title": "Weak",
                        "key": "weak",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Signin",
                        "key": "signin",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Click",
                        "key": "click",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Active",
                        "key": "active",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "7, retained",
                        "key": "day7",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "30, retained",
                        "key": "day30",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "The next day left",
                        "key": "tomorrow",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Day Active",
                        "key": "day",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Week Active",
                        "key": "week",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "Month Active",
                        "key": "month",
                        "width": 150,
                        "sortable": true
                    }
                ],
                data7: [
                    {
                        "name": "Name1",
                        "fav": 0,
                        "show": 7302,
                        "weak": 5627,
                        "signin": 1563,
                        "click": 4254,
                        "active": 1438,
                        "day7": 274,
                        "day30": 285,
                        "tomorrow": 1727,
                        "day": 558,
                        "week": 4440,
                        "month": 5610
                    },
                    {
                        "name": "Name2",
                        "fav": 0,
                        "show": 4720,
                        "weak": 4086,
                        "signin": 3792,
                        "click": 8690,
                        "active": 8470,
                        "day7": 8172,
                        "day30": 5197,
                        "tomorrow": 1684,
                        "day": 2593,
                        "week": 2507,
                        "month": 1537
                    },
                    {
                        "name": "Name3",
                        "fav": 0,
                        "show": 7181,
                        "weak": 8007,
                        "signin": 8477,
                        "click": 1879,
                        "active": 16,
                        "day7": 2249,
                        "day30": 3450,
                        "tomorrow": 377,
                        "day": 1561,
                        "week": 3219,
                        "month": 1588
                    },
                    {
                        "name": "Name4",
                        "fav": 0,
                        "show": 9911,
                        "weak": 8976,
                        "signin": 8807,
                        "click": 8050,
                        "active": 7668,
                        "day7": 1547,
                        "day30": 2357,
                        "tomorrow": 7278,
                        "day": 5309,
                        "week": 1655,
                        "month": 9043
                    },
                    {
                        "name": "Name5",
                        "fav": 0,
                        "show": 934,
                        "weak": 1394,
                        "signin": 6463,
                        "click": 5278,
                        "active": 9256,
                        "day7": 209,
                        "day30": 3563,
                        "tomorrow": 8285,
                        "day": 1230,
                        "week": 4840,
                        "month": 9908
                    },
                    {
                        "name": "Name6",
                        "fav": 0,
                        "show": 6856,
                        "weak": 1608,
                        "signin": 457,
                        "click": 4949,
                        "active": 2909,
                        "day7": 4525,
                        "day30": 6171,
                        "tomorrow": 1920,
                        "day": 1966,
                        "week": 904,
                        "month": 6851
                    },
                    {
                        "name": "Name7",
                        "fav": 0,
                        "show": 5107,
                        "weak": 6407,
                        "signin": 4166,
                        "click": 7970,
                        "active": 1002,
                        "day7": 8701,
                        "day30": 9040,
                        "tomorrow": 7632,
                        "day": 4061,
                        "week": 4359,
                        "month": 3676
                    },
                    {
                        "name": "Name8",
                        "fav": 0,
                        "show": 862,
                        "weak": 6520,
                        "signin": 6696,
                        "click": 3209,
                        "active": 6801,
                        "day7": 6364,
                        "day30": 6850,
                        "tomorrow": 9408,
                        "day": 2481,
                        "week": 1479,
                        "month": 2346
                    },
                    {
                        "name": "Name9",
                        "fav": 0,
                        "show": 567,
                        "weak": 5859,
                        "signin": 128,
                        "click": 6593,
                        "active": 1971,
                        "day7": 7596,
                        "day30": 3546,
                        "tomorrow": 6641,
                        "day": 1611,
                        "week": 5534,
                        "month": 3190
                    },
                    {
                        "name": "Name10",
                        "fav": 0,
                        "show": 3651,
                        "weak": 1819,
                        "signin": 4595,
                        "click": 7499,
                        "active": 7405,
                        "day7": 8710,
                        "day30": 5518,
                        "tomorrow": 428,
                        "day": 9768,
                        "week": 2864,
                        "month": 5811
                    }
                ]
            }
        },
        methods: {
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: 'The original data'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: 'Sorting and filtering data',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: 'Custom data',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            }      
        }
    }
</script>

```

<!--divider-->

### 带有分页的复杂表格

- 该表格来自于 TalkingData [MarketingCloud](https://www.talkingdata.com/product-MarketingCloud.jsp) 产品，展示的是人群画像列表，数据为模拟数据，分页只是提供效果展示，并非真实拉取服务端数据。

```
<template>
    <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
    <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
            <Page :total="100" :current="1" @on-change="changePage"></Page>
        </div>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                tableData1: this.mockTableData1(),
                tableColumns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Status',
                        key: 'status',
                        render: (h, params) => {
                            const row = params.row;
                            const color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red';
                            const text = row.status === 1 ? 'Working' : row.status === 2 ? 'Success' : 'Fail';

                            return h('Tag', {
                                props: {
                                    type: 'dot',
                                    color: color
                                }
                            }, text);
                        }
                    },
                    {
                        title: 'Portrayal',
                        key: 'portrayal',
                        render: (h, params) => {
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    title: params.row.portrayal.length + 'portrayals',
                                    placement: 'bottom'
                                }
                            }, [
                                h('Tag', params.row.portrayal.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                    h('ul', this.tableData1[params.index].portrayal.map(item => {
                                        return h('li', {
                                            style: {
                                                textAlign: 'center',
                                                padding: '4px'
                                            }
                                        }, item)
                                    }))
                                ])
                            ]);
                        }
                    },
                    {
                        title: 'People',
                        key: 'people',
                        render: (h, params) => {
                            return h('Poptip', {
                                props: {
                                    trigger: 'hover',
                                    title: params.row.people.length + 'customers',
                                    placement: 'bottom'
                                }
                            }, [
                                h('Tag', params.row.people.length),
                                h('div', {
                                    slot: 'content'
                                }, [
                                    h('ul', this.tableData1[params.index].people.map(item => {
                                        return h('li', {
                                            style: {
                                                textAlign: 'center',
                                                padding: '4px'
                                            }
                                        }, item.n + '：' + item.c + 'People')
                                    }))
                                ])
                            ]);
                        }
                    },
                    {
                        title: 'Sampling Time',
                        key: 'time',
                        render: (h, params) => {
                            return h('div', 'Almost' + params.row.time + 'days');
                        }
                    },
                    {
                        title: 'Updated Time',
                        key: 'update',
                        render: (h, params) => {
                            return h('div', this.formatDate(this.tableData1[params.index].update));
                        }
                    }
                ]
            }
        },
        methods: {
            mockTableData1 () {
                let data = [];
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: 'Business' + Math.floor(Math.random () * 100 + 1),
                        status: Math.floor(Math.random () * 3 + 1),
                        portrayal: ['City', 'People', 'Cost', 'Life', 'Entertainment'],
                        people: [
                            {
                                n: 'People' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            },
                            {
                                n: 'People' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            },
                            {
                                n: 'People' + Math.floor(Math.random () * 100 + 1),
                                c: Math.floor(Math.random () * 1000000 + 100000)
                            }
                        ],
                        time: Math.floor(Math.random () * 7 + 1),
                        update: new Date()
                    })
                }
                return data;
            },
            formatDate (date) {
                const y = date.getFullYear();
                let m = date.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                let d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                return y + '-' + m + '-' + d;
            },
            changePage () {
                // The simulated data is changed directly here, and the actual usage scenario should fetch the data from the server
                this.tableData1 = this.mockTableData1();
            }
        }
    }
</script>

```

<!--divider-->

### 多列指标筛选的表格

- 该表格来自于 TalkingData [Ad Tracking](https://www.talkingdata.com/product-AdTracking.jsp) 产品，展示各种推广活动不同指标的数据，数据为模拟数据。

  该示例主要展示固定列、自定义列数量以及排序的功能。

```
<template>
    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
        <Checkbox label="show">Show</Checkbox>
        <Checkbox label="weak">Weak</Checkbox>
        <Checkbox label="signin">Signin</Checkbox>
        <Checkbox label="click">Click</Checkbox>
        <Checkbox label="active">Active</Checkbox>
        <Checkbox label="day7">7, retained</Checkbox>
        <Checkbox label="day30">30, retained</Checkbox>
        <Checkbox label="tomorrow">The next day left</Checkbox>
        <Checkbox label="day">Day Active</Checkbox>
        <Checkbox label="week">Week Active</Checkbox>
        <Checkbox label="month">Month Active</Checkbox>
    </Checkbox-group>
    <Table :data="tableData2" :columns="tableColumns2" border></Table>
</template>
<script>
    export default {
        data () {
            return {
                tableData2: this.mockTableData2(),
                tableColumns2: [],
                tableColumnsChecked: ['show', 'weak', 'signin', 'click', 'active', 'day7', 'day30', 'tomorrow', 'day', 'week', 'month']
            }
        },
        methods: {
            mockTableData2 () {
                let data = [];
                function getNum() {
                    return Math.floor(Math.random () * 10000 + 1);
                }
                for (let i = 0; i < 10; i++) {
                    data.push({
                        name: 'Name ' + (i+1),
                        fav: 0,
                        show: getNum(),
                        weak: getNum(),
                        signin: getNum(),
                        click: getNum(),
                        active: getNum(),
                        day7: getNum(),
                        day30: getNum(),
                        tomorrow: getNum(),
                        day: getNum(),
                        week: getNum(),
                        month: getNum()
                    })
                }
                return data;
            },
            getTable2Columns () {
                const table2ColumnList = {
                    name: {
                        title: 'Name',
                        key: 'name',
                        fixed: 'left',
                        width: 200,
                        render: (h, params) => {
                            const fav = this.tableData2[params.index].fav;
                            const style = fav === 0 ? {
                                cursor: 'pointer'
                            } : {
                                cursor: 'pointer',
                                color: '#f50'
                            };

                            return h('div', [
                                h('Icon', {
                                    style: style,
                                    props: {
                                        type: fav === 0 ? 'ios-star-outline' : 'ios-star'
                                    },
                                    nativeOn: {
                                        click: () => {
                                            this.toggleFav(params.index);
                                        }
                                    }
                                }),
                                h('span', ' ' + params.row.name)
                            ]);
                        }
                    },
                    show: {
                        title: 'Show',
                        key: 'show',
                        width: 150,
                        sortable: true
                    },
                    weak: {
                        title: 'Weak',
                        key: 'weak',
                        width: 150,
                        sortable: true
                    },
                    signin: {
                        title: 'Signin',
                        key: 'signin',
                        width: 150,
                        sortable: true
                    },
                    click: {
                        title: 'Click',
                        key: 'click',
                        width: 150,
                        sortable: true
                    },
                    active: {
                        title: 'Active',
                        key: 'active',
                        width: 150,
                        sortable: true
                    },
                    day7: {
                        title: '7, retained',
                        key: 'day7',
                        width: 150,
                        sortable: true
                    },
                    day30: {
                        title: '30, retained',
                        key: 'day30',
                        width: 150,
                        sortable: true
                    },
                    tomorrow: {
                        title: 'The next day left',
                        key: 'tomorrow',
                        width: 150,
                        sortable: true
                    },
                    day: {
                        title: 'Day Active',
                        key: 'day',
                        width: 150,
                        sortable: true
                    },
                    week: {
                        title: 'Week Active',
                        key: 'week',
                        width: 150,
                        sortable: true
                    },
                    month: {
                        title: 'Month Active',
                        key: 'month',
                        width: 150,
                        sortable: true
                    }
                };

                let data = [table2ColumnList.name];

                this.tableColumnsChecked.forEach(col => data.push(table2ColumnList[col]));

                return data;
            },
            changeTableColumns () {
                this.tableColumns2 = this.getTable2Columns();
            },
            toggleFav (index) {
                this.tableData2[index].fav = this.tableData2[index].fav === 0 ? 1 : 0;
            }
        },
        mounted () {
            this.changeTableColumns();
        }
    }
</script>

```

<!--divider-->

### 多种效果组合的表格

通过调用 `exportCsv()` 方法，可以将数据导出为 `.csv` 的表格文件，详见 API。

说明：

- 支持IE9~IE11、Edge、Chrome、Safari、Firefox 全系列浏览器。
- IE9、Safari 需要手动修改后缀名为 `.csv`。
- IE9暂时只支持英文，中文会显示为乱码。

```
<template>
    <div style="margin: 10px">
        Display border <i-switch v-model="showBorder" style="margin-right: 5px"></i-switch>
        Display stripe <i-switch v-model="showStripe" style="margin-right: 5px"></i-switch>
        Display index <i-switch v-model="showIndex" style="margin-right: 5px"></i-switch>
        Display multi choice <i-switch v-model="showCheckbox" style="margin-right: 5px"></i-switch>
        Display header <i-switch v-model="showHeader" style="margin-right: 5px"></i-switch>
        Table scrolling <i-switch v-model="fixedHeader" style="margin-right: 5px"></i-switch>
        <br>
        <br>
        Table size
        <Radio-group v-model="tableSize" type="button">
            <Radio label="large">large</Radio>
            <Radio label="default">medium(default)</Radio>
            <Radio label="small">small</Radio>
        </Radio-group>
    </div>
    <Table :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="fixedHeader ? 250 : ''" :size="tableSize" :data="tableData3" :columns="tableColumns3"></Table>
</template>
<script>
    export default {
        data () {
            return {
                tableData3: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    },
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ],
                showBorder: false,
                showStripe: false,
                showHeader: true,
                showIndex: true,
                showCheckbox: false,
                fixedHeader: false,
                tableSize: 'default'
            }
        },
        computed: {
            tableColumns3 () {
                let columns = [];
                if (this.showCheckbox) {
                    columns.push({
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    })
                }
                if (this.showIndex) {
                    columns.push({
                        type: 'index',
                        width: 60,
                        align: 'center'
                    })
                }
                columns.push({
                    title: 'Date',
                    key: 'date',
                    sortable: true
                });
                columns.push({
                    title: 'Name',
                    key: 'name'
                });
                columns.push({
                    title: 'Age',
                    key: 'age',
                    sortable: true,
                    filters: [
                        {
                            label: 'Greater than 25',
                            value: 1
                        },
                        {
                            label: 'Less than 25',
                            value: 2
                        }
                    ],
                    filterMultiple: false,
                    filterMethod (value, row) {
                        if (value === 1) {
                            return row.age > 25;
                        } else if (value === 2) {
                            return row.age < 25;
                        }
                    }
                });
                columns.push({
                    title: 'Address',
                    key: 'address',
                    filters: [
                        {
                            label: 'New York',
                            value: 'New York'
                        },
                        {
                            label: 'London',
                            value: 'London'
                        },
                        {
                            label: 'Sydney',
                            value: 'Sydney'
                        }
                    ],
                    filterMethod (value, row) {
                        return row.address.indexOf(value) > -1;
                    }
                });
                return columns;
            }
        }
    }
</script>

```

<!--divider-->

### 配置

### Table props

<!--table-->
| 参数                    | 说明                                       | 类型               | 默认值    |
| :-------------------- | :--------------------------------------- | :--------------- | :----- |
| data                  | 显示的结构化数据，其中，字段 cellClassName 用于设置任意单元格的样式名称，因此数据不能使用该字段，详见示例**特定样式**。 | Array            | []     |
| columns               | 表格列的配置描述，具体项见后文                          | Array            | []     |
| stripe                | 是否显示间隔斑马纹                                | Boolean          | false  |
| border                | 是否显示纵向边框                                 | Boolean          | false  |
| show-header           | 是否显示表头                                   | Boolean          | true   |
| width                 | 表格宽度，单位 px                               | Number \| String | 自动     |
| height                | 表格高度，单位 px，设置后，如果表格内容大于此值，会固定表头          | Number \| String | -      |
| loading               | 表格是否加载中                                  | Boolean          | false  |
| disabled-hover        | 禁用鼠标悬停时的高亮                               | Boolean          | false  |
| highlight-row         | 是否支持高亮选中的行，即单选                           | Boolean          | false  |
| row-class-name        | 行的 className 的回调方法，传入参数：`row`：当前行数据`index`：当前行的索引 | Function         | -      |
| size                  | 表格尺寸，可选值为 `large`、`small`、`default` 或者不填 | String           | -      |
| no-data-text          | 数据为空时显示的提示内容                             | String           | 暂无数据   |
| no-filtered-data-text | 筛选数据为空时显示的提示内容                           | String           | 暂无筛选结果 |
<!--table-->
<!--divider-->

### Table events

<!--table-->

| 事件名                 | 说明                                       | 返回值                                      |
| :------------------ | :--------------------------------------- | :--------------------------------------- |
| on-current-change   | 开启 `highlight-row` 后有效，当表格的当前行发生变化的时候会触发 | `currentRow`：当前高亮行的数<br>据`oldCurrentRow`：上一次高亮的数据 |
| on-select           | 在多选模式下有效，选中某一项时触发                        | `selection`：已选项数据<br>`row`：刚选择的项数据       |
| on-select-cancel    | 在多选模式下有效，取消选中某一项时触发                      | `selection`：已选项数据<br>`row`：取消选择的项数据      |
| on-select-all       | 在多选模式下有效，点击全选时触发                         | `selection`：已选项数据                        |
| on-selection-change | 在多选模式下有效，只要选中项发生变化时就会触发                  | `selection`：已选项数据                        |
| on-sort-change      | 排序时有效，当点击排序时触发                           | `column`：当前列数据<br>`key`：排序依据的指标<br>`order`：排序的顺序，值为 `asc` 或 `desc` |
| on-filter-change    | 筛选时有效，筛选条件发生变化时触发                        | 当前列数据                                    |
| on-row-click        | 单击某一行时触发                                 | 当前行的数据<br>index                          |
| on-row-dblclick     | 双击某一行时触发                                 | 当前行的数据<br>index                          |
| on-expand           | 展开或收起某一行时触发                              | `row`：当前行的数据<br>`status`：当前的状态           |

<!--table-->
<!--divider-->

### Table slot

<!--table-->

| 名称      | 说明   |
| :------ | :--- |
| header  | 表头   |
| footer  | 页脚   |
| loading | 加载中  |

<!--table-->
<!--divider-->

### Table methods


<!--table-->

| 方法名             | 说明                                       | 类型                                       |
| :-------------- | :--------------------------------------- | :--------------------------------------- |
| exportCsv       | 将数据导出为 `.csv` 文件，说明：支持IE9~IE11、Edge、Chrome、Safari、Firefox 全系列浏览器。IE9、Safari 需要手动修改后缀名为 `.csv`。IE9暂时只支持英文，中文会显示为乱码。 | params(Object): <br>1. **filename** 文件名，默认为 table.csv  <br>  2. **original** 是否导出为原始数据，默认为 true <br>3. **noHeader** 不显示表头，默认为 false<br> 4. **columns** 自定义导出的列数据 **data** 自定义导出的行数据<br> 5. **callback** 添加此函数后，不会下载，而是返回数据 <br>6. **separator** 数据分隔符，默认是逗号(,) <br>7. **quoted** 每项数据是否加引号，默认为 false<br>说明：columns 和 data 需同时声明，声明后将导出指定的数据，建议列数据有自定义render时，可以根据需求自定义导出内容 |
| clearCurrentRow | 清除高亮项，仅在开启 `highlight-row` 时可用           | 无                                        |

<!--table-->
<!--divider-->

### column

<!--table-->

| 参数             | 说明                                       | 类型       | 默认值   |
| :------------- | :--------------------------------------- | :------- | :---- |
| type           | 列类型，可选值为 index、selection、expand、html     | String   | -     |
| title          | 列头显示文字                                   | String   | #     |
| key            | 对应列内容的字段名                                | String   | -     |
| width          | 列宽                                       | Number   | -     |
| align          | 对齐方式，可选值为 `left` 左对齐、`right` 右对齐和 `center` 居中对齐 | String   | left  |
| className      | 列的样式名称                                   | String   | -     |
| fixed          | 列是否固定在左侧或者右侧，可选值为 `left` 左侧和 `right` 右侧  | String   | -     |
| ellipsis       | 开启后，文本将不换行，超出部分显示为省略号                    | Boolean  | false |
| render         | 自定义渲染列，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 row、column 和 index，分别指当前行数据，当前列数据，当前行索引，详见示例。[** 学习 Render 函数的内容](https://segmentfault.com/l/1500000008892728) | Function | -     |
| renderHeader   | 自定义列头显示内容，使用 Vue 的 Render 函数。传入两个参数，第一个是 h，第二个为对象，包含 `column` 和 `index`，分别为当前列数据和当前列索引。 | Function | -     |
| sortable       | 对应列是否可以排序，如果设置为 `custom`，则代表用户希望远程排序，需要监听 Table 的 on-sort-change 事件 | Boolean  | false |
| sortMethod     | 自定义排序使用的方法，接收三个参数 a 、 b 和 type，当设置 `sortable: true` 时有效。type 值为 asc 和 desc | Function | -     |
| sortType       | 设置初始化排序。值为 asc 和 desc                    | String   | -     |
| filters        | 过滤数据的选项，格式为数组，数组中每项包含 `label` 和 `value` 属性，使用过滤，必须同时配置 filterMethod | Array    | -     |
| filterMethod   | 数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示 | Function | -     |
| filterMultiple | 数据过滤的选项是否多选                              | Boolean  | true  |
| filteredValue  | 在初始化时使用过滤，数组，值为需要过滤的 value 集合            | Array    | -     |
| filterRemote   | 使用远程过滤                                   | Function | -     |

<!--table-->
<!--divider-->