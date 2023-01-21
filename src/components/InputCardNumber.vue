<template>
    <div class="wrapper-card-number">
        <input 
            type="text" 
            class="custom-input"
            v-mask="mask"
            v-model="cardNumber"
            placeholder="••••  ••••  ••••  ••••"
            @change="changeInput"
            @focus="focusInput"
        />
        <div class="wrapper-right">
            <span class="invalid-text" :class="[validClass]">Invalid number</span>
            <img 
                src="./../assets/images/input-mastercard.png" 
                alt="mastercard-image"
            >
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const { validateCardNumber } = defineProps(['validateCardNumber'])
const emit = defineEmits(['update'])
const mask = '{{9999}} {{9999}} {{9999}} {{9999}}';

let cardNumber = ref('');
let validClass = ref(null);

function changeInput(e) {
    console.log(cardNumber.value.length);
    if (cardNumber.value.length > 16) {
        cardNumber.value = cardNumber.value.slice(0, cardNumber.value.length - 1);
    }
    console.log(cardNumber.value.length);

    validClass.value = validateCardNumber(e.target.value) ? 'valid' : 'invalid'
    emit('update', { cardNumber: cardNumber.value, class: validClass.value } )
}

function focusInput() {
    validClass.value = null
    emit('update', { class: validClass.value } )
}
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';

.custom-input {
    width: auto;

    :focus-visible {
        outline: none !important;
    }
}

.wrapper-card-number {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.wrapper-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 11px;
    line-height: 11px;
    color: $red;
    transition: 0.3s ease-in;

    .invalid-text {
        opacity: 0;
        border: none;
        margin-right: 8px;
    }

    .invalid {
        opacity: 1;
    }
}
</style>
