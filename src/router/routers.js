import routerList from './routerList'
// 获取所有路由
const getRouters = (obj) => {
    let _obj = obj || routerList;
    let arr = [];
    for (let a in _obj) {
        if (_obj[a] instanceof Array) {
            arr = arr.concat(_obj[a])
        } else {
            arr = arr.concat(getRouters(_obj[a]))
        }
    }
    return arr
}

export default getRouters()