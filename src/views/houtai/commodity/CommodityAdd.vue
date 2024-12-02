<template>
  <el-button plain  @click="openDialog"type="primary" style=" margin-left:75px; font-size: small; height: 25px;width: 60px;">
      <el-icon>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-6fbb019e=""><path fill="currentColor" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64"></path><path fill="currentColor" d="M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0"></path><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path></svg>
      </el-icon>
      添加
  </el-button>
  <el-dialog v-model="dialogVisible"  style="height: 500px;width:700px;top:0px;"    :title="title">
    <el-form  :rules="rules" :inline="true"  :model="formInline" class="demo-form-inline">
      <el-form-item prop="commodityName" :label-width="businessWidth" label="商品名称">
        <el-input :disabled="disabled" v-model="formInline.commodityName" placeholder="商品名称" clearable />
      </el-form-item>
      <el-form-item prop="commodityType" :label-width="businessWidth" label="商品类型">
        <el-select
          v-model="formInline.commodityType"
          placeholder="商品类型"
          style="width: 100px;"
        >
          <el-option label="竹编家具" value="0" />
          <el-option label="工艺品" value="1" />
        </el-select>
      </el-form-item>
      <br>
      <div style="display: flex;">
        <el-form-item prop="commodityPhoto" :label-width="businessWidth" label="商品图片">
          
            <el-upload
                    style="width: 100%;height:100%"
                    :action="baseURL"
                    :http-request="submitLicensePhoto"
                    :show-file-list="false"
                    name="file"
                >
                <div class="commodity-photo"> 
                  <div class="commodity-photo-icon" v-if="displayLicensePhoto">
                    <svg t="1729169916921" class="icon" style="width: 1.5em;height: 1.5em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2070"><path d="M210.944 569.344h421.888v70.144H210.944zM210.944 428.544h421.888v70.144H210.944zM1024 752.128h-179.712v-156.672h-70.656v156.672h-171.52v70.656h171.52v195.072h70.656v-195.072H1024zM210.944 146.944h281.6v70.144h-281.6zM210.944 287.744h421.888v70.144H210.944z" p-id="2071" fill="#cdcdcd"></path><path d="M70.144 76.8h703.488v397.824h70.656V6.144H0v985.088h608.768v-70.144H70.144z" p-id="2072" fill="#cdcdcd"></path></svg>
                  </div>
                  <div class="commodity-photo" v-else>
                    <img style="width: 100%;height:100%; border-radius: 5px;" :src="formInline.commodityPhoto" alt="">
                  </div>
                </div>
                </el-upload>
        </el-form-item>
        <div style="display: flex;flex-direction: column;">
          <el-form-item prop="commodityShopName" :label-width="businessWidth" label="店铺名称">
            <el-input :disabled="disabled" v-model="formInline.commodityShopName" placeholder="店铺名称" clearable />
          </el-form-item>
          <el-form-item prop="commodityShopNumber" :label-width="businessWidth" label="商品库存量">
            <el-input v-model="formInline.commodityShopNumber" placeholder="商品库存量(件)" clearable />
          </el-form-item>
          <el-form-item prop="commodityOther" :label-width="businessWidth" label="商品功能">
            <el-input v-model="formInline.commodityOther" placeholder="商品功能" clearable />
          </el-form-item>
        </div>
       
      </div>
      <el-form-item prop="commodityPriceBefore" :label-width="businessWidth" label="优惠前价格">
        <el-input v-model="formInline.commodityPriceBefore" placeholder="(¥:小数点后两位)" clearable />
      </el-form-item>
      <el-form-item prop="commodityPriceAfter" :label-width="businessWidth" label="优惠后价格">
        <el-input v-model="formInline.commodityPriceAfter" placeholder="(¥:小数点后两位)" clearable />
      </el-form-item>
      <br>
      <el-form-item label="商品介绍" :label-width="businessWidth">
        <el-input :rows="4" type="textarea" placeholder="商品介绍" style="width: 525px;" v-model="formInline.commodityIntroduce"  />
      </el-form-item>
      <br>
    </el-form>
    <div style="display: flex;justify-content: center;align-items: center;">
      <el-button type="info" @click="noSubmit">取消</el-button>
    <el-button type="primary" @click="onSubmit">提交</el-button>
    </div>
  </el-dialog>
</template>
<script lang="ts" setup>
import { postSubmitBusinessData } from '@/service/business_submit/submit_information';
import { postCommodity, putCommodityData } from '@/service/commodity/commodity';
import { ElMessage } from 'element-plus';
import { inject, reactive, ref } from 'vue';
let dialogVisible=ref(false)
let businessWidth=ref('100')
let title =ref('新增商品')
let addOrUpdate =ref(false)
let disabled =ref(false)
let commodityId=ref('')
let displayLicensePhoto=ref(true)
const emit = defineEmits(["actionSearch"])
const baseURL = inject('baseURL')+'/api/returnPhoto/'
let formInline=reactive({
  id:'',
  businessId:'',
  commodityName:'',
  commodityType:'',
  commodityPhoto:'',
  commodityShopName:'',
  commodityShopNumber:'',
  commodityOther:'',
  commodityPriceBefore:'',
  commodityPriceAfter:'',
  commodityIntroduce:'',
})
const onSubmit=async()=>{
  if(formInline.commodityPhoto==''){
    ElMessage({
          type: 'error',
          message: '未识别到图片！',
        })
  }else{
    if(addOrUpdate.value===false){
    const res = await postCommodity(formInline)
    console.log(res.success);
    if(res.success=='1'){
      ElMessage({
          type: 'error',
          message: '该商家不存在！',
        })
    }else if(res.success=='3'){
      ElMessage({
          type: 'error',
          message: '信息不对！',
        })
    }
    else if(res.success=='2'){
      ElMessage({
          type: 'error',
          message: '信息不完整！',
        })
    }else{
    emit('actionSearch')
    dialogVisible.value=false
    const keys = Object.keys(formInline)
    keys.forEach(key =>{
      formInline[key]=''
      displayLicensePhoto.value=true
    })
    }
  }else{
    if(formInline.commodityType=='竹编家具'){
      formInline.commodityType='0'
    }else if(formInline.commodityType=='工艺品') {
      formInline.commodityType='1'
    }
    putCommodityData(formInline,commodityId.value)
    setTimeout(()=>{
      emit('actionSearch')
    },100)
    dialogVisible.value=false
  }
  }
  
}
const openDialog=()=>{
  dialogVisible.value = true,
  title.value='新增商品',
  addOrUpdate.value=false
  disabled.value=false
  const keys = Object.keys(formInline)
    keys.forEach(key =>{
      formInline[key]=''
      displayLicensePhoto.value=true
    })
}
const onUpdatedAdd=(table:any)=>{
  disabled.value=true
  addOrUpdate.value=true
  commodityId.value=table.id
  formInline.businessId=table.businessId
  formInline.commodityName=table.commodityName
  formInline.commodityIntroduce=table.commodityIntroduce
  formInline.commodityOther=table.commodityOther
  formInline.commodityType=table.commodityType
  formInline.commodityPriceAfter=table.commodityPriceAfter
  formInline.commodityPhoto=table.commodityPhoto
  formInline.commodityPriceBefore=table.commodityPriceBefore
  formInline.commodityShopName=table.commodityShopName
  formInline.commodityShopNumber=table.commodityShopNumber
  dialogVisible.value=true
  displayLicensePhoto.value=false
  title.value='修改商品'
}
defineExpose({onUpdatedAdd})
const noSubmit=()=>{
  // const keys = Object.keys(formInline)
  //   keys.forEach(key =>{
  //     formInline[key]=''
  //     displayLicensePhoto.value=true
  //   })
  dialogVisible.value=false
  ElMessage({
        type: 'info',
        message: '取消添加！',
      })
  
}
const submitLicensePhoto=async(options:any)=>{
    formInline.commodityPhoto=await onBusinessPhoto(options)
    displayLicensePhoto.value=false
}
const onBusinessPhoto=async(options:any)=>{
    const { file } = options;
    const formData = new FormData();
    formData.append('file', file); // 使用file.raw来获取原生文件对象
    const res = String( await postSubmitBusinessData(formData))
    return res
}
const rules = reactive({
  commodityName: [
    {
      required: true,
      message: '商品名称不能为空！',
      trigger: 'blur',
    },
  ],
  commodityType: [
    {
      required: true,
      message: '商品类型不能为空！',
      trigger: 'blur',
    },
  ],
  commodityPhoto: [
    {
      required: true,
      message: '商品照片不能为空！',
      trigger: 'blur',
    },
  ],
  commodityShopName: [
    {
      required: true,
      message: '商家不能为空！',
      trigger: 'blur',
    },
  ],
  commodityShopNumber: [
    {
      required: true,
      message: '商品库存不能为空！',
      trigger: 'blur',
    },
  ],
  commodityOther: [
    {
      required: true,
      message: '商品功能不能为空！',
      trigger: 'blur',
    },
  ],
  commodityPriceBefore: [
    {
      required: true,
      message: '优惠前价格不能为空！',
      trigger: 'blur',
    },
  ],
  commodityPriceAfter: [
    {
      required: true,
      message: '优惠后价格不能为空！',
      trigger: 'blur',
    },
  ],
 
  
})


</script>
<style scoped >
.commodity-photo{
 
  height: 130px;
  width: 195px;
  margin-top: 5px;
}
.commodity-photo-icon{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border: 2px dashed  rgb(229, 229, 229);
  
}
</style>