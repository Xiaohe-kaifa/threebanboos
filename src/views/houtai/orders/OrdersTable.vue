<template>
    <el-table :data="tableData" size="small" v-if="load" style="width: 100%">
        <el-table-column type="selection" width="55"/>
        <el-table-column prop="order_time" label="创建时间" width="140"/>
        <el-table-column prop="order_id" label="订单号" width="120"/>
        <el-table-column  label="头像"  width="80" >
            <template #default="scope">
                <div style="height:35px;width:50px">
                    <img class="order-photo" :src="scope.row.order_commodity_photo"  >
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="order_commodity_name" width="90" label="商品名称"/>
        <el-table-column prop="order_shop_name" width="90" label="商家"/>
        <el-table-column prop="order_commodity_type" width="70" label="商品类型"/>
        <el-table-column prop="order_number" width="70" label="数量(件)"/>
        <el-table-column prop="order_price" width="70" label="金额(¥)"/>
        <el-table-column prop="order_people_account" width="100" label="下单账号"/>
        <el-table-column prop="order_people_name" width="70" label="姓名"/>
        <el-table-column prop="order_people_phone" width="100" label="手机号"/>
        <el-table-column prop="order_people_address" width="80" label="地址"/>
        <el-table-column prop="order_people_detailed_address" width="150" label="详细地址"/>
        <el-table-column label="操作" fixed="right" align="right" min-width="100">
          <template #default="scope">
            <el-button  @click.prevent="readMessage(scope.$index)" plain link type="primary" size="small" >
                编辑
              </el-button>
            <el-button  @click.prevent="deleteChat(scope.$index)"  link type="danger"  size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top:20px; display:flex;justify-content:center; width: 100%;">
        <el-pagination  
        size="small" 
        background
        layout="prev, pager, next" 
        :total="page_size" 
        @current-change="page_information"
        :current-page="page_open"
        />
      </div>
      <el-dialog v-model="dialogVisible" center  style="height: 500px;width:400px;"    title="修改订单">
        <div class="order-update-up">
          <div class="order-update-up-shop-name">
            <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="971"><path d="M1023.053953 432.689676c0 70.070892-57.193607 130.420375-127.763872 130.420375-70.568219 0-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0c0 70.070892-57.195653 130.420375-127.763872 130.420375-70.570265 0-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0 0 0c0 70.070892-57.19463 130.420375-127.763872 130.420375s-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0 0 0c0 70.070892-57.19463 130.420375-127.763872 130.420375-70.568219 0-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0 102.210893-227.327472L920.84306 205.362204 1023.053953 432.689676 1023.053953 432.689676 1023.053953 432.689676zM869.737102 154.255223 154.262898 154.255223c-31.741935 0-51.104935-24.828478-51.104935-51.104935 0-26.276457 16.019859-51.104935 57.494459-51.104935l702.700273 0c38.527478 0 57.493435 24.829502 57.493435 51.104935C920.845107 129.426745 896.189567 154.255223 869.737102 154.255223zM154.262898 588.664054 154.262898 588.664054C158.855496 588.240405 149.795143 589.413114 154.262898 588.664054 155.236062 588.490092 153.314293 588.81448 154.262898 588.664054c2.071172-0.400113 23.50739 0.449231 25.554002 0 8.682753-1.99647 17.392112 3.14462 25.552979 0l0 0 0 0 0 229.973742 613.264335 0L818.634214 588.664054l25.552979 0 0 0c8.136308 3.14462 16.892739-1.99647 25.552979 0 2.046612 0.449231-2.070148-0.400113 0 0 0.949628 0.149403-0.973164-0.173962 0 0 4.493338 0.748037-4.590552-0.423649 0 0l0 0c5.265934 0.474814 20.162202 0 25.552979 0 10.930957 0 15.171538 1.89721 25.555026 0l0 332.184635c0 26.250874-24.65554 51.105958-51.106981 51.105958L154.264944 971.954647c-26.451442 0-51.104935-24.855084-51.104935-51.105958L103.16001 588.664054c10.381441 1.89721 14.624069 0 25.552979 0C134.099672 588.664054 148.999011 589.138868 154.262898 588.664054z" p-id="972"></path></svg>
            {{ formTable.order_shop_name }}</div>
            <div class="order-update-up-shop-middle">
              <div class="order-update-up-shop-photo">
                <img style="border-radius: 5px;width: 100%;height:100%" :src="formTable.order_commodity_photo" alt="">
                
              </div>
              <div class="order-update-commodity-name">
                <div class="order-update-commodity-name-true">
                  {{ formTable.order_commodity_name }}
                </div>
                <div class="order-update-commodity-type">
                  {{ formTable.order_commodity_type }}
                </div>
                <div class="order-update-commodity-price-after">
                  ¥{{ formTable.order_price }}
                </div>
                <div class="order-update-commodity-number">
                  <svg t="1729132973569" class="icon" style="margin-top:-2px;width: 1.2em;height: 1.2em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2070"><path d="M706.574 234.574l-474 474c-23.432 23.431-23.432 61.42 0 84.852 23.431 23.432 61.42 23.432 84.852 0l474-474c23.432-23.431 23.432-61.42 0-84.852-23.431-23.432-61.42-23.432-84.852 0z" fill="#8a8a8a" p-id="2071"></path><path d="M791.426 708.574l-474-474c-23.431-23.432-61.42-23.432-84.852 0-23.432 23.431-23.432 61.42 0 84.852l474 474c23.431 23.432 61.42 23.432 84.852 0 23.432-23.431 23.432-61.42 0-84.852z" fill="#8a8a8a" p-id="2072"></path></svg>
                  {{ formTable.order_number }}</div>
              </div>
            </div>
        </div>
        <div class="order-update-bottom">
          <div style="height: 10px;"></div>
          <el-form size="small" :model="formPeople" style="">
            <el-form-item  label="姓名" :label-width="formLabelWidth">
                <el-input style="width: 80%;" v-model="formPeople.order_people_name"  required/>
            </el-form-item>
            <el-form-item  label="手机号" :label-width="formLabelWidth">
              <el-input  style="width: 80%;" v-model="formPeople.order_people_phone"  required/>
            </el-form-item>
            <el-form-item  label="收货地址" :label-width="formLabelWidth">
              <el-cascader
                :options="regionData"
                placeholder="选择地址"
                style="width: 80%;"
                v-model="formPeople.order_people_address">
                </el-cascader>
            </el-form-item>
            <el-form-item  label="详细地址" :label-width="formLabelWidth">
              <el-input  style="width: 80%;" v-model="formPeople.order_people_detailed_address"  required/>
            </el-form-item>
        </el-form>
        </div>
        <div class="submit-orders">
          <el-button   type="info" @click="closeChat()">取消</el-button>
          <el-button type="primary" @click="addChat()">确认</el-button>
        </div>
      </el-dialog>
</template>
<script lang="ts"  setup >
import {regionData} from "element-china-area-data";
import { delOrdersTable, searchOrdersTable, searOrdersTableCount, updateOrdersTable } from '@/service/order/orders';
import { ElMessage, ElMessageBox } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';
let tableData = reactive([])
let page_size = ref()
const formLabelWidth = '140px'
let formPeople = reactive({
  order_id:'',
  order_people_name:'',
  order_people_address:'',
  order_people_phone:'',
  order_people_detailed_address:'',
})
let formTable=reactive({
  order_id:'',
  order_number:'',
  order_people_detailed_address:'',
  order_people_address:'',
  order_people_account:'',
  order_people_name:'',
  order_commodity_name:'',
  order_commodity_type:'',
  order_commodity_photo:'',
  order_shop_name:'',
  order_price:'',
})
let page_open = ref(1)
let load=ref(false)
let dialogVisible= ref(false)
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
onMounted(()=>{
  updateTable(formSearch)
})
const closeChat=()=>{
    dialogVisible.value=false
    ElMessage({
        type: 'info',
        message: '取消修改！',
      })
}
const addChat=()=>{
    
    if(typeof formPeople.order_people_address != 'string'){
      formPeople.order_people_address=formPeople.order_people_address[2]
    }
    updateOrdersTable(formPeople,1)
    setTimeout(()=>{
      updateTable(formSearch)
    },100)
    ElMessage({
        type: 'success',
        message: '修改成功！',
      })
    dialogVisible.value=false
}
const readMessage=(value:number)=>{
  formTable=tableData[value]
  formPeople.order_id=tableData[value].order_id
  formPeople.order_people_phone=tableData[value].order_people_phone
  formPeople.order_people_address=tableData[value].order_people_address
  formPeople.order_people_detailed_address=tableData[value].order_people_detailed_address
  formPeople.order_people_name=tableData[value].order_people_name
  dialogVisible.value=true
}
const page_information=(value:number)=>{
  page_open.value=value
  formSearch.commodityPage=value
  updateTable(formSearch)
}
const deleteChat=(value:any)=>{
    ElMessageBox.confirm(
    '你确定要删除该订单吗？订单相关消息将会失效！',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      delOrdersTable(tableData[value].id)
      setTimeout(() => {
        updateTable(formSearch)
      }, 100);
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
  
  formSearch=form
  form.message_page=page_open.value
  const res = await searchOrdersTable(form)
  const page = await searOrdersTableCount(form)
  load.value=false
  tableData = Object.keys(res).map(Key => res[Key])
  page_size.value=page
  load.value=true
}
defineExpose({updateTable})
</script>
<style scoped >
.submit-orders{
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.order-update-bottom{
  margin-top: 10px;
  height: 180px;
  background-color: rgb(230, 230, 230,0.5);
}
.order-update-commodity-number{
  position: absolute;
  right: 0px;
  top: 35%;
}
.order-update-commodity-price-after{
  height:50px;
  display: flex;
  align-items: center;
  font-size: large;
  color: red;
  font-weight: bold;
}
.order-update-commodity-type{
  font-size: small;
  height: 25px;
  display: flex;
  align-items: center;
}
.order-update-commodity-name-true{
  height: 25px;
  display: flex;
  align-items: center;
  color: black;
}
.order-update-commodity-name{
  margin-left: 10px;
  position: relative;
  flex: 1;
}
.order-update-up-shop-photo{
  width: 120px;
  height: 100px;
}
.order-update-up-shop-middle{
  display: flex;
  width: 90%;
  margin-left: 5%;
}
.order-update-up-shop-name{
  height:35px;
  display: flex;
  align-items: center;
  width: 90%;
  margin-left: 5%;
}
.order-update-up{
  background-color: rgb(230, 230, 230,0.5);
  height: 150px;
  border-radius: 5px;
}
.order-photo{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
</style>