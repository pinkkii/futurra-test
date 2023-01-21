<template>
    <fieldset class="fieldset-input">
        <legend class="fieldset-input-legend">{{ legendName }}</legend>
        <div class="fieldset-input-container">
            <slot></slot>
        </div>
    </fieldset>
</template>

<script setup>
const { legendName } = defineProps(['legendName'])
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';

.fieldset-input {
    position: relative;
    width: 116px;
    height: 53px;
    border-radius: 8px;
    background-color: $white;
    border: 1px solid $border-card;
    transition: all 0.2s ease-in-out;

    .fieldset-input-legend {
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        background: $white;
        padding: 0 5px;
        color: $black-input;
        margin-left: 12px;
    }

    .fieldset-input-container {
        padding: 7px 14.5px 10px 16px;
    }
}

@media only screen and (max-width: 576px){
    .fieldset-input {
        width: 94px;
    }
}
</style>
