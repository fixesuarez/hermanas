<template>
  <div>
    <Topbar />
    <router-view></router-view>
  </div> 
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Topbar from './components/Menu/Topbar.vue'

@Options({
  components: {
    Topbar
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  margin: 0;
}
#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
