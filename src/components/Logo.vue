<template>
  <div class="logo--component">
    <img
      src="@/assets/images/logotype.svg"
      :alt="alt"
    />
  </div>
</template>
<script>
export default {
  name: 'Logo',
  props: {
    alt: {
      type: String,
      default: '',
    },
  },
}
</script>
<style>
.logo--component {
  width: 300px;
  height: 100%;
  position: relative;
}
.logo--component img {
  max-width: 100%;
  max-height: 80%;
  height: auto;
  border: none;
}
</style>
