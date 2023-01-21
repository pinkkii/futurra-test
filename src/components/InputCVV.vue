<template>
    <input 
        class="custom-input" 
        placeholder="•••" 
        type="password" 
        v-model="valueCvv" 
        maxlength="3" 
        autocomplete="on"
        @input="validateInput($event)"
    />
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['update'])

let valueCvv = ref('');

function validateInput(event) {
    valueCvv.value = event.target.value.replace(/\D/g, "")
    emit('update', valueCvv.value)
}
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';

.custom-input {
    cursor: auto;
}
</style>
