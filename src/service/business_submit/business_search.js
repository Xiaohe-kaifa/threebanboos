import { http } from '@/utils/request'
export async function searchBusinessTable(params){
    return  http('/api/businessSearch/',params,'post')
}
export async function searchBusinessTableCount(params){
    return  http('/api/businessSearchCount/',params,'post')
}