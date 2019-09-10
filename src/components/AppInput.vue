<template>
    <div>
        <input
            v-bind="$attrs"
            :type="inputType"
            :name="name"
            :id="name"
            class="form-control"
            @input="$emit('input', $event.target.value)"
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
        value: {
            required: false,
            type: String,
            default: "",
        },
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
            return this.passwordRevealed || this.type !== 'password' ? 'text' : 'password';
        }
    },

    methods: {
        toggleVisibility () {
            this.inputType = this.inputType === 'password' ? 'text' : 'password';
        }
    },

    mounted() {
        console.log(this.$attrs)
    }
}
</script>