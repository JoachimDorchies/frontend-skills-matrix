<template>
  <div :id="`question-category-${category.id}`" class="question-category">
    <h3 class="question-category__title">
      <v-icon class="question-category__title-icon">{{ category.icon }}</v-icon> {{ category.name }}
    </h3>
    <QuestionLevelItem
      v-for="level in category.levels"
      :key="level"
      class="question-category__level"
      :display-color="displayColor"
      :category-id="categoryId"
      :level-id="level"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import QuestionLevelItem from './QuestionLevelItem.vue';

export default {
  name: 'QuestionCategoryItem',
  components: {
    QuestionLevelItem,
  },
  props: {
    categoryId: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    ...mapState('questionsStore', ['categories', 'levels']),
    category() {
      return this.categories[this.categoryId];
    },
    displayColor() {
      return (
        this.category.levels.map((level) => this.levels[level]).find((level) => level.selected) !=
        null
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.question-category {
  &__title {
    display: flex;
    margin-bottom: 1rem;

    &-icon {
      margin-right: 0.5rem;
    }
  }

  &__level + &__level {
    margin-top: 1rem;
  }
}
</style>
