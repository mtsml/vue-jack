<template>
  <div id="app">
    <router-link to="/"><Header head="TOP"/></router-link>
    <Title title="おすすめYoutuber"/>
    <ChannelList />
  </div>
  <router-view></router-view>
</template>

<script>
import ChannelList from './components/ChannelList.vue'
import Header from './components/Header.vue'
import Title from './components/Title.vue'

export default {
  name: 'App',
  components: {
    ChannelList,
    Header,
    Title
  }
}
</script>