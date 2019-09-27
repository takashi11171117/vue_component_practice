<template> 
    <AppModal name="signin">
        <template slot-scope="">
            <p>Sign in</p>

            <a href="#" @click.prevent="signIn">Submit</a>
        </template>
    </AppModal>
</template>

<script>
import AppModal from '@/components/AppModal';

export default {
  components: {
      AppModal
  },
  methods: {
      signIn () {
          this.$modal.hide('signin');
      }
  }
}
</script>