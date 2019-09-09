<template>
    <div>
        <input
            :type="inputType"
            :name="name"
            id="email"
            class="form-control"
        >
        <a href="#" v-if="type === 'password'" @click.prevent="passwordRevealed = !passwordRevealed">
            {{ passwordRevealed ? 'Hide' : 'Reveal' }} password
        </a>
    </div>
</template>

<script>
export default {
    data () {
        return {
            passwordRevealed: false,
        }
    },
    props: {
        name: {
            required: true,
            type: String
        },
        type: {
            required: false,
            type: String,
            default: 'text',
        }
    },

    computed: {
        inputType() {
            return this.passwordRevealed ? 'text' : 'password';
        }
    },

    methods: {
        toggleVisibility () {
            this.inputType = this.inputType === 'password' ? 'text' : 'password';
        }
    }
}
</script>