<template>
  <div id="app">
    <navigation
      :logo-alt="logoAlt"
    />
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
  data () {
    return {
      // https://apps.timwhitlock.info/unicode/inspect/hex/1F36B > 🍫
      logoAlt: `Gabriela Viana ✲ Product Designer 🍫`,
    }
  },
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
