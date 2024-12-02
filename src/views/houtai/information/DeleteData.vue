<template>
    <el-button @click.prevent="open_delete()"   link type="danger"  size="small">删除</el-button>
</template>
<script lang="ts" setup>
import { delData } from '@/service/login/information';
import { searchDataTotal } from '@/service/login/search';
import { ElMessage, ElMessageBox } from 'element-plus';
const showCard = defineProps(['index_delete'])
const emit = defineEmits(['updateTableTotal'])
const open_delete=()=>{
    ElMessageBox.confirm(
        '你确定要删除该条数据吗？',
        '警告',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }
      )
        .then(async() => {
            delData(showCard.index_delete)
          ElMessage({
            type: 'success',
            message: '删除成功',
          })
          setTimeout(async()=>{
            const res =await searchDataTotal(1,'deleteDate')
            emit('updateTableTotal',res,'delete')
          },100)
        })
        .catch(() => {
          ElMessage({
            type: 'info',
            message: '取消',
          })
    })
}
</script>