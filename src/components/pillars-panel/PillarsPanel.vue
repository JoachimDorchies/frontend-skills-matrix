<template>
  <v-navigation-drawer class="drawer" :mini-variant.sync="mini" permanent app>
    <v-list dense nav>
      <v-list-item class="d-flex flex-row-reverse" :class="{ 'drawer__icon--centered': mini }">
        <v-btn icon @click.stop="mini = !mini">
          <v-icon v-if="mini">mdi-chevron-right</v-icon>
          <v-icon v-else>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <PillarItem
        v-for="pillar in pillarsAsArray"
        :key="pillar.id"
        :pillar="pillar"
        :drawer-mini="mini"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex';

import PillarItem from './PillarItem.vue';

export default {
  name: 'PillarsPanel',
  components: {
    PillarItem,
  },
  data() {
    return {
      drawer: true,
      mini: this.isMobile(),
    };
  },
  computed: {
    ...mapGetters('questionsStore', ['pillarsAsArray']),
  },
  methods: {
    isMobile() {
      return this.$vuetify.breakpoint.name === 'xs' || this.$vuetify.breakpoint.name === 'sm';
    },
  },
};
</script>

<style lang="scss">
.drawer {
  /* Works on Firefox */
  .v-navigation-drawer__content {
    & {
      scrollbar-width: thin;
    }

    /* Works on Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-track {
      background: rgb(240, 240, 240);
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgb(205, 205, 205);
      border-radius: 20px;
    }
  }

  &__icon {
    &--centered {
      justify-content: center;
    }
  }
}
</style>
