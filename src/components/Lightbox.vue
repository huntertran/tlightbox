<template>
    <div :class="{ 'tlightbox' : !resetstyles }">
        <h1 v-if="title">{{ title }}</h1>
        <ul>
            <li v-bind:key="index" v-for="(image, index) in images">
                <img :src="image.thumbnail" :alt="image.caption" @click="clickImage(index)" />
            </li>
        </ul>
        <div class="overlay" v-if="overlayActive" @click.self="closeOverlay">
            <div class="holder">
                <div>
                    <HeartLoading :isShowLoading="isShowHeartLoading"></HeartLoading>
                    <NormalLoading :isShowLoading="isShowNormalLoading"></NormalLoading>
                    <img :src="images[currentImageIndex].src" v-on:load="mainImageLoaded" />
                </div>
                <div class="nav" v-if="nav">
                    <a class="close" nohref @click="closeOverlay">
                        <span>&times;</span>
                    </a>
                    <a class="prev" nohref @click="prevImage">
                        <span>&#8592;</span>
                    </a>
                    <a class="next" nohref @click="nextImage">
                        <span>&#8594;</span>
                    </a>
                </div>
                <p
                    v-if="caption && images[currentImageIndex].caption"
                >{{ images[currentImageIndex].caption }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import HeartLoading from "./HeartLoading";
import NormalLoading from "./NormalLoading";

export default {
    components: {
        HeartLoading,
        NormalLoading
    },
    props: {
        resetstyles: {
            default: false,
            type: Boolean
        },
        title: {
            type: String
        },
        images: {
            type: Array
        },
        loop: {
            default: true,
            type: Boolean
        },
        nav: {
            default: true,
            type: Boolean
        },
        caption: {
            default: true,
            type: Boolean
        },
        isShowLoading: {
            default: true,
            type: Boolean
        },
        loadingStyle: {
            default: "normal",
            type: String
        }
    },
    data: function() {
        return {
            currentImageIndex: null,
            isShowLoadingData: this.isShowLoading,
            overlayActive: false
        };
    },
    computed: {
        isShowHeartLoading: function() {
            if (this.isShowLoadingData && this.loadingStyle != "normal") {
                return true;
            }

            return false;
        },
        isShowNormalLoading: function() {
            if (this.isShowLoadingData && this.loadingStyle == "normal") {
                return true;
            }

            return false;
        }
    },
    mounted: function() {
        const self = this;
        window.addEventListener("keydown", e => {
            self.handleGlobalKeyDown(e);
        });
    },
    methods: {
        mainImageLoaded: function() {
            this.isShowLoadingData = false;
        },
        clickImage: function(index) {
            this.currentImageIndex = index;
            this.overlayActive = true;

            this.preloadNextImage();
        },
        preloadNextImage: function() {
            var nextImageIndex = 0;

            if (this.currentImageIndex === this.images.length - 1) {
                if (this.loop) {
                    nextImageIndex = 0;
                }
            } else {
                nextImageIndex = this.currentImageIndex + 1;
            }

            var newImageToCache = new Image();
            newImageToCache.src = this.images[nextImageIndex].src;
        },
        nextImage: function() {
            if (this.currentImageIndex === this.images.length - 1) {
                if (this.loop) {
                    this.currentImageIndex = 0;
                }
            } else {
                this.currentImageIndex += 1;
            }

            this.preloadNextImage();
        },
        prevImage: function() {
            if (this.currentImageIndex === 0) {
                if (this.loop) {
                    this.currentImageIndex = this.images.length - 1;
                }
            } else {
                this.currentImageIndex -= 1;
            }
        },
        closeOverlay: function() {
            this.overlayActive = false;
        },
        handleGlobalKeyDown: function(e) {
            switch (e.keyCode) {
                case 37:
                    this.prevImage();
                    break;
                case 39:
                    this.nextImage();
                    break;
                case 27:
                    this.closeOverlay();
                    break;
                default:
                    break;
            }
        }
    }
};
</script>

<style scoped lang="scss">
$foreground: white;
$background: black;

@mixin backgroundWithOpacity($opacity) {
    background-color: rgba(
        red($background),
        green($background),
        blue($background),
        $opacity
    );
}

.tlightbox {
    > h1 {
        text-align: center;
    }
    > ul {
        list-style: none;
        margin: 0 auto;
        padding: 0;
        display: block;
        max-width: 780px;
        text-align: center;

        > li {
            @include backgroundWithOpacity(0.6);
            display: inline-block;
            padding: 5px;
            margin: 10px;

            > img {
                display: block;
                width: 200px;
            }
        }
    }
    > .overlay {
        @include backgroundWithOpacity(0.9);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        text-align: center;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;

        > .holder {
            position: relative;
            > div {
                > img {
                    max-width: 90vw;
                    max-height: 90vh;
                    cursor: pointer;
                }
            }

            > p {
                @include backgroundWithOpacity(0.4);
                color: $foreground;
                margin: 0;
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                padding: 10px;
            }
            > .nav {
                font-size: 14px;

                > a {
                    color: $foreground;
                    opacity: 0.3;
                    -webkit-user-select: none;
                    cursor: pointer;

                    &:hover {
                        opacity: 1;
                    }
                }

                > .next,
                .prev {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    padding: 10px;
                    width: 50%;
                    box-sizing: border-box;
                    font-size: 40px;

                    > span {
                        top: 50%;
                        transform: translateY(50%);
                        position: relative;
                    }
                }

                > .next {
                    right: 0;
                    text-align: right;
                }

                > .prev {
                    left: 0;
                    text-align: left;
                }
                > .close {
                    right: 10px;
                    top: 0;
                    font-size: 30px;
                    opacity: 0.6;
                    z-index: 1000000;
                    position: absolute;
                    text-align: left;
                    box-sizing: border-box;

                    &:hover {
                        opacity: 1;
                    }
                }
            }
        }
    }
}
</style>