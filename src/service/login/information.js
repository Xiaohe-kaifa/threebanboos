import { http } from '@/utils/request'
export async function getRequest(params){
    return  http('/api/login/',params,'get')
}
export async function delData(params){
    return  http('/api/login/',params,'delete')
}
export async function postData(params){
    return  http('/api/login/',params,'post')
}
export async function searchData(params){
    return  http('/api/search/',params,'post')
}
export async function searchGetData(params){
    return  http('/api/avatar/',params,'get')
}
export async function verifyData(params){
    return  http('/api/verify/',params,'post')
}
export async function putData(params,id){
    return  http('/api/login/'+id,params,'put')
}