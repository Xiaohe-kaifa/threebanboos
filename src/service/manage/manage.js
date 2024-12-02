import { http } from '@/utils/request'
export async function manageLoginData(params){
    return  http('/api/manageLogin/',params,'post')
}
export async function getManageData(params){
    return  http('/api/manageLogin/',params,'get')
}
export async function closeManageData(params){
    return  http('/api/manageCloseLogin/',params,'get')
}