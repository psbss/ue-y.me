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
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: hidden;
  background: $color_white;
}
</style>
