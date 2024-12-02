<template>
    <main class="el-main" >
        <el-card style="max-width: 100% ;height: 99%; ">
          <template #header >
            <div class="card-header" style="margin-top: -10px; height: 15px;">
              <span><el-breadcrumb  style=" white-space: nowrap; display: flex; ">
                  <el-breadcrumb-item>
                    商家管理
                </el-breadcrumb-item>
                  <el-breadcrumb-item>商家订单</el-breadcrumb-item>
                  <div class="anniu00" style="margin-left: 70%;">
                    <OrdersAdd @actionSearch="actionSearch" />
                    <el-button @click="openBusinessSearch" type="primary" style="margin-left:12px; font-size: small; height: 25px;width: 60px;" >
                        <el-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"></path><path fill="currentColor" d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path></svg></el-icon>
                        查询</el-button>
                  </div>
                </el-breadcrumb></span>
            </div>
          </template>
          <el-scrollbar height="550px">
            <div class="business-search" v-if="businessSearch">
              <div class="essential">
                模糊查询
              </div>
              <el-form :model="formSearch" :inline="true"  class="demo-form-inline" >
                <el-form-item :label-width="businessWidth" label="订单号" >
                  <el-input  placeholder="填写订单号" style="width: 90%; " v-model="formSearch.order_id"  />
                </el-form-item>
                <el-form-item :label-width="businessWidth" label="商品名称" >
                  <el-input  placeholder="填写商品名称" style="width: 90%; " v-model="formSearch.order_commodity_name"  />
                </el-form-item>
                <el-form-item :label-width="businessWidth" label="商家" >
                  <el-input  placeholder="填写商家" style="width: 90%; " v-model="formSearch.order_shop_name"  />
                </el-form-item>
                <el-form-item :label-width="businessWidth" label="商品类型" >
                  <el-select style="width: 100px;" v-model="formSearch.order_commodity_type" placeholder="商品类型">
                    <el-option label="竹编家具" value="0" />
                    <el-option label="工艺品" value="1"/>
                  </el-select>
                </el-form-item>
                <el-form-item :label-width="businessWidth" label="下单账号" >
                  <el-input  placeholder="填写下单账号" style="width: 90%; " v-model="formSearch.order_people_account"  />
                </el-form-item>
                <el-form-item :label-width="businessWidth" label="姓名" >
                  <el-input  placeholder="填写姓名" style="width: 90%; " v-model="formSearch.order_people_name"  />
                </el-form-item>
                <el-form-item :label-width="businessWidth" label="手机号" >
                  <el-input  placeholder="填写手机号" style="width: 90%; " v-model="formSearch.order_people_phone"  />
                </el-form-item>
                <el-form-item :label-width="businessWidth" label="地址" >
                  <el-cascader
                :options="regionData"
                placeholder="选择地址"
                style="width: 80%;"
                v-model="formSearch.order_people_address">
                </el-cascader>
                </el-form-item>
                <el-button @click="noActionSearch" style="width: 70px;height:25px;margin-top:-20px;" type="info">
                  重置</el-button>
                <el-button @click="actionSearch" style="width: 70px;height:25px;margin-top:-20px;" type="primary">
                  <el-icon><svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3402"><path d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0" p-id="3403"></path></svg></el-icon>查询</el-button>
              </el-form>
            </div>
            <OrdersTable  ref="updateDate"/>
        </el-scrollbar> 
        </el-card>
    </main>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import {regionData} from "element-china-area-data";
import OrdersAdd from './OrdersAdd.vue';
import OrdersTable from './OrdersTable.vue';
let businessSearch= ref(false)
let businessWidth=ref('140')
let updateDate = ref(null)
let formSearch=reactive({
  //基本信息
    order_id:'',
    order_commodity_name:'',
    order_shop_name:'',
    order_commodity_type:'',
    order_people_account:'',
    order_people_phone:'',
    order_people_name:'',
    order_people_address:'',
    commodityPage:1
})
const actionSearch=async()=>{
 //明天调用子组件更新数据
 updateDate.value.updateTable(formSearch)
}
const noActionSearch=()=>{
  const keys = Object.keys(formSearch)
  keys.forEach(key =>{
    formSearch[key]=''
  })
  formSearch.commodityPage=1
}
const openBusinessSearch=()=>{
  if(businessSearch.value){
    businessSearch.value=false
  }else{
    businessSearch.value=true
  }
}
</script>
<style scoped >
.business-search{
  background-color: rgb(212, 212, 212,0.2);
  border: 1px solid rgb(239, 239, 239);
}
.essential{
  font-size: large;
  color: rgb(0, 0, 0,0.7);
  display: flex;
  align-items: center;
}
</style>