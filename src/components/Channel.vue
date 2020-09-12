<template>
    <div class="hello">
        <h1>
            <a v-bind:href="'https://www.youtube.com/channel/'+channel_id" target="_blank">
                {{channel_nm}}
            </a>
        </h1>
    </div>
</template>

<script>
export default {
    name: 'Channel',
    data: function() {
        const channel_id = this.$route.params.channel_id
        const channels = [
            { channel_id: 'UCutJqz56653xV2wwSvut_hQ', channel_nm: '東海オンエア' },
            { channel_id: 'UCynIYcsBwTrwBIecconPN2A', channel_nm: '東海オンエアの控え室' }
        ]
        const channel_nm = channels.find(channel => channel.channel_id === channel_id).channel_nm
        return {
            channel_id: channel_id,
            channel_nm: channel_nm
        }
    }
}
</script>