<template>
  <div id="app">
    <app-toolbar />
    <router-view/>
  </div>
</template>

<script>
import AppToolbar from '@/components/common/AppToolbar.vue';

export default {
  components: {
    AppToolbar,
  },
};
</script>

<style lang="scss">
* {
  box-sizing:  border-box;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding-top: 40px;
}

html, body {
  width: 100%;
}
</style>
