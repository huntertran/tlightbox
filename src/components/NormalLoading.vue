<template>
    <div v-if="isShowLoading" class="lds-dual-ring"></div>
</template>

<script>
export default {
    props: {
        isShowLoading: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="scss" scoped>
@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.lds-dual-ring {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 64px;
    height: 64px;
    &:after {
        content: " ";
        display: block;
        width: 46px;
        height: 46px;
        margin: 1px;
        border-radius: 50%;
        border: 5px solid #fff;
        border-color: #fff transparent #fff transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }
}
</style>