<template>
   <el-input :prefix-icon="Search" v-model="search_content" @keydown.enter="search_enter" style="width: 75px;"  size="small" placeholder="搜索" />
</template>
<script lang="ts" setup>
import { searchDataTotal } from '@/service/login/search';
import {  Search } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import { reactive, ref } from 'vue';
let search_content = ref('')
let null_data = ref()
const emit = defineEmits(["updateTableTotal"])
const search_enter =async ()=>{
   const res =await searchDataTotal(search_content.value,'searchContent')
   null_data.value=res
   if(res.length=='0'||null_data.value==0){
      ElMessage({
            type: 'info',
            message: '未找到相关数据！',
      })
   }else{
      emit('updateTableTotal',-3)
   }
}
</script>
