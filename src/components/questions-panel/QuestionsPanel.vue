<template>
  <div class="question-panel">
    <QuestionPillarItem
      v-for="pillar in pillarsAsArray"
      :key="pillar.id"
      class="question-panel__pillar"
      :pillar="pillar"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import QuestionPillarItem from './QuestionPillarItem.vue';

export default {
  name: 'QuestionsPanel',
  components: {
    QuestionPillarItem,
  },
  computed: {
    ...mapGetters('questionsStore', ['pillarsAsArray']),
  },
};
</script>

<style lang="scss" scoped>
.question-panel {
  &__pillar + &__pillar {
    margin-top: 3rem;
  }
}
</style>
