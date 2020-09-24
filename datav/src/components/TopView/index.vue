<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover"><total-sales /></el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"> <total-orders /> </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"> <today-users /> </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover"> <total-users /> </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../Top/TotalSales'
import TotalOrders from '../Top/TotalOrders'
import TodayUsers from '../Top/TodayUsers'
import TotalUsers from '../Top/TotalUsers'
export default {
  name: 'TopVue',
  data() {
    return {}
  },
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers,
  },
}
</script>

<style lang="scss" scoped>
</style>
