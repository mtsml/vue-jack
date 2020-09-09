<template>
    <div id="app">
        <router-link to="/"><Header head="TOP"/></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    name: 'App',
    components: {
        Header
    }
}
</script>