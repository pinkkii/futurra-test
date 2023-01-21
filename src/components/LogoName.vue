<template>
    <span class="wrapper-logo-name">
        <span class="logo-name-orange">Planet</span>
        <span class="logo-name-black">Learn</span>
    </span>
</template>

<script setup>
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';
.wrapper-logo-name {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    .logo-name-orange {
        color: $orange;
    }

    .logo-name-black {
        color: $black;
    }
}
</style>