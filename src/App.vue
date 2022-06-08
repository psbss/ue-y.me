<template>
  <profile />
</template>

<script>
import profile from "./components/Profile.vue";

export default {
  name: "App",
  components: {
    profile,
  },
};
</script>

<style lang="scss">
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  width: 100%;
  max-width: 20rem;
  margin: auto;
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  overflow: hidden;
  background: $color_white;
}
</style>
