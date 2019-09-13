<template>
    <div>
        <textarea
            v-bind="$attrs"
            :name="name"
            :id="name"
            class="form-control"
            :rows="rows"
            @input="$emit('input', $event.target.value)"
        >
        </textarea>
    </div>
</template>

<script>
export default {
    computed: {
        rows () {
            return Math.max(5, this.value.split("\n").length);
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
    },
}
</script>