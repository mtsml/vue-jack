<template>
    <div class="hello">
        <h1>
            <a v-bind:href="'https://www.youtube.com/video/'+video_id" target="_blank">
                {{video_nm}}
            </a>
        </h1>
        <mdb-container>            
            <div class="embed-responsive embed-responsive-16by9">
                <iframe 
                    class="embed-responsive-item" 
                    v-bind:src="'https://www.youtube.com/embed/'+video_id" 
                    allowfullscreen
                >
                </iframe>
            </div>
        </mdb-container>
    </div>
</template>

<script>
import { mdbContainer } from 'mdbvue';
import client from '../api/api'

export default {
    name: 'Video',
    components: {
        mdbContainer
    },
    data: () => ({
        video_id: null,
        video_nm: null
    }),
    mounted() {
        const video_id = this.$route.params.video_id
        this.video_id = video_id
        client.getVideoInfo(video_id)
            .then(response => this.video_nm = response.data.video_nm)
            .catch(error => alert(error))
    }
}
</script>