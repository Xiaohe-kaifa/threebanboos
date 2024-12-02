import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/views/user/home/MenuContent.vue'
import SystemHome from '@/views/houtai/SystemHome.vue'
import SystemHomeLook from '@/views/houtai/home_look/SystemHomeLook.vue'
import Products from '@/views/user/product/Products.vue'
import Contact from '@/views/user/contact/Contact.vue'
import ShoppingCart from '@/views/user/shopping_cart/ShoppingCart.vue'
import Main from '@/components/Main.vue'
import System from '@/components/System.vue'
import SystemManage from '@/views/houtai/SystemManage.vue'
import Information from '@/views/houtai/information/Information.vue'
import Upload from '@/views/houtai/uploadphoto/Upload.vue'
import Personal from '@/views/user/personal/personal.vue'
import PersonalInformation from '@/views/user/personal/Information.vue'
import Orders from '@/views/user/personal/Orders.vue'
import Business from '@/views/houtai/business/Business.vue'
import Feedback from '@/views/houtai/feedback/Feedback.vue'
import Application from '@/views/houtai/business_application/Application.vue'
import MenuEmail from '@/views/user/email/MenuEmail.vue'
import MenuEmailContent from '@/views/user/email/MenuEmailContent.vue'
import Message from '@/views/houtai/message/Message.vue'
import backgroundOrders from '@/views/houtai/orders/Orders.vue'
import Commodity from '@/views/houtai/commodity/Commodity.vue'
import Ceshi from '@/components/ceshi.vue'
const router=createRouter({
     history:createWebHistory(),//路由器的工作模式
     routes:[//路由规则
        {
         path:'/main',//写路径
         name:"main",
         component:Main,
         children:[
          {
            path:'/',//写路径
            component:Home,
          },
          {
            path:'/main/products',//写路径
            component:Products,
          },
          
          {
             path:'/main/contact',//写路径
             component:Contact,
          },
          {
              path:'/main/shoppingCart',//写路径
              component:ShoppingCart,
          },
          {
            path:'/main/email',//写路径
            component:MenuEmail,
            children:[
              {
                path:'/main/email/content',//写路径
                component:MenuEmailContent,
              }
            ]
          },
          {
              path:'/main/personal',//写路径
              component:Personal,
              children:[
                {
                  path:'/main/personal/information',//写路径
                  component:PersonalInformation,
                },
                {
                  path:'/main/personal/orders',//写路径
                  component:Orders,
                }
              ]
          }
        ]
       },
       {
        path:'/system',//写路径
        component:System,
        },
        {
          path:'/ceshi',//写路径
          component:Ceshi,
          },
        {
          path:'/houtai',//写路径
          component:SystemHome,
          children:[
            {
              path:'/houtai',//写路径
              component:SystemHomeLook,
            },
            {
              path:'/houtai/manage',//写路径
              component:SystemManage,
            },
            {
              path:'/houtai/information',//写路径
              component:Information,
            },
            {
              path:'/houtai/message',//写路径
              component:Message,
            },
            {
              path:'/houtai/upload',//写路径
              component:Upload,
            },
            {
              path:'/houtai/business',//写路径
              component:Business,
            },
            {
              path:'/houtai/feedback',//写路径
              component:Feedback,
            },
            {
              path:'/houtai/orders',//写路径
              component:backgroundOrders,
            },
            {
              path:'/houtai/commodity',//写路径
              component:Commodity,
            },
            {
              path:'/houtai/application',//写路径
              component:Application,
            },
          ],
          beforeEnter:((to,form,next)=>{
            if(to.path === "/system") return next();
            const tokenStr=window.sessionStorage.getItem("token");
            if(!tokenStr) return next("/system");
            next();
          })
          }
      ]
    });
    
    //暴露出去
export default router