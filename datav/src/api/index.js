import request from '../utils/request'

const icode = 'B51A580AEBE1A75B'

export function getWordCloud() {
  return request({
    url: '/screen/wordcloud',
    method: 'get',
    params: {
      icode
    }
  })
}

export function getMapScatter() {
  return request({
    url: '/screen/map/scatter',
    method: 'get',
    params: {
      icode
    }
  })
}

export function getSceenData() {
  return request({
    url: '/screen/data',
    method: 'get',
    params: {
      icode
    }
  })
}
