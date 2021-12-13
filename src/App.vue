<template>
  <HeadBar />
  <router-view />
</template>

<script>
import HeadBar from '../src/components/HeadBar.vue'

export default {
  components: {
    HeadBar
  }
}
</script>

<style lang="scss" scoped>
@import url("./assets/css/iconfont.css");
html,
body {
  width: 100%;
  height: 100%;
  font-family: IBMPlexSans, Arial, sans-serif;
  background: #eeeeee;
}
</style>
