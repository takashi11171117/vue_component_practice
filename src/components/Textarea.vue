<template>
    <div>
        <textarea
            v-bind="$attrs"
            :name="name"
            :id="name"
            class="form-control"
            @input="$emit('input', $event.target.value)"
        >
        </textarea>
    </div>
</template>

<script>
export default {
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