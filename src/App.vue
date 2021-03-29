<template>
  <v-app>
    <div v-if="initialized">
      <AppBar />
      <PillarsPanel />
      <v-main class="main">
        <v-container fluid>
          <transition name="slide-fade" mode="out-in">
            <router-view />
          </transition>
        </v-container>
      </v-main>
    </div>
    <div v-else class="loader">
      <Loader />
    </div>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import AppBar from './components/AppBar.vue';
import Loader from './components/Loader.vue';

import PillarsPanel from './components/pillars-panel/PillarsPanel.vue';

export default {
  name: 'App',
  components: {
    PillarsPanel,
    AppBar,
    Loader,
  },
  data() {
    return {
      initialized: false,
    };
  },
  created() {
    this.fetchQuestions().then(() => {
      this.initialized = true;
    });
  },
  methods: {
    ...mapActions('questionsStore', ['fetchQuestions']),
  },
};
</script>

<style lang="scss" scoped>
.loader {
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: center;
}
</style>
