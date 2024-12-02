import { http } from '@/utils/request'

export async function getManageData(params){
    return  http('/api/peopleLogin/',params,'get')
}
export async function postCart(params){
    return  http('/api/cart/',params,'post')
}
export async function getCart(params,id){
<<<<<<< HEAD
    return  http('/api/cart/'+id,params,'put')
}
export async function delCartData(params){
    return  http('/api/delCart/',params,'post')
=======
    return  http('/api/cart/'+id,params,'get')
>>>>>>> 85ac70ebb1e6dca1ea4e166c6dbc581239dfc71e
}
