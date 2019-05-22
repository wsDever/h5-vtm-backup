export default [
	// 注册设置密码前签约页面
	{
		name: 'register.agreement',
		path: '/account/agreement',
		meta: {
			header: {
				left: 'backward',
				title: '江海经济圈用户注册协议',
			},
			bg: 'grey',
		},
		component: () =>
			import(
				/* webpackChunkName: "register-agreement" */ '@page/register/agreement'
				),
	},
	{
		name: 'home',
		path: '/',
		component: () =>
			import(/* webpackChunkName: "home-page" */ '@page/home/home-page'),
	},
	//---------------微店---------------//
	{
		name: 'shop',
		path: '/shop',
		meta: {
			keepScroll: true,
		},
		component: () =>
			import(/* webpackChunkName: "shop-page" */ '@page/shop/shop-page'),
	},
	{
		name: 'investmentList',
		path: '/investment-list',
		meta: {
			header: {
				left: 'backward',
				title: '投顾产品',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "investmentList" */ '@page/shop/investment-list/investment-list'),
	},
	{
		name: 'investmentRemove',
		path: '/investment-remove',
		meta: {
			header: {
				left: 'backward',
				title: '投顾产品管理',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "investmentList" */ '@page/shop/investment-list/investment-list'),
	},
	{
		name: 'investmentAdd',
		path: '/investment-add',
		meta: {
			header: {
				left: 'backward',
				title: '添加投顾产品',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "investmentList" */ '@page/shop/investment-list/investment-list'),
	},
	{
		name: 'statistics',
		path: '/statistics',
		meta: {
			header: {
				left: 'backward',
				title: '数据统计',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "statistics" */ '@page/shop/statistics/statistics'),
	},
	{
		name: 'myshop',
		path: '/myshop',
		meta: {
			header: {
				left: 'backward',
				title: '金融微店',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "myshop" */ '@page/shop/myshop/myshop'),
	},
	{
		name: 'shopHome',
		path: '/shopHome',
		meta: {
			header: {
				left: 'backward',
				title: '金融微店',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "shopHome" */ '@page/shop/shop-home/shop-home'),
	},
	{
		name: 'signature',
		path: '/signature',
		meta: {
			header: {
				left: 'backward',
				title: '设置签名',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "signature" */ '@page/shop/signature/signature'),
	},
	{
		name: 'playground',
		path: '/playground',
		meta: {
			header: {
				left: 'backward',
				title: '微店广场',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "playground" */ '@page/shop/playground/playground'),
	},
	{
		name: 'background',
		path: '/background',
		meta: {
			header: {
				left: 'backward',
				title: '背景选择',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "background" */ '@page/shop/background/background'),
	},
	{
		name: 'template',
		path: '/template',
		meta: {
			header: {
				left: 'backward',
				title: '模板选择',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "background" */ '@page/shop/shop-home/template-choose'),
	},
	{
		name: 'hotpointList',
		path: '/hotpoint',
		meta: {
			header: {
				left: 'backward',
				title: '热点概念',
			},
			bg: 'grey',
			type: 'hotpoint',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "news" */ '@page/shop/news/news'),
	},
	{
		name: 'hotpointRemove',
		path: '/hotpointRemove',
		meta: {
			header: {
				left: 'backward',
				title: '热点概念管理',
			},
			bg: 'grey',
			keepScroll: true,
			type: 'hotpoint',
		},
		component: () => import(/* webpackChunkName: "news" */ '@page/shop/news/news'),
	},
	{
		name: 'hotpointAdd',
		path: '/hotpointAdd',
		meta: {
			header: {
				left: 'backward',
				title: '添加热点概念',
			},
			bg: 'grey',
			type: 'hotpoint',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "news" */ '@page/shop/news/news'),
	},
	{
		name: 'financeList',
		path: '/finance',
		meta: {
			header: {
				left: 'backward',
				title: '图说财经',
			},
			bg: 'grey',
			type: 'finance',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "news" */ '@page/shop/news/news'),
	},
	{
		name: 'financeRemove',
		path: '/financeRemove',
		meta: {
			header: {
				left: 'backward',
				title: '图说财经管理',
			},
			bg: 'grey',
			type: 'finance',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "news" */ '@page/shop/news/news'),
	},
	{
		name: 'financeAdd',
		path: '/financeAdd',
		meta: {
			header: {
				left: 'backward',
				title: '添加图说财经',
			},
			bg: 'grey',
			type: 'finance',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "news" */ '@page/shop/news/news'),
	},
	{
		name: 'hotpointDetail',
		path: '/hotpointDetail',
		meta: {
			header: {
				left: 'backward',
				title: '热点概念',
			},
			bg: 'grey',
			type: 'hotpoint',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "hotpointDetail" */ '@page/shop/hotpoint/detail'),
	},
	{
		name: 'hotpointConcept',
		path: '/hotpointConcept',
		meta: {
			header: {
				left: 'backward',
				title: '概念详情',
			},
			bg: 'grey',
			type: 'hotpoint',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "hotpointConcept" */ '@page/shop/hotpoint/concept'),
	},
	//---------------end---------------//

	//---------------我的频道---------------//
	{
		name: 'personInfo',
		path: '/personInfo',
		meta: {
			header: {
				left: 'backward',
				title: '个人资料',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "personInfo" */ '@page/mine/personInfo/personInfo'),
	},
	{
		name: 'more',
		path: '/more',
		meta: {
			header: {
				left: 'backward',
				title: '更多',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "more" */ '@page/mine/personInfo/more'),
	},
	//---------------end---------------//

	//---------------开户---------------//
	{
		name: 'accountOpeningStatistics',
		path: '/accountOpening/statistics',
		meta: {
			header: {
				left: 'backward',
				title: '开户统计',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "accountOpeningStatistics" */ '@page/accountOpening/statistics/statistics'),
	},
	{
		name: 'accountOpeningDetails',
		path: '/accountOpening/details',
		meta: {
			header: {
				left: 'backward',
				title: '明细',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "accountOpeningDetails" */ '@page/accountOpening/details/details'),
	},
	{
		name: 'accountOpeningDate',
		path: '/accountOpening/date',
		meta: {
			header: {
				left: 'backward',
				title: '',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "accountOpeningDetails" */ '@page/accountOpening/date/date'),
	},
	{
		name: 'accountOpeningScheduleList',
		path: '/accountOpening/schedule/list',
		meta: {
			header: {
				left: 'backward',
				title: '开户进度',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "accountOpeningScheduleList" */ '@page/accountOpening/schedule/list'),
	},
	{
		name: 'accountOpeningScheduleDetail',
		path: '/accountOpening/schedule/detail',
		meta: {
			header: {
				left: 'backward',
				title: '进度明细',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "accountOpeningScheduleDetail" */ '@page/accountOpening/schedule/detail'),
	},
	{
		name: 'accountOpeningScheduleCountSearch',
		path: '/accountOpening/schedule/countSearch',
		meta: {
			header: {
				left: 'backward',
				title: '进度查询',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "accountOpeningScheduleCountSearch" */ '@page/accountOpening/schedule/countSearch'),
	},
	{
		name: 'accountOpeningScheduleSearch',
		path: '/accountOpening/schedule/scheduleSearch',
		meta: {
			header: {
				left: 'backward',
				title: '',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "accountOpeningScheduleSearch" */ '@page/accountOpening/schedule/scheduleSearch'),
	},
	//---------------end---------------//

	//---------------销售---------------//
	{
		name: 'salesStatistics',
		path: '/sales/statistics',
		meta: {
			header: {
				left: 'backward',
				title: '销售统计',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "salesStatistics" */ '@page/sales/statistics'),
	},
	{
		name: 'salesList',
		path: '/sales/list',
		meta: {
			header: {
				left: 'backward',
				title: '销售列表',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "salesList" */ '@page/sales/list'),
	},
	{
		name: 'salesDetails',
		path: '/sales/details',
		meta: {
			header: {
				left: 'backward',
				title: '订单明细',
			},
			bg: 'grey',
			keepScroll: true,
		},
		component: () => import(/* webpackChunkName: "salesDetails" */ '@page/sales/details'),
	},
	//---------------end---------------//
	{
		name: 'productCenter',
		path: '/productCenter',
		meta: {
			header: {
				title: '产品中心',
				left: 'backward',
				styles: {
					height: 96,
				},
			},
			footer: true,
		},
		component: () =>
			import(/* webpackChunkName: "home-page" */ '@page/productCenter'),
	},
	{
		name: 'productDetail',
		path: '/productDetail',
		meta: {
			header: {
				title: '产品详情',
				left: 'backward',
				styles: {
					height: 96,
				},
			},
			footer: true,
		},
		component: () =>
			import(/* webpackChunkName: "home-page" */ '@page/productCenter/productDetail'),
	},
	{
		name: 'rangingList',
		path: '/rangingList',
		meta: {
			header: {
				title: '',
				left: 'backward',
				styles: {
					height: 96,
				},
			},
			footer: true,
		},
		component: () =>
			import(/* webpackChunkName: "home-page" */ '@page/rangingList'),
	},
	{
		name: 'rangingUser',
		path: '/rangingUser',
		meta: {
			header: {
				title: '$query.title',
				left: 'backward',
				styles: {
					height: 96,
				},
			},
			footer: true,
		},
		component: () =>
			import(/* webpackChunkName: "home-page" */ '@page/rangingList/rangingUser'),
	},
	{
		name: 'waitingEvent',
		path: '/waitingEvent',
		meta: {
			header: {
				title: '待办事项',
				left: 'backward',
				styles: {
					height: 96,
				},
			},
			footer: true,
		},
		component: () =>
			import(/* webpackChunkName: "home-page" */ '@page/waitingEvent'),
	},
	{
		name: 'addEvent',
		path: '/addEvent',
		meta: {
			header: {
				title: '添加待办事项',
				left: 'backward',
				styles: {
					height: 96,
				},
			},
			footer: true,
		},
		component: () =>
			import(/* webpackChunkName: "home-page" */ '@page/waitingEvent/addEvent'),
	},
	{
    name: 'financingDetail',
    path: '/financingDetail',
    meta: {
      header: {
        title: '理财产品',
        left: 'backward',
        styles: {
          height: 96
        }
      },
      footer: true
    },
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@page/productCenter/financing')
  },
  {
    name: 'customer',
    path: '/customer',
    meta: {
      header: {
        title: '',
        left: '客户',
        styles: {
          height: 96
        }
      },
      footer: true
    },
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@page/customer')
  },
  {
    name: 'customerDetail',
    path: '/customerDetail',
    meta: {
      header: {
        title: '客户详情',
        left: 'backward',
        styles: {
          height: 96
        }
      },
      footer: true
    },
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@page/customer/customerDetail')
  },
  {
    name: 'customerBasic',
    path: '/customerBasic',
    meta: {
      header: {
        title: '基本信息',
        left: 'backward',
        styles: {
          height: 96
        }
      },
      footer: true
    },
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@page/customer/customerBasic')
  },
  {
    name: 'customerTrend',
    path: '/customerTrend',
    meta: {
      header: {
        title: '客户动态',
        left: 'backward',
        styles: {
          height: 96
        }
      },
      footer: true
    },
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@page/customer/customerTrend')
  },
  {
    name: 'customerTrendDetail',
    path: '/customerTrendDetail',
    meta: {
      header: {
        title: '客户动态',
        left: 'backward',
        styles: {
          height: 96
        }
      },
      footer: true
    },
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@page/customer/customerTrendDetail')
  },
  {
    name: 'customerServer',
    path: '/customerServer',
    meta: {
      header: {
        title: '服务记录',
        left: 'backward',
        styles: {
          height: 96
        }
      },
      footer: true
    },
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@page/customer/server')
  },
  {
    name: 'addCustomerServer',
    path: '/addCustomerServer',
    meta: {
      header: {
        title: '服务记录',
        left: 'backward',
        styles: {
          height: 96
        }
      },
      footer: true
    },
    component: () =>
      import(/* webpackChunkName: "home-page" */ '@page/customer/server/addCustomerServer')
  },
  // {
  //   name: 'customerSearch',
  //   path: '/customerSearch',
  //   meta: {
  //     header: {
  //       title: '客户搜索',
  //       left: 'backward',
  //       styles: {
  //         height: 96
  //       }
  //     },
  //     footer: true
  //   },
  //   component: () =>
  //     import(/* webpackChunkName: "home-page" */ '@page/customer/search/customerSearch')
  // }
]
