import { http } from '@/utils/request'
//获取轮播图
export async function getRequest(params){    
    return  http('/api/lunbotu/',params,'get')
}
//删除轮播图
export async function deletePhoto(params) {
    return http('/api/lunbotu/',params,'delete')
}