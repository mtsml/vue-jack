<template>
    <mdb-container>
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
    </mdb-container>
</template>

<script>
import { mdbContainer } from 'mdbvue';
import client from '../api/api'

export default {
    name: 'Channel',
    components: {
        mdbContainer
    },
    data: () => ({
        channel_id: null,
        channel_nm: null,
        video_list: []
    }),
    mounted() {
        const channel_id = this.$route.params.channel_id
        client.getChannelInfo(channel_id)
            .then(response => {
                this.channel_nm = response.data.channel_nm,
                this.video_list = response.data.video_list
            })
            .catch(error => alert(error))
    }    
}
</script>