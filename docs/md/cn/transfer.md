## Transfer 穿梭框

### 概述
双栏穿梭选择框，常用于将多个项目从一边移动到另一边。
### 基础用法
基本用法，展示了 data、target-keys、每行的渲染函数 render-format 以及回调函数 on-change 的用法。

```
<template>
    <Transfer
        :data="data1"
        :target-keys="targetKeys1"
        :render-format="render1"
        @on-change="handleChange1"></Transfer>
</template>
<script>
    export default {
        data () {
            return {
                data1: this.getMockData(),
                targetKeys1: this.getTargetKeys()
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            render1 (item) {
                return item.label;
            },
            handleChange1 (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys1 = newTargetKeys;
            }
        }
    }
</script>

```

<!--divider-->

### 搜索
通过设置属性 filterable 可以进行搜索，可以自定义搜索函数。

```
<template>
    <Transfer
        :data="data2"
        :target-keys="targetKeys2"
        filterable
        :filter-method="filterMethod"
        @on-change="handleChange2"></Transfer>
</template>
<script>
    export default {
        data () {
            return {
                data2: this.getMockData(),
                targetKeys2: this.getTargetKeys()
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            handleChange2 (newTargetKeys) {
                this.targetKeys2 = newTargetKeys;
            },
            filterMethod (data, query) {
                return data.label.indexOf(query) > -1;
            }
        }
    }
</script>

```

<!--divider-->

### 高级用法
穿梭框高级用法，可以自定义两列的宽高、操作文案，以及底部自定义操作，更多配置见 API。

```
<template>
    <Transfer
        :data="data3"
        :target-keys="targetKeys3"
        :list-style="listStyle"
        :render-format="render3"
        :operations="['To left','To right']"
        filterable
        @on-change="handleChange3">
        <div :style="{float: 'right', margin: '5px'}">
            <Button type="ghost" size="small" @click="reloadMockData">Refresh</Button>
        </div>
    </Transfer>
</template>
<script>
    export default {
        data () {
            return {
                data3: this.getMockData(),
                targetKeys3: this.getTargetKeys(),
                listStyle: {
                    width: '250px',
                    height: '300px'
                }
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            handleChange3 (newTargetKeys) {
                this.targetKeys3 = newTargetKeys;
            },
            render3 (item) {
                return item.label + ' - ' + item.description;
            },
            reloadMockData () {
                this.data3 = this.getMockData();
                this.targetKeys3 = this.getTargetKeys();
            }
        }
    }
</script>

```

<!--divider-->

### 自定义渲染行数据
可以通过 render-format 来渲染复杂的数据。

```
<template>
    <Transfer
        :data="data4"
        :target-keys="targetKeys4"
        :render-format="render4"
        @on-change="handleChange4"></Transfer>
</template>
<script>
    export default {
        data () {
            return {
                data4: this.getMockData(),
                targetKeys4: this.getTargetKeys()
            }
        },
        methods: {
            getMockData () {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            getTargetKeys () {
                return this.getMockData()
                        .filter(() => Math.random() * 2 > 1)
                        .map(item => item.key);
            },
            handleChange4 (newTargetKeys) {
                this.targetKeys4 = newTargetKeys;
            },
            render4 (item) {
                return item.label + ' - ' + item.description;
            }
        }
    }
</script>

```

<!--divider-->




### Transfer props
<!--table-->
| 属性                 | 说明                                       | 类型       | 默认值                |
| :----------------- | :--------------------------------------- | :------- | :----------------- |
| data               | 数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。  | Array    | []                 |
| targetKeys         | 显示在右侧框数据的key集合                           | Array    | []                 |
| render-format      | 每行数据渲染函数，该函数的入参为 data 中的项                | Function | 默认显示label，没有时显示key |
| selected-keys      | 设置哪些项应该被选中                               | Array    | []                 |
| list-style         | 两个穿梭框的自定义样式                              | Object   | {}                 |
| titles             | 标题集合，顺序从左至右                              | Array    | ['源列表', '目的列表']    |
| operations         | 操作文案集合，顺序从上至下                            | Array    | []                 |
| filterable         | 是否显示搜索框                                  | Boolean  | false              |
| filter-placeholder | 搜索框的占位                                   | String   | 请输入搜索内容            |
| filter-method      | 自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词 | Function | 默认搜索label          |
| not-found-text     | 当列表为空时显示的内容                              | String   | 列表为空               |
<!--table-->
<!--divider-->



### Transfer events
<!--table-->
| 事件名                | 说明              | 返回值                                    |
| :----------------- | :-------------- | :------------------------------------- |
| on-change          | 选项在两栏之间转移时的回调函数 | targetKeys, direction, moveKeys        |
| on-selected-change | 选中项发生变化时触发      | sourceSelectedKeys, targetSelectedKeys |
<!--table-->
<!--divider-->



### Transfer slot
<!--table-->
| 名称   | 说明      |
| :--- | :------ |
| 无    | 自定义底部内容 |
<!--table-->
<!--divider-->
