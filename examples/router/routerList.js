import _import from '../utils/_import_development'
const routerList = {
    documents: [
        { path: "/", component: _import('pages/home') },
        // { path: "/cn/quick-start", component: _import('components/quick-start') }
    ],
    components: {
        'Basic': [
            { path: "/cn/button", component: _import('pages/button') },
            // { path: "/cn/quick-start2", component: _import('components/quick-start2') }
        ],
        'Form': [
            // { path: "/cn/quick-start3", component: _import('components/quick-start3') },
            // { path: "/cn/quick-start4", component: _import('components/quick-start4') }
        ]
    },
    redirect: [
        //重定向到 quick start 页面
        { path: "", redirect: "/cn/quick-start" }
    ]
}
export default routerList