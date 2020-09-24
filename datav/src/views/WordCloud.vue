<template>
  <div id="main">1111</div>
</template>

<script>
import 'echarts-wordcloud'
export default {
  name: 'WordCloud',
  data() {
    return {}
  },
  mounted() {
    const data = [
      {
        name: '学习',
        value: 100,
      },
      {
        name: '看书',
        value: 20,
      },
      {
        name: '睡觉',
        value: 30,
      },
      {
        name: '睡觉',
        value: 76,
      },
      {
        name: '睡觉',
        value: 100,
      },
      {
        name: '睡觉',
        value: 12,
      },
      {
        name: '睡觉',
        value: 77,
      },
      {
        name: '睡觉',
        value: 65,
      },
      {
        name: '睡觉',
        value: 87,
      },
    ]
    var chart = this.$echarts.init(document.getElementById('main'))
    chart.setOption({
      series: [
        {
          type: 'wordCloud',
          data,
          shape: 'circle',
          textStyle: {
            normal: {
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              // Color can be a callback function or a color string
              color: function () {
                // Random color
                return (
                  'rgb(' +
                  [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                  ].join(',') +
                  ')'
                )
              },
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333',
            },
          },
        },
      ],
    })
  },
}
</script>

<style scoped lang="scss">
#main {
  height: 100%;
}
</style>
