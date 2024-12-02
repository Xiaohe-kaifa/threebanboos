import {  reactive, ref } from "vue"
import { searchData } from "./information"
let page_table =reactive([])
let searchType = reactive({
    searchPage:'',
    searchContent:'',
    searchGender:'',
    searchTime:''
  })
export const clearSearch=()=>{
    searchType= open_local()
    searchType.searchPage=''
    searchType.searchContent=''
    searchType.searchGender=''
    searchType.searchTime=''
    close_local()
}
export const searchDataTotal=async(parm,type)=>{

    searchType= open_local()
    switch(type){
        case 'searchPage' :{
            searchType.searchPage=parm
            break
        }
        case 'deleteDate' :{
            return await searchData(searchType)
        }
        case 'searchContent' :{
            searchType.searchPage=''
            searchType.searchContent=parm
            break
        }
        case 'searchGender' :{
            searchType.searchGender=parm
            break
        }
        case 'searchTime':{
            searchType.searchTime=parm
            break
        }
    }
    close_local()
    return await searchData(searchType)
}
const open_local=()=>{
    return JSON.parse(localStorage.getItem('searArray'))
}
const close_local=()=>{
    localStorage.setItem('searArray',JSON.stringify(searchType))
}