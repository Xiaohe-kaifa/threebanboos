import { http } from '@/utils/request'
export async function peopleLoginData(params){
    return  http('/api/peopleLogin/',params,'post')
}
export async function getLoginData(params){
    return  http('/api/peopleLogin/',params,'get')
}
export async function closeLoginData(params){
    return  http('/api/peopleCloseLogin/',params,'get')
}