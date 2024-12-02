<template>
    <main class="el-main" >
        <el-card style="max-width: 100% ;height: 99%; ">
          <template #header >
            <div class="card-header" style=" height: 15px;">
              <span>
                <el-breadcrumb  style=" white-space: nowrap; display: flex; ">
                    <el-breadcrumb-item>
                        反馈信息表
                    </el-breadcrumb-item>
                </el-breadcrumb></span>
            </div>
          </template>
          <el-table @filter-change="feedbackOpen" v-if="load" :data="feedbackTableData" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="feedback_time" label="反馈时间" width="150" />
            <el-table-column prop="id" label="反馈id" width="100" />
            <el-table-column
              prop="feedback"
              label="反馈方向"
              width="180"
              column-key="feedback"
              :filters="[
                { text: '产品方向', value: '产品方向' },
                { text: '技术方向', value: '技术方向' },
              ]"
              filter-placement="bottom-end"
            >
            </el-table-column>
            <el-table-column prop="contact" width="120" label="联系方式" />
            <el-table-column prop="content" width="400" label="反馈内容" />
            <el-table-column
              prop="feedback_status"
              label="状态"
              width="80"
              column-key="feedback_status"
              :filters="[
                { text: '已读', value: '已读' },
                { text: '未读', value: '未读' },
              ]"
              filter-placement="bottom-end"
            >
              <template #default="scope">
                <el-tag
                  :type="scope.row.feedback_status === '已读' ? 'success' : 'danger'"
                  disable-transitions
                  >{{ scope.row.feedback_status }}</el-tag
                >
              </template>
            </el-table-column>
            <el-table-column label="操作" fixed="right" align="right" min-width="100" >
              <template #default="scope">
                <el-button  @click.prevent="readSuggestion(scope.$index)" plain link type="primary" size="small" >
                  点击已读
                </el-button>
                <el-button  @click.prevent="deleteSuggestion(scope.$index)"  link type="danger"  size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div style="margin-top:3%; display:flex;justify-content:center; width: 100%;">
            <el-pagination  
            size="small" 
            background
            layout="prev, pager, next" 
            :total="page_total" 
            @current-change="page_information"
            :current-page="opening"
            />
          </div>
        </el-card>
    </main>
</template>
<script lang="ts" setup>
import { clearSearch, searchSuggestionDataTotal } from '@/service/suggestion/search_suggestion';
import { delSuggestionData, getSuggestion, putSuggestionData } from '@/service/suggestion/suggestion';
import { ElMessage } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';
let feedbackTableData=reactive([])
let load=ref(true)
let page_total =ref()
let opening=ref(1)
onMounted(async()=>{
  clearSearch()
  const res =await getSuggestion()
  feedbackTableData=Object.keys(res).map(Key => res[Key])
  updateSuggestionPage()
})
const defaultSearch=async()=>{
  const res =await searchSuggestionDataTotal(opening.value,'searchSuggestionPage')
  feedbackTableData=Object.keys(res).map(Key => res[Key])
  updateSuggestionPage()
}
const page_information=async(value:number)=>{
  opening.value=value
  updateSuggestion(value,'searchSuggestionPage')
}
const updateSuggestionPage=async()=>{
  page_total.value = await searchSuggestionDataTotal('','searchSuggestionPage')
  updateFeedback()
}
const updateSuggestion=async(value:any,type:string)=>{
  const res = await searchSuggestionDataTotal(value,type)
  feedbackTableData=Object.keys(res).map(Key => res[Key])
  updateFeedback()
}
const updateFeedback=()=>{
  load.value=false
  load.value=true
}
const readSuggestion=(value:number)=>{
  switch(feedbackTableData[value].feedback){
    case '产品方向':
      feedbackTableData[value].feedback=0;
      break
      case '技术方向':
      feedbackTableData[value].feedback=1;
      break
  }
  feedbackTableData[value].feedback_status='1'
  putSuggestionData(feedbackTableData[value],feedbackTableData[value].id)
  setTimeout(()=>{
    updateSuggestion(opening.value,'searchSuggestionPage')
  },100)
  ElMessage({
            type: 'success',
            message: '已更新状态！',
          })
}
const deleteSuggestion=(value:number)=>{
  delSuggestionData(feedbackTableData[value].id)
  setTimeout(async()=>{
    if(feedbackTableData.length==1){
      opening.value=opening.value-1
      page_total.value = await searchSuggestionDataTotal('','searchSuggestionPage')
      updateSuggestion(opening.value,'searchSuggestionPage')
    }else{
      // updateSuggestion(opening.value,'searchSuggestionPage')
      defaultSearch()
    }
  },100)
  ElMessage({
            type: 'success',
            message: '删除成功！',
          })
}
const feedbackOpen=async(value:any)=>{
  if(value.feedback){
      if(value.feedback.length<=0 || value.feedback.length==2){
      searchSuggestionDataTotal('','searchSuggestionFeedback');
      defaultSearch()
    }else{
      switch(value.feedback[0]){
        case '产品方向':
          searchSuggestionDataTotal(0,'searchSuggestionFeedback');
          defaultSearch()
          break
        case '技术方向':
          searchSuggestionDataTotal(1,'searchSuggestionFeedback');
          defaultSearch()
          break
      }
    }
  }
  if(value.feedback_status){
      if(value.feedback_status.length<=0 || value.feedback_status.length==2){
      searchSuggestionDataTotal('','searchSuggestionStatus');
      defaultSearch()
    }else{
      switch(value.feedback_status[0]){
        case '未读':
          searchSuggestionDataTotal(0,'searchSuggestionStatus');
          defaultSearch()
          break
        case '已读':
          searchSuggestionDataTotal(1,'searchSuggestionStatus');
          defaultSearch()
          break
      }
    }
  }
  
}
</script>