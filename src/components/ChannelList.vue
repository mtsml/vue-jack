<template>
    <div>
        <Title title="おすすめYoutuber"/>
        <ul v-for="channel of channels" v-bind:key="channel.channel_id">
            <li>
                <router-link :to="{name: 'channel', params: {channel_id: channel.channel_id}}">
                    {{channel.channel_nm}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Title from './Title.vue'

export default {
    name: 'ChannelList',
    components: {
        Title
    },
    data: () => ({
        channels: [
            { channel_id: 'UCutJqz56653xV2wwSvut_hQ', channel_nm: '東海オンエア' },
            { channel_id: 'UCynIYcsBwTrwBIecconPN2A', channel_nm: '東海オンエアの控え室' }
        ]
    })
}
</script>