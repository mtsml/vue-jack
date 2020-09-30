<template>
    <div id="app">
        <Header head="Vue Jack"/>
        <mdb-container class="pt-5">            
        <router-view></router-view>
        </mdb-container>
    </div>
</template>

<script>
import { mdbContainer } from 'mdbvue';
import Header from './components/Header.vue'

export default {
    name: 'App',
    components: {
        mdbContainer,
        Header
    }
}
</script>