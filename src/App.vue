<template>
    <div id="app">
        <lightbox :images="convertImages(album.images)" :title="album.title"/>
    </div>
</template>

<script>
import Axios from "axios";
import lightbox from "./components/Lightbox.vue";

export default {
    name: "app",
    components: {
        lightbox
    },
    data: function() {
        return {
            album: {
                title: "",
                description: "",
                link: "",
                images: []
            }
        };
    },
    mounted: function() {
        this.getAlbum();
    },
    methods: {
        getAlbum: function() {
            var _this = this;
            Axios.get("/albums/demo.json").then(function(response) {
                _this.album = response.data;
            });
        },
        convertImages: function(images) {
            var converted = [];

            if (images) {
                images.forEach(function(value) {
                    converted.push({
                        src: value,
                        thumbnail: value,
                        caption: "Lorem Isum"
                    });
                });
            }

            return converted;
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
