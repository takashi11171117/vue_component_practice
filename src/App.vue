<template>
  <div>
    <header>
      <a href="" @click.prevent="login">Login</a>
    </header>
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    async login () {
      await axios.get('http://localhost:9100/sanctum/csrf-cookie')
      await axios.post('http://localhost:9100/login', {
        email: 'takashi11171117@gmail.com',
        password: '33874696'
      })

      let response = await axios.get('http://localhost:9100/api/user')

      console.log(response.data)
    }
  }
}
</script>
