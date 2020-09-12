<template>
    <div class="hello">
        <h1>
            <a v-bind:href="'https://www.youtube.com/channel/'+channel_id" target="_blank">
                {{channel_nm}}
            </a>
        </h1>
        <ul v-for="video of video_list" v-bind:key="video.video_id">
            <li>
                <router-link :to="{name: 'video', params: {video_id: video.video_id}}">
                    {{video.video_nm}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Channel',
    // Mock APIができれば書き換える
    data: function() {
        const channel_id = this.$route.params.channel_id
        const channels = [
            { channel_id: 'UCutJqz56653xV2wwSvut_hQ', channel_nm: '東海オンエア' },
            { channel_id: 'UCynIYcsBwTrwBIecconPN2A', channel_nm: '東海オンエアの控え室' }
        ]
        const videos = [
            { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'mP6WW_BHsaA', video_nm: '全く料理できない男が想像だけで『ラタトゥイユ』作ってみた' },
            { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'DWk2OTs9dCI', video_nm: '【検証】石を１万回蹴ったらどうなるのか？' },
            { channel_id: 'UCynIYcsBwTrwBIecconPN2A', video_id: 'vEJn_euAwQ8', video_nm: '【一旦】りょうくん？大丈夫だよね？' }
        ]
        const video_list = videos.filter(video => video.channel_id === channel_id)
        const channel_nm = channels.find(channel => channel.channel_id === channel_id).channel_nm
        return {
            channel_nm,
            channel_id,
            video_list
        }
    }
}
</script>