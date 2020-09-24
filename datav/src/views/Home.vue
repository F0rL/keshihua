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
import { getWordCloud } from '../api'

export default {
  name: 'Home',
  mounted() {
    getWordCloud().then((res) => console.log(res))
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

