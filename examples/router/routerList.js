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
            {
                path: '/cn/input',
                component: _import('pages/input'),
            },
            {
                path: '/cn/radio',
                component: _import('pages/radio'),
            },
            {
                path: '/cn/checkbox',
                component: _import('pages/checkbox'),
            },
            {
                path: '/cn/switch',
                component: _import('pages/switch'),
            },
            {
                path: '/cn/table',
                component: _import('pages/table'),
            },
            {
                path: '/cn/select',
                component: _import('pages/select'),
            },
            {
                path: '/cn/auto-complete',
                component: _import('pages/auto-complete'),
            },
            {
                path: '/cn/slider',
                component: _import('pages/slider'),
            },
            {
                path: '/cn/date-picker',
                component: _import('pages/date-picker'),
            },
            {
                path: '/cn/time-picker',
                component: _import('pages/time-picker'),
            },
            {
                path: '/cn/cascader',
                component: _import('pages/cascader'),
            },
            {
                path: '/cn/transfer',
                component: _import('pages/transfer'),
            },
            {
                path: '/cn/input-number',
                component: _import('pages/input-number'),
            },
            {
                path: '/cn/rate',
                component: _import('pages/rate'),
            },
            {
                path: '/cn/upload',
                component: _import('pages/upload'),
            },
            {
                path: '/cn/color-picker',
                component: _import('pages/color-picker'),
            },
            {
                path: '/cn/form',
                component: _import('pages/form'),
            }
        ],
        'View': [
            {
                path: '/cn/alert',
                component: _import('pages/alert')
            },
            {
                path: '/cn/card',
                component: _import('pages/card')
            },
            {
                path: '/cn/message',
                component: _import('pages/message')
            },
            {
                path: '/cn/notice',
                component: _import('pages/notice')
            },
            {
                path: '/cn/modal',
                component: _import('pages/modal')
            },
            {
                path: '/cn/progress',
                component: _import('pages/progress')
            },
            {
                path: '/cn/avatar',
                component: _import('pages/avatar')
            },
            {
                path: '/cn/badge',
                component: _import('pages/badge')
            },
            {
                path: '/cn/collapse',
                component: _import('pages/collapse')
            },
            {
                path: '/cn/timeline',
                component: _import('pages/timeline')
            },
            {
                path: '/cn/tag',
                component: _import('pages/tag')
            },
            {
                path: '/cn/tooltip',
                component: _import('pages/tooltip')
            },
            {
                path: '/cn/poptip',
                component: _import('pages/poptip')
            },
            {
                path: '/cn/carousel',
                component: _import('pages/carousel')
            },
            {
                path: '/cn/tree',
                component: _import('pages/tree')
            }
        ],
        'Navigation':[
            {
                path: '/cn/menu',
                component: _import('pages/menu'),
            },
            {
                path: '/cn/tabs',
                component: _import('pages/tabs'),
            },
            {
                path: '/cn/dropdown',
                component: _import('pages/dropdown'),
            },
            {
                path: '/cn/page',
                component: _import('pages/page'),
            },
            {
                path: '/cn/breadcrumb',
                component: _import('pages/breadcrumb'),
            },
            {
                path: '/cn/steps',
                component: _import('pages/steps'),
            },
            {
                path: '/cn/loading-bar',
                component: _import('pages/loading-bar'),
            }
        ],
        'Chart':[{
            path: '/cn/circle',
                component: _import('pages/circle'),
        }],
        'Other':[
            {
                path: '/cn/affix',
                component: _import('pages/affix'),
            },{
                path: '/cn/back-top',
                component: _import('pages/back-top'),
            },{
                path: '/cn/spin',
                component: _import('pages/spin'),
            },{
                path: '/cn/scroll',
                component: _import('pages/scroll'),
            },
        ]
    },
    redirect: [
        //重定向到 quick start 页面
        { path: "", redirect: "/cn/quick-start" }
    ]
}
export default routerList