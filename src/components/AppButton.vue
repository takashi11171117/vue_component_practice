<template>
    <router-link class="btn btn-primary" :to="to">
        Sign in
    </router-link>
</template>

<script>
export default {
    props: {
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