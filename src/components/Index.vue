<template>
    <div class="mt-2">
        <ul class="nav nav-tabs mt-4 mb-2" role="tablist">
            <li class="nav-item">
                <a class="nav-link text-reset active" id="new-video-tab" data-toggle="tab" href="#new-video" role="tab" aria-controls="new-video" aria-selected="true">
                    最新動画
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-reset" id="popular-video-tab" data-toggle="tab" href="#popular-video" role="tab" aria-controls="popular-video" aria-selected="false">
                    人気動画
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-reset" id="comment-tab" data-toggle="tab" href="#comment" role="tab" aria-controls="comment" aria-selected="false">
                    コメント
                </a>
            </li>
        </ul>
        <div class="tab-content">
            <div class="new-video-list tab-pane fade show active container" id="new-video" role="tabpanel" aria-labelledby="new-video-tab">
                <VideoList :video_list="new_video_list" />
            </div>
            <div class="popular-video-list tab-pane fade container" id="popular-video" role="tabpanel" aria-labelledby="popular-video-tab">
                <VideoList :video_list="popular_video_list" />
            </div>
            <div class="comment-list tab-pane fade container" id="comment" role="tabpaenl" aria-labelledby="comment-tab">
                準備中。。。
            </div>
        </div>
    </div>
</template>

<script>
import client from '../api/api'
import VideoList from './VideoList'

export default {
    name: 'Index',
    components: {
        VideoList
    },
    data: () => ({
        new_video_list: [],
        popular_video_list: []
    }),
    mounted() {
        client.getNewVideos(5)
            .then(response => this.new_video_list = response.data.new_video_list)
            .catch(error => alert(error))
        client.getPopularVideos(5)
            .then(response => this.popular_video_list = response.data.popular_video_list)
            .catch(error => alert(error))
    }
}
</script>