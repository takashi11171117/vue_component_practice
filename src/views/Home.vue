<template>
  <div>
      <AppButton :to="{ name: 'chat' }">
          <p>チャット</p>
      </AppButton>
      <AppButton :to="{ name: 'composition' }">
          <p>Composition</p>
      </AppButton>
      <AppButton :to="{ name: 'signin' }">
          <p>Sign in</p>
      </AppButton>
      <AppButton :to="{ name: 'signin' }" theme="danger" size="large" title="Sign up with an account">
          <strong>iiiiiiiii</strong>
      </AppButton>
      <AppButton @click.prevent="clicked" disabled text="eeeee"/>
      {{ form }}
      <div>
        <AppLabel forInput="email">
          Enter your email address
          <AppInput name="email" v-model="form.email" placeholder="ex.example.com" />
        </AppLabel>
      </div>
      <AppInput name="password" type="password" v-model="form.password"/>
      <Textarea name="bio" v-model="form.bio"/>
      <AppSigninModal />
      <a href="#" @click.prevent="openModal">Open Modal</a>
      <AppTabs />
  </div>
</template>

<script>
import AppButton from '@/components/AppButton';
import AppInput from '@/components/AppInput';
import AppLabel from '@/components/AppLabel';
import Textarea from '@/components/Textarea';
import AppSigninModal from '@/components/modals/AppSigninModal';
import AppTabs from '@/components/tabs/AppTabs';

export default {
  name: 'home',

  data () {
    return {
      form: {
        email: '',
        password: '',
        bio: '',
      }
    }
  },

  components: {
      AppButton,
      AppInput,
      AppLabel,
      Textarea,
      AppSigninModal,
      AppTabs
  },

  methods: {
      clicked () {
          console.log('clicked');
      },
      openModal () {
          this.$modal.show('signin', {name: 'Alex'})

        //   setTimeout(() => {
        //       this.$modal.hide('signin');
        //   }, 2000);
      }
  }
}
</script>
