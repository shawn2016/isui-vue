import _import from '../utils/_import_development'
const routerList = {
    documents: [
        { path: "/cn/quick-start", component: _import('pages/quick-start') },
        { path: "/cn/theme", component: _import('pages/theme') },
        { path: "/cn/update", component: _import('pages/update') },
        { path: "/cn/recommendation", component: _import('pages/recommendation') }

    ],
    components: {
        'Basic': [
            { path: "/cn/grid", component: _import('pages/grid') },
            { path: "/cn/button", component: _import('pages/button') },
            { path: "/cn/color", component: _import('pages/color') },
            { path: "/cn/font", component: _import('pages/font') },
            { path: "/cn/icon", component: _import('pages/icon') },

            // { path: "/cn/quick-start2", component: _import('components/quick-start2') }
        ],
        'Form': [
            { path: "/cn/input", component: _import('pages/input') },
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