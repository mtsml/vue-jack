<template>
    <div class="hello">
        <h1>
            <a v-bind:href="'https://www.youtube.com/video/'+video_id" target="_blank">
                {{video_nm}}
            </a>
        </h1>
    </div>
</template>

<script>
export default {
    name: 'Video',
    // Mock APIができれば書き換える
    data: function() {
        const video_id = this.$route.params.video_id
        const videos = [
            { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'mP6WW_BHsaA', video_nm: '全く料理できない男が想像だけで『ラタトゥイユ』作ってみた' },
            { channel_id: 'UCutJqz56653xV2wwSvut_hQ', video_id: 'DWk2OTs9dCI', video_nm: '【検証】石を１万回蹴ったらどうなるのか？' },
            { channel_id: 'UCynIYcsBwTrwBIecconPN2A', video_id: 'vEJn_euAwQ8', video_nm: '【一旦】りょうくん？大丈夫だよね？' }
        ]
        const video_nm = videos.find(video => video.video_id === video_id).video_nm
        return {
            video_id,
            video_nm
        }
    }
}
</script>