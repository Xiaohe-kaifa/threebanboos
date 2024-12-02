<template>
    <div class="personal-card">
        <el-icon style="margin-left:10px;"><svg t="1724598946016" class="icon" style=" width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1818"><path d="M558.6 960.2h-157c-27.5 0-50-22.5-50-50v-795c0-27.5 22.5-50 50-50h157.1c27.5 0 50 22.5 50 50v795.1c-0.1 27.4-22.6 49.9-50.1 49.9z" p-id="1819" fill="#1cb426"></path></svg></el-icon>
        我的信息
    </div>
    <div class="personal-form">
        <el-form  :model="form" label-width="auto" style="min-width: 500px;margin-top:50px;">
            <el-form-item  label="头像" :label-width="formLabelWidth">
                <el-upload
                :action="baseURL"
                :on-success="handleAvatarSuccess"
                :show-file-list="false"
                >
                <div  v-if="card_open_photo" :class="card_open"  @mouseover="select_card('grow_photo')" @mouseout="select_card('close_photo')">
                  <img class="toux" v-if="close_photo==false" :src="end_crop_photo" alt="">
                  <img v-if="close_photo" class="toux" :src="end_crop_photo" alt="">
                </div>
                <div class="toux"  v-if="card_open_photo==false" >
                  <div class="photo_card_active" ></div>
                </div>
              </el-upload>
              <div  style="margin-left: 5%;display:flex;" v-if="card_open_photo==false" >
                <img  ref="photo_crop" :src="src_photo" style="width: 100px;height:100px;" alt="">
                <div style="flex-direction: column;display:flex;margin-left:10px">
                  <el-button @click="crop_photo_end" style="width: 60px;">确定</el-button>
                </div>
              </div>
            </el-form-item>
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input placeholder="请输入用户名" style="width: 80%;" v-model="form.username"  />
            </el-form-item>
            <el-form-item label="账号" :label-width="formLabelWidth">
                <span style="color: rgb(106, 106, 106);">{{ form.account }}</span>
            </el-form-item>
            <el-form-item label="密码"  :label-width="formLabelWidth">
                <el-input type="password" show-password placeholder="请输入用户名" style="width: 80%;" v-model="form.password"  />
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
                <el-radio-group   v-model="form.gender">
                  <el-radio value="男">男</el-radio>
                  <el-radio value="女">女</el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="手机号" :label-width="formLabelWidth">
                <el-input placeholder="请输入用户名" style="width: 80%;" v-model="form.phone"  />
            </el-form-item>
            <el-form-item label="收货地址" :label-width="formLabelWidth">
                <el-cascader
                :options="regionData"
                placeholder="选择地址"
                style="width: 40%;"
                v-model="form.personal_address">
                </el-cascader>
                <el-input placeholder="详细地址" style="width: 40%;" v-model="form.detailed_address"  />
            </el-form-item>
            <el-form-item label="注册时间" :label-width="formLabelWidth">
                <span class="personal-login-time">{{ form.login_time }}</span> 
            </el-form-item>
            <el-form-item :label-width="200">
                <div class="personal-save" @click="submitPersonal">
                    <el-button style="width: 100%;color: rgb(255, 255, 255);border:none; background-color: rgb(21, 152, 25);" >保存</el-button>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import {regionData} from "element-china-area-data";
import { getRequest, putData } from '@/service/login/information';
import { inject, onMounted, reactive, ref } from 'vue';
import { ElMessage, UploadProps } from "element-plus";
import { cropPhoto, openCropper } from "@/service/crop_photo";
const formLabelWidth = '160px'
const baseURL = inject('baseURL')+'/api/avatar/'
let card_open_photo=ref(true)
let photo_crop= ref(null)
let card_open=ref('')
let close_photo=ref(true)
let confirm_photo = ref(false)
let src_photo = ref('')
let end_crop_photo = ref()
let form = reactive({
  file_name:'',
  username: '',
  gender:'',
  password:'',
  phone:'',
  username_type:'1',
  login_time:'',
  account:'',
  detailed_address:'',
  address:[],
  id:'',
  photo:'',
  personal_address:[]
})
const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
)=> {
  card_open_photo.value=false
  src_photo.value = URL.createObjectURL(uploadFile.raw!)
  setTimeout(()=>{
  openCropper(photo_crop.value,'.photo_card_active')
  confirm_photo.value=true
  console.log(confirm_photo.value);
  },100)
}
const select_card =(res: any)=>{
  card_open.value=res
}
const crop_photo_end=()=>{
  end_crop_photo.value = cropPhoto()
  close_photo.value=false
  card_open_photo.value=true
  confirm_photo.value=false
}
onMounted(async()=>{
    const res =await getRequest(window.sessionStorage.getItem("id"))
    form.id=res.id
    form.gender=res.gender
    form.phone=res.phone
    form.password=res.password
    form.username=res.username
    form.login_time=res.login_time
    form.account=res.account
    end_crop_photo.value=res.file_name
    form.detailed_address=res.detailed_address
    form.personal_address=[res.address.substring(0,2),res.address.substring(0,4),res.address]
})
const submitPersonal=()=>{
  form.address=form.personal_address[2]
  form.photo=end_crop_photo.value
  form.file_name=form.username+form.phone+'.jpg'
    ElMessage({
      type: 'success',
      message: '已更新信息！',
      })
    putData(form,form.id)
}
</script>
<style scoped>
.photo_card_active{
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid rgb(17, 154, 31);
  }
.personal-login-time{
    color: rgb(106, 106, 106);
}
.personal-save{
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(21, 152, 25);
    color: white;
    width: 100px;
    margin-left: 50px;
}
.toux{
    width: 100px;
    border: 1px solid rgb(17, 154, 31);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}
.personal-form{
    display: flex;
    align-items: center;
    height: 550px;
}
.personal-card{
  box-shadow: 0px 2px 10px rgb(0, 0, 0,0.2);
  display: flex;
  align-items: center;
  width: 100%;
  background-color: rgb(158, 229, 147,0.3);
  color: rgb(34, 137, 25);
  height: 8%;
}
</style>