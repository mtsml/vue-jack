import Vue from 'vue'
import VueRouter from 'vue-router'
import ChannelList from './components/ChannelList'
import Detail from './components/Detail'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'index', component: ChannelList },
    { path: '/detail/:channel_id', name: 'detail', component: Detail }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router