import _import from '../utils/_import_development'
const routerList = {
    documents: [
        { path: "/", component: _import('components/HelloWorld') },
        { path: "/:lang/quick-start", component: _import('components/quick-start') }
    ],
    components: {
        'Basic': [
            { path: "/:lang/quick-start1", component: _import('components/quick-start1') },
            { path: "/:lang/quick-start2", component: _import('components/quick-start2') }
        ],
        'Form': [
            { path: "/:lang/quick-start3", component: _import('components/quick-start3') },
            { path: "/:lang/quick-start4", component: _import('components/quick-start4') }
        ]
    },
    redirect: [
        //重定向到 quick start 页面
        { path: "", redirect: "/cn/quick-start" }
    ]
}
export default routerList