<template>
  <main  class="el-main" >
    <el-card style="max-width: 100% ;height: 99%; ">
      <template #header>
        <div class="card-header" style=" margin-top: -10px; height: 15px;">
          <span><el-breadcrumb  style="display:flex; white-space: nowrap; display: flex; ">
            <el-breadcrumb-item>
              个人信息
          </el-breadcrumb-item>
            <el-breadcrumb-item>信息管理</el-breadcrumb-item>
            <div  class="anniu00" style="margin-left: auto">
              <AddInformation @updateTable="updateTable"/>
                  <el-button  @click="exportFormVisible" type="primary" style="font-size: small; height: 25px;width: 60px;" >
                    <el-icon><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640z"></path><path fill="currentColor" d="m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"></path></svg></el-icon>
                    导出</el-button>
            </div>
          </el-breadcrumb></span>
        </div>
      </template>
      <TableData ref="uploadTable"/>
    </el-card>
  </main>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import AddInformation from './AddInformation.vue';
import TableData from './TableData.vue';
let uploadTable = ref(null)
const updateTable=()=>{
  if(uploadTable.value){
    uploadTable.value.updateTableTotal(0)
  }
}
</script>