<template>
    <button class="btn" :class="{
        'btn-black': color === 'black',
        'btn-white': color === 'white',
        'btn-yellow': color === 'yellow',
    }" type="submit">
        <slot></slot>
    </button>
</template> 

<script setup>
const { color } = defineProps({
    color: String,
});
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';

.btn {
    font-weight: 700;
    font-size: 16px;

    padding: 16px 92px;

    color: $white;

    border-radius: 12px;
    border: none;
    transition: 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.03);
    }

    &:active {
        transform: scale(1.05);
    }
}

.btn-black {
    background-color: $black;

    &:hover {
        background-color: $green-valid;
    }

    &:active {
        background-color: $btn-active;
    }
}

.btn-white {
    padding: 16px 0;
    background-color: $white;
    color: $black;
    border: 1px solid rgba($black, 0.2);
}

.btn-yellow {
    padding: 12px 0;
    background-color: $yellow;
}

@media only screen and (max-width: 992px) {
    .btn {
        width: 100%;
    }
}
</style>
