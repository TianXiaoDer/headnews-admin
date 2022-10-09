
export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/manage/userAudit',
    name: 'userAudit',
    icon: 'table',
    component: './manage/userAudit',
  },
  {
    path: '/manage/channelManage',
    name: 'channelManage',
    icon: 'table',
    component: './manage/channelManage',
  },
  {
    path: '/manage/contentAudit',
    name: 'contentAudit',
    icon: 'table',
    component: './manage/contentAudit',
  },
  {
    path: '/manage/contentManage',
    name: 'contentManage',
    icon: 'table',
    component: './manage/contentManage',
  },
  {
    path: '/manage/sensitiveWordSetting',
    name: 'sensitiveWordSetting',
    icon: 'table',
    component: './manage/sensitiveWordSetting',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
