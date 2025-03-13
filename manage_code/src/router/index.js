	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import address from '@/views/address/list'
	import shangpinxinxi from '@/views/shangpinxinxi/list'
    import menu_manage from '@/views/menu_manage/list'
	import storeup from '@/views/storeup/list'
	import users from '@/views/users/list'
	import shangjia from '@/views/shangjia/list'
	import chat from '@/views/chat/list'
	import yonghu from '@/views/yonghu/list'
	import discussshangpinxinxi from '@/views/discussshangpinxinxi/list'
	import orders from '@/views/orders/list'
	import kucunxinxi from '@/views/kucunxinxi/list'
	import shangpinleixing from '@/views/shangpinleixing/list'
	import config from '@/views/config/list'
	import usersCenter from '@/views/users/center'
	import shangjiaRegister from '@/views/shangjia/register'
	import shangjiaCenter from '@/views/shangjia/center'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/usersCenter',
			name: '管理员个人中心',
			component: usersCenter
		}
		,{
			path: '/shangjiaCenter',
			name: '商家个人中心',
			component: shangjiaCenter
		}
		,{
			path: '/news',
			name: '新闻资讯',
			component: news
		}
		,{
			path: '/address',
			name: '地址',
			component: address
		}
		,{
			path: '/shangpinxinxi',
			name: '商品信息',
			component: shangpinxinxi
		}
        ,{
            path: '/menu',
            name: '菜单权限管理',
            component: menu_manage
        }
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/users',
			name: '管理员',
			component: users
		}
		,{
			path: '/shangjia',
			name: '商家',
			component: shangjia
		}
		,{
			path: '/chat',
			name: '客服聊天',
			component: chat
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/discussshangpinxinxi',
			name: '商品信息评论-评论',
			component: discussshangpinxinxi
		}
		,{
			path: '/orders',
			name: '订单管理',
			component: orders
		}
		,{
			path: '/kucunxinxi',
			name: '库存信息',
			component: kucunxinxi
		}
		,{
			path: '/shangpinleixing',
			name: '商品类型',
			component: shangpinleixing
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		]
	},
	{
		path: '/shangjiaRegister',
		name: '商家注册',
		component: shangjiaRegister
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
