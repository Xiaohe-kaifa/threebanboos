<template>
    <div class="bottom-title-new">
        <svg t="1725323536637" class="icon" style="margin-top:-5px; width: 50px;height: 50px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1524"><path d="M136.533333 467.84l101.184 106.24-32 30.464-19.306666-20.309333 0.277333 1.770666c28.736 149.461333 157.952 263.189333 314.581333 268.16l10.730667 0.170667A331.456 331.456 0 0 0 829.802667 616.96l3.072-11.093333 42.773333 11.008A375.594667 375.594667 0 0 1 512 898.517333c-203.584 0-369.344-162.048-375.296-364.202666l-0.170667-11.264v-55.232z m254.933334-125.632c33.109333 0 78.016 19.264 104.32 58.282667 4.565333 6.762667 8.682667 13.845333 12.309333 21.12a190.506667 190.506667 0 0 1 28.501333-35.114667c33.834667-32.682667 81.770667-42.197333 114.154667-35.306667 40.896 8.682667 28.16 106.666667-12.245333 145.642667-30.698667 29.653333-80.938667 49.109333-115.562667 44.266667-17.642667 71.701333-17.194667 113.792 13.525333 151.061333l5.077334 5.802667-32.234667 30.186666c-42.197333-45.077333-49.002667-96.426667-34.048-173.76-34.602667-3.264-78.634667-32.362667-102.122667-67.157333-31.381333-46.549333-23.488-145.024 18.325334-145.024zM511.296 136.533333c203.605333 0 369.344 162.048 375.317333 364.202667l0.149334 11.264v55.232l-101.162667-106.24 32-30.485333 19.306667 20.309333-0.277334-1.770667C807.872 299.584 678.677333 185.856 522.026667 180.906667l-10.730667-0.170667A331.456 331.456 0 0 0 193.749333 417.258667l-3.093333 11.050666-42.730667-11.114666A375.594667 375.594667 0 0 1 511.296 136.533333zM401.706667 387.413333l-1.109334 4.309334c-0.554667 2.453333-1.024 5.12-1.408 7.914666l-0.725333 6.549334c-1.728 21.653333 2.197333 42.794667 11.328 56.32 20.202667 29.952 68.010667 53.205333 69.546667 50.944 8.917333-13.098667 1.813333-55.722667-20.138667-88.256-13.248-19.626667-34.624-32.042667-52.672-36.693334l-4.821333-1.109333z m229.674666 5.824l-4.949333 0.085334c-18.624 0.810667-42.090667 8.490667-59.136 24.96-28.245333 27.264-44.053333 67.477333-38.058667 82.133333 1.024 2.538667 52.629333-10.261333 78.613334-35.349333 11.733333-11.349333 19.989333-31.210667 22.784-52.757334l0.661333-6.549333c0.213333-2.816 0.298667-5.546667 0.277333-8.042667l-0.192-4.48z" fill="#048b0d" p-id="1525"></path></svg>
        三竹鼎立，我们致力于打造竹编行业的生态圈
    </div>
    <div class="bottom-title-new-content">
        
        在这里，您将享受到全方位的供应链支持，实现成本优化，提高企业效益。我们为您提供一站式的电商解决方案，利用大数据分析，实现精准营销，提升品牌影响力。
    </div>
    <div class="bottom-title-new-content-bottom">
        竹编艺术的全新演绎。接触到顶尖的竹编工艺，融入国际化设计元素，打造独特的竹编产品，引领市场潮流。
    </div>
    <div @click="isLogin" class="business-main-a">
        <div  class="business-a">
            <a plain  class="business-a-content">
                申请成为商家
            </a> 
        </div>
    </div>

    <el-dialog
        v-model="dialogVisible"
        title="申请成为商家"
        style="width: 900px;height:89%;margin-top:25px;"
        center
    >
    <el-scrollbar height="550px">
        
        <el-form :model="form" style=" width: 90%;margin-left:5% ; margin-top:10px;" :inline="true">
            <div class="essential">
                1.基本信息
            </div>

            <el-form-item :label-width="businessWidth" label="上传人像照片" >
            <el-upload
            :action="baseURL"
            :http-request="submitPhoto"
            :show-file-list="false"
            name="file"
          >
          <div v-if="displayPhoto" class="business-photo">
            <div>
                <svg t="1725460824008" class="icon" style="margin-left:8px; width: 40px;height: 40px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1585"><path d="M791.008 96a20.48 20.48 0 0 1 20.544 20.448v67.712h63.904a20.48 20.48 0 0 1 20.544 20.448 20.48 20.48 0 0 1-20.544 20.448H811.52V284.16a20.48 20.48 0 0 1-20.544 20.448 20.48 20.48 0 0 1-20.576-20.48V225.088h-63.616a20.48 20.48 0 0 1-20.576-20.48 20.48 20.48 0 0 1 20.576-20.416h63.616V116.448A20.48 20.48 0 0 1 791.04 96zM137.12 246.528c0-11.84 9.664-21.472 21.6-21.472h387.104a20.48 20.48 0 0 0 20.544-20.48 20.48 20.48 0 0 0-20.544-20.416H158.72c-34.656 0-62.72 27.936-62.72 62.4V833.6C96 868.064 124.064 896 158.72 896h590.24c34.624 0 62.72-27.936 62.72-62.4V435.264a20.48 20.48 0 0 0-20.544-20.448 20.48 20.48 0 0 0-20.576 20.48V833.6c0 11.84-9.664 21.472-21.6 21.472H158.72a21.536 21.536 0 0 1-21.6-21.472V246.528z" fill="#bfbfbf" p-id="1586"></path><path d="M448.576 348.768a88.704 88.704 0 0 0-88.96 88.448 88.704 88.704 0 0 0 88.96 88.448 88.704 88.704 0 0 0 88.928-88.448 88.704 88.704 0 0 0-88.96-88.448zM270.72 722.24V710.4c0-44.032 0-66.048 8.608-82.88a78.848 78.848 0 0 1 34.56-34.336c16.896-8.576 39.04-8.576 83.296-8.576h102.752c44.288 0 66.432 0 83.328 8.576 14.88 7.52 26.976 19.552 34.56 34.336 8.64 16.832 8.64 38.848 8.64 82.88v11.808H270.656z" fill="#bfbfbf" p-id="1587"></path></svg>
                <div class="business-photo-title">上传人像</div>
            </div>  
        </div>
        <img v-else class="business-photo" :src="form.business_name_photo" alt="">
          </el-upload>
          <span style="color: red;margin-left:5px;margin-top:-105px;">*</span>
            </el-form-item>
            

            <el-form-item :label-width="232" label="上传店铺照片" >

                <el-upload
                    :action="baseURL"
                    :http-request="submitShopPhoto"
                    :show-file-list="false"
                    name="file"
                >
                <div v-if="displayShopPhoto" class="business-shop-photo">
                    <div>
                        <svg t="1725463108274" class="icon" style="margin-left:10px ;width: 30px;height: 30px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1055 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1615"><path d="M928.581818 512c-13.963636 0-23.272727 9.309091-23.272727 23.272727v244.363637c0 65.163636-51.2 116.363636-116.363636 116.363636h-111.709091v-232.727273c0-13.963636-9.309091-23.272727-23.272728-23.272727H367.709091c-13.963636 0-23.272727 9.309091-23.272727 23.272727v232.727273H232.727273c-65.163636 0-116.363636-51.2-116.363637-116.363636V535.272727c0-13.963636-9.309091-23.272727-23.272727-23.272727s-23.272727 9.309091-23.272727 23.272727v244.363637c0 90.763636 72.145455 162.909091 162.909091 162.909091H788.945455c90.763636 0 162.909091-72.145455 162.90909-162.909091V535.272727c0-11.636364-9.309091-23.272727-23.272727-23.272727zM390.981818 896v-209.454545h239.709091v209.454545H390.981818zM930.909091 81.454545H93.090909c-13.963636 0-23.272727 9.309091-23.272727 23.272728v211.781818c0 90.763636 72.145455 162.909091 162.909091 162.909091 58.181818 0 111.709091-32.581818 139.636363-79.127273 27.927273 46.545455 81.454545 79.127273 139.636364 79.127273 60.509091 0 111.709091-32.581818 139.636364-79.127273 27.927273 46.545455 81.454545 79.127273 139.636363 79.127273 90.763636 0 162.909091-72.145455 162.909091-162.909091V104.727273c0-13.963636-9.309091-23.272727-23.272727-23.272728z m-581.818182 232.727273c0 65.163636-51.2 116.363636-116.363636 116.363637s-116.363636-51.2-116.363637-116.363637v-186.181818h232.727273v186.181818z m162.909091 118.690909c-65.163636 0-116.363636-51.2-116.363636-116.363636V128h232.727272v188.509091c0 62.836364-51.2 116.363636-116.363636 116.363636z m395.636364-118.690909c0 65.163636-51.2 116.363636-116.363637 116.363637s-116.363636-51.2-116.363636-116.363637v-186.181818h232.727273v186.181818z" fill="#cdcdcd" p-id="1616"></path></svg>
                        <div class="business-photo-shop-title">店铺照片</div>
                    </div>  
                </div>
                <img v-else class="business-shop-photo" :src="form.business_shop_photo" alt="">
                </el-upload>
                <span style="color: red;margin-left:5px;margin-top:-105px;">*</span>
                
                
            </el-form-item>
            
                <el-form-item :label-width="businessWidth" label="商家店铺名称" >
                    <el-input  placeholder="填写店铺名称" style="width: 90%; " v-model="form.business_name"  />
                    <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
                </el-form-item>
                <el-form-item :label-width="businessWidth"  label="商家类型" >
                    <el-select style="width: 100px;" v-model="form.business_type" placeholder="商家类型">
                        <el-option label="竹编家具" value="0" />
                        <el-option label="工艺品" value="1"/>
                      </el-select>
                    <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
                </el-form-item>

                <el-form-item :label-width="businessWidth"  label="联系人姓名" >
                    <el-input style="width: 90%; " placeholder="真实姓名"  v-model="form.business_true_name"  />
                    <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
                </el-form-item>
   
                
            
            <el-form-item :label-width="businessWidth"  label="身份证号码" >
                <el-input style="width: 90%; " placeholder="身份证号码"  v-model="form.business_identification_number"  />
                <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
                <span style="color: red;font-size:small">{{business_identification_number_error}}</span>
            </el-form-item>
            <el-form-item :label-width="businessWidth"  label="联系人电话" >
                <el-input style="width: 90%; " placeholder="手机号"  v-model="form.business_phone"  />
                <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
            </el-form-item>
            <el-form-item :label-width="businessWidth"  label="联系人邮箱" >
                <el-input style="width: 90%; " placeholder="邮箱地址"  v-model="form.business_email"  />
                <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
            </el-form-item>
            <el-form-item label="联系人地址" :label-width="businessWidth">
                <el-cascader
                :options="regionData"
                placeholder="选择地址"
                style="width: 300px;"
                v-model="form.business_address">
                </el-cascader>
                <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
            </el-form-item>
            <el-form-item :label-width="businessWidth"  label="详细地址" >
                <el-input style="width: 400px; " placeholder="填写详细地址"  v-model="form.business_full_address"  />
            </el-form-item>

            

            <div class="essential">
                2.商户信息
            </div>
            <div style="display: flex; ">
                <el-form-item :label-width="businessWidth" label="上传营业执照" >
                    <el-upload
                    :action="baseURL"
                    :http-request="submitLicensePhoto"
                    :show-file-list="false"
                    name="file"
                >
                <div v-if="displayLicensePhoto" class="business-shop-photo">
                    <div>
                        <svg t="1725464462036" class="icon" style="margin-left:14px;width: 25px;height: 25px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1080 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1647"><path d="M966.940444 142.222222h13.482667-866.417778C49.607111 148.252444 0.085333 208.64 0 281.201778v602.168889C0 961.137778 57.002667 1024 127.431111 1024h826.026667c70.485333 0 127.431111-62.862222 127.431111-140.600889V281.201778c0-72.817778-50.972444-132.380444-113.948445-138.979556z m49.493334 741.176889c0 38.030222-28.472889 69.461333-62.947556 69.461333H127.431111c-34.531556 0-62.976-31.431111-62.976-69.461333V281.201778c0-38.058667 28.444444-69.489778 62.919111-69.489778h824.576c34.474667 0 62.919111 31.431111 62.919111 69.489778v602.168889h1.507556z" fill="#cdcdcd" p-id="1648"></path><path d="M871.367111 733.781333H202.012444c-17.92 0-31.345778 13.368889-31.345777 31.288889C170.666667 783.018667 184.120889 796.444444 202.012444 796.444444h669.383112c17.92 0 31.374222-13.425778 31.374222-31.345777a31.118222 31.118222 0 0 0-9.102222-22.471111 30.094222 30.094222 0 0 0-22.272-8.817778h-0.028445z m4.494222-176.071111H204.970667a30.151111 30.151111 0 0 0-22.272 8.874667 31.175111 31.175111 0 0 0-9.102223 22.471111c0 17.92 13.482667 31.317333 31.374223 31.317333H874.382222c17.948444 0 31.345778-13.368889 31.345778-31.288889 0.227556-8.220444-2.816-16.156444-8.419556-22.072888a29.809778 29.809778 0 0 0-21.418666-9.301334z m-512.455111-187.904H202.069333c-17.948444 0-31.345778 13.368889-31.345777 31.288889 0 17.92 13.368889 31.345778 31.345777 31.345778h161.336889c17.92 0 31.345778-13.425778 31.345778-31.345778a31.089778 31.089778 0 0 0-9.102222-22.471111 30.094222 30.094222 0 0 0-22.243556-8.817778z m516.949334 0h-162.872889c-17.92 0-31.345778 13.368889-31.345778 31.288889 0 17.92 13.397333 31.345778 31.345778 31.345778h161.336889c8.305778 0.284444 16.355556-2.901333 22.300444-8.817778 5.944889-5.944889 9.216-14.08 9.102222-22.528 0.199111-8.192-2.844444-16.128-8.476444-22.016A29.809778 29.809778 0 0 0 880.355556 369.777778zM483.555556 412.444444a71.111111 71.111111 0 1 0 142.222222 0 71.111111 71.111111 0 0 0-142.222222 0zM538.936889 0L284.444444 199.111111h112.668445l140.003555-106.325333L660.736 199.111111H768z" fill="#cdcdcd" p-id="1649"></path><path d="M483.555556 56.888889a28.444444 28.444444 0 1 0 56.888888 0 28.444444 28.444444 0 0 0-56.888888 0z" fill="#cdcdcd" p-id="1650"></path></svg>
                        <div class="business-photo-shop-title">营业执照</div>
                    </div>  
                </div>
                <img v-else class="business-shop-photo" :src="form.business_license_photo" alt="">
                </el-upload>
                    
                    <span style="color: red;margin-left:5px;margin-top:-105px;">*</span>
                </el-form-item>
                

                <div style="display: flex;flex-direction:column;">
                    <el-form-item :label-width="businessWidth" label="营业执照号" >
                        <el-input  placeholder="营业执照编号" style="width: 90%; " v-model="form.business_license"  />
                        <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
                    
                    </el-form-item>

                    <el-form-item :label-width="businessWidth" label="税务登记证号" >
                        <el-input  placeholder="税务登记证号" style="width: 90%; " v-model="form.tax_registration_certificate"  />
                        <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
                    </el-form-item>
                    <el-form-item :label-width="businessWidth" label="组织机构代码" >
                        <el-input  placeholder="组织机构代码证号" style="width: 90%; " v-model="form.business_organization"  />
                        <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
                    </el-form-item>
                </div>
            </div>


            
            
            
            <el-form-item :label-width="businessWidth" label="统一社会信用代码" >
                <el-input  placeholder="统一社会信用代码" style="width: 90%; " v-model="form.business_unified_social_credit"  />
                <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
            </el-form-item>
            <el-form-item :label-width="132" label="法人代表" >
                <el-input  placeholder="法人代表" style="width: 90%; " v-model="form.business_legal_representative"  />
                <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
            </el-form-item>
            <el-form-item :label-width="141" label="成立日期" >
                <el-date-picker
                    v-model="form.business_date"
                    type="date"
                    placeholder="选择成立日期"
                    format="YYYY/MM/DD"
                    value-format="YYYY-MM-DD"
                    style="width:186px"
                />
                <span style="color: red;margin-left:6px;margin-top:-10px;">*</span>
            </el-form-item>
            <el-form-item :label-width="businessWidth" label="营业期限" >
                <el-input  placeholder="营业期限(单位:年)" style="width: 90%; " v-model="form.business_term"  />
                <span style="color: red;margin-left:5px;margin-top:-10px;">*</span>
            </el-form-item>
            

           

              <br>

              <div class="businessSubmitContent" >
                <el-button style="width: 100px;" type="info" @click="NoSubmitBusinessInformation(),dialogVisible = false">取消</el-button>
                <el-button class="submit-button"  type="success" @click="SubmitBusinessInformation()">
                    提交
                </el-button>
              </div>
            
        </el-form>

    </el-scrollbar>

        
    
    </el-dialog>
</template>
<script lang="ts" setup>
import { inject, reactive, ref } from 'vue';
import {regionData} from "element-china-area-data";
import { ElMessage } from 'element-plus';
import { postBusinessData, postSubmitBusinessData } from '@/service/business_submit/submit_information';

let dialogVisible = ref(false)
let businessWidth=ref('140')
let displayPhoto=ref(true)
let displayShopPhoto=ref(true)
let displayLicensePhoto=ref(true)
let business_identification_number_error=ref('')
const baseURL = inject('baseURL')+'/api/returnPhoto/'
let form = reactive({
    //基本信息
    business_id:'',
    business_name_photo:'',
    business_shop_photo:'',
    business_name:'',
    business_type:'',
    business_true_name:'',
    business_identification_number:'',
    business_phone:'',
    business_email:'',
    business_address:'',
    business_full_address:'',
    //企业信息
    business_license_photo:'',
    business_license:'',
    tax_registration_certificate:'',
    business_organization:'',
    business_unified_social_credit:'',
    business_legal_representative:'',
    business_date:'',
    business_term:'',
})
const isLogin=()=>{
    if(window.sessionStorage.getItem("username")!=''){
        dialogVisible.value = true
        form.business_id = window.sessionStorage.getItem("id")
    }else{
        ElMessage({
                type: 'info',
                message: '请先登录！',
        })
    }
}
const SubmitBusinessInformation=async()=>{
    const address = form.business_address
    form.business_address=form.business_address[2]
    const res =await postBusinessData(form)

    if(res.errorType=='1'){
            ElMessage({
                type: 'error',
                message: '手机号已存在！',
        })
    }
    if(res.success=='1'){
        form.business_address=address
        ElMessage({
                type: 'info',
                message: '信息不完整！',
        })
        if('business_identification_number' in Object(res.errorType) && form.business_identification_number!='' ){
            business_identification_number_error.value='商户信息已存在！'
        }
    }
    else {
        dialogVisible.value=false
        ElMessage({
            type: 'success',
            message: '成功提交申请！',
          })
    }  
}


const submitLicensePhoto=async(options:any)=>{
    form.business_license_photo=await onBusinessPhoto(options)
    displayLicensePhoto.value=false
}
const submitShopPhoto=async(options:any)=>{
    form.business_shop_photo=await onBusinessPhoto(options)
    displayShopPhoto.value=false
}
const submitPhoto=async(options:any)=>{
    form.business_name_photo=await onBusinessPhoto(options)
    displayPhoto.value=false
}
const onBusinessPhoto=async(options:any)=>{
    const { file } = options;
    const formData = new FormData();
    formData.append('file', file); // 使用file.raw来获取原生文件对象
    const res = String( await postSubmitBusinessData(formData))
    return res
}

const NoSubmitBusinessInformation=()=>{
    // postBusinessData(form)
    ElMessage({
            type: 'info',
            message: '取消提交',
          })
}
</script>
<style scoped>
.submit-button{
    width: 100px;
}

.business-shop-photo{
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed rgb(0, 0, 0,0.2);
    width: 185px;
    height: 120px;
}
.business-photo-title{
    color: rgb(174, 174, 174);
    font-size: small;
}
.business-photo-shop-title{
    color: rgb(174, 174, 174);
    font-size: small;
}
.business-photo{
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed rgb(0, 0, 0,0.2);
    width: 100px;
    height: 120px;
}
.businessSubmitContent{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
}
.essential{
    font-size: large;
    height: 50px;
    color: black;
}
.business-a-content{
    color: white;
    margin-top: 12px;
   font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}
.business-main-a{
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    
}

.business-a{
    border: 2px dashed rgb(233, 233, 233);
    width: 150px;
    height: 50px;  
    position: relative;  
    border-right: none;
    animation: magnify_up_ye 6s infinite alternate;
}
.business-main-a :hover{
    cursor: pointer;
}
@keyframes magnify_up_ye {
    0%{
        transform:scale(1) 
    }
    50%{
        transform:scale(1.1) 
    }
    100%{
        transform:scale(1) 
    }
}
@keyframes magnify_up_ye_out {
    0%{
        transform:scale(1.1) 
    }
    100%{
        transform:scale(1) 
    }
}
.business-a::before {
    content: "";
    position: absolute;
    right: -22px;
    top: 15%;
    width: 35px;
    height: 35px;
    border-right: 2px dashed rgb(233, 233, 233);
    border-bottom: 2px dashed rgb(233, 233, 233);
    transform: rotate(-45deg);
}

.bottom-title-new-content-bottom{
    color: white;
    font-weight: bold;
    width: 90%;
}
.bottom-title-new-content{
    color: white;
    width: 90%;
    margin-top: 20px;
    height: 100px;
}
.bottom-title-new{
    color: white;
    height: 50px;
    font-size: 20px;
}
</style>