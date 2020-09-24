<template>
  <common-card title="累计交易用户数" value="1,081,014">
    <template>
      <div
        id="total-users-chart"
        :style="{ width: '100%', height: '100%' }"
      ></div>
    </template>
    <template v-slot:footer>
      <div class="total-users-footer">
        <span>日同比 </span>
        <span class="emphasis">8.73%</span>
        <div class="increase" />
        <span class="month">月同比 </span>
        <span class="emphasis">8.73%</span>
        <div class="decrease" />
      </div>
    </template>
  </common-card>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'
export default {
  name: 'TotalUsers',
  data() {
    return {}
  },
  mixins: [commonCardMixin],
  mounted() {
    const chartDom = document.getElementById('total-users-chart')
    const chart = this.$echarts.init(chartDom)
    chart.setOption({
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
      xAxis: {
        type: 'value',
        show: false,
      },
      yAxis: {
        type: 'category',
        show: false,
      },
      series: [
        {
          type: 'bar',
          data: [200],
          stack: '总量',
          barWidth: 10,
          itemStyle: {
            color: '#45c946',
          },
        },
        {
          type: 'bar',
          data: [250],
          stack: '总量',
          itemStyle: {
            color: '#eee',
          },
        },
        // 三角形 自定义系列
        {
          type: 'custom',
          data: [200],
          stack: '总量',
          renderItem: function (params, api) {
            const value = api.value(0)
            // 获取坐标
            const endPoint = api.coord([value, 0])
            return {
              type: 'group',
              position: endPoint,
              children: [
                {
                  type: 'path',
                  shape: {
                    d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                    x: -5,
                    y: -20,
                    width: 10,
                    height: 10,
                    layout: 'cover',
                  },
                  style: {
                    fill: '#45c946',
                  },
                },
                {
                  type: 'path',
                  shape: {
                    d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                    x: -5,
                    y: 10,
                    width: 10,
                    height: 10,
                    // 默认为center不缩放
                    layout: 'cover',
                  },
                  style: {
                    fill: '#45c946',
                  },
                },
              ],
            }
          },
        },
      ],
    })
  },
}
</script>

<style scoped lang="scss">
.total-users-footer {
  display: flex;
  align-items: center;
  .month {
    margin-left: 10px;
  }
}
</style>
