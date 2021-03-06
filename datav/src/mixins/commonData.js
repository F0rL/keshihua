function wrapperNumber(o, k) {
  return o && o[k] ? o[k] : 0
}

function wrapperMoney(o, k) {
  return o && o[k] ? `￥ ${formate(o[k])}` : '¥ 0%'
}

function wrapperPercentage(o, k) {
  return o && o[k] ? `${o[k]}%` : '0%'
}

function wrapperArray(o, k) {
  return o && o[k] ? o[k] : []
}

function wrapperOriginalNumber(o, k) {
  return o && o[k] ? o[k] : 0
}

// 转千分号 不太灵活
// function formate(v) {
//   return (+v).toLocaleString()
// }

function formate(v) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${v}`.replace(reg, '$&,')
}

export default {
  computed: {
    reportData() {
      return this.getReportData()
    },
    // 销售额
    salesToday() {
      return wrapperMoney(this.reportData, 'salesToday')
    },
    salesGrowthLastDay() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
    },
    salesGrowthLastMonth() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
    },
    salesLastDay() {
      return wrapperMoney(this.reportData, 'salesLastDay')
    },
    // 订单量
    orderToday() {
      return wrapperNumber(this.reportData, 'orderToday')
    },
    orderLastDay() {
      return wrapperNumber(this.reportData, 'orderLastDay')
    },
    orderTrend() {
      return wrapperArray(this.reportData, 'orderTrend')
    },
    // 交易用户数
    orderUser() {
      return wrapperNumber(this.reportData, 'orderUser')
    },
    returnRate() {
      return wrapperPercentage(this.reportData, 'returnRate')
    },
    orderUserTrend() {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },
    orderUserTrendAxis() {
      return wrapperArray(this.reportData, 'orderUserTrendAxis')
    },
    // 累计用户数
    userToday() {
      return wrapperNumber(this.reportData, 'userToday')
    },
    userTodayNumber() {
      return wrapperOriginalNumber(this.reportData, 'userToday')
    },
    userLastMonth() {
      return wrapperOriginalNumber(this.reportData, 'userLastMonth')
    },
    userGrowthLastDay() {
      return wrapperPercentage(this.reportData, 'userGrowthLastDay')
    },
    userGrowthLastMonth() {
      return wrapperPercentage(this.reportData, 'userGrowthLastMonth')
    }
  },
  inject: ['getReportData', 'getWordCloud', 'getMapData']
}
