<template>
    <div class="mt-2">
        <h2 class="mt-4 mb-3">
            <a class="text-reset" v-bind:href="'https://www.youtube.com/video/'+video_id" target="_blank">
                {{ video_nm }} 
                <i class="fas fa-external-link-alt fa-xs"></i>
            </a>
        </h2>
        <mdb-container>            
            <div class="row">
                <div class="col-md-8">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe 
                            class="embed-responsive-item" 
                            v-bind:src="'https://www.youtube.com/embed/'+video_id" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                        >
                        </iframe>
                    </div>
                </div>
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