<template>
    <div class="chart-container" ref="chartContainer"></div>
  </template>
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import { init, dispose } from 'klinecharts'
  const chartContainer = ref(null)
  let chart = null
  onMounted(() => {
    // 创建图表实例
    chart = init(chartContainer.value)
    // 设置图表样式，样式这里暂不做介绍
    chart.setStyles({
      grid: {
        show: true,
        horizontal: {
          show: true,
          size: 1,
          color: '#EDEDED'
        },
        vertical: {
          show: true,
          size: 1,
          color: '#EDEDED'
        }
      }
    })
    // 获取模拟数据
    const klineData = generateKLineData()
    // 生成K线图
    chart.applyNewData(klineData)
  })
  // 模拟数据
  const generateKLineData = () => {
    const data = []
    let basePrice = 5000
    let baseVolume = 10000
    let timestamp = new Date('2023-01-01').getTime()
    for (let i = 0; i < 100; i++) {
      const open = basePrice + Math.random() * 20 - 10
      const close = open + Math.random() * 20 - 10
      const high = Math.max(open, close) + Math.random() * 10
      const low = Math.min(open, close) - Math.random() * 10
      const volume = baseVolume + Math.random() * 5000 - 2500
      data.push({
        timestamp,
        open,
        high,
        low,
        close,
        volume
      })
      basePrice = close
      timestamp += 24 * 60 * 60 * 1000 // 增加一天
    }
    return data
  }
  </script>
  <style scoped>
  .chart-container {
    width: 100%;
    height: 500px;
    border: 1px solid #ccc;
  }
  </style>
  