import { http } from '@/utils/request'
export async function postSuggestion(params){
    return  http('/api/suggestion/',params,'post')
}
export async function getSuggestion(params){
    return  http('/api/suggestion/',params,'get')
}
export async function putSuggestionData(params,id){
    return  http('/api/suggestion/'+id,params,'put')
}
export async function searchSuggestion(params){
    return  http('/api/searchSuggestion/',params,'post')
}
export async function delSuggestionData(params){
    return  http('/api/suggestion/',params,'delete')
}