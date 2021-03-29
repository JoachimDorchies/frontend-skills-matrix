<template>
  <div :id="`question-pillar-${pillar.id}`" class="question-pillar">
    <h2 class="question-pillar__title">
      <v-icon class="question-pillar__title-icon">{{ pillar.icon }}</v-icon
      >{{ pillar.name }}
    </h2>
    <QuestionCategoryItem
      v-for="category in pillar.categories"
      :key="category"
      class="question-pillar__category"
      :category-id="category"
    />
  </div>
</template>

<script>
import QuestionCategoryItem from './QuestionCategoryItem.vue';

export default {
  name: 'QuestionPillarItem',
  components: {
    QuestionCategoryItem,
  },
  props: {
    pillar: {
      type: Object,
      default: () => ({
        id: '',
        name: '',
        categories: [],
      }),
    },
  },
};
</script>

<style lang="scss" scoped>
.question-pillar {
  &__title {
    display: flex;
    margin-bottom: 1rem;

    &-icon {
      margin-right: 0.5rem;
    }
  }

  &__category + &__category {
    margin-top: 2rem;
  }
}
</style>
