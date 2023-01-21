<template>
    <div class="wrapper-payment">
        <h2>Payment method</h2>
        <MyButton class="btn-buy" color="yellow">
            <div class="wrapper-inner-btn">
                <img src="../assets/images/PayPal.png" alt="paypal-image">
                <span>Buy now</span>
            </div>
        </MyButton>
        <MyButton class="btn-pay" color="white">
            <div class="wrapper-inner-btn">
                <img src="../assets/images/GooglePay.png" style="margin-right: 6px;" alt="google-pay-image">
                <span>Pay</span>
            </div>
        </MyButton>
        <span class="line-or">OR</span>
        <PaymentForm @close="$emit('close')"/>
    </div>
</template> 

<script setup>
import MyButton from './UI/MyButton.vue';
import PaymentForm from './PaymentForm.vue';
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';

.wrapper-payment {
    display: flex;
    flex-direction: column;

    h2 {
        font-weight: 800;
        font-size: 21px;
        text-align: center;
    }

    .wrapper-inner-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 16px;

        img {
            margin-right: 10px;
        }
    }
}

.btn-buy {
    margin: 24px 0 16px;
}

.btn-pay {
    margin-right: 6px;
}

.line-or {
    display: flex;
    flex-direction: row;

    font-weight: 600;
    font-size: 12px;
    line-height: 140%;

    color: rgba($black, 0.4);

    margin: 16px 0;
}


.line-or:before,
.line-or:after {
    content: "";
    flex: 1 1;
    border-bottom: 2px solid rgba($black, 0.1);
    margin: auto;
}

.line-or:before {
    margin-right: 8px;
}

.line-or:after {
    margin-left: 8px;
}
</style>
