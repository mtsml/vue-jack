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
import client from '../api/api'

export default {
    name: 'Video',
    data: () => ({
        video_id: null,
        video_nm: null
    }),
    mounted() {
        const video_id = this.$route.params.video_id
        client.getVideoInfo(video_id)
            .then(response => this.video_nm = response.data.video_nm)
            .catch(error => alert(error))
    }
}
</script>