import { http } from '@/utils/request'
export async function getChart01(params){
    return  http('/api/chart01/',params,'get')
}
export async function getChart02(params){
    return  http('/api/chart02/',params,'get')
}
export async function getChart(params){
    return  http('/api/homeNumber/',params,'get')
}
