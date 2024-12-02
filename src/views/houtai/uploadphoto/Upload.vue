<template>
  <main class="el-main"  style="height:100%;">
      <el-card style="max-width: 100% ;height: 99%; ">
        <template #header >
          <div class="card-header" >
            <span><el-breadcrumb >
                <el-breadcrumb-item>轮播图管理</el-breadcrumb-item>
              </el-breadcrumb></span>
          </div>
        </template>
        <div class="img_title">自然-创意</div>
        <div class="content">
          <div class="img_content">
            <div class="img_content_card">
              <el-carousel v-if="load" :interval="4000" type="card"   height="300px">
                <el-carousel-item   v-for="item in upload_phone"  :key="item">
                  <img :src="item.file" alt="图片">
                  <div class="close_photo" @click="delete_photo(item.id)">
                    <el-icon   style="width: 100%;height:100%;" >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-d2e47025=""><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"></path></svg>
                    </el-icon>
                  </div>
                  
                  <p>{{ item.name }}</p>
                  
                </el-carousel-item>
              </el-carousel>
            </div>
          </div>
          <div class="img_add"> 
            <div class="right_upload">
              <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              :action="baseURL"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success="handleSuccess"
              list-type="picture"
            >
              <el-button type="primary">上传新的轮播图</el-button>
              <template #tip>
                <div class="el-upload__tip">
                 文件支持 jpg/png 
                </div>
              </template>
            </el-upload>
        </div>

          </div>
        </div>
      </el-card>
  </main>
</template>
<script lang="ts" setup>
import { inject, onMounted, reactive, ref } from 'vue'
import { deletePhoto, getRequest } from '@/service/login/upload';
import type { UploadProps, UploadUserFile } from 'element-plus'
let baseURL = inject('baseURL')+'/api/lunbotu/'
let upload_phone=reactive([])
let load = ref(false)
const delete_photo = async(res:number)=>{
  load.value=false
  const request =await deletePhoto(res)
  upload_phone = Object.keys(request).map(Key=>request[Key])
  load.value=true
}
const fileList = ref<UploadUserFile[]>([])

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (file) => {
  console.log(file)
}
const handleSuccess: UploadProps['onSuccess'] = async(file) => {
  load.value=false
  const request = await getRequest()
  upload_phone = Object.keys(request).map(Key => request[Key])
  load.value=true
}
//组件加载时获取后端轮播图，load用于组件刷新
 onMounted(async()=>{
  const request = await getRequest()
  upload_phone = Object.keys(request).map(Key => request[Key])
  load.value=true
 })
</script>
<style scoped>
.close_photo{
  width: 30px;
  height: 30px;
  z-index: 1; 
  position: absolute;
  top:5px;
  right:5px;
  font-size:large;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
  
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.img_content_card{
 
  width: 98%;
  margin-top: 10%;
}
.img_content_card img{
  box-shadow:10px 5px 10px rgb(0, 0, 0,0.2);
  width:auto;
  height: 80%;
}
.img_content{
  width: 60%;
  height: 70vh;
  border-right: 1px solid rgb(231, 231, 231);
}
.img_title{
  font-size: larger;
 
}
.right_upload{
  width: 90%;
  margin-left: 5%;
  margin-top: 5%
}
.img_add{
  flex: 1;
  height: 70vh;
}
.content{
  height: 100%;
  display: flex; 
  justify-content:center ; 
  align-items:center;
}

</style>