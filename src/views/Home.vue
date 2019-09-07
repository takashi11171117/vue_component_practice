<template>
  <div>
      <AppButton :to="{ name: 'signin' }">
          <p>bbbbbb</p>
          <p>ereer</p>
      </AppButton>
      <AppButton :to="{ name: 'signin' }" theme="danger" size="large">
          <strong>iiiiiiiii</strong>
      </AppButton>
      <AppButton @click.prevent="clicked" disabled text="eeeee" />
  </div>
</template>

<script>
import AppButton from '@/components/AppButton';

export default {
  name: 'home',
  components: {
      AppButton
  },

  methods: {
      clicked () {
          console.log('clicked');
      }
  }
}
</script>
