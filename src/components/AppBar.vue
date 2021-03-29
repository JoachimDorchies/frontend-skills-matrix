<template>
  <v-app-bar class="app-bar" app color="white" elevate-on-scroll>
    <v-toolbar-title class="app-bar__title">
      <span>Skills matrix</span>
      <span class="app-bar__title-by">by</span>
      <img class="app-bar__title-icon" src="@/assets/atecna-logo.svg" alt="Atecna logo" />
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
};
</script>

<style lang="scss" scoped>
.app-bar {
  &__title {
    align-items: center;
    display: flex;
    font-weight: bold;

    &-by {
      font-weight: normal;
      font-size: 1rem;
      margin-left: 0.5rem;
      margin-top: 0.5rem;
    }

    &-icon {
      height: 40px;
      margin-left: 0.5rem;
    }
  }
}
</style>
