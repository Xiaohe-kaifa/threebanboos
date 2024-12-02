<template>
    


    
    <div class="contact-content">
        <div class="card-contact">
            <el-scrollbar  id="el-scrollbar__wrap" style="overflow: auto; flex-grow:1;" >
                    <div  class="contact-main">
                        <img class="contact-photo-one" src="/src/assets/contact_imgs/lun03.png" alt="">
                    </div>
                    <div ref="activeContactTitle">
                        <div :class="activeContactContentTitle00">
                            <div style="position: absolute;bottom:0;">
                                    绿色环保，手工编织
                            </div>
                        </div>
                        <div  class="contact-main-two-english">
                            <div :class="activeContactContentTitle01" style="position: absolute;top:10px;font-size:small;">
                                Green and environmentally
                            </div>
                            <div :class="activeContactContentTitle02">
                                <svg t="1725199117405" class="icon" style="margin-top:50px; width: 50px;height: 50px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1464"><path d="M528.406 66.185h97.912S614.8 123.781 614.8 164.098s4.32 135.829 10.56 181.425h-97.913s13.418-103.742 12.477-183.585c-0.359-30.598-11.518-95.753-11.518-95.753zM528.406 372.882h97.912S614.8 430.477 614.8 470.795c0 40.316 4.32 135.826 10.56 181.425h-97.913s13.418-103.745 12.477-183.586c-0.359-30.598-11.518-95.752-11.518-95.752zM528.406 678.137h97.912S614.8 735.734 614.8 776.05c0 40.316 4.32 135.827 10.56 181.426h-97.913s13.418-103.746 12.477-183.586c-0.359-30.598-11.518-95.753-11.518-95.753zM390.178 678.137h97.913s-11.52 57.597-11.52 97.913c0 40.316 4.32 135.827 10.56 181.426h-97.913s13.418-103.746 12.478-183.586c-0.359-30.598-11.518-95.753-11.518-95.753zM387.298 450.158h100.793s-11.52 41.366-11.52 70.321c0 28.959 1.44 78.466 9.601 129.823h-95.034s8.618-76.09 7.678-133.432c-0.36-21.976-11.518-66.712-11.518-66.712zM773.187 571.107s12.477-76.797 68.152-107.512c55.678-30.717 116.154-68.155 116.154-68.155s-9.6 70.073-77.754 131.51c-68.152 61.437-106.552 44.157-106.552 44.157zM705.035 621.983s46.075-18.242 77.753-14.399c31.678 3.841 120.95 41.275 129.591 45.114 0 0-79.677 39.358-154.552 11.52-74.875-27.837-52.792-42.235-52.792-42.235zM723.27 401.2s-25.918 103.673-28.798 128.63c-2.88 24.955 18.239 63.353 31.676 71.993 0 0 38.398-20.158 32.64-79.672-5.759-59.517-25.917-108.472-35.518-120.952z" p-id="1465" fill="#cdcdcd"></path><path d="M620.2 668.778l160.664-104.392 7.442 5.282-161.628 107.03zM378.12 251.564s-9.232-77.251-63.566-110.285c-54.335-33.037-113.178-72.985-113.178-72.985s6.641 70.415 72.147 134.668c65.506 64.248 104.596 48.602 104.596 48.602zM444.071 305.265s-45.267-20.164-77.077-17.66c-31.813 2.502-122.583 36.145-131.374 39.619 0 0 77.944 42.675 153.924 18.015 75.98-24.657 54.527-39.974 54.527-39.974zM435.146 83.912s21.532 104.67 23.36 129.728c1.825 25.054-20.892 62.53-34.684 70.595 0 0-37.514-21.755-29.253-80.977 8.26-59.22 30.464-107.284 40.577-119.346z" p-id="1466" fill="#cdcdcd"></path><path d="M541.191 366.045l-170.46-121.517-7.655 4.962 172.052 123.392zM244.177 602.254s-20.4-63.572-71.574-82.527C121.43 500.778 65.33 476.74 65.33 476.74s17.1 58.236 82.787 101.661c65.684 43.423 96.059 23.853 96.059 23.853zM308.513 636.719s-41.43-9.59-67.818-2.285c-26.392 7.307-97.364 50.481-104.203 54.846 0 0 72.638 23.215 132.617-9.979 59.98-33.183 39.404-42.582 39.404-42.582zM264.823 451.696S300.065 536.36 305.7 557.17c5.631 20.804-7.38 56.09-17.682 65.137 0 0-35.158-12.197-37.877-63.44-2.718-51.24 8.133-95.357 14.682-107.172z" p-id="1467" fill="#cdcdcd"></path><path d="M400.264 672.051l-163.46-74.52-5.64 5.435L396.272 678.8z" p-id="1468" fill="#cdcdcd"></path></svg>
                            </div> 
                        </div>
                    </div>
                        <div class="contact-main-center">
                            <div class="contact-bottom"  ref="contactBottom">
                                <div v-for="(i,index) in contactContent" :src="i"  :key="index"  :class="activeContactContent">
                                        <div class="contact-bottom-content-img">
                                            <img class="contact-imgs" style="width: 100%;" :src="contactContent[index].img" alt="">
                                        </div>
                                        <div class="contact-bottom-content-true">
                                            <div  class="contact-bottom-content-title">{{ contactContent[index].title }}</div>
                                            <div class="contact-bottom-content-bottom"  style=" font-size: smaller;">
                                                &emsp;{{ contactContent[index].content }}
                                            </div> 
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div ref="activeContactBOttomTitle" class="contact-main-three">
                            <div :class="activeContactContentTitle03">
                                <svg t="1725253417066" class="icon" style="width: 50px;height: 50px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1494"><path d="M748.544 204.8q43.008-3.072 84.48 7.68t73.728 26.624 52.224 33.792 19.968 30.208-15.36 14.848-38.4 4.608-50.688 7.68-52.224 25.088q-16.384 12.288-31.232 27.136t-29.696 28.672-30.72 25.6-34.304 17.92q-9.216 3.072-22.528 6.144t-28.16 1.536-30.72-9.728-30.208-27.648q-9.216 12.288-15.872 29.184t-11.776 36.352-8.704 40.448-5.632 39.424q-2.048 15.36-3.072 38.4t-0.512 45.568 2.56 41.472 6.144 27.136q5.12 9.216 5.12 15.36 0 5.12-5.12 9.728t-19.456 4.608q-16.384 0-22.016-4.608t-5.632-9.728q-1.024-6.144 4.096-14.336 5.12-10.24 6.656-24.064t1.024-29.696-1.536-32.256-1.024-31.744q-16.384-32.768-31.744-55.296t-33.792-43.008q-11.264 24.576-26.112 36.864t-30.208 16.896-29.184 4.096-24.064-2.56q-18.432-3.072-34.816-11.776t-32.768-19.456-33.28-23.04-34.304-21.504q-26.624-15.36-54.784-16.384t-51.2 1.536-37.888 2.048-14.848-13.824 16.896-33.792 45.056-40.448 66.048-35.84 79.872-19.968q64.512-6.144 107.008 6.656t66.56 36.352 30.208 54.272-2.048 61.44q32.768 29.696 64.512 75.776 5.12-50.176 25.6-101.376 8.192-17.408 15.36-29.696t17.408-26.624q-16.384-29.696-16.896-63.488t19.456-63.488 61.952-50.688 110.592-25.088zM443.392 486.4q-57.344-49.152-120.832-63.488t-131.072 3.072q-2.048 0-1.024 0.512t3.072 0.512q29.696-3.072 60.416-2.56t61.952 9.216 61.952 25.6 60.416 45.568zM819.2 291.84q2.048 0 3.072-0.512t-2.048-0.512q-74.752-7.168-135.168 23.04t-106.496 88.576l10.24 17.408q27.648-37.888 56.832-62.464t59.392-38.912 58.88-19.968 55.296-6.656zM284.672 815.104q-8.192-7.168 5.12-16.896t38.912-19.968 57.856-20.992 61.952-18.944q13.312-4.096 20.992 0.512t14.336 11.776 16.384 13.824 28.16 6.656 28.16-6.656 16.896-13.312 14.336-11.264 20.48-1.536q29.696 8.192 62.464 19.456t58.88 22.016 39.424 20.48 3.072 14.848q-24.576 13.312-66.048 22.016t-90.112 12.8-100.352 4.096-97.792-4.608-81.92-13.312-51.2-20.992z" p-id="1495" fill="#cdcdcd"></path></svg>
                            </div>

                            <div style="font-size:medium;" :class="activeContactContentTitle04">
                                Cultural Heritage
                            </div>
                        </div>
                        <ContactBottom/>
            </el-scrollbar>
        </div>    
    </div>

</template>

<script lang="ts" setup>
import ContactBottom from "./ContactBottom.vue";
import { onMounted, reactive, ref } from "vue";
let contactBottom = ref(null)
let activeContactContent=ref('no-content')
let activeContactTitle=ref(null)
let activeContactBOttomTitle=ref(null)
let activeContactContentTitle00=ref('no-content')
let activeContactContentTitle01=ref('no-content')
let activeContactContentTitle02=ref('no-content')
let activeContactContentTitle03=ref('no-content')
let activeContactContentTitle04=ref('no-content')
//
const contactContent=reactive([
    {
    img:'/src/assets/contact_imgs/contact_content/zhu00.jpg',
    title:'历史传承',
    content:'竹编工艺在我国有着悠久的历史，源于新石器时代，人们用竹子编织储物器具。商周时期，竹编工艺逐渐精细，出现多种纹样。'
    },
    {
    img:'/src/assets/contact_imgs/contact_content/zhu02.jpg',
    title:'地域特色',
    content:'四川自贡的龚扇、湖南桃江的竹编画、福建泉州的永春竹编等。这些地域特色的竹编工艺展现了当地的文化底蕴和民间智慧。'
    },
    {
    img:'/src/assets/contact_imgs/contact_content/zhu04.jpg',
    title:'实用性与观赏性',
    content:'竹编工艺既具有实用性，又具有观赏性。竹编工艺品逐渐成为家居装饰、礼品、收藏品等，展现出独特的观赏价值。'
    },
    {
    img:'/src/assets/contact_imgs/contact_content/zhu03.jpg',
    title:'环保自然',
    content:'竹编工艺具有环保节能的特点。竹子是一种速生材，生长周期短，可再生利用。竹编产品节能环保，有助于减少碳排放，保护地球家园。'
    },
    {
    img:'/src/assets/contact_imgs/contact_content/zhu01.jpg',
    title:'抗震耐久',
    content:'竹编工艺具有良好的抗震性和耐久性。竹材韧性好，抗拉强度较高，不易变形。因此，竹编建筑和结构在地震等自然灾害中表现出较高的安全性。'
    },
    {
    img:'/src/assets/contact_imgs/contact_content/zhu05.jpg',
    title:'艺术创新',
    content:'在传统竹编工艺的基础上，现代艺术家和设计师不断进行创新，将竹编技艺应用于建筑、家居、服饰、首饰等领域，展现出竹编艺术的无限可能。'
    },
])
onMounted(() => {
    const elements = reactive([contactBottom.value,activeContactTitle.value,activeContactBOttomTitle.value])
    elements.forEach((element,index)=>{
        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 元素进入视窗
            // console.log('元素进入视窗');
            switch(index){
                case 0:activeContactContent.value='contact-bottom-content'
                break
                case 1:
                    activeContactContentTitle00.value='contact-main-two';
                    activeContactContentTitle01.value='contact-main-two-english-content';
                    activeContactContentTitle02.value='contact-icon-zhu';
                break
                case 2:
                    activeContactContentTitle03.value='contact-main-three-active'
                    activeContactContentTitle04.value='contact-main-three-active'
                break
            }
            
        } else {
            // 元素离开视窗
            // console.log('元素离开视窗');
            switch(index){
                case 0:activeContactContent.value='no-content'
                break
                case 1:
                    activeContactContentTitle00.value='no-content';
                    activeContactContentTitle01.value='no-content';
                    activeContactContentTitle02.value='no-content';
                break
                case 2:
                    activeContactContentTitle03.value='no-content';
                    activeContactContentTitle04.value='no-content'
                break
            }
        }
        });
    }, {
        // 配置选项，例如阈值
        threshold: [0, 1]
    });
    // 观察目标元素
    observer.observe(element);   
    })

});
</script>
<style scoped>
.contact-main-three{
    font-weight: bold;
    color: rgb(205, 205, 205);
    font-size: 30px;
    display: flex;
    height: 200px;
    position: relative;
    justify-content: center;
    align-items: center;
}
.contact-main-three-active{
    animation: contactIconZhu 1s ease-in-out forwards;
}
.no-content{
    display: none;
}
@keyframes contactIconZhu {
    0%{
        margin-bottom: -100px;
        opacity: 0;
    }
    
    100%{
        margin-bottom: 0;
        opacity: 3;
    }
}
.contact-icon-zhu{
    animation: contactIconZhu 1s ease-in-out forwards;
}
.contact-imgs{
    border: none;
    box-shadow: 0px 0px 5px 1px rgb(6, 6, 6,0.5)
}
.contact-bottom-content-bottom{
    margin-top: 5px;
}
.contact-bottom-content-title{
    font-weight: bold;
}
.contact-bottom-content-true{
    width: 180px;
    color: rgb(223, 222, 222);
    height: auto;
    margin-top: 10px;
}
.contact-main-center{
    display: flex;
    margin-top: 40px;
    justify-content: center;
}
.contact-bottom-content-img{
    width: 180px;
    height: 180px;
}
.contact-bottom-content{
    flex: 1;
    animation: contactContent 1s ease-in-out forwards;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.contact-bottom{
    display: flex;
    justify-content: center;
    width: 1200px;
    height: 300px;
}
@keyframes contactContent {
    0%{
        margin-left: -100%;
        opacity: 0;
    }
    60%{
        margin-left: 5%;
        opacity: 1;
    }
    80%{
        margin-left: -3%;
        opacity: 2;
    }
    100%{
        margin-left: 0;
        opacity: 3;
    }
}
@keyframes contactMainTwo {
    0%{
        margin-left: -100%;
        opacity: 0;
    }
    60%{
        margin-left: 5%;
        opacity: 1;
    }
    80%{
        margin-left: -3%;
        opacity: 2;
    }
    100%{
        margin-left: 0;
        opacity: 3;
    }
}
@keyframes contactMainTwoEnglish {
    0%{
        margin-right: -100%;
        opacity: 0;
    }
    60%{
        margin-right: 5%;
        opacity: 1;
    }
    80%{
        margin-right: -3%;
        opacity: 2;
    }
    100%{
        margin-right: 0;
        opacity: 3;
    }
}
.wow{
    z-index: 10;
}
.contact-main-two{
    animation: contactMainTwo 1s ease-in-out forwards;
    font-weight: bold;
    color: rgb(222, 222, 222);
    font-size: 30px;
    height: 100px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
}
.contact-main-two-english-content{
    animation: contactMainTwoEnglish 1s ease-in-out forwards;
}
.contact-main-two-english{
    font-weight: bold;
    color: rgb(205, 205, 205);
    font-size: 30px;
    height: 100px;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
}
.contact-photo-one{
    width: 100%;
    height: 100%;
    box-shadow: 0px 1px 5px 0;
}
.contact-main{
   width: 100%;
   height: 500px;
}
.contact-content{
    width: 100%;
    height: 680px;
    background-image: url('/src/assets/contact_imgs/lun03.png');
    background-size: 100%;
    flex: 1;
    background-color: rgb(193, 253, 198);
    position:fixed;
}
.card-contact{
    z-index: 1;
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    backdrop-filter: blur(15px) saturate(180%);
    -webkit-backdrop-filter: blur(17px) saturate(180%);
    background-color: rgba(149,239,142,0.4);
    border-radius: 0px;
    border: 1px solid rgba(209, 213, 219, 0.3)
}
</style>