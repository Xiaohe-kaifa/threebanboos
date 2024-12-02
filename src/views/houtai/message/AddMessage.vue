<template>
    <el-button plain  @click="dialogVisible = true" type="primary" style=" margin-left:25px; font-size: small; height: 25px;width: 60px;">
        <el-icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-6fbb019e=""><path fill="currentColor" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64"></path><path fill="currentColor" d="M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0"></path><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path></svg>
        </el-icon>
        添加
    </el-button>
    <el-dialog v-model="dialogVisible"  style="height: 500px;"   width="500" title="消息推送">
        <el-form :rules="rules" :model="form" style="margin-top: 20px;">
            <el-form-item label="推送类型" :label-width="formLabelWidth">
                <el-select @change="handoffType" style="width: 100px;" v-model="form.chatType" placeholder="人员类型">
                    <el-option label="全部" value="0" />
                    <el-option label="个人" value="1"/>
                  </el-select>
                  
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
        <template #footer>
            <div style=" width:85%;margin-top:30px;" class="dialog-footer">
              <el-button  @click="closeChat()">取消</el-button>
              <el-button type="primary" @click="addChat()">
                提交
              </el-button>
            </div>
          </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { postChatMessage } from '@/service/information/message';
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue';
let dialogVisible=ref(false)
let typeDisabled=ref(false)
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
const addChat=async()=>{
    if(form.chatType==''){
        ElMessage({
                type: 'info',
                message: '请选择推送类型！',
        }) 
    }else{
        const res = await postChatMessage(form)
        if(res.success=='1'){
            ElMessage({
                type: 'error',
                message: '账号不能为空！',
            }) 
        }else if(res.success=='2'){
            ElMessage({
                type: 'error',
                message: '账号不存在！',
            }) 
        }
        else{
            dialogVisible.value=false
            ElMessage({
                type: 'success',
                message: '添加成功!',
            }) 
            emit('actionSearch')
        }
    }
}
const handoffType=(value:number)=>{
    if(value==0){
        typeDisabled.value=true
        form.chatId=''
    }else{
        typeDisabled.value=false
    }
}
const closeChat=()=>{
    dialogVisible.value=false
}
</script>