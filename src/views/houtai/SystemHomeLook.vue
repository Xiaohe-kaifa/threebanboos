<template>
    <main class="el-main" >
        <el-card style="max-width: 100% ;height: 99%; ">
          <template #header >
            <div class="card-header" style="height:9px;margin-top:-4px;">
              <span><el-breadcrumb  style=" white-space: nowrap; display: flex; ">
                  <el-breadcrumb-item>
                    默认系统面板
                </el-breadcrumb-item>
                  <el-breadcrumb-item>系统面板查看</el-breadcrumb-item>

                </el-breadcrumb></span>
            </div>
          </template>
          <div>
            <div class="home-card-top">222</div>
            <div style="display: flex;">
              <div id="echart01" class="home-card-left">111</div>
              <div id="echart02" class="home-card-right">111</div>
            </div>
          </div>
        </el-card>
    </main>
</template>
<script lang="ts" setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';
onMounted(()=>{
  // 基于准备好的dom，初始化echarts实例
var myChart01 = echarts.init(document.getElementById('echart01'));
var myChart02 = echarts.init(document.getElementById('echart02'));
// 绘制图表
myChart02.setOption({
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      type: 'line',
      smooth: true
    }
  ]
});

myChart01.setOption({
  backgroundColor: '#2c343c',
  title: {
    text: 'Customized Pie',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#ccc'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: [
        { value: 335, name: 'Direct' },
        { value: 310, name: 'Email' },
        { value: 274, name: 'Union Ads' },
        { value: 235, name: 'Video Ads' },
        { value: 400, name: 'Search Engine' }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: 'rgba(255, 255, 255, 0.3)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#c23531',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
});
})
</script>
<style scoped >
.home-card-right{
  margin-top: 15px;
  margin-left: 15px;
  flex: 1;
  border-radius: 5px;
  height: 430px;
  width: 50%;
  box-shadow: 0px 0px 10px 1px rgb(216, 216, 216);
}
.home-card-left{
  margin-top: 15px;
  border-radius: 5px;
  height: 430px;
  width: 600px;
  box-shadow: 0px 0px 10px 1px rgb(216, 216, 216);
}
.home-card-top{
  height: 100px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px rgb(216, 216, 216);
}
</style>