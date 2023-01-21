<template>
    <div class="wrapper-top-card" :class="{ 'timer-out': isDurationEnd }">
        <div class="card-price">
            <h3 class="card-price-title">
                3-day trial for <span class="orange">$0.99</span>
            </h3>
            <span class="card-price-after">{{ prise }}</span>
            <transition name="timer">
                <span class="card-price-discount" v-if="!isDurationEnd">
                    $39.99/week
                </span>
            </transition>
        </div>
        <transition name="timer">
            <TrialTimer 
                v-if="!isDurationEnd" 
                :durationTimer="3" 
                @durationEnd="isDurationEnd = true" 
            />
        </transition>
    </div>
</template>

<script setup>
import TrialTimer from './TrialTimer.vue';
import { ref, computed } from 'vue';

let isDurationEnd = ref(false);

const prise = computed(() => {
    return isDurationEnd.value ? 'Then $39.99/week' : 'Then $9.99'
})
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';

.wrapper-top-card {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .card-price {
        display: flex;
        flex-direction: column;

        .card-price-title {
            margin-bottom: 8px;
            font-weight: 800;
            font-size: 24px;
            line-height: 120%;
        }

        .card-price-after {
            margin-bottom: 2px;
            font-weight: 600;
            font-size: 20px;
            line-height: 120%;
        }

        .card-price-discount {
            opacity: 0.4;
            font-weight: 600;
            font-size: 16px;
            line-height: 140%;
            text-decoration-line: line-through;
        }
    }
}

.orange {
    color: $orange;
}

.timer-out {
    margin-bottom: 36px;
}

.timer-enter,
.timer-leave-to {
    opacity: 0;
    transform: scale(0);
}

@media only screen and (max-width: 425px) {
    .wrapper-top-card {
        padding: 12px 16px;
        background: $white;
        border: 1px solid #CDCDCD;
        box-shadow: 0px 4px 4px rgba($black, 0.06);
        border-radius: 12px;

        .card-price {

            .card-price-title {
                font-size: 18px;
            }

            .card-price-after {
                font-weight: 400;
                font-size: 16px;
            }

            .card-price-discount {
                font-size: 14px;
                line-height: 140%;
            }
        }
    }

    .timer-out {
        justify-content: center;
        text-align: center;
    }
}
</style>
