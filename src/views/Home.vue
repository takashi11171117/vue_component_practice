<template>
  <div>
      <AppButton :to="{ name: 'signin' }"/>
      <AppButton :to="{ name: 'signin' }" theme="danger" size="large" />
      <AppButton @click.prevent="clicked" disabled/>
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
