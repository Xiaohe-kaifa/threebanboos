import { http } from '@/utils/request'
export async function postBusinessData(params){
    return  http('/api/business/',params,'post')
}
export async function getBusinessData(params){
    return  http('/api/business/',params,'get')
}
export async function postSubmitBusinessData(params){
    return  http('/api/returnPhoto/',params,'post')
}
export async function agreeBusinessData(params){
    return  http('/api/agreeBusiness/',params,'get')
}
export async function noAgreeBusinessData(params){
    return  http('/api/agreeBusiness/',params,'delete')
}
export async function idBusinessData(params){
    return  http('/api/idBusiness/',params,'post')
}
export async function handleAvatarSuccess(params){
    return  http('/api/avatar/',params,'get')
}