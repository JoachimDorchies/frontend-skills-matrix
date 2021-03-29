<template>
  <div class="pillar-item">
    <v-list-item
      class="pillar-item__pillar"
      link
      @click="$vuetify.goTo(`#question-pillar-${pillar.id}`)"
    >
      <v-list-item-icon class="pillar-item__pillar-icon">
        <v-icon :color="isPillarFilled(pillar.id) ? 'green' : ''">{{ pillar.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title
          class="pillar-item__pillar-title"
          :class="{ 'green--text': isPillarFilled(pillar.id) }"
        >
          {{ pillar.name }}<v-icon v-if="isPillarFilled(pillar.id)" color="green">mdi-check</v-icon>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item
      v-for="category in pillarCategories"
      :key="category.id"
      class="pillar-item__category"
      :class="{ 'pillar-item__category--maxi': !drawerMini }"
      link
      @click="$vuetify.goTo(`#question-category-${category.id}`)"
    >
      <v-list-item-icon class="pillar-item__category-icon">
        <v-icon :color="isCategoryFilled(category.id) ? 'green' : ''">{{ category.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title
          class="pillar-item__category-title"
          :class="{ 'green--text': isCategoryFilled(category.id) }"
        >
          {{ category.name }}
          <v-icon v-if="isCategoryFilled(category.id)" color="green">mdi-check</v-icon>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  name: 'PillarItem',
  props: {
    pillar: {
      type: Object,
      required: true,
      default: () => ({
        id: '',
        name: '',
        categories: [],
      }),
    },
    drawerMini: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState('questionsStore', ['categories']),
    ...mapGetters('questionsStore', ['isCategoryFilled', 'isPillarFilled']),
    pillarCategories() {
      return this.pillar.categories.map((category) => this.categories[category]);
    },
  },
};
</script>

<style lang="scss" scoped>
.pillar-item {
  &__pillar-title,
  &__category-title {
    align-items: center;
    display: flex;
    justify-content: space-between;
    justify-items: center;
  }

  &__pillar {
    &-icon {
      margin-right: 16px !important;
    }
  }

  .pillar-item__category-icon {
    transition: all 0.2s ease-in-out;
  }

  &__category--maxi {
    .pillar-item__category-icon {
      margin-left: 16px !important;
      margin-right: 16px !important;
    }
  }
}
</style>
