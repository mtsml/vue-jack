import Vue from 'vue'
import VueRouter from 'vue-router'
import ChannelList from './components/ChannelList'
import Channel from './components/Channel'
import Video from './components/Video'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'index', component: ChannelList },
    { path: '/channel/:channel_id', name: 'channel', component: Channel },
    { path: '/video/:video_id', name: 'video', component: Video }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router