<template>
    <el-dialog style="height: 600px;margin-top:50px;"   width="500" :title="title">
        <el-form :model="form" >
            <el-form-item label="头像" :label-width="formLabelWidth">
                <el-upload
                :action="baseURL"
                :on-success="handleAvatarSuccess"
                :show-file-list="false"
                >
                <div v-if="card_open_photo" :class="card_open" class="photo_card" @mouseover="select_card('grow_photo')" @mouseout="select_card('close_photo')">
                  <img class="photo_card" v-if="close_photo==false" :src="end_crop_photo" alt="">
                  <img v-if="close_photo" class="photo_card" :src="end_crop_photo" alt="">
                </div>
                <div class="photo_card"  v-if="card_open_photo==false" >
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
              <el-form-item :label-width="formLabelWidth" label="性别">
                <el-select style="width: 80%;" v-model="form.gender" placeholder="选择性别">
                  <el-option label="男" value="男" />
                  <el-option label="女" value="女" />
                </el-select>
                <span style="color: red;margin-left:5px;margin-top:-5px;">*</span>
                <span class="error_information"> {{ error_form.gender }} </span>
              </el-form-item>
              <el-form-item label="角色类型" :label-width="formLabelWidth">
                <el-select style="width: 80%;" v-model="form.username_type" placeholder="选择角色类型">
                  <el-option label="管理员" value="0" />
                  <el-option label="用户" value="1" />
                  <el-option label="商家" value="2" />
                  <el-option label="客服" value="3" />
                </el-select>
              </el-form-item>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input placeholder="请输入密码" style="width: 80%;" v-model="form.password" />
              </el-form-item>
              <el-form-item  label="手机号" :label-width="formLabelWidth">
                <el-input placeholder="请输入手机号" style="width: 80%;" v-model="form.phone"  />
                <span style="color: red;margin-left:5px;margin-top:-5px;">*</span>
                <span class="error_information"> {{ error_form.phone }} </span>
              </el-form-item>
              <el-form-item label="收货地址" :label-width="formLabelWidth">
                <el-cascader
                placeholder="选择收货地址"
                :options="regionData"
                style="width: 40%"
                v-model="form.address">
                </el-cascader>
                <el-input placeholder="详细地址" style="width: 40%" v-model="form.detailed_address"  />
              </el-form-item>
            </el-form>
            <template #footer>
              <div style=" width:85%" class="dialog-footer">
                <el-button  @click="close_dialog_card()">取消</el-button>
                <el-button type="primary" @click="login_add()">
                  提交
                </el-button>
              </div>
            </template>
    </el-dialog>
</template>
<script lang="ts" setup> 
import 'cropperjs/dist/cropper.css'
import {pcaTextArr,regionData} from "element-china-area-data";
import { ElMessage, type UploadProps  } from 'element-plus'
import { postData, putData, searchGetData, verifyData } from '@/service/login/information';
import { ref,watch,reactive,inject } from 'vue'
import { cropPhoto, openCropper } from '@/service/crop_photo';
let postData_open = ref(false)
let title = ref('添加信息')
let card_open_photo=ref(true)
let photo_crop= ref(null)
let src_photo = ref('')
let card_open=ref('')
let end_crop_photo = ref()
let close_photo=ref(true)
let confirm_photo = ref(false)
const emit = defineEmits(["close_dialog","updateTableTotal","updateTable"])
const dialogFormVisible = defineProps(['message','edit_table'])
let form = reactive({
  file_name:'',
  photo:'',
  username_type:'',
  username: '',
  gender:'',
  password:'',
  phone:'',
  id:0,
  detailed_address:'',
  address:[]
})
const error_form = reactive({
  gender:'',
  phone:'',
})
const close_dialog_card=()=>{
  ElMessage({
            type: 'info',
            message: '取消',
          })
  emit('close_dialog')
}
const baseURL = inject('baseURL')+'/api/avatar/'
const formLabelWidth = '140px'
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
const crop_photo_end=()=>{
  end_crop_photo.value = cropPhoto()
  close_photo.value=false
  card_open_photo.value=true
  confirm_photo.value=false
}
const select_card =(res: any)=>{
  card_open.value=res
}
watch(dialogFormVisible,async(newValue,oldValue)=>{//监视属性变化值，参数有new值，old值
  if(dialogFormVisible.message==true){
    
    
        if(dialogFormVisible.edit_table!=undefined){
          // form=dialogFormVisible.edit_table
          form.username=dialogFormVisible.edit_table.username
          form.gender=dialogFormVisible.edit_table.gender
          form.password=dialogFormVisible.edit_table.password
          form.phone=dialogFormVisible.edit_table.phone
          
          end_crop_photo.value=dialogFormVisible.edit_table.file_name
          
          form.id=dialogFormVisible.edit_table.id
          form.detailed_address=dialogFormVisible.edit_table.detailed_address
          form.username_type=dialogFormVisible.edit_table.username_type
          if(dialogFormVisible.edit_table.address===null){
            form.address=[]
          }else{
            form.address=[dialogFormVisible.edit_table.address.substring(0,2),dialogFormVisible.edit_table.address.substring(0,4),dialogFormVisible.edit_table.address]
          }
          postData_open.value=true
        }else{
          form.username=''
          form.gender=''
          form.password=''
          form.phone=''
          form.address=[]
          form.detailed_address=''
          const request = await searchGetData().then((res=>{        
          end_crop_photo.value = res
        }))
        }
    }
})
const login_add =async ()=>{
  form.photo=end_crop_photo.value
  form.file_name=form.username+form.phone+'.jpg'
  if(postData_open.value==true && confirm_photo.value==false){
    form.address=form.address[2]
   
    
    const res = await putData(form,form.id);
    if(res.success=='1'){
      ElMessage({
            type: 'error',
            message: '该号码已经存在！',
          })
    }else{
      ElMessage({
            type: 'success',
            message: '修改成功！',
          })
    emit('close_dialog')
    emit('updateTableTotal',0)
    }
  }else{
  if(confirm_photo.value==true){
    ElMessage({
        type: 'info',
        message: '请先确认裁剪头像',
      })
  }else if(form.gender==''){
    error_form.gender='请选择性别'
  }
  else{
    const res =await verifyData({'phone':form.phone})
    const verify = Object.keys(res).map(Key => res[Key])
    error_form.phone=verify[0]
    if(error_form.phone==undefined){
      form.address=form.address[2]
      console.log(form);
      const post_data =await postData(form)
      emit('updateTable')
      emit('close_dialog')
    }
  }
  }
}
</script>
<style scoped>
.photo_card_active{
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid rgb(228, 228, 228);
  }
  .photo_card{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 1px solid rgb(203, 203, 203);
    border-radius: 50%;
  }
  .error_information{
    color: red;
    width: 100%;
  }
</style>