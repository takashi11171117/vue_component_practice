<template>
    <router-link
        class="btn"
        @click.native="clicked"
        :to="to"
        :title="formattedTitle"
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
    computed: {
        formattedTitle () {
            if (this.title !== '' ) {
                return `?: ${this.title}`
            } else {
                return '';
            }
        }
    },
    props: {
        title: {
            required: false,
            type: String,
            default: ''
        },
        text: {
            required: false,
            type: String,
            default: ''
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