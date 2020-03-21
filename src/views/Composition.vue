<template>
    <div>
        <p>Composition</p>
        <h2>{{ state.messageOne }}</h2>
        <h2>{{ messageTwo }}</h2>
    </div>
</template>

<script>
import { createComponent, reactive, ref } from "@vue/composition-api";

export default createComponent({
  setup() {
    const state = reactive({
      messageOne: "Hello"
    });
    const messageTwo = ref("こんにちは");

    return {
      state,
      messageTwo
    };
  }
})
</script>