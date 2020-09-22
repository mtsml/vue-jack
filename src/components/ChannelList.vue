<template>
    <div>
        <mdb-container>
            <Title title="おすすめYoutuber"/>
            <ul v-for="channel of channel_list" v-bind:key="channel.channel_id">
                <li>
                    <router-link :to="{name: 'channel', params: {channel_id: channel.channel_id}}">
                        {{channel.channel_nm}}
                    </router-link>
                </li>
            </ul>
        </mdb-container>
    </div>
</template>

<script>
import { mdbContainer } from 'mdbvue';
import client from '../api/api'
import Title from './Title.vue'

export default {
    name: 'ChannelList',
    components: {
        Title,
        mdbContainer
    },
    data: () => ({
        channel_list: []
    }),
    mounted() {
        client.getChannels()
            .then(response => this.channel_list = response.data.channel_list)
            .catch(error => alert(error))
    }
}
</script>