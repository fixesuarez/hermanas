<template>
  <nav class="burger-menu__drawer">
    <router-link
      @click="closeDrawer"
      :to="{ name: 'whoAreWe' }"
      class="link">
      Qui sommes-nous ?
    </router-link>
  </nav>
</template>

<script>
export default {
  methods: {
    closeDrawer () {
      this.$emit('close-drawer')
    }
  }
}
</script>

<style lang="scss" scoped>
.burger-menu__drawer {
  position: fixed;
  top: 0;
  right: 0vw;
  height: 100vh;
  width: 80vw;
  padding: 20px;
  background-color: white;
  box-shadow: -2px 0 15px 0 rgba(0, 0, 0, 0.2);
  .link {
    color: unset;
  }
}
</style>