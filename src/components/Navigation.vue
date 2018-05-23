<template>
  <nav
    class="gv-navigation--component"
  >
    <el-menu
      :default-active="active"
      @select="handleSelect"
      mode="horizontal"
      text-color="#fff"
      active-text-color="#a0cac0"
    >
      <li
        class="navigation-logo"
      >
        <logo />
      </li>
      <el-menu-item index="1">About me</el-menu-item>
      <el-menu-item index="2">Some projects</el-menu-item>
      <el-menu-item index="3">Contact</el-menu-item>
    </el-menu>
  </nav>
</template>

<script>
import Logo from '@/components/Logo'
export default {
  name: 'navigation',
  data () {
    return {
      active: '0',
    }
  },
  components: {
    Logo,
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      // this.$emit('selected', e.target.index);
    },
  },
  props: {
    logotypeText: {
      type: String,
      // https://apps.timwhitlock.info/unicode/inspect/hex/1F36B > 🍫
      default: `Gabriela Viana ✲ Product Designer 🍫`,
    },
  },
}
</script>
<style lang="scss">
.gv-navigation--component {
  background-color: #08213d;
  text-transform: uppercase;
  font-size: 1.3em;
  position: relative;
  padding-top:20px;
  & > .el-menu--horizontal {
    background-color: inherit;
    max-width: 1024px;
    margin: 0 auto;
    & > .el-menu-item {
      float: right;
    }
  }
  .navigation-logo {
    float: left;
    padding-bottom: 10px;
  }
}
</style>
