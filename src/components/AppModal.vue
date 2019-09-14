<template>
    <div class="app-modal" v-if="visible">
        <div class="app-modal-inner">
            {{ name }}
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            visible: false
        }
    },
    props: {
        name: {
            required: true,
            type: String
        }
    },
    mounted () {
        this.$modal.$event.$on('show', (modal) => {
            if (this.name === modal) {
                this.visible = true;
            }
        })
    }
}
</script>

<style>
    .app-modal {
        background-color: #141420;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 9999;
    }

    .app-modal-inner {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        padding: 30px;
        width: 90%;
        min-width: 500px;
    }
</style>