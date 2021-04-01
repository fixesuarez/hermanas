<template>
  <div>
    <div class="topbar-container">
      <h1>Hermanas</h1>
      <fa icon="bars" class="menu-icn" @click.stop="toggleNavigationDrawer()"></fa>
    </div>
    <transition name="menu-drawer-slide">
      <BurgerMenuDrawer
        v-if="isNavigationDrawerVisible"
        v-highlight="toggleNavigationDrawer"
        @close-drawer="toggleNavigationDrawer" />
    </transition>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import BurgerMenuDrawer from './BurgerMenuDrawer.vue'

export default  {
  components: {
    BurgerMenuDrawer
  },
  setup () {
    let isNavigationDrawerVisible = ref(false)
    const toggleNavigationDrawer = () => {
      isNavigationDrawerVisible.value = !isNavigationDrawerVisible.value
    }

    return {
      isNavigationDrawerVisible,
      toggleNavigationDrawer
    }
  }
}
</script>

<style lang="scss" scoped>
.topbar-container {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  background-color: #000;
  h1 {
    margin: 0;
    font-size: 24px;
    line-height: 26px;
    color: #fff;
  }
  .menu-icn {
    color: #fff;
    height: 24px;
    width: 24px;
  }
}

.menu-drawer-slide-enter-active,
.menu-drawer-slide-leave-active {
  transition: right 0.25s ease;
  right: 0;
}
.menu-drawer-slide-enter-from,
.menu-drawer-slide-leave-to {
  transition: right 0.25s ease;
  right: -80vw;
}
</style>