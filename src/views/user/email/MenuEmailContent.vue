<template>
    <div class="personal-card">
        <el-icon style="margin-left: 10px;"><svg t="1724598946016" class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1818"><path d="M558.6 960.2h-157c-27.5 0-50-22.5-50-50v-795c0-27.5 22.5-50 50-50h157.1c27.5 0 50 22.5 50 50v795.1c-0.1 27.4-22.6 49.9-50.1 49.9z" p-id="1819" fill="#1cb426"></path></svg></el-icon>
        官方通知
    </div>
    <div class="chat-main" >
        <el-scrollbar class="chat-scroll" style="height: 100%;">
            <div v-if="load" v-for="(item,index) in messageTable" :key="index">
                <div class="chat-content" >
                    <div class="chat-font">{{ item.chatTime }}</div>
                </div>
                <div class="chat-main-content" >
                    <div class="chat-title">{{ item.chatTitle }}</div>
                    <div class="chat-content-box"> 
                        {{ item.chatContent }}
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import { getChatPeople } from '@/service/information/message';

import { onMounted, reactive, ref } from 'vue';
let message = ref('')
let  load = ref(false)
let messageTable = reactive({})

onMounted(async()=>{
// socket.onmessage=(res)=>{
// console.log(res.data);
// }
const res = await getChatPeople(window.sessionStorage.getItem('id'))
messageTable=res
load.value=true
})
// const openWebSocket=()=>{
//     // socket.send(message.value)
//     // message.value=''
//     // socket.onmessage =(res)=>{
//     //     messageTable.value.push(res)
//     // }
// }  



// const socket = new WebSocket('ws://127.0.0.1:8000/api/chatPersonal/22/')
    // def websocket_connect(self, message):
    // # 有客户端来向后端发送websocket连接的请求时，自动触发
    //     # 服务器允许和客户端创建连接
    //     print('连接上了111')
    //     print(message)
    //     self.accept()
    //     # 不允许创建连接
    //     # raise StopConsumer()
</script>
<style scoped>
.chat-content-box{
    overflow-wrap: break-word;
    width: 80%;
    margin-left: 10%;
    color: white;
    font-size: small;
}
.chat-title{
    color: rgb(255, 255, 255);
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.chat-main-content{
    width: 500px;
    background-color: rgba(171, 241, 175, 0.3);
    margin-top: 20px;
    height: 100px;
}
.chat-content{
    display: flex;
    justify-content: center;
}
.chat-scroll{
    display: flex;
    justify-content: center;
}
.chat-font{
    color: white;
    font-size: small;
    border-radius: 5px;
    width: 100px;
    margin-top: 20px;
    text-align: center;
    background-color: rgba(3, 3, 3, 0.1);
}
.chat-main{
    height: 589px;
}
.personal-card{
    box-shadow: 0px 2px 10px rgb(0, 0, 0,0.2);
    display: flex;
    align-items: center;
    width: 100%;
    background-color: rgb(158, 229, 147,0.3);
    color: rgb(34, 137, 25);
    height: 8%;
  }
</style>