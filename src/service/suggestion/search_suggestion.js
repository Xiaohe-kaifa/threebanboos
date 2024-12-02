import {  reactive } from "vue"
import { searchSuggestion } from "./suggestion"
let searchType = reactive({
    searchSuggestionPage:'',
    searchSuggestionStatus:'',
    searchSuggestionFeedback:''
  })
export const clearSearch=()=>{
    searchType= open_local()
    searchType.searchPagePage=''
    searchType.searchSuggestionStatus=''
    searchType.searchSuggestionFeedback=''
    close_local()
}
export const searchSuggestionDataTotal=async(parm,type)=>{

    searchType= open_local()
    switch(type){
        case 'searchSuggestionPage' :{
            searchType.searchSuggestionPage=parm
            break
        }
        case 'searchSuggestionStatus':{
            searchType.searchSuggestionStatus=parm
            close_local()
            return
        }
        case 'searchSuggestionFeedback' :{
            searchType.searchSuggestionFeedback=parm
            close_local()
            return
        }
    }
    close_local()
    return await searchSuggestion(searchType)
}
const open_local=()=>{
    return JSON.parse(localStorage.getItem('searArray'))
}
const close_local=()=>{
    localStorage.setItem('searArray',JSON.stringify(searchType))
}