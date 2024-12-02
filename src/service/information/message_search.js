import { http } from '@/utils/request'
export async function searchMessageTable(params){
    return  http('/api/chatMessageSearch/',params,'post')
}
export async function searchMessageTableCount(params){
    return  http('/api/messageSearchCount/',params,'post')
}