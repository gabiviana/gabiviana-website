<template>
  <div
    class="navigation--component"
  >
    <nav>
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
          <logo
            :alt="logoAlt"
          />
        </li>
        <el-menu-item index="1">About me</el-menu-item>
        <el-menu-item index="2">Some projects</el-menu-item>
        <el-menu-item index="3">Contact</el-menu-item>
      </el-menu>
    </nav>
    <img :src="splash" />
  </div>
</template>

<script>
import splash from '@/assets/images/splash@2x.jpg'
import Logo from '@/components/Logo'
export default {
  name: 'navigation',
  data () {
    return {
      active: '0',
      splash,
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
    logoAlt: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss">
.navigation-component {
  position: relative;
}
.navigation--component nav {
  background-color: #08213d; // rgba(8,33,61, 1);
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
