<template>
  <apexchart
    type="radar"
    :height="300"
    :width="300"
    :options="chartOptions"
    :series="series"
  ></apexchart>
</template>

<script>
import VueApexCharts from 'vue-apexcharts';
import { mapGetters } from 'vuex';

export default {
  name: 'RadarChart',
  components: {
    apexchart: VueApexCharts,
  },
  computed: {
    ...mapGetters('questionsStore', ['pillarsAsArray', 'getScoreByPillar']),
    series() {
      return [
        {
          name: 'Series 1',
          data: [...this.pillarsAsArray.map((pillar) => this.getScoreByPillar(pillar.name))],
        },
      ];
    },
    chartOptions() {
      return {
        chart: {
          type: 'radar',
        },
        title: {
          text: 'Skills matrix',
        },
        xaxis: {
          categories: this.pillarsAsArray.map((pillar) => pillar.name),
        },
        yaxis: {
          min: 0,
          max: 3,
          tickAmount: 3,
        },
      };
    },
  },
};
</script>
