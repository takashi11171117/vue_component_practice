<template>
  <div>
      <AppButton :to="{ name: 'signin' }">
          <p>bbbbbb</p>
          <p>ereer</p>
      </AppButton>
      <AppButton :to="{ name: 'signin' }" theme="danger" size="large" title="Sign up with an account">
          <strong>iiiiiiiii</strong>
      </AppButton>
      <AppButton @click.prevent="clicked" disabled text="eeeee"/>
      <AppInput name="email" />
      <AppInput name="password" type="password"/>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton';
import AppInput from '@/components/AppInput';

export default {
  name: 'home',
  components: {
      AppButton,
      AppInput
  },

  methods: {
      clicked () {
          console.log('clicked');
      }
  }
}
</script>
