<template>
  <div class="center-panel">
    <QuestionsPanel class="questions-panel" />
    <GraphPanel class="graph-panel" />
  </div>
</template>

<script>
import GraphPanel from '../components/graph-panel/GraphPanel.vue';
import QuestionsPanel from '../components/questions-panel/QuestionsPanel.vue';

export default {
  name: 'Home',
  components: { GraphPanel, QuestionsPanel },
};
</script>

<style lang="scss" scoped>
.center-panel {
  padding: 1rem;
  display: flex;
  flex-direction: column;

  .questions-panel {
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
      width: calc(100% - 300px - 2rem);
    }
  }

  .graph-panel {
    display: flex;
    margin-top: 2rem;
    width: 100%;

    @media (min-width: 768px) {
      margin-top: 0;
      position: fixed;
      right: 1rem;
      width: 300px;
    }
  }
}
</style>
