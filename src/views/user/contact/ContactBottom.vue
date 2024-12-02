<template>
    <div ref="bottomCart" class="bottom-contact-all">
        <div :class="activeBottomCart">
            <div  class="bottom-main">
                <div class="bottom-main-left">
                    <div class="bottom-main-left-title">
                        <a @click="open_business_table(true)" :class="business ? 'open' :'bottom-main-left-title-left'" >
                            <div style="margin-top:6%;">
                                成为商家
                            </div>
                        </a>
                        <a @click="open_business_table(false)" :class="business ? 'bottom-main-left-title-right' :'close'">
                            <div style="margin-top:6%;">
                                反馈建议
                            </div>
                        </a>
                    </div>
                    <div v-if="business">
                        <ContactSubmitBusiness/>
                    </div>
                    <div v-else>
                        <ContactSubmitSuggestion/>
                    </div>
                </div>
                <div class="bottom-main-right">
                    <img class="bottom-main-right-img"  src="/src/assets/contact_imgs/lun03.png" alt="">
                </div>
            </div>
        </div>
        
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import ContactSubmitBusiness from './ContactSubmitBusiness.vue';
import ContactSubmitSuggestion from './ContactSubmitSuggestion.vue';
let business = ref(true)
let bottomCart=ref(null)
let activeBottomCart=ref('')
const  open_business_table =(res:boolean)=>[
    business.value=res
]
onMounted(()=>{
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 元素进入视窗
            // console.log('元素进入视窗');
            activeBottomCart.value='bottom-contact'
        } else {
            // 元素离开视窗
            // console.log('元素离开视窗');
            activeBottomCart.value='bottom-no-content'
        }
        });
    }, {
        // 配置选项，例如阈值
        threshold: [0, 1]
    });
    // 观察目标元素
    observer.observe(bottomCart.value);   
    })  
</script>
<style scoped>
.bottom-no-content{
    display: none;
}
.bottom-main-left-title a:hover{
    cursor: pointer;
}
@keyframes up_ye {
    0%{
        transform:scale(1.1) rotate(3deg);
    }
    50%{
        transform:scale(1.1) rotate(-3deg);
    }
    100%{
        transform:scale(1.1) rotate(3deg);
    }
}
@keyframes after_up_ye {
    0%{
        transform: rotate(3deg);
    }
    50%{
        transform:rotate(-3deg);
    }
    100%{
        transform: rotate(3deg);
    }
}
.open{
    animation: up_ye 6s infinite alternate;
    color: rgb(236, 236, 236);
    width: 180px;
    background-color: rgb(13, 131, 23);
    box-shadow: 0px 1px 6px 0px rgb(3, 3, 3,0.4);
    border-radius: 0 100% 0 100% ;
    height: 50px;
    transform: scale(1.1);
    text-align: center;
    font-size: large;
}

.close{
    animation: up_ye 6s infinite alternate;
    transform: scale(1.1);
    color: rgb(236, 236, 236);
    width: 180px;
    margin-left: 20px;
    background-color: rgb(13, 131, 23);
    box-shadow: 0px 1px 6px 0px rgb(3, 3, 3,0.4);
    border-radius: 0 100% 0 100% ;
    height: 50px;
    text-align: center;
    font-size: large;
}
.bottom-main-left-title-left{
    animation: after_up_ye 6s infinite alternate;
    color: rgb(211, 211, 211);
    width: 180px;
    background-color: rgb(13, 131, 23);
    box-shadow: 0px 1px 6px 0px rgb(3, 3, 3,0.4);
    border-radius: 0 100% 0 100% ;
    height: 50px;
    text-align: center;
    font-size: large;
}
.bottom-main-left-title-right{
    animation: after_up_ye 6s infinite alternate;
    color: rgb(211, 211, 211);
    width: 180px;
    margin-left: 20px;
    background-color: rgb(13, 131, 23);
    box-shadow: 0px 1px 6px 0px rgb(3, 3, 3,0.4);
    border-radius: 0 100% 0 100% ;
    height: 50px;
    text-align: center;
    font-size: large;
}
.bottom-main-left-title{
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    margin-left: -60px;
}
.bottom-main-right-img{
    width: 100%;
    box-shadow: 0px 0px 3px 0px rgb(0, 0, 0.2);
}
.bottom-main-left{
    width: 550px;
}
.bottom-main-right{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
}
.bottom-main{
    display: flex;
    width: 1200px;
    height: 100%;
}
.bottom-contact{
    animation: bottomCart 1s ease-in-out forwards;
    display: flex;
    justify-content: center;
    background-color: rgba(122, 197, 110, 0.6);
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 10px 0px rgb(0, 0, 0,0.3);
}
.bottom-contact-all{
    margin-top: 0px;
    height: 500px;
    width: 1450px;
}
@keyframes bottomCart {
    0%{
        margin-left: -50%;
        opacity: 0;
    }  
    100%{
        margin-left: 0;
        opacity: 1;
    }
}
</style>