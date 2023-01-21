<template>
  <div class="wrapper-trial-timer" :style="{ border: timerBorder }">
    <span class="trial-timer-time">{{ fullTime }}</span>
    <div class="timer-block-animation" :style="{ width: timerWidth }">
    </div>
  </div>
</template>
  
<script setup>
import { ref, computed, onMounted } from 'vue'

const { durationTimer } = defineProps(['durationTimer'])
const emit = defineEmits(['durationEnd'])

let timerID = ref(null)
let seconds = ref(durationTimer)
let initSeconds = ref(durationTimer)

const fullTime = computed(() => {
  return `${parseParamToDispay(Math.floor(seconds.value / 60))}:${parseParamToDispay(seconds.value % 60)}`;
})

const timerWidth = computed(() => {
  return `${(seconds.value / initSeconds.value) * 100}%`;
})

const timerBorder = computed(() => {
  return seconds.value <= 10 ? '2px solid #FF0000' : 'none';
})

function parseParamToDispay(time) {
  return !time ? '00' : time < 10 ? `0${time}` : time;
}

function timerTick() {
  if (seconds.value === 0) {
    return removeTimer()
  }
  seconds.value = seconds.value - 1;
}

function removeTimer() {
  clearInterval(timerID.value);
  emit('durationEnd');
}

onMounted(() => {
  timerID.value = setInterval(timerTick, 1000);
})
</script>

<style lang="scss" scoped>
@import '@/styles/global.scss';

.wrapper-trial-timer {
  width: 160px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 12px;
  transition: all .2s ease;
  background-color: $black;

  .trial-timer-time {
    z-index: 50;
    color: #ffffff;
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
  }

  .timer-block-animation {
    border-radius: 0 12px 12px 0;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    height: 60px;
    background: $green;
    transition: all .2s ease-in-out;
  }
}

@media only screen and (max-width: 425px) {
  .wrapper-trial-timer {
    width: 110px;
    height: 47px;

    .timer-block-animation {
      height: 47px;
    }
  }
}
</style>
