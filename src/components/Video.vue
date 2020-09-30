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
                <div class="col-md-8 pl-0">
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
                <div class="col-md-4">
                    <div class="mt-3 mt-md-0">
                        <form class="md-form d-flex mt-0 mb-2" v-on:submit.prevent="submit" method="POST">
                            <input v-model="comment" placeholder="コメント" />
                            <button class="add-btn btn btn-sm px-3 my-0 btn-light z-depth-0" name="add_comment" type="submit">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                        </form>
                        <div>
                            <template v-for="(comment,idx) in comment_list">
                                <p :key="idx">{{ comment }}</p>
                            </template>
                        </div>
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
        video_nm: null,
        comment_list: [],
        comment: null
    }),
    mounted() {
        const video_id = this.$route.params.video_id
        this.video_id = video_id
        client.getVideoInfo(video_id)
            .then(response => this.video_nm = response.data.video_nm)
            .catch(error => alert(error))
    },
    methods: {
        submit: function() {
            client.addVideoComment(this.comment)
                .then(response => {
                    this.comment_list = response.data.comment_list
                    this.comment = null
                })
                .catch(error => alert(error))
        }
    }
}
</script>