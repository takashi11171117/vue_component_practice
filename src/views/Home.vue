<template>
  <div>
      <AppButton :to="{ name: 'signin' }"/>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton';

export default {
  name: 'home',
  components: {
      AppButton
  }
}
</script>
