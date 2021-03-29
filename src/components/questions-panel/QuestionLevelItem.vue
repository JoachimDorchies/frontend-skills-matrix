<template>
  <v-card class="question-item" :color="cardColor" @click="toggleLevel({ levelId, categoryId })">
    <v-card-text
      :class="{
        'white--text': displayColor && level.selected,
        'question-item--inactive': displayColor && !level.selected,
      }"
    >
      {{ level.description }}
    </v-card-text>
  </v-card>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'QuestionLevelItem',
  props: {
    displayColor: {
      type: Boolean,
      default: false,
    },
    levelId: {
      type: String,
      required: true,
      default: '',
    },
    categoryId: {
      type: String,
      required: true,
      default: '',
    },
  },
  computed: {
    ...mapState('questionsStore', ['levels']),
    level() {
      return this.levels[this.levelId];
    },
    cardColor() {
      return this.displayColor && this.level.selected ? 'green' : 'white';
    },
  },
  methods: {
    ...mapActions('questionsStore', ['toggleLevel']),
  },
};
</script>

<style lang="scss" scoped>
.question-item {
  cursor: pointer;
  user-select: none;

  &--inactive {
    text-decoration: line-through;
    font-style: italic;
  }
}
</style>
