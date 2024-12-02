<template>
    <div  class="container">
        <div class="login-wrapper">
            <el-select placeholder="人员类型" v-model="value" class="select-houtai" >
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                />
            </el-select>

            <img class="imslogo" src="/src/assets/logo/logo.png"/>
            <div class="header">
                三竹鼎立后台管理系统
            </div>
                <input type="text" v-model="username" placeholder="账号" class="input-item" required>
                <input type="password" v-model="password"  placeholder="密码" class="input-item" required>
                <button @click="login" class="btn"  >
                    登录
                </button>
        </div>
    </div>
</template>
<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus'
import { manageLoginData } from '@/service/manage/manage';
let username = ref('')
let password = ref('')
const value = ref('')
const options = [
  {
    value: '0',
    label: '管理员',
  },
  {
    value: '2',
    label: '商家',
  },
  {
    value: '3',
    label: '客服',
  },
]
let form = reactive({
    account:'',
    password:'',
    username_type:''
})
const router = useRouter()
const  login=async()=>{
    if(value.value==''){
        ElMessage({
                message: '请先选择人员类型！',
                type: 'info',
            })
    }else{
        
            form.account=username.value
            form.password=password.value
            form.username_type=value.value
             const res = await manageLoginData(form)
             console.log(res);
            if (res.success=='0'){
                ElMessage({
                    message: '登录成功！',
                    type: 'success',
                })
                setTimeout(()=>{
                    window.sessionStorage.setItem("token",username.value)
                    router.push('/houtai')
                },1000)
            }
            else if(form.username=='' || form.password == ''){
                ElMessage({
                message: '账号或者密码不能为空！',
                type: 'warning',
                })
            }
            else if(res.success=='0'){
                window.sessionStorage.setItem("token",username.value)
                router.push('/houtai')
            }else{
                ElMessage.error('账号或者密码错误！')
            }
    }
}
</script>
<style>
.select-houtai{
    width: 100px;
    position: absolute;
    right: 10px;
    top: 10px;

}
@media(min-width:768px){
     .login-wrapper {
        background-color: rgb(179, 219, 179);
        width: 358px;
        height: 588px;
        border-radius: 15px;
        padding: 0 50px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .container {
        height: 100vh;
        background-image: linear-gradient(to right, #999999, #2c8639);
    }
}
@media(max-width:768px){
    .login-wrapper {
        background-color: bisque;
        width: 300px;
        height: 500px;
        border-radius: 15px;
        padding: 0 50px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .container {
        height: 100vh;
        width: 100vh;
        background-image: linear-gradient(to right, #999999, #27a244);
    }
}

    


.header {
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    line-height: 150px;
}
.input-item {
    display: block;
    width: 100%;
    margin-bottom: 20px;
    border: 0;
    border-radius: 5px;
    padding: 10px;
    border-bottom: 1px solid rgb(128,125,125);
    font-size: 15px;
    outline: none;
}
.input-item::placeholder {
    text-transform: uppercase;
}
.msg {
    text-align: center;
    line-height: 88px;
}
a {
    text-decoration-line: none;
}
.btn:hover{
    border: none;
    text-align: center;
    padding: 10px;
    font-size: 18px;
    width: 100%;
    margin-top: 40px;
    background-image: linear-gradient(to right,#49ef59, #6be6b7);
    color: #fff;
}
.btn {
    border-radius: 5px;
    border: none;
    text-align: center;
    padding: 10px;
    font-size: 18px;
    width: 100%;
    margin-top: 40px;
    background-image: linear-gradient(to right,#25b833, #5cc19a);
    color: #fff;
}
.imslogo{
    width: 50%;
    margin-top: 50px;
    position: relative;
    left: 25%;
}
</style>