<template>
  <common-card title="今日交易用户数" :value="orderUser">
    <template>
      <v-chart :options="getOptions()" />
      <!-- <div
        id="today-users-chart"
        :style="{ width: '100%', height: '100%' }"
      ></div> -->
    </template>
    <template v-slot:footer>
      <span>退货率 </span>
      <span class="emphasis">{{ returnRate }}</span>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
import commonData from '@/mixins/commonData'

export default {
  name: 'TodayUsers',
  data() {
    return {}
  },
  mixins: [commonCardMixin, commonData],
  methods: {
    getOptions() {
      return {
        color: ['#3398DB'],
        tooltip: {},
        series: [
          {
            name: '用户实时交易量',
            type: 'bar',
            data: this.orderUserTrend,
            barWidth: '60%',
          },
        ],
        xAxis: {
          type: 'category',
          data: this.orderUserTrendAxis,
          show: false,
        },
        yAxis: {
          show: false,
        },
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },
      }
    },
  },
}
</script>

<style scoped lang="scss">
</style>
