/* eslint-disable no-console */
import axios from 'axios'
import mock from './mock'

const client = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL
})

if (process.env.VUE_APP_MODE !== 'production') {
    mock.run(client)
}

export default {
    getChannels: () => {
        return client.get('/channel');
    },
    getNewVideos: (params) => {
        return client.get(`/video/new/${params}`);
    },
    getPopularVideos: (params) => {
        return client.get(`/video/popular/${params}`);
    },
    getChannelInfo: (params) => {
        return client.get(`/channel/${params}`)
    },
    getVideoInfo: (params) => {
        return client.get(`/video/${params}`)
    },
    addVideoComment: (params) => {
        return client.post(`/video/comment`, params)
    }
}