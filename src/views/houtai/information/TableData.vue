<template>
    <el-table @sort-change="sort_change" @filter-change="sift_login" v-if="load" :data="tableData">
        <el-table-column type="selection" width="55" />
        <el-table-column 
            prop="login_time" 
            label="创建时间" 
            sortable="custom" 
            width="110" 
            column-key="login_time"
            :filters="time_end"
            filter-placement="bottom-end"
            />
            <el-table-column style="position: relative;" prop="username" label="头像"  width="60" >
                <template #default="scope">
                    <img class="toux" :src="scope.row.file_name"  >
                </template>
            </el-table-column>
            <el-table-column prop="username" label="用户名"  width="80">
            </el-table-column>
            <el-table-column prop="account" label="账号"  width="120">
            </el-table-column>
            <el-table-column prop="username_type" label="角色类型"  width="80">
            </el-table-column>
            <el-table-column 
            prop="gender" 
            label="性别"  
            width="70" 
            column-key="gender"
            :filters="[
                { text: '男', value: 1 },
                { text: '女', value: 0 },
              ]"
            >
            </el-table-column>
            <el-table-column prop="password" label="密码"  width="100" />
            <el-table-column prop="phone" width="120" label="手机号" />
            <el-table-column prop="address" label="收货地址" />
            <el-table-column prop="detailed_address" width="120" label="详细地址" />
            <el-table-column
              prop="status"
              label="状态"
              width="70"
              :filters="[
                { text: '在线', value: 'Home' },
                { text: '离线', value: 'Office' },
              ]"
              filter-placement="bottom-end"
            >
              <template #default="scope">
                <el-tag
                  :type="scope.row.status === '在线' ? 'success' : 'danger'"
                  disable-transitions
                  >{{ scope.row.status }}</el-tag
                >
              </template>
            </el-table-column>
            <el-table-column fixed="right" align="right" min-width="100" >
              <template #header>
                <SearchDataTable @updateTableTotal="updateTableTotal"/>
              </template>
                <template #default="scope">
                  <el-button plain  @click.prevent="edit_information(scope.$index)"  link type="primary" size="small" >
                    编辑
                  </el-button>
                  <DeleteData @updateTableTotal="updateTableTotal" :index_delete="tableData[scope.$index].id"/>
                </template>
              </el-table-column>
    </el-table>
    <Pagination ref="updateDate" @updateTableTotal="updateTableTotal"/>
    <OpenDialog @updateTableTotal="updateTableTotal" :edit_table="edit_table" @close_dialog="updateDialogFormVisible"  :message="dialogFormVisible" v-model="dialogFormVisible"  />
</template>
<script lang="ts" setup>
import SearchDataTable from './SearchDataTable.vue';
import Pagination from './Pagination.vue';
import OpenDialog from './OpenDialog.vue';
import DeleteData from './DeleteData.vue';
import { getRequest } from '@/service/login/information';
import { onMounted, reactive, ref } from 'vue';
import { searchDataTotal } from '@/service/login/search';
let dialogFormVisible = ref(false)
let updateDate = ref(null)
let  tableData = reactive([])
let load = ref(true)
let edit_table = reactive([])
const updateTableTotal=(res:any,type:any)=>{  
  load.value=false
  if(type=='delete'){
    updateDate.value.page_information(-1) 
  }else if(res==0){
    updateDate.value.page_information(-2) 
  }else if(res==-3){
    updateDate.value.page_information(-3)
  }else if(res==-4){
    updateDate.value.page_information(-4)
  }else
  tableData=res
  load.value=true
}
const edit_information=(index:number)=>{
  edit_table=tableData[index]
  dialogFormVisible.value=true
}
const updateDialogFormVisible=()=>{
  dialogFormVisible.value=false
}

defineExpose({updateTableTotal})
onMounted(async()=>{
  load.value=false
  const res =await getRequest()
  tableData=Object.keys(res).map(Key => res[Key])
  load.value=true
})
const sift_login=async(value:any)=>{
  if(value.gender.length==1){
      const res =await searchDataTotal(value.gender[0],'searchGender')
      updateTableTotal(-3,'searchGender')
  }
  else{
    const res =await searchDataTotal('','searchGender')
    updateTableTotal(-3,'searchGender')
  }
}
const sort_change =async({prop,order})=>{
  if(order == 'descending'){
    const res = searchDataTotal(1,'searchTime')
  }else{
    const res = searchDataTotal(0,'searchTime')
  }
  updateTableTotal(-4,'')
}
</script>
<style scoped>
.toux{
  position: absolute;
  width: 30px;
  border: 1px solid rgb(123, 188, 253);
  border-radius: 50%;
  height: 30px;
  margin-top: -16px;
}
</style>