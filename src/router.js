import Vue from 'vue'
import VueRouter from 'vue-router'
import ChannelList from './components/ChannelList'
import Channel from './components/Channel'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'index', component: ChannelList },
    { path: '/channel/:channel_id', name: 'channel', component: Channel }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router