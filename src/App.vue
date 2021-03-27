<template>
  <v-app>
    <v-main class="main">
      <v-container>
        <transition name="slide-fade" mode="out-in">
          <router-view />
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss"></style>
