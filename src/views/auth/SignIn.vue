<template>
  <div class="flex flex-col items-center">
    <h1 class="font-medium text-3xl mb-6 text-center text-gray-600">
      Sign in.
    </h1>

    <form action="#" method="post" class="bg-white rounded-lg p-8 w-full md:w-6/12 shadow-xl" @submit.prevent="submit">
        <div class="mb-4">
            <label for="email" class="block text-gray-500 uppercase text-sm font-bold tracking-tight">
                Email address
            </label>
            <input type="text" id="email" name="email" class="border-2 border-gray-400 rounded px-3 py-2 w-full" v-model="form.email">
        </div>
        <div class="mb-6">
            <label for="password" class="block text-gray-500 uppercase text-sm font-bold tracking-tight">
                Password
            </label>
            <input type="text" id="password" name="password" class="border-2 border-gray-400 rounded px-3 py-2 w-full" v-model="form.password">
        </div>
        <div>
            <button type="submit" class="w-full bg-blue-500 text-white px-6 py-3 rounded uppercase font-bold">
                Sign In
            </button>
        </div>
        <div>
            <button type="submit" class="w-full bg-yellow-500 text-white px-6 py-3 mt-10 rounded uppercase font-bold"  @click.prevent="handleTwitterLogin">
                Twitter Login
            </button>
        </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex'
import firebase from '@/helpers/firebase.js'

export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    async mounted() {
        try {
            const { user } = await firebase.auth().getRedirectResult()
            if (user) {
                const idToken = await user.getIdToken(true)
                const { data } = await axios.post('/api/auth', { idToken })
                console.log(data);
                // axios.setToken(data.token, 'Bearer')
            }
        } catch (e) {
            console.log(e)
        }
    },
    methods: {
      ...mapActions({
        signIn: 'auth/signIn'
      }),

      async submit () {
        await this.signIn(this.form)

        this.$router.replace({ name: 'home' }).catch(() => {})
      } ,
      handleTwitterLogin() {
        const provider = new firebase.auth.TwitterAuthProvider()
        firebase.auth().signInWithRedirect(provider)
      },
    }
}
</script>