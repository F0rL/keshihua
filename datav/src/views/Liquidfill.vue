<template>
  <div id="container"></div>
</template>

<script>
import 'echarts-liquidfill'
export default {
  name: 'Liquidfill',
  data() {
    return {}
  },
  mounted() {
    // const data = [0.68, 0.5, 0.4, 0.3]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [
        {
          type: 'liquidFill',
          data: [
            0.6,
            {
              value: 0.5,
              direction: 'left',
              itemStyle: {
                color: 'red',
              },
            },
            0.4,
            0.3,
          ],
        },
      ],
    })
  },
}
</script>

<style scoped lang="scss">
#container {
  height: 100%;
}
</style>
