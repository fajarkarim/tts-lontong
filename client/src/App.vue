<template>
  <div id="app">
    <user-sidebar></user-sidebar>
  </div>
</template>

<script>
import UserSidebar from '@/components/UserSidebar'

export default {
  name: 'app',
  components: {
    UserSidebar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
