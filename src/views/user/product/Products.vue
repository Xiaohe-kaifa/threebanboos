<template>
    <div class="product">
        <div style="width: 250px;display:flex;">
            <div @click="updateStatus('0')" :class="status">竹编家具</div>
            <div @click="updateStatus('1')" :class="statusClose">工艺品</div>
        </div>
        <div class="flex gap-4 mb-4 items-center">
            <el-input
              class="sou"
              v-model="searchType.commodityName"
              size="large"
              @keydown.enter="updateData"
              placeholder="搜索产品或者商家"
              suffix-icon="Search"
            />
          </div>
    </div>
    <div class="product-middle">
        <div class="product-middle-left">
            <div class="product-middle-left-font">产品风格</div>
            <div class="product-middle-left-font">价格区间</div>
        </div>
        <div class="product-middle-right">
            <div class="product-middle-right-content">
                <el-checkbox-group @change="updateData" v-model="searchType.commodityOther">
                    <el-checkbox v-if="load" v-for="(item,index) in checkList" :label="item" :value="item" ></el-checkbox>
                </el-checkbox-group>
            </div>
            <div class="product-middle-right-content">
                <el-input
                    size="small"
                    v-model="searchType.commodityPriceBefore"
                    style="width: 100px"
                    placeholder="Please input"
                    :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                    :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                />-
                <el-input
                    size="small"
                    v-model="searchType.commodityPriceAfter"
                    style="width: 100px"
                    placeholder="Please input"
                    :formatter="(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                    :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                />
                <div style="width: 20px;"> </div>
                <el-button @click="searchType.commodityPriceBefore='',searchType.commodityPriceAfter=''" size="small" type="info" round>重置</el-button>
                <el-button @click="updateData" size="small" type="success" round>确认</el-button>
            </div>
        </div>
    </div>
    
    

<div class="product-card">
    <div class="commodity-main">
        <div class="commodity"  v-if="loadData" v-for="(item,index) in tableData" :key="index">
            <div @click="onUpdated(index)" :class="['commodity-card',{ magnify:statusCardStyle === 'magnify' && currentIndex === index , shrink:statusCardStyle === 'shrink' && currentIndex === index }]" @mouseenter="statusCardMagnify('magnify',index)" @mouseleave="statusCardShrink('shrink',index)" >
                    <img class="commodity-photo" :src="item.commodityPhoto" alt="">
                    
                    <div class="commodity-content">
                        <el-tag type="success">{{ item.commodityType }}</el-tag>
                        <span style="width: 5px;"></span>
                        <el-tag type="primary">{{ item.commodityOther }}</el-tag>
                    </div>
                    
                    <div class="commodity-bottom">
                        <div class="commodity-shop-name">
                            {{ item.commodityShopName }}
                        </div>
                        <div class="commodity-name">
                            {{ item.commodityName }}
                        </div>
                        <div class="commodity-inventory">
                            <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8260"><path d="M493.9008 436.224a25.5232 25.5232 0 0 0 36.1984 0l92.3392-92.3392a25.6 25.6 0 1 0-36.1984-36.1984l-48.64 48.64V93.8752a25.6 25.6 0 1 0-51.2 0v262.4512l-48.64-48.64a25.6 25.6 0 1 0-36.1984 36.1984l92.3392 92.3392z" fill="#666666" p-id="8261"></path><path d="M998.4 529.0752c0-36.8128-18.3808-71.8848-52.992-102.912 33.7408-30.3872 52.992-64.896 52.992-101.888 0-93.4656-115.8912-172.416-302.464-206.0544a25.6256 25.6256 0 0 0-9.088 50.4064C840.0896 196.2496 947.2 260.2496 947.2 324.2752c0 80.7168-178.7136 170.6496-435.2 170.6496S76.8 404.992 76.8 324.2752c0-62.592 99.456-124.16 247.4752-153.216a25.6 25.6 0 0 0-9.856-50.2528C136.2688 155.776 25.6 233.728 25.6 324.2752c0 36.992 19.2512 71.5008 52.992 101.888C43.9808 457.1904 25.6 492.2624 25.6 529.0752c0 36.608 18.176 71.5264 52.4032 102.4C43.776 662.3744 25.6 697.2672 25.6 733.8752c0 124.416 213.6576 221.8496 486.4 221.8496s486.4-97.4592 486.4-221.8496c0-36.608-18.176-71.5008-52.4032-102.4 34.2272-30.8992 52.4032-65.792 52.4032-102.4zM512 904.5248c-256.4864 0-435.2-89.9328-435.2-170.6496 0-28.928 21.248-53.4528 43.264-71.1936 90.368 55.4496 234.8544 88.2432 391.936 88.2432 157.1328 0 301.6192-32.7936 391.936-88.2432 22.016 17.7408 43.264 42.2656 43.264 71.1936 0 80.7168-178.7136 170.6496-435.2 170.6496z m378.4448-294.0672C811.1616 665.5232 666.112 699.7248 512 699.7248s-299.1616-34.2016-378.496-89.344C107.648 592.5632 76.8 563.9424 76.8 529.1008c0-29.2608 21.76-54.016 44.032-71.808 87.8592 54.1696 228.8384 88.8576 391.168 88.8576s303.3088-34.688 391.168-88.8576c22.272 17.792 44.032 42.5472 44.032 71.808 0 34.8416-30.8224 63.488-56.7552 81.3824z" fill="#666666" p-id="8262"></path></svg>
                            <div class="commodity-inventory-number">
                                {{ item.commodityShopNumber }}
                            </div>
                        </div>
                        <div class="commodity-price">
                            <div class="commodity-before">
                                ￥{{ item.commodityPriceBefore }}
                            </div>
                            <div class="commodity-after">￥{{ item.commodityPriceAfter }}</div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>
<el-dialog v-model="dialogVisible"  style="height: 500px;width:750px;"    title="详细信息">
    <div style="display: flex;">
        <div class="commodity-left-box">
            <div  class="commodity-left-box-img">
                <img style="width: 100%;height:100%;border-radius: 5px;" :src="buyTable.commodityPhoto" alt="">
            </div>
        </div>
        <div class="commodity-right-box">
            <div class="commodity-card-right-content">
            <div class="commodity-right-box-content">
                <div class="commodity-tight-font">商品名称：
                    <div class="commodity-tight-font-content">{{ buyTable.commodityName }}</div>
                </div>
                <div class="commodity-tight-font">商品类型：
                    <div class="commodity-tight-font-content">{{ buyTable.commodityType }}</div>
                </div>
            </div>
            <div class="commodity-right-box-content">
                <div class="commodity-tight-font">商家名称：
                    <div class="commodity-tight-font-content">{{ buyTable.commodityShopName }}</div>
                </div>
                <div class="commodity-tight-font">商品功能：
                    <div class="commodity-tight-font-content">{{ buyTable.commodityOther }}</div>
                </div>
            </div>
            <div class="commodity-right-box-content">
                <div class="commodity-tight-font">发布时间：
                    <div class="commodity-tight-font-content">{{ buyTable.commodityTime }}</div>
                </div>
                <div class="commodity-tight-font">商品库存量：
                    <div class="commodity-tight-font-content">{{ buyTable.commodityShopNumber }}件</div>
                </div>
            </div>
            <div class="commodity-right-box-content">
                <div>优惠前价格：
                    <span style="text-decoration: line-through;">
                        ￥{{ buyTable.commodityPriceBefore }}</span>
                    </div>
            </div>
            <div class="commodity-right-box-content">
                <div>优惠后价格：
                    <span class="price-after">
                        ￥{{ buyTable.commodityPriceAfter }}</span>
                    </div>
            </div>
            <div class="buy-commodity">
                <el-button @click="openOrder" type="danger">
                    <svg t="1729247519350" class="icon" style="margin-top:-2px;width: 1.3em;height: 1.3em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2306"><path d="M512 958.016611c-119.648434 0-232.1288-46.367961-316.736783-130.559656-84.640667-84.255342-131.263217-196.255772-131.263217-315.455235 0-119.168499 46.624271-231.199892 131.232254-315.424271 84.607983-84.191695 197.088348-130.559656 316.736783-130.559656s232.1288 46.367961 316.704099 130.559656c84.67163 84.224378 131.263217 196.255772 131.263217 315.391587 0.032684 119.199462-46.591587 231.232576-131.263217 315.455235C744.1288 911.615966 631.648434 958.016611 512 958.016611zM512 129.983389c-102.623626 0-199.071738 39.743475-271.583282 111.936783-72.480581 72.12794-112.416718 168.063432-112.416718 270.079828s39.903454 197.951888 112.384034 270.047144c72.511544 72.191587 168.959656 111.936783 271.583282 111.936783 102.592662 0 199.071738-39.743475 271.583282-111.936783 72.480581-72.160624 112.416718-168.063432 112.384034-270.079828 0-102.016396-39.903454-197.919204-112.384034-270.016181C711.071738 169.759548 614.592662 129.983389 512 129.983389z" fill="#ffffff" p-id="2307"></path><path d="M736.00086 480.00086 544.00086 480.00086 544.00086 288.00086c0-17.664722-14.336138-32.00086-32.00086-32.00086s-32.00086 14.336138-32.00086 32.00086l0 192L288.00086 480.00086c-17.664722 0-32.00086 14.336138-32.00086 32.00086s14.336138 32.00086 32.00086 32.00086l192 0 0 192c0 17.695686 14.336138 32.00086 32.00086 32.00086s32.00086-14.303454 32.00086-32.00086L544.00258 544.00086l192 0c17.695686 0 32.00086-14.336138 32.00086-32.00086S753.696546 480.00086 736.00086 480.00086z" fill="#ffffff" p-id="2308"></path></svg>
                    立即购买</el-button>
                <el-button @click="openCart" type="warning">
                    <svg t="1729247459808" class="icon" style="width: 1.3em;height: 1.3em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2106"><path d="M237.358431 284.464797l131.472334 375.310851-27.569916-19.554358L890.249275 640.22129c16.136515 0 29.212322 13.0799 29.212322 29.213345 0 16.129352-13.075807 29.205159-29.212322 29.205159L341.259826 698.639794c-12.409634 0-23.465434-7.836479-27.566846-19.549242L109.05016 94.8963l27.567869 19.553335L77.586564 114.449635c-16.129352 0-29.207206-13.074783-29.207206-29.212322 0-16.129352 13.077853-29.207206 29.207206-29.207206l59.032488 0c12.409634 0 23.466458 7.842619 27.566846 19.555381l52.728922 150.525272 710.724017 0c18.48705 0 32.326243 16.962324 28.612665 35.077913l-46.633087 227.389894c-2.547009 12.408611-12.796444 21.75549-25.382087 23.160489l-431.515944 48.065715c-16.036231 1.786693-30.482245-9.761318-32.266891-25.797549-1.783623-16.030092 9.764388-30.475082 25.798573-32.257681l410.798087-47.145763c0 0 20.75879-96.119151 35.926234-170.074513C893.311007 282.900162 362.038058 284.149619 237.358431 284.464797L237.358431 284.464797zM407.438061 818.372759c23.362081 0 42.36897 19.004843 42.36897 42.3659 0 23.360034-19.006889 42.364877-42.36897 42.364877-23.360034 0-42.363853-19.004843-42.363853-42.364877C365.073184 837.377602 384.078027 818.372759 407.438061 818.372759M407.438061 762.594385c-54.202483 0-98.142228 43.941791-98.142228 98.144274 0 54.207599 43.939745 98.143251 98.142228 98.143251s98.147344-43.936675 98.147344-98.143251C505.584382 806.536176 461.640544 762.594385 407.438061 762.594385L407.438061 762.594385zM816.372707 818.372759c23.357987 0 42.360783 19.004843 42.360783 42.3659 0 23.360034-19.002796 42.364877-42.360783 42.364877-23.360034 0-42.364877-19.004843-42.364877-42.364877C774.007831 837.377602 793.012673 818.372759 816.372707 818.372759M816.372707 762.594385c-54.206576 0-98.143251 43.941791-98.143251 98.144274 0 54.207599 43.937698 98.143251 98.143251 98.143251 54.200436 0 98.139158-43.936675 98.139158-98.143251C914.512888 806.536176 870.573143 762.594385 816.372707 762.594385L816.372707 762.594385zM816.372707 958.88191" fill="#ffffff" p-id="2107"></path></svg>
                    加入购物车</el-button>
                
            </div>
            
        </div>
        </div>
    </div>
    <div class="commodity-other">产品介绍</div>
    <div class="commodity-other-content">{{ buyTable.commodityIntroduce }}</div>
</el-dialog>
<el-dialog v-model="dialogVisibleOrder" center  style="height: 500px;width:400px;"    title="确认订单">
    
        <div @click="openPersonal" class="order-update-up">
            <div class="order-update-up-content">
                <div class="order-update-up-icon">
                    <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1595"><path d="M733.866667 509.866667c0-17.066667-6.4-34.133333-19.2-46.933334L396.8 145.066667c-25.6-25.6-66.133333-25.6-89.6 0s-25.6 64 0 89.6l277.333333 277.333333-275.2 277.333333c-25.6 25.6-25.6 66.133333 0 89.6 25.6 25.6 64 25.6 89.6 0l317.866667-320c10.666667-14.933333 17.066667-32 17.066667-49.066666z" p-id="1596"></path></svg>
                </div>
                <div class="order-update-address">{{ peopleAddress }}</div>
                <div class="order-update-address-true">{{ orders.order_people_detailed_address }}</div>
                <div class="order-update-name" style="display: flex;">
                    <div >{{ orders.order_people_name }}</div>
                    <div style="width: 5px;"></div>
                    <div>{{ orders.order_people_phone }}</div>
                </div>
            </div>
        </div>
        <div class="order-update-up-card">
            <div class="order-update-up-shop-name">
              <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="971"><path d="M1023.053953 432.689676c0 70.070892-57.193607 130.420375-127.763872 130.420375-70.568219 0-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0c0 70.070892-57.195653 130.420375-127.763872 130.420375-70.570265 0-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0 0 0c0 70.070892-57.19463 130.420375-127.763872 130.420375s-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0 0 0c0 70.070892-57.19463 130.420375-127.763872 130.420375-70.568219 0-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0 102.210893-227.327472L920.84306 205.362204 1023.053953 432.689676 1023.053953 432.689676 1023.053953 432.689676zM869.737102 154.255223 154.262898 154.255223c-31.741935 0-51.104935-24.828478-51.104935-51.104935 0-26.276457 16.019859-51.104935 57.494459-51.104935l702.700273 0c38.527478 0 57.493435 24.829502 57.493435 51.104935C920.845107 129.426745 896.189567 154.255223 869.737102 154.255223zM154.262898 588.664054 154.262898 588.664054C158.855496 588.240405 149.795143 589.413114 154.262898 588.664054 155.236062 588.490092 153.314293 588.81448 154.262898 588.664054c2.071172-0.400113 23.50739 0.449231 25.554002 0 8.682753-1.99647 17.392112 3.14462 25.552979 0l0 0 0 0 0 229.973742 613.264335 0L818.634214 588.664054l25.552979 0 0 0c8.136308 3.14462 16.892739-1.99647 25.552979 0 2.046612 0.449231-2.070148-0.400113 0 0 0.949628 0.149403-0.973164-0.173962 0 0 4.493338 0.748037-4.590552-0.423649 0 0l0 0c5.265934 0.474814 20.162202 0 25.552979 0 10.930957 0 15.171538 1.89721 25.555026 0l0 332.184635c0 26.250874-24.65554 51.105958-51.106981 51.105958L154.264944 971.954647c-26.451442 0-51.104935-24.855084-51.104935-51.105958L103.16001 588.664054c10.381441 1.89721 14.624069 0 25.552979 0C134.099672 588.664054 148.999011 589.138868 154.262898 588.664054z" p-id="972"></path></svg>
              {{ orders.order_shop_name }}</div>
              <div class="order-update-up-shop-middle">
                <div class="order-update-up-shop-photo">
                  <img style="border-radius: 5px;width: 100%;height:100%" :src="orders.order_commodity_photo" alt="">
                </div>
                <div class="order-update-commodity-name">
                  <div class="order-update-commodity-name-true">
                    {{ orders.order_commodity_name }}
                  </div>
                  <div class="order-update-commodity-type">
                    {{ orders.order_commodity_type }}
                  </div>
                  <div class="order-update-commodity-price-after">
                    ¥{{ buyTable.commodityPriceAfter }}
                    <div class="order-update-commodity-price-after-tip">到手价</div>
                    <div class="order-update-commodity-price-before">¥{{ buyTable.commodityPriceBefore }}</div>
                </div>
                  <div class="order-number">
                    <el-input-number class="order-number-true" size="small" v-model="orders.order_number" :min="1" :max="buyTable.commodityShopNumber"  />
                  </div>
                  
                </div>
                
              </div>
          </div>
          <div class="order-bottom">
            <div class="order-bottom-display">
                <div class="order-bottom-box">
                    商品总金额
                    <div class="order-bottom-price">
                        <span style="color: red;font-weight: bold;font-size: larger;">
                            ¥{{ (Number(buyTable.commodityPriceAfter)* Number(orders.order_number)).toFixed(2) }}
                        </span>
                    </div>
                </div>
                <div class="order-bottom-box">
                    立减
                    <div class="order-bottom-price">
                        -¥{{ Math.abs(((Number(buyTable.commodityPriceAfter)* Number(orders.order_number))-(Number(buyTable.commodityPriceBefore)* Number(orders.order_number)))).toFixed(2) }}
                    </div>
                </div>
            </div>
          </div>
          <div class="submit-orders">
            <el-button   type="info" @click="closeOrder()">取消</el-button>
            <el-button type="primary" @click="addOrder()">提交</el-button>
          </div>
</el-dialog>
<el-dialog v-model="dialogVisibleCart" center  style="height: 400px;width:400px;margin-top:150px;"    title="加入购物车">
    <div class="order-update-up-card">
        <div class="order-update-up-shop-name">
          <svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="971"><path d="M1023.053953 432.689676c0 70.070892-57.193607 130.420375-127.763872 130.420375-70.568219 0-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0c0 70.070892-57.195653 130.420375-127.763872 130.420375-70.570265 0-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0 0 0c0 70.070892-57.19463 130.420375-127.763872 130.420375s-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0 0 0c0 70.070892-57.19463 130.420375-127.763872 130.420375-70.568219 0-127.763872-60.35153-127.763872-130.420375l0 0 0 0 0 0 102.210893-227.327472L920.84306 205.362204 1023.053953 432.689676 1023.053953 432.689676 1023.053953 432.689676zM869.737102 154.255223 154.262898 154.255223c-31.741935 0-51.104935-24.828478-51.104935-51.104935 0-26.276457 16.019859-51.104935 57.494459-51.104935l702.700273 0c38.527478 0 57.493435 24.829502 57.493435 51.104935C920.845107 129.426745 896.189567 154.255223 869.737102 154.255223zM154.262898 588.664054 154.262898 588.664054C158.855496 588.240405 149.795143 589.413114 154.262898 588.664054 155.236062 588.490092 153.314293 588.81448 154.262898 588.664054c2.071172-0.400113 23.50739 0.449231 25.554002 0 8.682753-1.99647 17.392112 3.14462 25.552979 0l0 0 0 0 0 229.973742 613.264335 0L818.634214 588.664054l25.552979 0 0 0c8.136308 3.14462 16.892739-1.99647 25.552979 0 2.046612 0.449231-2.070148-0.400113 0 0 0.949628 0.149403-0.973164-0.173962 0 0 4.493338 0.748037-4.590552-0.423649 0 0l0 0c5.265934 0.474814 20.162202 0 25.552979 0 10.930957 0 15.171538 1.89721 25.555026 0l0 332.184635c0 26.250874-24.65554 51.105958-51.106981 51.105958L154.264944 971.954647c-26.451442 0-51.104935-24.855084-51.104935-51.105958L103.16001 588.664054c10.381441 1.89721 14.624069 0 25.552979 0C134.099672 588.664054 148.999011 589.138868 154.262898 588.664054z" p-id="972"></path></svg>
          {{ orders.order_shop_name }}</div>
          <div class="order-update-up-shop-middle">
            <div class="order-update-up-shop-photo">
              <img style="border-radius: 5px;width: 100%;height:100%" :src="orders.order_commodity_photo" alt="">
            </div>
            <div class="order-update-commodity-name">
              <div class="order-update-commodity-name-true">
                {{ orders.order_commodity_name }}
              </div>
              <div class="order-update-commodity-type">
                {{ orders.order_commodity_type }}
              </div>
              <div class="order-update-commodity-price-after">
                ¥{{ buyTable.commodityPriceAfter }}
                <div class="order-update-commodity-price-after-tip">到手价</div>
                <div class="order-update-commodity-price-before">¥{{ buyTable.commodityPriceBefore }}</div>
            </div>
              <div class="order-number">
                <el-input-number class="order-number-true" size="small" v-model="orders.order_number" :min="1" :max="buyTable.commodityShopNumber"  />
              </div>
              
            </div>
            
          </div>
      </div>
      <div class="order-bottom">
        <div class="order-bottom-display">
            <div class="order-bottom-box">
                商品总金额
                <div class="order-bottom-price">
                    <span style="color: red;font-weight: bold;font-size: larger;">
                        ¥{{ (Number(buyTable.commodityPriceAfter)* Number(orders.order_number)).toFixed(2) }}
                    </span>
                </div>
            </div>
            <div class="order-bottom-box">
                立减
                <div class="order-bottom-price">
                    -¥{{ Math.abs(((Number(buyTable.commodityPriceAfter)* Number(orders.order_number))-(Number(buyTable.commodityPriceBefore)* Number(orders.order_number)))).toFixed(2) }}
                </div>
            </div>
        </div>
      </div>
      <div class="submit-orders">
        <el-button   type="info" @click="closeCart()">取消</el-button>
        <el-button type="primary" @click="addCart()">提交</el-button>
      </div>
</el-dialog>
</template>
<script lang="ts" setup>
import { searchCommodityPeopleTable, searchCommodityType } from '@/service/commodity/commodity';
import { getRequest } from '@/service/login/information';
import { ElMessage } from 'element-plus';
import { codeToText } from 'element-china-area-data';
import { onMounted, reactive, ref } from 'vue';
let status= ref('product-open')
let currentIndex = ref(null)
let statusCardStyle=ref('commodity-card')
let statusClose= ref('product-font')
let checkList=reactive({})
let peopleAddress = ref()
let load =ref(false)
import { useRouter } from 'vue-router';
import { postOrder } from '@/service/order/orders';
import { getLoginData } from '@/service/login/people_login';
import { postCart } from '@/service/shopping_cart/shopping_cart';
const router = useRouter()
let dialogVisibleOrder=ref(false)
let dialogVisibleCart=ref(false)
let orders =reactive({
    order_commodity_name:'',
    order_shop_name:'',
    order_commodity_photo:'',
    order_commodity_type:'',
    order_people_account:'',
    order_people_phone:'',
    order_people_name:'',
    order_people_address:'',
    order_people_detailed_address:'',
    order_number:1,
    order_price:'',
})
let formCart=reactive({
    cart_user:'',
    cart_commodity:'',
    quantity:1
})
let buyTable =reactive({
    id:'',
  businessId:'',
  commodityTime:'',
  commodityName:'',
  commodityType:'',
  commodityPhoto:'',
  commodityShopName:'',
  commodityShopNumber:'',
  commodityOther:'',
  commodityPriceBefore:'',
  commodityPriceAfter:'',
  commodityIntroduce:'',
})
let dialogVisible = ref(false)
let loadData=ref(false)
let tableData=reactive([])
let searchType=reactive({
    commodityName:'',
    commodityType:'',
    commodityOther:[],
    commodityPriceBefore:'',
    commodityPriceAfter:'',
})
onMounted(()=>{
    window.sessionStorage.getItem('openCommodity')
    updateStatus(window.sessionStorage.getItem('openCommodity'))
    updateData()
})
const closeOrder=()=>{
    dialogVisibleOrder.value=false
}
const closeCart=()=>{
    dialogVisibleCart.value=false
}
const openCart =async()=>{
    const res = await getLoginData()
    if(res.success=='1'){
        ElMessage({
            type: 'info',
            message: '请先登录！',
          })
    }else{
        dialogVisibleCart.value=true
        const res = await getRequest(window.sessionStorage.getItem('id'))
        peopleAddress.value=codeToText[res.address.substring(0,2)]+codeToText[res.address.substring(0,4)]+codeToText[res.address]
        orders.order_people_name=res.username
        orders.order_people_address=res.address
        orders.order_people_account=res.account
        orders.order_people_phone=res.phone
        orders.order_people_detailed_address=res.detailed_address
        orders.order_shop_name=buyTable.commodityShopName
        orders.order_commodity_photo=buyTable.commodityPhoto
        orders.order_commodity_name=buyTable.commodityName
        orders.order_commodity_type=buyTable.commodityType
        orders.order_price=buyTable.commodityPriceAfter

    }
}
const addCart=async()=>{
    //提交购物车
    const peopleRes = await getLoginData()
    formCart.cart_user= peopleRes.id
    formCart.cart_commodity=buyTable.id
    formCart.quantity=orders.order_number
    console.log(formCart);
    const res =await postCart(formCart)
    if(res.success=='0'){
        ElMessage({
            type: 'success',
            message: '加入购物车成功！',
          })
        dialogVisibleCart.value=false
        dialogVisible.value=false
    }else{
        ElMessage({
            type: 'error',
            message: '提交失败！',
          })
    }
    orders.order_number=1
}
const addOrder=async()=>{
    const res =await postOrder(orders)
    if(res.success=='0'){
        ElMessage({
            type: 'success',
            message: '购买成功！',
          })
        dialogVisibleOrder.value=false
        dialogVisible.value=false
    }else{
        ElMessage({
            type: 'error',
            message: '提交失败！',
          })
    }
    orders.order_number=1
}
const openPersonal=()=>{
    router.push('/main/personal/information')
}
const openOrder=async()=>{
    const res = await getLoginData()
    console.log(res);
    
    if(res.success=='1'){
        ElMessage({
            type: 'info',
            message: '请先登录！',
          })
    }else{
        dialogVisibleOrder.value=true
        const res = await getRequest(window.sessionStorage.getItem('id'))
        peopleAddress.value=codeToText[res.address.substring(0,2)]+codeToText[res.address.substring(0,4)]+codeToText[res.address]
        orders.order_people_name=res.username
        orders.order_people_address=res.address
        orders.order_people_account=res.account
        orders.order_people_phone=res.phone
        orders.order_people_detailed_address=res.detailed_address
        orders.order_shop_name=buyTable.commodityShopName
        orders.order_commodity_photo=buyTable.commodityPhoto
        orders.order_commodity_name=buyTable.commodityName
        orders.order_commodity_type=buyTable.commodityType
        orders.order_price=buyTable.commodityPriceAfter

    }
}
const onUpdated=(value:number)=>{
    buyTable=tableData[value]
    dialogVisible.value=true
    
}
const statusCardMagnify=(value:string,index:number)=>{
    statusCardStyle.value= value;
    currentIndex.value = index;
    // currentIndexBefore.value=index
}
const statusCardShrink=(value:string,index:number)=>{
    statusCardStyle.value= value;
    // currentIndex.value = currentIndexBefore.value
}
const updateData=async()=>{
    if( (searchType.commodityPriceBefore=='' && searchType.commodityPriceAfter=='') || (searchType.commodityPriceBefore!='' && searchType.commodityPriceAfter!='' && (Number(searchType.commodityPriceBefore)<=Number(searchType.commodityPriceAfter)))){
        const res =await searchCommodityPeopleTable(searchType)
        tableData = Object.keys(res).map(Key => res[Key])
        loadData.value=false
        loadData.value=true
    }else{
        ElMessage({
            type: 'info',
            message: '价格不对等！',
          })
    }
}
const updateStatus=async(value:string)=>{
    load.value=false
    searchType.commodityOther=[]
    if(value=='0'){
        statusClose.value='product-font'
        status.value='product-open'
    }else if(value==null){
        value='0'
    }
    else{
        status.value='product-font'
        statusClose.value='product-open'
    }
    searchType.commodityType=value
    const res =await searchCommodityType(searchType)
    checkList=res
    updateData()
    load.value=true
}
</script>
<style scoped >
.submit-orders{
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.order-bottom-display{
    height: 90%;
    width: 100%;
}
.order-bottom-price{
    flex: 1;
    
    text-align: end;
}
.order-bottom-box{
    width: 96%;
    margin-left: 2%;
    height: 50%;
    display: flex;
    align-items: center;
}
.order-bottom{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background-color: rgb(230, 230, 230);
    margin-top: 10px;
    height: 80px
}
.order-update-commodity-price-before{
    color: rgb(110, 110, 110);
    font-size: 13px;
    margin-left: 5px;
    font-weight: 400;
    text-decoration: line-through;
}
.order-update-commodity-price-after-tip{
    font-size: small;
    margin-left: 5px;
    font-weight:400;
}
.order-number-true{
    width: 80px;
}
.order-number{
    position: absolute;
    right: -10px;
    top: 30px;
}
.order-update-commodity-name-true{
    height: 25px;
    display: flex;
    align-items: center;
    color: black;
  }
.order-update-commodity-name{
    margin-left: 10px;
    position: relative;
    flex: 1;
  }
  .order-update-commodity-type{
    font-size: small;
    height: 25px;
    display: flex;
    align-items: center;
  }
  .order-update-commodity-number{
    position: absolute;
    right: 0px;
    top: 35%;
  }
  .order-update-commodity-price-after{
    height:50px;
    display: flex;
    align-items: center;
    font-size: large;
    color: red;
    font-weight: bold;
  }
.order-update-up-shop-photo{
    width: 120px;
    height: 100px;
  }
.order-update-up-shop-middle{
    display: flex;
    width: 90%;
    margin-left: 5%;
  }
.order-update-up-shop-name{
    height:35px;
    display: flex;
    align-items: center;
    width: 90%;
    margin-left: 5%;
  }
.order-update-up{
    background-color: rgb(230, 230, 230);
    height: 100px;
    cursor: pointer;
    border-radius: 5px;
  }
.order-update-up-icon{
    position: absolute;
    right: 0;
    top: 35px;
}
.order-update-name{
<<<<<<< HEAD
    
=======

>>>>>>> 85ac70ebb1e6dca1ea4e166c6dbc581239dfc71e
    height: 30px;
    display: flex;
    align-items: center;
}
.order-update-address-true{
    color: black;
    font-size: 20px;
}
.order-update-up-content{
    width: 94%;
    position: relative;
    margin-left: 3%;
}
.order-update-address{
    font-size: small;
    display: flex;
    height: 30px;
    align-items: center;
}
.order-update-up-card{
    background-color: rgb(230, 230, 230);
    height: 150px;
    margin-top: 10px;
    border-radius: 5px;
  }
.buy-commodity{
    display: flex;
    align-items: center;
    height: 70px;
}
.commodity-other-content{
    width: 80%;
    margin-left: 10%;
}
.commodity-other{
    width: 90%;
    display: flex;
    align-items: center;
    height: 50px;
    font-size: large;
    margin-left: 5%;
}
.price-after{
    color: red;
    font-weight: bold;
    font-size: 25px;
}
.commodity-card-right-content{
    width: 95%;
    height: 150px;
}
.commodity-tight-font-content{
    color: black;
}
.commodity-tight-font{
    height: 35px;
    width: 170px;
    display: flex;
    align-items: center;
}
.commodity-right-box-content{
    display: flex;
    width: 90%;
    align-items: center;
    height: 30%;
}
.commodity-left-box-img{
    
    width: 90%;
    height: 70%;
}
.commodity-right-box{
    display: flex;
    align-items: center;
    background-color: rgb(243, 243, 243);
    flex: 1;
    flex-direction: column;
}
.commodity-left-box{
    background-color: rgb(238, 238, 238);
    width: 50%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.product-card{
    width: 80%;
    margin-left: 10%;
}
.commodity-shop-name{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    right: 0;
    top: -5px;
    font-size: small;
    font-weight: bold;
    width: 70px;
    height: 25px;
    border-radius: 5px 0px 0 5px;
    background-color: rgb(25, 129, 19);
}

.shrink{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 5%;
    height: 90%;
    background-color: white;
    box-shadow: 0px 0px 10px 1px rgb(10, 10, 10,0.4);
    border-radius: 5px;
    animation: shrink_out 0.1s ease-in-out forwards;
}
@keyframes shrink_out {
    0%{
        transform:scale(1.05) 
    }
    100%{
        transform:scale(1) 
    }
}
.magnify{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-left: 5%;
    height: 90%;
    background-color: white;
    box-shadow: 0px 0px 10px 1px rgb(10, 10, 10,0.4);
    border-radius: 5px;
    animation: magnify_open 0.1s ease-in-out forwards;
}
@keyframes magnify_open {
    0%{
        transform:scale(1) 
    }
    100%{
        transform:scale(1.05) 
    }
}
.commodity-after{
    color: red;
    margin-left: 5px;
    font-weight: 600;
    font-size: 15px;
    margin-top: -3px;
}
.commodity-before{
    text-decoration: line-through;
    font-size: small;
    font-weight: 600;
    color: rgb(153, 153, 153);
}
.commodity-inventory-number{
    font-size: 12px;
    margin-left: 3px;
    color: rgb(113, 113, 113);
    font-weight: 600;
}
.commodity-name{
    color: rgb(25, 149, 50);
    font-size: 14px;
   
    font-weight: 600;
    margin-left: 5%;
    width: 90%;
}
.commodity-price{
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: flex;
}
.commodity-inventory{
    position: absolute;
    bottom: 10px;
    display: flex;
    left: 10px;
}
.commodity-content{
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    margin-left: 10px;
    margin-top: 5px;
    height: 40px;
}
.commodity-bottom{
    position: relative;
    flex-grow: 1;
}
.commodity-photo{
    width: 100%;
    height: 130px;
    border-radius: 5px 5px 0 0;
}
.commodity-card{
    display: flex;
    flex-direction: column;
    width: 90%;
    cursor: pointer;
    margin-left: 5%;
    height: 93%;
    background-color: white;
    box-shadow: 0px 0px 10px 1px rgb(10, 10, 10,0.4);
    border-radius: 5px;
}

.commodity-main{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    margin-left: 60px;
}
.commodity{
    width: 220px;
    height: 250px;
   
    position: relative;
}

.product-middle-right-content{
height: 50%;
display: flex;
align-items: center;
margin-left: 15px;
}
.product-middle-right{
    height: 100%;
    flex: 1;
    align-items: center;
}
.product-middle-left-font{
    height: 50%;
    display: flex;
    font-weight: bold;
    justify-content: center;
    align-items: center;
}
.product-middle-left{
    width: 100px;
    background-color: rgb(200, 231, 212);
    height: 100%;
    
}
.product-middle{
    display: flex;
    border: 1px solid rgb(233, 233, 233);
    width: 72%;
    margin-left: 14%;
    height: 100px;
}
.product-font{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    font-size: 25px;
    cursor: pointer;
    color: rgb(121, 121, 121);
}
.product-open{
    color: rgb(22, 143, 52);
    font-size: 25px;
    font-weight: bold;
    border-bottom: 5px solid rgb(22, 143, 52);
}
.product{
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>