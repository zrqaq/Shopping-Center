const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '新闻资讯管理',
					icon: '',
					child:[

						{
							name:'新闻资讯',
							url:'/index/newsList'
						},
					]
				},
				{
					name: '商品信息管理',
					icon: '',
					child:[

						{
							name:'商品信息',
							url:'/index/shangpinxinxiList'
						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: "基于Web端的服装购物网站的设计与实现"
        } 
    }
}
export default config
