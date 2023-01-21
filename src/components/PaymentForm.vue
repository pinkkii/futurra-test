<template>
    <form @submit.prevent="submit">
        <div class="wrapper-card-form">
            <WrapperFieldSet style="width: 100%" legend-name="Card number" :class="[validClass]">
                <InputCardNumber
                    :validateCardNumber="validateCardNumber"
                    @update="updateCardData"
                />
            </WrapperFieldSet>
            <div class="wrapper-card-bottom">
                <WrapperFieldSet legend-name="Month">
                    <DropDownList
                        :list="monthsArr"
                        @selectedValue="(value) => selectedMonth = value"
                    />
                </WrapperFieldSet>

                <WrapperFieldSet legend-name="Year">
                    <DropDownList
                        :list="yearsArr"
                        @selectedValue="(value) => selectedDay = value"
                    />
                </WrapperFieldSet>
    
                <WrapperFieldSet legend-name="Year">
                    <InputCVV
                        @update="(value) => valueCVC = value"
                    />
                </WrapperFieldSet>
            </div>
            <div class="wrapper-btn-form">
                <MyButton class="btn-submit" :class="{'disabled': !isValidData}">Submit</MyButton>
                <MyButton class="btn-close">Close</MyButton>
            </div>
        </div>
    </form>
</template> 

<script setup>
import MyButton from './UI/MyButton.vue';
import WrapperFieldSet from './UI/WrapperFieldSet.vue';
import DropDownList from './UI/DropDownList.vue';
import InputCVV from './InputCVV.vue';
import InputCardNumber from './InputCardNumber.vue';
import { ref, computed } from 'vue';

const emit = defineEmits(['close'])

const monthsArr = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December',
]

const yearsArr = [
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
    '2031',
]

const selectedMonth = ref('');
const selectedDay = ref('');
const valueCVC = ref([]);
const cardNumber = ref('');
const validClass = ref(null);

const isValidData = computed(() => {
    return validateCardNumber(cardNumber.value) && selectedMonth.value && selectedDay.value && validateCvv(valueCVC.value)
})

function submit() {
    emit('close');
}

function updateCardData(payload) {
    if (payload.cardNumber) {
        cardNumber.value = payload.cardNumber;
    }
    validClass.value = payload.class
}

function validateCvv(cvv) {
    return /^[0-9]{3}$/.test(cvv)
}

function validateCardNumber(cardNumber) {
    return /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/.test(cardNumber.replace(/\s/g, ''))
}
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';
.invalid {
    opacity: 1;
}

.disabled {
    opacity: 0.4;
    pointer-events: none;
}
</style>
