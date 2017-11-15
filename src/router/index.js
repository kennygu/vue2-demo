// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: HelloWorld
//     }
//   ]
// })




import App from '../App'

const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')
const search = r => require.ensure([], () => r(require('../pages/search/search')), 'search')
const msite = r => require.ensure([], () => r(require('../pages/msite/msite')), 'msite')


const login = r => require.ensure([], () => r(require('../pages/login/login')), 'login')
const profile = r => require.ensure([], () => r(require('../pages/profile/profile')), 'profile')
const info = r => require.ensure([], () => r(require('../pages/profile/children/info')), 'info')
const setusername = r => require.ensure([], () => r(require('../pages/profile/children/setusername')), 'setusername')
const order = r => require.ensure([], () => r(require('../pages/order/order')), 'order')
const service = r => require.ensure([], () => r(require('../pages/service/service')), 'service')
const questionDetail = r => require.ensure([], () => r(require('../pages/service/children/questionDetail')), 'questionDetail')






export default [{
  path: '/',
  component: App, //顶层路由，对应index.html
  children: [ //二级路由。对应App.vue
    //地址为空时跳转home页面
    {
      path: '',
      redirect: '/home'
    },
    //首页城市列表页
    {
      path: '/home',
      component: home
    },
    //当前选择城市页---->跳转到首页
    {
      path: '/city/:cityid',
      redirect: '/msite'
    },
    //站点首页
    {
      path: '/msite',
      component: msite,
      meta: { keepAlive: true },
    },
    //搜索页
    {
      path: '/search/:geohash',
      component: search,
      meta: { keepAlive: true },
    },
    //登录注册页
    {
      path: '/login',
      component: login
    },
    //个人信息页
    {
      path: '/profile',
      component: profile,
      children: [{
        path: 'info', //个人信息详情页
        component: info,

      },
        {
          path: 'setusername',
          component: setusername,
        },
        {
          path: 'service', //服务中心
          component: service,
        },]
    },
    //服务中心
    {
      path: '/service',
      component: service,
      children: [{
        path: 'questionDetail', //订单详情页
        component: questionDetail,
      }, ]
    },
    //订单列表页
    {
      path: '/order',
      component: order
    }


  ]
}]
