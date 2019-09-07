<template>
    <router-link
        class="btn"
        @click.native="clicked"
        :to="to"
        :disabled="disabled"
        :class="[
            themes[theme], sizes[size], {
                'disabled': disabled 
            }
        ]"
    >
        <slot>
            {{ text }}
        </slot>
    </router-link>
</template>

<script>
export default {
    data () {
        return {
            themes: {
                primary: 'btn-primary',
                danger: 'btn-danger'
            },
            sizes: {
                normal: '',
                large: 'btn-lg'
            }
        }
    },
    props: {
        text: {
            required: false,
            type: String,
        },
        disabled: {
            required: false,
            type: Boolean,
            default: false
        },
        theme: {
            required: false,
            type: String,
            default: 'primary'
        },
        size: {
            required: false,
            type: String,
            default: 'normal'
        },
        to: {
            required: false,
            type: Object,
            default() {
                return {
                    name: 'home'
                }
            }
        }
    },
    methods: {
        clicked (e) {
            if (this.disabled) {
                return;
            }

            this.$emit('click', e);
        }
    }
}
</script>