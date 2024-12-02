<template>
    <div class="commodity-main">
        <div class="commodity"  v-if="load" v-for="(item,index) in tableData" :key="index">
            <div class="del-commodity" @click="delCommodity(index)" >
                <svg t="1729132973569" class="icon" style="width: 1.3em;height: 1.3em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2070"><path d="M706.574 234.574l-474 474c-23.432 23.431-23.432 61.42 0 84.852 23.431 23.432 61.42 23.432 84.852 0l474-474c23.432-23.431 23.432-61.42 0-84.852-23.431-23.432-61.42-23.432-84.852 0z" fill="#8a8a8a" p-id="2071"></path><path d="M791.426 708.574l-474-474c-23.431-23.432-61.42-23.432-84.852 0-23.432 23.431-23.432 61.42 0 84.852l474 474c23.431 23.432 61.42 23.432 84.852 0 23.432-23.431 23.432-61.42 0-84.852z" fill="#8a8a8a" p-id="2072"></path></svg>
            </div>
            <div @click="onUpdated(index)" :class="['commodity-card',{ magnify:statusCardStyle === 'magnify' && currentIndex === index , shrink:statusCardStyle === 'shrink' && currentIndex === index }]" @mouseenter="statusCardMagnify('magnify',index)" @mouseleave="statusCardShrink('shrink',index)" >
                    <img class="commodity-photo" :src="item.commodityPhoto" alt="">
                    
                    <div class="commodity-content">
                        <el-tag type="success">{{ item.commodityType }}</el-tag>
                        <span style="width: 5px;"></span>
                        <el-tag type="primary">{{ item.commodityOther }}</el-tag>
                    </div>
                    
                    <div class="commodity-bottom">
                        <div class="commodity-shop-name">
                            {{ item.commodityShopName }}
                        </div>
                        <div class="commodity-name">
                            {{ item.commodityName }}
                        </div>
                        <div class="commodity-inventory">
                            <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8260"><path d="M493.9008 436.224a25.5232 25.5232 0 0 0 36.1984 0l92.3392-92.3392a25.6 25.6 0 1 0-36.1984-36.1984l-48.64 48.64V93.8752a25.6 25.6 0 1 0-51.2 0v262.4512l-48.64-48.64a25.6 25.6 0 1 0-36.1984 36.1984l92.3392 92.3392z" fill="#666666" p-id="8261"></path><path d="M998.4 529.0752c0-36.8128-18.3808-71.8848-52.992-102.912 33.7408-30.3872 52.992-64.896 52.992-101.888 0-93.4656-115.8912-172.416-302.464-206.0544a25.6256 25.6256 0 0 0-9.088 50.4064C840.0896 196.2496 947.2 260.2496 947.2 324.2752c0 80.7168-178.7136 170.6496-435.2 170.6496S76.8 404.992 76.8 324.2752c0-62.592 99.456-124.16 247.4752-153.216a25.6 25.6 0 0 0-9.856-50.2528C136.2688 155.776 25.6 233.728 25.6 324.2752c0 36.992 19.2512 71.5008 52.992 101.888C43.9808 457.1904 25.6 492.2624 25.6 529.0752c0 36.608 18.176 71.5264 52.4032 102.4C43.776 662.3744 25.6 697.2672 25.6 733.8752c0 124.416 213.6576 221.8496 486.4 221.8496s486.4-97.4592 486.4-221.8496c0-36.608-18.176-71.5008-52.4032-102.4 34.2272-30.8992 52.4032-65.792 52.4032-102.4zM512 904.5248c-256.4864 0-435.2-89.9328-435.2-170.6496 0-28.928 21.248-53.4528 43.264-71.1936 90.368 55.4496 234.8544 88.2432 391.936 88.2432 157.1328 0 301.6192-32.7936 391.936-88.2432 22.016 17.7408 43.264 42.2656 43.264 71.1936 0 80.7168-178.7136 170.6496-435.2 170.6496z m378.4448-294.0672C811.1616 665.5232 666.112 699.7248 512 699.7248s-299.1616-34.2016-378.496-89.344C107.648 592.5632 76.8 563.9424 76.8 529.1008c0-29.2608 21.76-54.016 44.032-71.808 87.8592 54.1696 228.8384 88.8576 391.168 88.8576s303.3088-34.688 391.168-88.8576c22.272 17.792 44.032 42.5472 44.032 71.808 0 34.8416-30.8224 63.488-56.7552 81.3824z" fill="#666666" p-id="8262"></path></svg>
                            <div class="commodity-inventory-number">
                                {{ item.commodityShopNumber }}
                            </div>
                        </div>
                        <div class="commodity-price">
                            <div class="commodity-before">
                                ￥{{ item.commodityPriceBefore }}
                            </div>
                            <div class="commodity-after">￥{{ item.commodityPriceAfter }}</div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div style=" display:flex;justify-content:center; width: 100%;">
        <el-pagination
        size="small" 
        background
        layout="prev, pager, next" 
        :total="page_size" 
        @current-change="page_information"
        :current-page="page_open"
        />
      </div>

</template>
<script lang="ts" setup >
import { onMounted, reactive, ref } from 'vue';
import { delCommodityTable, searchCommodityTable, searchCommodityTableCount } from '@/service/commodity/commodity';
import { ElMessage, ElMessageBox } from 'element-plus';
let statusCardStyle=ref('commodity-card')
let currentIndex = ref(null)
let load =ref(false)
let page_open = ref(1)
const emit = defineEmits(["onUpdated"])
let page_size = ref()
let formSearch=reactive({
    commodityType:'',
    commodityName:'',
    commodityShopName:'',
    commodityPage:1,
})
let tableData=reactive([])
const page_information=(value:number)=>{
  page_open.value=value
  formSearch.commodityPage=value
  updateTable(formSearch)
}
const onUpdated=(value:number)=>{
    emit('onUpdated',tableData[value])
    
}
const delCommodity=(value:number)=>{
    ElMessageBox.confirm(
    '你确定要删除该商品吗？',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(async() => {
    const res =  delCommodityTable(tableData[value].id) 
    setTimeout(()=>{
        updateTable(formSearch)
    },100)
      ElMessage({
        type: 'success',
        message: '删除成功！',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消删除',
      })
    })
}
const updateTable=async(form:any)=>{
    console.log('更新');
    
  formSearch=form
  form.business_page=page_open.value
  const res = await searchCommodityTable(form)
  const page = await searchCommodityTableCount(form)
  tableData = Object.keys(res).map(Key => res[Key])
  load.value=false
  load.value=true
  page_size.value=  page
}
const statusCardMagnify=(value:string,index:number)=>{
    statusCardStyle.value= value;
    currentIndex.value = index;
    // currentIndexBefore.value=index
}
const statusCardShrink=(value:string,index:number)=>{
    statusCardStyle.value= value;
    // currentIndex.value = currentIndexBefore.value
}
onMounted(()=>{
    updateTable(formSearch)
})
defineExpose({updateTable})
</script>
<style scoped >
.commodity-shop-name{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    right: 0;
    top: -5px;
    font-size: small;
    font-weight: bold;
    width: 70px;
    height: 25px;
    border-radius: 5px 0px 0 5px;
    background-color: rgb(25, 129, 19);
}
.del-commodity{
    cursor: pointer;
    position: absolute;
    right: 13px;
    top: 0;
    z-index: 1;
}
.shrink{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 5%;
    height: 90%;
    background-color: white;
    box-shadow: 0px 0px 10px 1px rgb(10, 10, 10,0.4);
    border-radius: 5px;
    animation: shrink_out 0.1s ease-in-out forwards;
}
@keyframes shrink_out {
    0%{
        transform:scale(1.05) 
    }
    100%{
        transform:scale(1) 
    }
}
.magnify{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 5%;
    height: 90%;
    background-color: white;
    box-shadow: 0px 0px 10px 1px rgb(10, 10, 10,0.4);
    border-radius: 5px;
    animation: magnify_open 0.1s ease-in-out forwards;
}
@keyframes magnify_open {
    0%{
        transform:scale(1) 
    }
    100%{
        transform:scale(1.05) 
    }
}
.commodity-after{
    color: red;
    margin-left: 5px;
    font-weight: 600;
    font-size: 15px;
    margin-top: -3px;
}
.commodity-before{
    text-decoration: line-through;
    font-size: small;
    font-weight: 600;
    color: rgb(153, 153, 153);
}
.commodity-inventory-number{
    font-size: 12px;
    margin-left: 3px;
    color: rgb(113, 113, 113);
    font-weight: 600;
}
.commodity-name{
    color: rgb(25, 149, 50);
    font-size: 14px;
   
    font-weight: 600;
    margin-left: 5%;
    width: 90%;
}
.commodity-price{
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
}
.commodity-inventory{
    position: absolute;
    bottom: 10px;
    display: flex;
    left: 10px;
}
.commodity-content{
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    margin-top: 5px;
    height: 40px;
}
.commodity-bottom{
    position: relative;
    flex-grow: 1;
}
.commodity-photo{
    width: 100%;
    height: 130px;
    border-radius: 5px 5px 0 0;
}
.commodity-card{
    display: flex;
    flex-direction: column;
    width: 90%;
    
    margin-left: 5%;
    height: 93%;
    background-color: white;
    box-shadow: 0px 0px 10px 1px rgb(10, 10, 10,0.4);
    border-radius: 5px;
}

.commodity-main{
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
}
.commodity{
    width: 220px;
    height: 250px;
    position: relative;
}
</style>