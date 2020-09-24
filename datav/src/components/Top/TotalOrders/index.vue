<template>
  <common-card title="累计订单量" value="¥ 32,039,165">
    <template>
      <div
        id="total-orders-chart"
        :style="{ width: '100%', height: '100%' }"
      ></div>
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">¥ 32,039,165</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
  name: 'TotalOrders',
  data() {
    return {}
  },
  mixins: [commonCardMixin],
  mounted() {
    const chartDom = document.getElementById('total-orders-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false, //默认为true，两侧有边距
      },
      yAxis: {
        show: false,
      },
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      series: [
        {
          type: 'line',
          areaStyle: {
            color: 'purple',
          },
          smooth: true,
          itemStyle: {
            opacity: 0,
          },
          lineStyle: {
            width: 0,
          },
          data: [
            620,
            420,
            220,
            534,
            790,
            430,
            220,
            320,
            532,
            320,
            834,
            698,
            530,
            220,
            620,
          ],
        },
      ],
    })
  },
}
</script>

<style scoped lang="scss">
</style>
