<template>
    <div class="wrapper-list">
        <div class="list-container" @click="toggleList">
            <input 
                class="custom-input" 
                placeholder="Select" 
                :value="value"
                readonly 
            />
            <img 
                class="list-arrow" 
                src="@/assets/images/select-arrow.png" 
                alt="arrow" 
            />
        </div>
        <ul class="dropdown-list" v-if="isOpen">
            <li class="dropdown-list-item"
                v-for="item of list" 
                :key="item" 
                :class="{ 'selected-item': item === value }"
                @click="chooseItem(item)"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const { list } = defineProps(['list'])
const emit = defineEmits(['selectedValue'])

let isOpen = ref(false);
let value = ref('');

function chooseItem(item) {
    value.value = item;
    emit('selectedValue', item)
    isOpen.value = false;
}

function toggleList() {
    isOpen.value = !isOpen.value;
}
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';
input {
    cursor: pointer;
}
.selected-item {
    background: rgba($black, 0.3) !important;
}

.list-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.dropdown-list {
    z-index: 100;
    position: absolute;
    left: 0;
    top: 40px;
    border-radius: 8px;
    background: $white;
    border: 1px solid #D2D5DA;
    width: 100%;
    max-height: 250px;
    overflow: scroll;

    .dropdown-list-item {
        cursor: pointer;
        padding: 8px;
        transition: all 0.3s ease-in-out;
    }
}
</style>
