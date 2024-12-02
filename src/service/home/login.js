import { http } from '@/utils/request'
export async function getLoginSuccess(params){
    return  http('/api/success/',params,'post')
}