import { http } from '@/utils/request'
export async function searchOrdersTable(params){
    return  http('/api/ordersSystem/',params,'post')
}
export async function searOrdersTableCount(params){
    return  http('/api/ordersSystemCount/',params,'post')
}
export async function postOrder(params){
    return  http('/api/orders/',params,'post')
}
export async function delOrdersTable(params){
    return  http('/api/ordersSystem/',params,'delete')
}
export async function updateOrdersTable(params,id){
    return  http('/api/ordersSystem/'+id,params,'put')
}