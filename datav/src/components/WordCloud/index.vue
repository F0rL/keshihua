<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings" />
</template>

<script>
export default {
  name: 'WordCloud',
  data() {
    return {
      chartData: {
        columns: ['word', 'value'],
        rows: [
          {
            word: '学习',
            value: Math.random() * 100,
          },
          {
            word: '读书',
            value: Math.random() * 100,
          },
          {
            word: '看电影1',
            value: Math.random() * 100,
          },
          {
            word: '看电影2',
            value: Math.random() * 100,
          },
          {
            word: '看电影3',
            value: Math.random() * 100,
          },
          {
            word: '看电影4',
            value: Math.random() * 100,
          },
          {
            word: '看电影5',
            value: Math.random() * 100,
          },
        ],
      },
      chartSettings: {
        color: [
          'rgba(97,216,0,.7)',
          'rgba(204,178,26,.7)',
          'rgba(245,166,35,.7)',
          'rgba(156,13,113,.7)',
        ],
      },
      sizeMin: 16,
      sizeMax: 24,
    }
  },
}
</script>

<style scoped lang="scss">
</style>
