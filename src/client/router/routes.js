const route = [
    {
        path: '/',
        redirect: '/index',
        meta: {
            title: 'hyui',
            hidden: true
        }
    },
    {
        path: '/index',
        name: 'index',
        component: resolve => require(['../views/index.vue'], resolve),
        meta: {
            title: '首页',
            hidden: true
        }
    },
    {
        path: '/basic',
        name: 'basic',
        component: resolve => require(['../views/index.vue'], resolve),
        meta: {
            title: 'basic'
        },
        children:[
            {
                path: '/basic/layout',
                name: 'layout',
                component: resolve => require(['../views/basic/layout.vue'], resolve),
                meta: {
                    title: '布局'
                }
            },{
                path: '/basic/container',
                name: 'container',
                component: resolve => require(['../views/basic/container.vue'], resolve),
                meta: {
                    title: '布局容器'
                }
            },{
                path: '/basic/color',
                name: 'color',
                component: resolve => require(['../views/basic/color.vue'], resolve),
                meta: {
                    title: '色彩'
                }
            },{
                path: '/basic/button',
                name: 'button',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '按钮'
                }
            }
        ]
    },
    {
        path: '/notice',
        name: 'notice',
        component: resolve => require(['../views/index.vue'], resolve),
        meta: {
            title: 'notice'
        },
        children:[
            {
                path: '/notice/loading',
                name: 'loading',
                component: resolve => require(['../views/notice/loading.vue'], resolve),
                meta: {
                    title: '加载'
                }
            },{
                path: '/notice/message',
                name: 'message',
                component: resolve => require(['../views/notice/message.vue'], resolve),
                meta: {
                    title: '消息提示'
                }
            },{
                path: '/notice/alert',
                name: 'alert',
                component: resolve => require(['../views/notice/alert.vue'], resolve),
                meta: {
                    title: '警告'
                }
            },{
                path: '/notice/confirm',
                name: 'confirm',
                component: resolve => require(['../views/notice/confirm.vue'], resolve),
                meta: {
                    title: '确认'
                }
            },{
                path: '/notice/messageBox',
                name: 'messageBox',
                component: resolve => require(['../views/notice/alert.vue'], resolve),
                meta: {
                    title: '弹框'
                }
            },{
                path: '/notice/notification',
                name: 'notification',
                component: resolve => require(['../views/notice/alert.vue'], resolve),
                meta: {
                    title: '通知'
                }
            }
        ]
    },
    {
        path: '/form',
        name: 'form',
        component: resolve => require(['../views/index.vue'], resolve),
        meta: {
            title: 'form'
        },
        children:[
            {
                path: '/form/radio',
                name: 'radio',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '单选框'
                }
            },{
                path: '/form/checkbox',
                name: 'checkbox',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '复选框'
                }
            },{
                path: '/form/input',
                name: 'input',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '输入框'
                }
            },{
                path: '/form/select',
                name: 'select',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '选择器'
                }
            },{
                path: '/form/switch',
                name: 'switch',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '开关'
                }
            },{
                path: '/form/slider',
                name: 'slider',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '滑块'
                }
            }
        ]
    },
    {
        path: '/data',
        name: 'data',
        component: resolve => require(['../views/index.vue'], resolve),
        meta: {
            title: 'data'
        },
        children:[
            {
                path: '/data/table',
                name: 'table',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '表格'
                }
            },{
                path: '/data/tag',
                name: 'tag',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '标签'
                }
            },{
                path: '/data/progress',
                name: 'progress',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '进度条'
                }
            },{
                path: '/data/pagination',
                name: 'pagination',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '分页'
                }
            },{
                path: '/data/badge',
                name: 'badge',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '标记'
                }
            },{
                path: '/data/tree',
                name: 'tree',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '树形控件'
                }
            }
        ]
    },
    {
        path: '/other',
        name: 'other',
        component: resolve => require(['../views/index.vue'], resolve),
        meta: {
            title: 'other'
        },
        children:[
            {
                path: '/other/dialog',
                name: 'dialog',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '对话框'
                }
            },{
                path: '/other/tooltip',
                name: 'tooltip',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '文字提示'
                }
            },{
                path: '/other/popover',
                name: 'popover',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '弹出框'
                }
            },{
                path: '/other/card',
                name: 'card',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '卡片'
                }
            },{
                path: '/other/carousel',
                name: 'carousel',
                component: resolve => require(['../views/basic/button.vue'], resolve),
                meta: {
                    title: '走马灯'
                }
            }
        ]
    }
];
export default route;
