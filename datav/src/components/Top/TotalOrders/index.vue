<template>
  <common-card title="累计订单量" :value="orderToday">
    <template>
      <v-chart :options="getOptions()" />
      <!-- <div
        id="total-orders-chart"
        :style="{ width: '100%', height: '100%' }"
      ></div> -->
    </template>
    <template v-slot:footer>
      <span>昨日订单量 </span>
      <span class="emphasis">{{ orderLastDay }}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
import commonData from '@/mixins/commonData'

export default {
  name: 'TotalOrders',
  data() {
    return {}
  },
  mixins: [commonCardMixin, commonData],
  mounted() {
    // chart.setOption()
  },
  methods: {
    getOptions() {
      return this.orderTrend.length > 0
        ? {
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
                data: this.orderTrend,
              },
            ],
          }
        : null
    },
  },
}
</script>

<style scoped lang="scss">
</style>
