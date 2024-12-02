<template>
    <div class="personal-card">
        <el-icon style="margin-left: 10px;"><svg t="1724598946016" class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1818"><path d="M558.6 960.2h-157c-27.5 0-50-22.5-50-50v-795c0-27.5 22.5-50 50-50h157.1c27.5 0 50 22.5 50 50v795.1c-0.1 27.4-22.6 49.9-50.1 49.9z" p-id="1819" fill="#1cb426"></path></svg></el-icon>
        我的订单
    </div>
    <el-checkbox
    
    :indeterminate="isIndeterminate"
    @change="handleCheckAllChange"
  >
    Check all
  </el-checkbox>
  <el-checkbox-group
    v-model="checkedCities"
    @change="handleCheckedCitiesChange"
  >
    <el-checkbox v-for="city in cities" :key="city" :label="city" :value="city">
      {{ city }}
    </el-checkbox>
  </el-checkbox-group>
</template>
<script lang="ts" setup>

import { reactive, ref } from 'vue'
const checkAll = ref(false)
const isIndeterminate = ref(true)//选择框的样式
const checkedCities = ref([])//选择后的id
const cities = ['JAVA', 'PYTHON', 'JS', 'HTML']//购物车id
const handleCheckAllChange = (val: boolean) => {
  //全选
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
  console.log(checkedCities.value);
}
const handleCheckedCitiesChange = (value: string[]) => {
    //多选
    if(value.length<=0){
        isIndeterminate.value=false
    }else{
        isIndeterminate.value=true
    }
    checkedCities.value=value
    console.log(checkedCities.value);
    
}
</script>
<style scoped>
.personal-card{
    box-shadow: 0px 2px 10px rgb(0, 0, 0,0.2);
    display: flex;
    align-items: center;
    width: 100%;
    background-color: rgb(158, 229, 147,0.3);
    color: rgb(34, 137, 25);
    height: 8%;
  }
</style>