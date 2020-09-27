<template>
    <div class="row">
        <template v-for="(video, idx) in video_list">
            <template v-if="idx===0">
                <div class="col-md-7 mt-2 mb-md-3" :key="video.video_id">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" 
                            :src="'https://www.youtube.com/embed/'+video.video_id" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>        
                </div>
                <div class="col-md-5 mt-2 mb-3" :key="video.video_id">
                    <h5>
                        <router-link class="text-reset" :to="{name: 'video', params: {video_id: video.video_id}}">
                            {{ video.video_nm }}
                        </router-link>
                    </h5>
                    <router-link class="text-reset" :to="{name: 'channel', params: {channel_id: video.channel_id}}">
                        <span class="text-muted">{{ video.channel_nm }}</span>
                    </router-link>
                </div>
            </template>
            <template v-else>
                <div class="col-md-6 d-flex mb-3" :key="video.video_id">
                    <router-link class="text-reset" :to="{name: 'video', params: {video_id: video.video_id}}">
                        <img class="rounded" :src="video.thumbnails_url" :alt="video.video_nm">
                    </router-link>
                    <span class="ml-2">
                        <h6>
                            <router-link class="text-reset" :to="{name: 'video', params: {video_id: video.video_id}}">
                                {{ video.video_nm }}
                            </router-link>
                        </h6>
                        <router-link class="text-reset" :to="{name: 'channel', params: {channel_id: video.channel_id}}">
                            <small class="text-muted">{{ video.channel_nm }}</small>
                        </router-link>
                    </span>
                </div>
            </template>
        </template>
    </div>
</template>

<script>
export default {
    name: 'VideoList',
    props: {
        video_list: Array
    }

}
</script>