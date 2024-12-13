// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import index from '../view/index.vue';
import myPublish from '../view/user/my-publish/index.vue';
import myComments from '../view/user/my-comments/index.vue';
import allComments from '../view/user/all-comments/index.vue';
import allProducts from '../view/user/all-products/index.vue';
import details from '../view/details/index.vue';
import chat from '../view/chat/index.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: index
    },
    {
        path: '/my-publish',
        name: 'MyPublish',
        component: myPublish
    },
    {
        path: '/my-comments',
        name: 'MyComments',
        component: myComments
    },
    {
        path: '/all-comments',
        name: 'AllComments',
        component: allComments
    },
    {
        path: '/all-products',
        name: 'AllProducts',
        component: allProducts
    },
    {
        path: '/details',
        name: 'Details',
        component: details
    },
    {
        path: '/chat',
        name: 'Chat',
        component: chat
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes // `routes: routes` 的缩写
});

export default router;
