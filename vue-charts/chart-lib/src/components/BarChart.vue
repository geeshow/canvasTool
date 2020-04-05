<template>
  <canvas @click="$emit('refreshChart')" ref="barChart" id="barChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  props: ["propsdata"],
  mounted() {
    new this.$_Chart(this.$refs.barChart.getContext("2d"), {
      type: "bar",
      data: this.propsdata,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
      }
    });
  }
};
</script>

<style scoped>
</style>