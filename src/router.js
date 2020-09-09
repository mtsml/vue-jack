import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Detail from './components/Detail';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: App },
    { path: '/detail', component: Detail }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;