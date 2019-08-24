<template>
    <div v-if="isShowLoading" class="tlightbox-heart-loading">
        <div></div>
    </div>
</template>

<script>
export default {
    props: {
        isShowLoading: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
@keyframes tlightbox-heart-loading {
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

.tlightbox-heart-loading {
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
        animation: tlightbox-heart-loading 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
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