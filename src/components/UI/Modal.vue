<template>
    <Teleport to='#app'>
        <Transition name="modal">
            <div class="modal" v-if="show" @click="closeModal">
                <div class="modal_content" @click.stop>
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </Teleport>
</template> 

<script>
export default {
    name: 'Modal',

    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },

    methods: {
        closeModal() {
            this.$emit('update:show', false);
        }
    }
};
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';

.modal {
    position: fixed;
    display: flex;
    background: rgba(0, 0, 0, 0.2);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    z-index: 1020;
    transition: opacity 0.2s ease;
}

.modal_content {
    margin: auto;
    width: 400px;
    padding: 24px 16px;
    background: #FFFFFF;
    box-shadow: 0px 0px 0px 4px rgba($black, 0.05);
    border-radius: 12px;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

@media only screen and (max-width: 576px){
    .modal_content {
        width: 336px;
    }
}
</style>
