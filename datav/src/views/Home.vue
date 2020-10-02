<template>
  <div class="home">
    <top-view></top-view>
    <sales-view></sales-view>
    <bottom-view></bottom-view>
    <map-view></map-view>
  </div>
</template>

<script>
import TopView from '../components/TopView'
import SalesView from '../components/SalesView'
import MapView from '../components/MapView'
import BottomView from '../components/BottomView'
import { getWordCloud, getMapScatter, getSceenData } from '../api'

export default {
  name: 'Home',
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null,
    }
  },
  mounted() {
    getSceenData().then((data) => (this.reportData = data))
    getWordCloud().then((data) => (this.wordCloud = data))
    getMapScatter().then((data) => (this.mapData = data))
  },
  methods: {
    getReportData() {
      return this.reportData
    },
    getWordCloud() {
      return this.wordCloud
    },
    getMapData() {
      return this.mapData
    },
  },
  provide() {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData,
    }
  },
  components: {
    TopView,
    SalesView,
    MapView,
    BottomView,
  },
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>

