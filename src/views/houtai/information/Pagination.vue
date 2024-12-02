<template>
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
<script lang="ts" setup>
import { clearSearch, searchDataTotal } from '@/service/login/search';
import { onMounted, reactive, ref } from 'vue'
let page_size = ref()
let page_open = ref(1)
let null_data = ref('')
const emit = defineEmits(['updateTableTotal'])
onMounted(async() => {
  clearSearch()
  const res =await searchDataTotal('','searchPage')
  page_size.value=res
})
const page_information=async(value:number)=>{
  const res_page =await searchDataTotal('','searchPage')
  page_size.value=res_page
  if(value==-4){
    page_value4()
  }else if(value==-1){
    page_value1()
  }
  else if(value==-2){
    page_value2()
  }
  else if(value==-3){
    page_value3()
  }
  else{
    page_information_handoff(value)
  }
}
const page_value4=async()=>{
    const res =await searchDataTotal(1,'searchPage')
    emit('updateTableTotal',res)
}
const page_value3=async()=>{
    page_open.value=1
    const res =await searchDataTotal(1,'searchPage')
    emit('updateTableTotal',res)
}
const page_value1=async()=>{
  const res =await searchDataTotal(page_open.value,'searchPage')
  emit('updateTableTotal',res)
}
const page_value2=async()=>{
  clearSearch()
  const res_page =await searchDataTotal('','searchPage')
  page_size.value=res_page
  page_open.value=1
  const res =await searchDataTotal(1,'searchPage')
  emit('updateTableTotal',res)
}
const page_information_handoff=async(value:number)=>{
  page_open.value=value
  const res =await searchDataTotal(value,'searchPage')
  emit('updateTableTotal',res)
}
defineExpose({page_information})
</script>