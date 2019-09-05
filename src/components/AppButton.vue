<template>
    <router-link
        class="btn"
        :to="to"
        :class="[
            themes[theme], sizes[size]
        ]"
    >
        Sign in
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
    }
}
</script>