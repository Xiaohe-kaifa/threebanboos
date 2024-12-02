<template>
    <el-form  style="margin-top: 20px;margin-left:-40px;" :model="form" >
        <el-form-item class="custom-form-item" label="反馈方向" :label-width="formLabelWidth">
            <el-select style="width: 80%;" v-model="form.feedback" placeholder="选择反馈方向">
                <el-option label="产品方向" value="0" />
                <el-option label="技术方向" value="1"/>
              </el-select>
              <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
          </el-form-item>
          <el-form-item label="联系方式" :label-width="formLabelWidth">
            <el-input class="custom-input"  placeholder="手机号、微信号或者QQ号" style="width: 80%; " v-model="form.contact"  />
            <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
          </el-form-item>
          <el-form-item label="反馈内容" :label-width="formLabelWidth">
            <el-input :rows="4" type="textarea" placeholder="填写反馈内容" style="width: 80%;" v-model="form.content"  />
          </el-form-item>
          <el-form-item class="suggestion-submit" >
            <el-button style="width: 83%;" type="success" @click="onSubmitSuggestion">提交</el-button>
          </el-form-item>
    </el-form>
</template>
<script lang="ts" setup>
import { postSuggestion } from '@/service/suggestion/suggestion';
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue';
let form=reactive({
    feedback:'',
    contact:'',
    content:''
})
let formLabelWidth=ref('120px')
const onSubmitSuggestion=async()=>{
  if(form.feedback==''){
    ElMessage({
        type: 'info',
        message: '请先选择反馈方向！',
      })
  }else if(form.contact==''){
    ElMessage({
        type: 'info',
        message: '联系方式不能为空！',
      })
  }else{
    const res = await postSuggestion(form)
    ElMessage({
        type: 'success',
        message: '提交成功！',
      })
  }
}
</script>
<style scoped>

.suggestion-submit{
    margin-left: 10%;
    height: 100px;
}
:deep(.el-form-item__label)  {
  color: rgb(255, 255, 255);
  font-weight: bold;
}

</style>