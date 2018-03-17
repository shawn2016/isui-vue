## Menu 导航菜单

### 概述
为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。

```
注意：非 template/render 模式下，需使用 i-menu。
```

### 顶部导航
水平的顶部导航菜单。 通过设置属性 theme 为 light、dark、primary 可以选择主题。 通过事件 on-select 可以得到点击菜单的 name 值，从而控制页面路由或自定义操作。

```
<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            内容管理
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            用户管理
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">用户留存</MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="settings"></Icon>
            综合设置
        </MenuItem>
    </Menu>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme1">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
        <Radio label="primary"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>

```


<!--divider-->
### 侧栏导航
垂直导航菜单，可以内嵌子菜单。 设置 active-name 可以选中指定的菜单，设置 open-names 可以展开指定的子菜单。 设置属性 accordion 可以开启手风琴模式，每次只能展开一个子菜单。 通过设置属性 theme 为 light、dark 可以选择主题，侧栏菜单不支持 primary 主题。

```
<template>
    <Row>
        <Col span="8">
            <Menu :theme="theme2">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </Col>
        <Col span="8">
            <Menu :theme="theme2" active-name="1-2" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </Col>
        <Col span="8">
            <Menu :theme="theme2" :open-names="['1']" accordion>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-paper"></Icon>
                        内容管理
                    </template>
                    <MenuItem name="1-1">文章管理</MenuItem>
                    <MenuItem name="1-2">评论管理</MenuItem>
                    <MenuItem name="1-3">举报管理</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        用户管理
                    </template>
                    <MenuItem name="2-1">新增用户</MenuItem>
                    <MenuItem name="2-2">活跃用户</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="stats-bars"></Icon>
                        统计分析
                    </template>
                    <MenuGroup title="使用">
                        <MenuItem name="3-1">新增和启动</MenuItem>
                        <MenuItem name="3-2">活跃分析</MenuItem>
                        <MenuItem name="3-3">时段分析</MenuItem>
                    </MenuGroup>
                    <MenuGroup title="留存">
                        <MenuItem name="3-4">用户留存</MenuItem>
                        <MenuItem name="3-5">流失用户</MenuItem>
                    </MenuGroup>
                </Submenu>
            </Menu>
        </Col>
    </Row>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme2">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                theme2: 'light'
            }
        }
    }
</script>

```

<!--divider-->

### 内嵌菜单
垂直菜单，子菜单内嵌在菜单区域。

```
<template>
    <Menu active-name="1-2" :open-names="['1']">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-analytics"></Icon>
                Navigation One
            </template>
            <MenuGroup title="Item 1">
                <MenuItem name="1-1">Option 1</MenuItem>
                <MenuItem name="1-2">Option 2</MenuItem>
            </MenuGroup>
            <MenuGroup title="Item 2">
                <MenuItem name="1-3">Option 3</MenuItem>
                <MenuItem name="1-4">Option 4</MenuItem>
            </MenuGroup>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-filing"></Icon>
                Navigation Two
            </template>
            <MenuItem name="2-1">Option 5</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
            <Submenu name="3">
                <template slot="title">Submenu</template>
                <MenuItem name="3-1">Option 7</MenuItem>
                <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="ios-gear"></Icon>
                Navigation Three
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
        </Submenu>
    </Menu>
</template>
<script>
    export default {
        
    }
</script>

```


<!--divider-->
### 分组
使用 MenuGroup 组件进行分组。

```
<template>
    <Menu :theme="theme3" active-name="1">
        <MenuGroup title="内容管理">
            <MenuItem name="1">
                <Icon type="document-text"></Icon>
                文章管理
            </MenuItem>
            <MenuItem name="2">
                <Icon type="chatbubbles"></Icon>
                评论管理
            </MenuItem>
        </MenuGroup>
        <MenuGroup title="统计分析">
            <MenuItem name="3">
                <Icon type="heart"></Icon>
                用户留存
            </MenuItem>
            <MenuItem name="4">
                <Icon type="heart-broken"></Icon>
                流失用户
            </MenuItem>
        </MenuGroup>
    </Menu>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme3">
        <Radio label="light"></Radio>
        <Radio label="dark"></Radio>
    </RadioGroup>
</template>
<script>
    export default {
        data () {
            return {
                theme3: 'light'
            }
        }
    }
</script>

```

<!--divider-->

### API



### Menu props
<!--table-->
| 属性          | 说明                                       | 类型      | 默认值      |
| :---------- | :--------------------------------------- | :------ | :------- |
| mode        | 菜单类型，可选值为 horizontal（水平） 和 vertical（垂直）  | String  | vertical |
| theme       | 主题，可选值为 light、dark、primary，其中 primary 只适用于 mode="horizontal" | String  | light    |
| active-name | 激活菜单的 name 值                             | String  | Number   |
| open-names  | 展开的 Submenu 的 name 集合                    | Array   | []       |
| accordion   | 是否开启手风琴模式，开启后每次至多展开一个子菜单                 | Boolean | false    |
| width       | 导航菜单的宽度，只在 mode="vertical" 时有效，如果使用 Col 等布局，建议设置为 auto | String  | 240px    |
<!--table-->
<!--divider-->



### Menu events
<!--table-->
| 事件名            | 说明                | 返回值                      |
| :------------- | :---------------- | :----------------------- |
| on-select      | 选择菜单（MenuItem）时触发 | name                     |
| on-open-change | 当 展开/收起 子菜单时触发    | 当前展开的 Submenu 的 name 值数组 |
<!--table-->
<!--divider-->



### Menu methods
<!--table-->
| 方法名              | 说明                            | 参数   |
| :--------------- | :---------------------------- | :--- |
| updateOpened     | 手动更新展开的子目录，注意要在 $nextTick 里调用 | 无    |
| updateActiveName | 手动更新当前选择项，注意要在 $nextTick 里调用  | 无    |
<!--table-->
<!--divider-->



### MenuItem props
<!--table-->
| 属性   | 说明          | 类型     | 默认值    |
| :--- | :---------- | :----- | :----- |
| name | 菜单项的唯一标识，必填 | String | Number |
<!--table-->
<!--divider-->



### Submenu props
<!--table-->
| 属性   | 说明          | 类型     | 默认值    |
| :--- | :---------- | :----- | :----- |
| name | 子菜单的唯一标识，必填 | String | Number |
<!--table-->
<!--divider-->



### Submenu slot
<!--table-->
| 名称    | 说明    |
| :---- | :---- |
| 无     | 菜单项   |
| title | 子菜单标题 |
<!--table-->
<!--divider-->



### MenuGroup props
<!--table-->
| 属性    | 说明   | 类型     | 默认值  |
| :---- | :--- | :----- | :--- |
| title | 分组标题 | String | 空    |
<!--table-->
<!--divider-->
