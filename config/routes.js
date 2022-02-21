export default [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/home' },
      {
        path: '/home',
        name: '首页',
        component: './home',
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
