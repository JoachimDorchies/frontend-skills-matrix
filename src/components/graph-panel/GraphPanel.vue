<template>
  <div class="graph-panel">
    <RadarChart />
  </div>
</template>

<script>
import RadarChart from './RadarChart.vue';

export default {
  name: 'GraphsPanel',
  components: { RadarChart },
};
</script>

<style lang="scss" scoped>
.graph-panel {
  display: flex;
  justify-content: center;
}
</style>
