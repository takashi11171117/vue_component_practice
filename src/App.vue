<template>
  <div>
    <AppNav />
    <div id="app">
      <router-view/>
    </div>
  </div>
</template>

<style src="@/assets/styles/app.css"></style>

<script>
import AppNav from '@/components/global/AppNav'

export default {
  components: {
    AppNav
  },
  methods: {
  }
}
</script>
