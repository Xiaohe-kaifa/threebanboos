<template>
    <el-table :data="tableData" v-if="load" style="width: 100%">
        <el-table-column type="selection" width="55"/>
        <el-table-column prop="chatTime" label="推送时间" width="150"/>
        <el-table-column prop="chatType" label="用户类型" width="110"/>
        <el-table-column prop="chatId" width="150" label="推送账号"/>
        <el-table-column prop="chatTitle" width="150" label="消息主题"/>
        <el-table-column prop="chatContent" width="500" label="消息内容"/>
        <el-table-column label="操作" fixed="right" align="right" min-width="100">
          <template #default="scope">
            <el-button  @click.prevent="deleteChat(scope.$index)"  link type="danger"  size="small">删除</el-button>
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
</template>
<script lang="ts"  setup >
import { delChatPeople } from '@/service/information/message';
import { searchMessageTable, searchMessageTableCount } from '@/service/information/message_search';
import { ElMessage } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';
let tableData = reactive([])
let page_size = ref()
let page_open = ref(1)
let load=ref(false)
let formSearch=reactive({
  //基本信息
    chatTime:'',
    chatType:'',
    chatId:'',
    chatTitle:'',
    chatContent:'',
})
onMounted(()=>{
  updateTable(formSearch)
})
const page_information=(value:number)=>{
  page_open.value=value
  updateTable(formSearch)
}
const deleteChat=(value:any)=>{
  delChatPeople(tableData[value].id)
  ElMessage({
                type: 'success',
                message: '删除成功!',
            }) 
  setTimeout(()=>{
    updateTable(formSearch)
  },100) 
}
const updateTable=async(form:any)=>{
  formSearch=form
  form.message_page=page_open.value
  const res = await searchMessageTable(form)
  const page = await searchMessageTableCount(form)
  tableData = Object.keys(res).map(Key => res[Key])
  page_size.value=page
  load.value=false
  load.value=true
}
defineExpose({updateTable})
</script>