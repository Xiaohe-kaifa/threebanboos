<template>
    <OpenDialog @updateTable="updateTable" @close_dialog="updateDialogFormVisible"  :message="dialogFormVisible" v-model="dialogFormVisible"  />
    <el-button plain  @click="dialogFormVisible = true" type="primary" style="font-size: small; height: 25px;width: 60px;">
        <el-icon>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-6fbb019e=""><path fill="currentColor" d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64"></path><path fill="currentColor" d="M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0"></path><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path></svg>
        </el-icon>
        添加
    </el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import OpenDialog from './OpenDialog.vue';
const emit = defineEmits(["updateTable"])
let dialogFormVisible = ref(false)
const updateDialogFormVisible=()=>{
  dialogFormVisible.value=false
}
const updateTable=()=>{
  emit('updateTable')
}
</script>