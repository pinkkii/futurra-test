<template>
    <main class="container-content">
        <div class="main-content">
            <div class="wrapper-left-card">
                <TrialWrapper class="mobile-timer" />
                <h1 class="card-title">Start your learning journey now</h1>
                <p class="card-subtitle">Get a
                    <LogoName /> plan to rock self-learning
                </p>
                <MyButton color="black" @click="modalVisible = true">Get my plan</MyButton>
                <Modal v-model:show="modalVisible">
                    <Payment @close="modalVisible = false" />
                </Modal>
            </div>
            <div class="wrapper-right-card">
                <TrialWrapper class="desktop-timer" />
                <div class="wrapper-points">
                    <div class="wrapper-point">
                        <img src="../assets/images/Dot.png" alt="star-image">
                        <p class="point-subscribe">
                            Exclusive access to <span>350+</span> learning programs
                        </p>
                    </div>
                    <div class="wrapper-point">
                        <img src="../assets/images/Dot.png" alt="star-image">
                        <p class="point-subscribe">
                            Personalized course plan
                        </p>
                    </div>
                    <div class="wrapper-point">
                        <img src="../assets/images/Dot.png" alt="star-image">
                        <p class="point-subscribe">
                            Comfy learning schedule made by you
                        </p>
                    </div>
                    <div class="wrapper-point">
                        <img src="../assets/images/Dot.png" alt="star-image">
                        <p class="point-subscribe">
                            <span>24/7</span> tutor support in a secure chat
                        </p>
                    </div>
                    <div class="wrapper-point">
                        <img src="../assets/images/Dot.png" alt="star-image">
                        <p class="point-subscribe">
                            Lifetime access to materials
                        </p>
                    </div>
                </div>
                <MyButton color="white" class="btn-safe">
                    <div class="wrapper-btn-content">
                        <img src="../assets/images/Lock.png" alt="lock-image">
                        <span>Safe & secure payment</span>
                    </div>
                </MyButton>
                <p class="card-additional-info">
                    $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period,
                    you
                    will automatically be charged the full price of $19.99/Month . You can cancel your subscription at
                    any
                    time. By continuing, you indicate that you've read and agree to our Terms & Conditions, Privacy
                    Policy ,
                    Money Back , and Subscription Terms .
                </p>
            </div>
        </div>
    </main>
</template>

<script setup>
import MyButton from './UI/MyButton.vue';
import TrialTimer from './TrialTimer.vue';
import Modal from './UI/Modal.vue';
import Payment from './Payment.vue';
import LogoName from './LogoName.vue';
import { ref } from 'vue';
import TrialWrapper from './TrialWrapper.vue';

let modalVisible = ref(false);
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';

.mobile-timer {
    display: none;
    width: 100%;
    margin-bottom: 24px;
}

@media only screen and (max-width: 992px) {
    .desktop-timer {
        display: none;
    }

    .mobile-timer {
        display: flex;
    }
}
</style>
