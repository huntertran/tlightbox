<template>
    <div id="app">
        <lightbox :images="convertImages(album.images)" :title="album.title"/>
    </div>
</template>

<script>
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
            fetch("/albums/demo.json")
                .then(response => response.json())
                .then(data => _this.album = data);
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
/* #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
} */
</style>
