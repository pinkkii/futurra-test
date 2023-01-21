<template>
    <header>
        <div class="wrapper-header">
            <a href="#">
                <img src="../assets/images/Logo.png" alt="logo">
            </a>
            <LogoName />
        </div>
    </header>
</template>

<script setup>
import LogoName from './LogoName.vue';
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';

.wrapper-header {
    display: flex;
    align-items: center;
    padding: 8px 0 8px 135px;

    a {
        margin-right: 8px;
    }
}

@media only screen and (max-width: 768px) {
    .wrapper-header {
        padding-left: 80px;
    }
}

@media only screen and (max-width: 576px) {
    .wrapper-header {
        padding-left: 20px;
    }
}
</style>
