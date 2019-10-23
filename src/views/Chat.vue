<template>
    <div class="chat">
        <ul>
            <li v-for="(message, index) in messages" :key="index">
                {{ message }}
            </li>
        </ul>

        <input type="text" v-model="message" v-on:keydown="send">
    </div>
</template>

<script>
import io from 'socket.io-client'
const socket = io('127.0.0.1:3000')

export default {
  name: 'chat',

  data () {
    return {
        message: '',
        messages: []
    }
  },
  methods: {
      send: function (e) {
          if (e.keyCode !== 13) {
              return
          }

          socket.emit('message.sent', this.message)

          this.message = ''
      }
  },
  mounted: function () {
      socket.on('message', (message) => {
          this.messages.push(message)
      })
  }
}
</script>