import { RouteRecordRaw } from "vue-router";
import NoAuthView from "@/views/NoAuthView.vue";
import AddQuestionView from "@/views/question/AddQuestionView.vue";
import ManagerQuestionView from "@/views/question/ManagerQuestionView.vue";
import QuestionsView from "@/views/question/QuestionsView.vue";
import ViewQuestionView from "@/views/question/ViewQuestionView.vue";
import accessEnum from "@/access/accessEnum";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";

import UserLayout from "@/layouts/UserLayout.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "主页",
    component: QuestionsView,
  },
  {
    path: "/questions",
    name: "浏览题目",
    component: QuestionsView,
  },
  {
    path: "/add/question",
    name: "创建题目",
    component: AddQuestionView,
    meta: {
      access: accessEnum.USER,
    },
  },
  {
    path: "/update/question",
    name: "更新题目",
    component: AddQuestionView,
    meta: {
      access: accessEnum.USER,
      hideInMenu: true,
    },
  },
  {
    path: "/manager/question",
    name: "管理题目",
    component: ManagerQuestionView,
    meta: {
      access: accessEnum.ADMIN,
    },
  },
  {
    path: "/view/question/:id",
    name: "在线做题",
    component: ViewQuestionView,
    props: true,
    meta: {
      access: accessEnum.USER,
      hideInMenu: true,
    },
  },
  // {
  //   path: "/hide",
  //   name: "隐藏页面",
  //   component: HomeView,
  //   meta: {
  //     hideInMenu: true,
  //   },
  // },
  // {
  //   path: "/admin",
  //   name: "管理员页面",
  //   component: AdminView,
  //   meta: {
  //     access: accessEnum.ADMIN,
  //   },
  // },
  {
    path: "/noAuth",
    name: "无权限页面",
    component: NoAuthView,
    meta: {
      hideInMenu: true,
    },
  },
  // {
  //   path: "/about",
  //   name: "关于我的",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
];
