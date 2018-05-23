<template>
  <div id="app">
    <navigation />
    <el-container>
      <el-header>
      </el-header>
      <el-main>
        <el-row>
          <h1>Hello world</h1>
        </el-row>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Navigation,
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
