import { http } from '@/utils/request'
export async function postChatMessage(params){
    return  http('/api/chatMessage/',params,'post')
}
export async function getChatPeople(params){
    return  http('/api/chatPeople/',params,'get')
}
export async function delChatPeople(params){
    return  http('/api/chatMessage/',params,'delete')
}
 
