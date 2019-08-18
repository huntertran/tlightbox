<template>
    <div :class="{ 'vue-lightbox' : !resetstyles }">
        <h1 v-if="title">{{ title }}</h1>
        <ul>
            <li v-bind:key="index" v-for="(image, index) in images">
                <img :src="image.thumbnail" :alt="image.caption" @click="clickImage(index)" />
            </li>
        </ul>
        <div class="lightbox-overlay" v-if="overlayActive" @click.self="closeOverlay">
            <div class="holder">
                <div>
                    <div v-if="isShowLoading" class="lds-heart">
                        <div></div>
                    </div>
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

export default {
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
        }
    },
    data() {
        return {
            currentImageIndex: null,
            overlayActive: false,
            isShowLoading: true
        };
    },
    mounted() {
        const self = this;
        window.addEventListener("keydown", e => {
            self.handleGlobalKeyDown(e);
        });
    },
    methods: {
        mainImageLoaded() {
            this.isShowLoading = false;
        },
        clickImage(index) {
            this.currentImageIndex = index;
            this.overlayActive = true;

            this.preloadNextImage();
        },
        preloadNextImage() {
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
        nextImage() {
            if (this.currentImageIndex === this.images.length - 1) {
                if (this.loop) {
                    this.currentImageIndex = 0;
                }
            } else {
                this.currentImageIndex += 1;
            }

            this.preloadNextImage();
        },
        prevImage() {
            if (this.currentImageIndex === 0) {
                if (this.loop) {
                    this.currentImageIndex = this.images.length - 1;
                }
            } else {
                this.currentImageIndex -= 1;
            }
        },
        closeOverlay() {
            this.overlayActive = false;
        },
        handleGlobalKeyDown(e) {
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
.vue-lightbox ul {
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: block;
    max-width: 780px;
    text-align: center;

    li {
        display: inline-block;
        padding: 5px;
        background: ghostwhite;
        margin: 10px;

        img {
            display: block;
            width: 200px;
        }
    }
}

.lightbox-overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.9);
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;

    .holder {
        max-width: 90%;
        max-height: 90%;
        position: relative;
        > div {
            cursor: pointer;
            img {
                max-width: 90vw;
                max-height: 90vh;
                cursor: pointer;
            }
        }

        p {
            color: #ffffff;
            margin: 0;
            background-color: rgba(0, 0, 0, 0.4);
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px;
        }
        .nav {
            font-size: 14px;

            a {
                color: white !important;
                opacity: 0.3;
                -webkit-user-select: none;
                cursor: pointer;

                &:hover {
                    opacity: 1;
                }
            }

            .next,
            .prev {
                position: absolute;
                top: 0;
                bottom: 0;
                padding: 10px;
                width: 50%;
                box-sizing: border-box;
                font-size: 40px;

                span {
                    top: 50%;
                    transform: translateY(50%);
                    position: relative;
                }
            }

            .next {
                right: 0;
                text-align: right;
            }

            .prev {
                left: 0;
                text-align: left;
            }
            .close {
                right: 10px;
                top: 0;
                font-size: 30px !important;
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

// loading symbol
@keyframes lds-heart {
    0% {
        transform: scale(0.95);
    }
    5% {
        transform: scale(1.1);
    }
    39% {
        transform: scale(0.85);
    }
    45% {
        transform: scale(1);
    }
    60% {
        transform: scale(0.95);
    }
    100% {
        transform: scale(0.9);
    }
}

.lds-heart {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 64px;
    height: 64px;
    transform: rotate(45deg);
    transform-origin: 32px 32px;
    div {
        top: 23px;
        left: 19px;
        position: absolute;
        width: 26px;
        height: 26px;
        background: #fff;
        animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
        &:after {
            content: " ";
            position: absolute;
            display: block;
            width: 26px;
            height: 26px;
            background: #fff;
            top: -17px;
            border-radius: 50% 50% 0 0;
        }
        &:before {
            content: " ";
            position: absolute;
            display: block;
            width: 26px;
            height: 26px;
            background: #fff;
            left: -17px;
            border-radius: 50% 0 0 50%;
        }
    }
}
</style>