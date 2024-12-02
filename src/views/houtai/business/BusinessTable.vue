<template>
  
  
  <el-table :data="tableData" v-if="load" style="width: 100%">
    <el-table-column type="selection" width="55" />
    <el-table-column type="expand">
      <template   #default="props">
        <div  class="business-content">
          <div class="business-content-all">
            <div class="essential">
              1.基本信息
            </div>
            <div class="essential-content">
              <div class="essential-content-title">
                商家照片
              </div>
              <span class="essential-people-photo" >
                <img style="width: 100%;height:100%" :src="props.row.business_name_photo" alt="人像照片">
              </span>
              <span style="margin-left: 92px;"></span>店铺照片
              <span class="essential-shop-photo" >
                <img style="width: 100%;height:100%" :src="props.row.business_shop_photo" alt="店铺照片">
              </span>
            </div>
            <div class="essential-content">
              <div  style="margin-top: 20px;display:flex;">
                <div class="essential-content-title">店铺名称</div>
                <div class="essential-content-true" >{{ props.row.business_name }}</div>
              </div>
              <div  style="margin-top: 20px;display:flex;">
                <div class="essential-content-title">商家类型 </div>
                <div class="essential-content-true">{{ props.row.business_type }}</div>
              </div>
            </div>
            <div class="essential-content">
              <div style="margin-top: 20px;display:flex;">
                <div  class="essential-content-title">联系人姓名</div>
                <div class="essential-content-true" >{{ props.row.business_true_name }}</div>
              </div>
              <div style="margin-top: 20px;display:flex">
                <div class="essential-content-title">身份证号码</div>
                <div class="essential-content-true">{{ props.row.business_identification_number }}</div>
              </div>
              
            </div>
            <div class="essential-content">
              <div style="margin-top: 20px;display:flex;">
                <div  class="essential-content-title">联系人电话</div>
                <div class="essential-content-true" >{{ props.row.business_phone }}</div>
              </div>
              <div style="margin-top: 20px;display:flex">
                <div class="essential-content-title">联系人邮箱</div>
                <div class="essential-content-true">{{ props.row.business_email }}</div>
              </div>
            </div>
            <div class="essential-content">
              <div style="margin-top: 20px;display:flex;">
                <div  class="essential-content-title">联系人地址</div>
                <div class="essential-content-true" >{{ props.row.business_address }}</div>
              </div>
              <div style="margin-top: 20px;display:flex">
                <div class="essential-content-title">详细地址</div>
                <div class="essential-content-true">{{ props.row.business_full_address }}</div>
              </div>
            </div>
            <div class="essential">
              2.企业信息
            </div>
            <div class="essential-content">
              <div class="essential-content-title">
                营业执照
              </div>
              <span class="essential-shop-photo" >
                <img style="width: 100%;height:100%" :src="props.row.business_license_photo" alt="店铺照片">
              </span>
            </div>
            <div class="essential-content">
              <div style="margin-top: 20px;display:flex;">
                <div  class="essential-content-title">营业执照号</div>
                <div class="essential-content-true" >{{ props.row.business_license }}</div>
              </div>
              <div style="margin-top: 20px;display:flex">
                <div class="essential-content-title">税务登记号</div>
                <div class="essential-content-true">{{ props.row.tax_registration_certificate }}</div>
              </div>
            </div>
            <div class="essential-content">
              <div style="margin-top: 20px;display:flex;">
                <div  class="essential-content-title">组织机构代码</div>
                <div class="essential-content-true" >{{ props.row.business_organization }}</div>
              </div>
              <div style="margin-top: 20px;display:flex">
                <div class="essential-content-title">统一社会信用代码</div>
                <div class="essential-content-true">{{ props.row.business_unified_social_credit }}</div>
              </div>
            </div>
            <div class="essential-content">
              <div style="margin-top: 20px;display:flex;">
                <div  class="essential-content-title">法人代表</div>
                <div class="essential-content-true" >{{ props.row.business_legal_representative }}</div>
              </div>
              <div style="margin-top: 20px;display:flex">
                <div class="essential-content-title">成立日期</div>
                <div class="essential-content-true">{{ props.row.business_date }}</div>
              </div>
            </div>
            <div class="essential-content">
              <div style="margin-top: 20px;display:flex;">
                <div  class="essential-content-title">营业期限</div>
                <div class="essential-content-true" >{{ props.row.business_term }}年</div>
              </div>
              <div style="height: 60px;"></div>
            </div>
          </div>
          </div>
      </template>
    </el-table-column>
    <el-table-column prop="business_submit_time" label="入驻时间" width="150" />
    <el-table-column prop="business_name" label="店铺名称" width="150" />
    <el-table-column prop="business_identification_number" label="账号" width="150" />
    <el-table-column prop="business_true_name" width="150" label="商家姓名" />
    <el-table-column prop="business_phone" width="150" label="商家密码"/>
    <el-table-column prop="business_type" width="150" label="商家类型" />
    <el-table-column label="操作" fixed="right" align="right" min-width="100" >
      <template #default="scope">
        <el-button  @click.prevent="readMessage(scope.$index)" plain link type="primary" size="small" >
          编辑
        </el-button>
        <el-button  @click.prevent="delMessage(scope.$index)"  link type="danger"  size="small">注销</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div style="margin-top:3%; display:flex;justify-content:center; width: 100%;">
    <el-pagination  
    size="small" 
    background
    layout="prev, pager, next" 
    :total="page_size" 
    @current-change="page_information"
    :current-page="page_open"
    />
  </div>


  <el-dialog v-model="dialogVisible"  style="height: 500px;"   width="500" title="消息推送">
    <el-form :rules="rules" :model="form" style="margin-top: 20px;">
        <el-form-item label="推送类型" :label-width="formLabelWidth">
            <el-select @change="handoffType" style="width: 100px;" v-model="form.chatType" placeholder="人员类型">
                <el-option label="全部" value="0" />
                <el-option label="个人" value="1"/>
              </el-select>
              <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
        </el-form-item>

        <el-form-item prop="chatId" label="推送账号" :label-width="formLabelWidth">
            <el-input  :disabled="typeDisabled" placeholder="请输入账号" style="width: 80%;" v-model="form.chatId"  required/>
        </el-form-item>
        <el-form-item label="消息主题" :label-width="formLabelWidth">
            <el-input placeholder="请输入主题" style="width: 80%;" v-model="form.chatTitle"  />
        </el-form-item>
        <el-form-item label="推送内容" :label-width="formLabelWidth">
            <el-input :rows="4" type="textarea" placeholder="填写推送内容" style="width: 80%;" v-model="form.chatContent"  />
          </el-form-item>
    </el-form>
   
</el-dialog>
</template>
<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { searchBusinessTable, searchBusinessTableCount } from '@/service/business_submit/business_search';
import { onMounted, reactive, ref } from 'vue';
import { noAgreeBusinessData } from '@/service/business_submit/submit_information';
let tableData = reactive([])
let page_size = ref()
let typeDisabled=ref(false)
let page_open = ref(1)
let load=ref(false)
let dialogVisible=ref(false)
let formSearch=reactive({
//基本信息
business_submit_time:'',
business_id:'',
business_name:'',
business_type:'',
business_true_name:'',
business_identification_number:'',
business_phone:'',
business_address:'',
business_page:1,
business_agree:0
})
const formLabelWidth = '140px'
const emit = defineEmits(["actionSearch"])
let rules=reactive({
chatId:[
    {
        required:true,message:'账号不能为空！'
    }
]
})
let form=reactive(
{
    chatType:'',
    chatId:'',
    chatTitle:'',
    chatContent:''
}
)

const handoffType=(value:number)=>{
if(value==0){
    typeDisabled.value=true
    form.chatId=''
}else{
    typeDisabled.value=false
}
}

const readMessage=(value:number)=>{
  console.log(value);
  
}
const delMessage=(value:number)=>{
  ElMessageBox.confirm(
    '你确定要注销该商家吗？所有订单相关消息将会失效！',
    '警告',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning',
    }
  )
    .then(() => {
      noAgreeBusiness(tableData[value].id)
      ElMessage({
        type: 'success',
        message: '注销成功，存在的所有订单失效！',
      })
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消注销',
      })
    })
  
}
const noAgreeBusiness=(id:String)=>{
  noAgreeBusinessData(String(id))
  setTimeout(()=>{
    updateTable(formSearch)
  },100)
}
onMounted(async()=>{
updateTable(formSearch)
})
const page_information=(value:number)=>{
page_open.value=value
updateTable(formSearch)
}
const updateTable=async(form:any)=>{
formSearch=form
form.business_page=page_open.value
const res = await searchBusinessTable(form)
const page = await searchBusinessTableCount(form)
tableData = Object.keys(res).map(Key => res[Key])
page_size.value=page
load.value=false
load.value=true
}
defineExpose({updateTable})
</script>
<style scoped>
.essential-content-title{
width: 90px;
}
.essential-content-true{
width: 200px;
margin-left: 6px;
font-weight:bold;
}
.essential-shop-photo{
border: 2px dashed rgb(0, 0, 0,0.2);
width: 185px;
height: 120px;
margin-top: 2px;
margin-left: 10px;
}
.essential-people-photo{
width: 100px;
height: 120px;
margin-top: 2px;
margin-left: 10px;
border: 2px dashed rgb(0, 0, 0,0.2);
}
.essential-content{
width: 90%;
margin-left: 5%;
display: flex;
}
.business-content-all{
width: 70%;
margin-left:15%;
}
.business-content{
background-color: rgb(224, 224, 224,0.2);
border: 1px solid rgb(239, 239, 239);
}
.essential{
font-size: large;
height: 70px;
display: flex;
align-items: center;
}
</style>