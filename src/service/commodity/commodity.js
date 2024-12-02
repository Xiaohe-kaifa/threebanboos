import { http } from '@/utils/request'
export async function searchCommodityTable(params){
    return  http('/api/searchCommodity/',params,'post')
}
export async function postCommodity(params){
    return  http('/api/commodity/',params,'post')
}
export async function searchCommodityTableCount(params){
    return  http('/api/searchCommodityCount/',params,'post')
}
export async function searchCommodityType(params){
    return  http('/api/searchCommodityType/',params,'post')
}
export async function searchCommodityPeopleTable(params){
    return  http('/api/searchCommodityPeopleTable/',params,'post')
}
export async function delCommodityTable(params){
    return  http('/api/commodity/',params,'delete')
}
export async function putCommodityData(params,id){
    return  http('/api/commodity/'+id,params,'put')
}