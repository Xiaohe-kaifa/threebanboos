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
            <div class="home-card-top">
              <div  class="home-card-top-box">
                <div v-if="load01">
                  <svg t="1729264386058" class="icon" style="margin-top:-2px;width: 1.2em;height: 1.2em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2808"><path d="M1023.053953 432.689676c0 70.070892-57.193607 130.420375-127.763872 130.420375-70.568219 0-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0c0 70.070892-57.195653 130.420375-127.763872 130.420375-70.570265 0-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0 0 0c0 70.070892-57.19463 130.420375-127.763872 130.420375s-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0 0 0c0 70.070892-57.19463 130.420375-127.763872 130.420375-70.568219 0-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0 102.210893-227.327472L920.84306 205.362204 1023.053953 432.689676 1023.053953 432.689676 1023.053953 432.689676zM869.737102 154.255223 154.262898 154.255223c-31.741935 0-51.104935-24.828478-51.104935-51.104935 0-26.276457 16.019859-51.104935 57.494459-51.104935l702.700273 0c38.527478 0 57.493435 24.829502 57.493435 51.104935C920.845107 129.426745 896.189567 154.255223 869.737102 154.255223zM154.262898 588.664054 154.262898 588.664054C158.855496 588.240405 149.795143 589.413114 154.262898 588.664054 155.236062 588.490092 153.314293 588.81448 154.262898 588.664054c2.071172-0.400113 23.50739 0.449231 25.554002 0 8.682753-1.99647 17.392112 3.14462 25.552979 0l0 0 0 0 0 229.973742 613.264335 0L818.634214 588.664054l25.552979 0 0 0c8.136308 3.14462 16.892739-1.99647 25.552979 0 2.046612 0.449231-2.070148-0.400113 0 0 0.949628 0.149403-0.973164-0.173962 0 0 4.493338 0.748037-4.590552-0.423649 0 0l0 0c5.265934 0.474814 20.162202 0 25.552979 0 10.930957 0 15.171538 1.89721 25.555026 0l0 332.184635c0 26.250874-24.65554 51.105958-51.106981 51.105958L154.264944 971.954647c-26.451442 0-51.104935-24.855084-51.104935-51.105958L103.16001 588.664054c10.381441 1.89721 14.624069 0 25.552979 0C134.099672 588.664054 148.999011 589.138868 154.262898 588.664054z" p-id="2809" fill="#20827d" data-spm-anchor-id="a313x.manage_type_myprojects.0.i7.64463a81VMJTu1"></path></svg>
                  入驻商家量：{{ chart[0] }}</div>
                <div v-if="load02">
                  <svg t="1729264318804" class="icon" style="margin-top:-2px;width: 1.3em;height: 1.3em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2608"><path d="M554.666667 597.333333a213.333333 213.333333 0 0 1 213.333333 213.333334v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a128 128 0 0 0-120.490667-127.786667L554.666667 682.666667H213.333333a128 128 0 0 0-127.786666 120.490666L85.333333 810.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333a213.333333 213.333333 0 0 1 213.333333-213.333334h341.333334z m311.04 7.253334l-1.792-0.554667A213.418667 213.418667 0 0 1 1024 810.666667v85.333333a42.666667 42.666667 0 0 1-85.333333 0v-85.333333c0-58.794667-39.68-108.373333-93.653334-123.306667l-1.237333-0.341333a42.666667 42.666667 0 0 1 21.930667-82.474667zM384 85.333333a213.333333 213.333333 0 1 1 0 426.666667A213.333333 213.333333 0 0 1 384 85.333333z m311.210667 7.253334a213.418667 213.418667 0 0 1 0.042666 412.16 42.666667 42.666667 0 1 1-22.144-82.432l1.621334-0.469334 5.802666-1.706666a128.042667 128.042667 0 0 0-5.76-244.693334l-1.664-0.426666a42.666667 42.666667 0 1 1 22.101334-82.432zM384 170.666667a128 128 0 1 0 0 256 128 128 0 0 0 0-256z" fill="#20827d" p-id="2609"></path></svg>
                  用户注册量：{{ chart[1] }}</div>
                <div v-if="load03">
                  <svg t="1729264152114" class="icon" style="margin-top:-2px;width: 1.2em;height: 1.2em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2070"><path d="M397.3 13.6h230.1v690.2H397.3V13.6zM13.8 243.7h230.1v460.1H13.8V243.7zM780.7 397h230.1v306.8H780.7V397zM13.8 857.2h997v153.4h-997V857.2z m0 0" p-id="2071" fill="#20827d"></path></svg>
                  总订单量：{{ chart[2] }}</div>
                <div v-if="load04">
                  <svg t="1729264248397" class="icon" style="margin-top:-2px;width: 1.3em;height: 1.3em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2408"><path d="M512.483467 824.946804c27.883666 0 50.394238-22.577306 50.394238-50.399294l0-100.655009 101.466938 0c28.087912 0 50.665218-22.577306 50.665218-50.532762 0-27.816932-22.577306-50.527706-50.665218-50.527706L562.877705 572.832034l0-50.532762 101.466938 0c28.087912 0 50.665218-22.510572 50.665218-50.466028 0-27.883666-22.577306-50.460972-50.665218-50.460972l-76.269819 0 69.681359-69.819882c19.691569-19.686513 19.691569-51.671283 0-71.495309-19.686513-19.686513-51.738017-19.686513-71.429586 0.07179l-66.855277 66.922011-66.928078-66.922011c-19.686513-19.758303-51.671283-19.758303-71.429586-0.07179-19.753247 19.824026-19.753247 51.808796 0 71.495309l69.748093 69.819882-89.572118 0c-27.817943 0-50.527706 22.577306-50.527706 50.460972 0 27.955455 22.709763 50.466028 50.527706 50.466028l100.59333 0 0 50.532762-100.59333 0c-27.817943 0-50.527706 22.711785-50.527706 50.527706 0 27.955455 22.709763 50.532762 50.527706 50.532762l100.59333 0 0 100.655009C461.950706 802.369497 484.594746 824.946804 512.483467 824.946804L512.483467 824.946804zM512.483467 824.946804M955.837496 294.708215c-1.814961-4.97269-4.101104-9.540932-7.054587-13.642036-0.404448-0.670373-0.809907-1.409502-1.075832-2.081897l-0.537916 0.201213c-8.802814-10.883699-22.305315-17.805829-37.29113-17.805829-26.879623 0-48.717801 21.634942-48.717801 48.44682 0 12.366002 4.700699 23.655161 12.36398 32.185983 26.879623 54.161673 41.996884 115.107963 41.996884 179.615419 0 223.223017-180.958187 404.115481-404.047736 404.115481-223.088538 0-403.975946-180.82573-403.975946-404.115481 0-223.088538 180.887408-403.981002 403.975946-403.981002 87.219241 0 167.922823 27.61673 233.907526 74.587315 9.073794 12.099066 23.653138 19.89076 39.915998 19.89076 27.549996 0 49.855311-22.378116 49.855311-49.788577 0-14.046484-5.91101-26.612688-15.11726-35.681426L820.034933 126.58519c-0.265925-0.204246-0.671384-0.471182-0.805863-0.670373-2.081897-1.954496-4.300295-3.629922-6.853374-5.244681C727.84199 55.423551 621.674354 16.517662 506.499657 16.517662c-277.045965 0-501.546027 224.566796-501.546027 501.612761 0 276.980242 224.565785 501.546027 501.546027 501.546027s501.546027-224.565785 501.546027-501.546027C1008.180163 437.899034 989.298501 361.968951 955.837496 294.708215L955.837496 294.708215zM955.837496 294.708215" fill="#20827d" p-id="2409"></path></svg>
                  交易金额：￥{{ chart[3] }}</div>
              </div>
             
            </div>
            <div style="display: flex;">
              <div id="echart01" class="home-card-left">111</div>
              <div id="echart02" class="home-card-right">111</div>
            </div>
          </div>
        </el-card>
    </main>
</template>
<script lang="ts" setup>
import { getChart, getChart01, getChart02 } from '@/service/home_look/home_look';
import * as echarts from 'echarts';
import { onMounted, onUnmounted, reactive, ref } from 'vue';
let chart02 = reactive([])
let chart=reactive([])
let load=ref(false)
let load01=ref(true)
const data = ref(null);
const loading = ref(false);
let intervalId = null;
let load02=ref(true)
let load03=ref(true)
let load04=ref(true)
onMounted(async()=>{
  fetchData();
 // 设置轮询，每 2 秒请求一次
 intervalId = setInterval(fetchData, 2000);
})
onUnmounted(() => {
  // 清除轮询
  clearInterval(intervalId);
});
function getLastSevenDays() {
    const today = new Date(); // 获取今天的日期
    const lastSevenDays = [];
    // 循环推算过去的七天，包括今天
    for (let i = 6; i >= 0; i--) {
        const previousDate = new Date(today);
        previousDate.setDate(today.getDate() - i);
        const formattedDate = `${previousDate.getMonth() + 1}-${previousDate.getDate()}`; // 格式化为 MM-DD
        lastSevenDays.push(formattedDate); // 从最久到最近添加日期
    }
    return lastSevenDays;
}
const fetchData = async () => {
  loading.value = true;
  try {
     // 基于准备好的dom，初始化echarts实例
var myChart01 = echarts.init(document.getElementById('echart01'));
var myChart02 = echarts.init(document.getElementById('echart02'));
// 绘制图表
  const res =await getChart()
  if(res[0]!=chart[0]){
    load01.value=false
    load01.value=true
  }else if(res[1]!=chart[1]){
    load02.value=false
    load02.value=true
  }else if(res[2]!=chart[2]){
    load03.value=false
    load03.value=true
  }else if(res[3]!=chart[3]){
    load04.value=false
    load04.value=true
  }
  chart=Object.keys(res).map( Key=>res[Key])
const res01 = await getChart01()
myChart02.setOption({
  title: {
    text: '近一周订单量',
    left: '40%',
    top:'10px'

  },
  tooltip: {
    trigger: 'axis',
    
  },
  legend: {
    data: ['竹编家具','工艺品'],
    left: '3%',
    top:'5%'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: getLastSevenDays()
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '竹编家具',
      type: 'line',
      smooth: true,
      data: res01[0]
    },
    {
      name: '工艺品',
      type: 'line',
      smooth: true,
      data: res01[1]
    }
  ]
});



const res02 = await getChart02()
chart02=Object.keys(res02).map(Key => res02[Key])
myChart01.setOption({
  backgroundColor: '#ffffff',
  title: {
    text: '热门商品总销量',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#20827d'
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 0,
    max: 15,
    inRange: {
      colorLightness: [0, 0.5]
    }
  },
  series: [
    {
      name: '热门商品总销量',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      data: chart02.sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: 'rgba(0, 0, 0, 0.5)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.5)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#20827d',
        shadowBlur: 200,
        shadowColor: 'rgba(0, 0, 0, 0.1)'
      },
 
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
});
  } catch (error) {
    console.error('请求失败:', error);
  } finally {
    loading.value = false;
  }
};
</script>
<style scoped >
.home-card-top-box{
  height: 100%;
  color: #20827d;
  width: 80%;
  font-size: large;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 10%;
}
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