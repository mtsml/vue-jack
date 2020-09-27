/* eslint-disable no-console */
import MockAdapter from 'axios-mock-adapter'

const channels = [
    { channel_id: 'UCutJqz56653xV2wwSvut_hQ', channel_nm: '東海オンエア' },
    { channel_id: 'UCynIYcsBwTrwBIecconPN2A', channel_nm: '東海オンエアの控え室' }
]

const videos = [
    { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'mP6WW_BHsaA', video_nm: '全く料理できない男が想像だけで『ラタトゥイユ』作ってみた', thumbnails_url: 'https://i.ytimg.com/vi/mP6WW_BHsaA/default.jpg' },
    { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'DWk2OTs9dCI', video_nm: '【検証】石を１万回蹴ったらどうなるのか？', thumbnails_url: 'https://i.ytimg.com/vi/DWk2OTs9dCI/default.jpg' },
    { channel_id: 'UCynIYcsBwTrwBIecconPN2A', video_id: 'vEJn_euAwQ8', video_nm: '【一旦】りょうくん？大丈夫だよね？', thumbnails_url: 'https://i.ytimg.com/vi/vEJn_euAwQ8/default.jpg' }
]

export default {
    run: client => {
        const mock = new MockAdapter(client)
        
        mock.onGet('/channel').reply(200, {'channel_list': channels})

        mock.onGet(new RegExp('/channel/[^/]+')).reply(config => {
            const channel_id = config.url.match(/\/channel\/(.+)/)[1]
            const channel_nm = channels.find(channel => channel.channel_id===channel_id).channel_nm
            const video_list = videos.filter(video => video.channel_id===channel_id)
            return [200, { channel_nm, video_list }]
        })

        mock.onGet(new RegExp('/video/new/[^/]+')).reply(() => {
            const new_video_list = videos.map(video => {
                return {
                    ...video,
                    channel_nm: channels.find(channel => channel.channel_id===video.channel_id).channel_nm
                } 
            })
            return [200, { new_video_list: new_video_list }]
        })

        mock.onGet(new RegExp('/video/popular/[^/]+')).reply(() => {
            const popular_video_list = videos.map(video => {
                return {
                    ...video,
                    channel_nm: channels.find(channel => channel.channel_id===video.channel_id).channel_nm
                } 
            })
            return [200, { popular_video_list }]
        })

        mock.onGet(new RegExp('/video/[^/]+')).reply(config => {
            const video_id = config.url.match(/\/video\/(.+)/)[1]
            const video_nm = videos.find(video => video.video_id===video_id).video_nm
            return [200, { video_nm }]
        })
    }
}