<template>
  <ul v-for="channel of channels" v-bind:key="channel">
    <li>
      <a href="https://www.youtube.com/?gl=JP">{{channel}}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ChannelList',
  data: function() {
    return {
      channels: [
        '東海オンエア',
        '東海オンエアの控え室'
      ]
    }
  } 
}
</script>

