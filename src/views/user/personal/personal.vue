<template>
    <div class="personal-content">
        <div class="card-personal">
            <div class="personal">
            <div class="personal-left">
                <div class="personal-left-up">个人中心</div>
                <el-menu
                    background-color="rgb(158, 229, 147,0)"
                    default-active="1"
                    class="el-menu-vertical-demo"
                    text-color="rgb(91, 91, 91)"
                    active-text-color="rgb(71, 176, 78)"
                >
                <RouterLink to="/main/personal/information">
                    <el-menu-item index="1">
                        <el-icon><svg class="icon" style="width: 1.005859375em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1030 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="769"><path d="M594.109152 616.463476C699.862301 562.297229 771.224181 454.824517 771.224181 326.717045c0-179.694374-142.723762-324.137699-318.979009-324.137699S132.406381 147.02267 132.406381 326.717045c0 128.107473 73.941226 235.580185 177.115029 289.746432C142.723762 673.209068 17.195634 825.390428 0 1009.383711l56.745592 0C78.240134 815.93283 233.00084 662.891688 429.890848 650.854744c7.738035 0 17.195634-2.579345 24.933669-2.579345s17.195634 2.579345 24.933669 2.579345c194.310663 12.036944 351.650714 164.218304 373.145256 358.528967l56.745592 0C887.29471 825.390428 761.766583 673.209068 594.109152 616.463476zM452.245172 607.005877c-152.18136 0-275.130143-125.528128-275.130143-277.709488 0-154.760705 122.948783-277.709488 275.130143-277.709488s275.130143 125.528128 275.130143 277.709488C724.79597 481.47775 601.847187 607.005877 452.245172 607.005877z" fill="#272636" p-id="770"></path><path d="M803.036104 122.948783l226.122586 0 0 49.007557-226.122586 0 0-49.007557Z" p-id="771"></path><path d="M837.427372 280.288833l191.731318 0 0 49.007557-191.731318 0 0-49.007557Z" p-id="772"></path><path d="M803.036104 437.628883l226.122586 0 0 49.007557-226.122586 0 0-49.007557Z" p-id="773"></path></svg></el-icon>
                        <span>我的信息</span>
                    </el-menu-item>
                </RouterLink>
                <RouterLink to="/main/personal/orders">
                    <el-menu-item index="2">
                        <el-icon><svg class="icon" style="width: 1em;height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="769"><path d="M298.666667 341.333333h384v42.666667H298.666667v-42.666667z m0 128h298.666666v42.666667H298.666667v-42.666667z m0 128h298.666666v42.666667H298.666667v-42.666667z m0-469.376C298.666667 104.405333 317.824 85.333333 341.12 85.333333h341.76C706.304 85.333333 725.333333 104.490667 725.333333 127.957333v42.752A42.645333 42.645333 0 0 1 682.88 213.333333H341.12C317.696 213.333333 298.666667 194.176 298.666667 170.709333V127.957333zM170.666667 938.666667h682.666666c23.68 0 42.666667-19.157333 42.666667-42.773334V170.773333C896 147.093333 876.842667 128 853.205333 128h-63.296v42.666667h63.296c0.128 0.106667 0.170667 725.333333 0.128 725.333333H170.666667V170.773333C170.752 170.709333 236.16 170.666667 236.16 170.666667V128H170.752A42.752 42.752 0 0 0 128 170.773333v725.12A42.666667 42.666667 0 0 0 170.666667 938.666667z m170.666666-768h341.333334V128H341.333333v42.666667z" fill="#3D3D3D" p-id="770"></path></svg></el-icon>
                        <span>我的订单</span>
                    </el-menu-item>
                </RouterLink>
                </el-menu>
                
            </div>
            <div class="personal-right">
                <RouterView></RouterView>
            </div>
        </div>
        </div>
    </div>
</template>
<style scoped>

.card-personal{
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(17px) saturate(180%);
  background-color: rgba(149,239,142,0.4);
  border-radius: 0px;
  border: 1px solid rgba(209, 213, 219, 0.3)
}
.personal-right{
    flex: 1;
}
.personal-left-up{
    background-color: rgb(158, 229, 147,0.3);
    line-height: 70px;
    text-align: center;
    height: 70px;
    color: rgb(91, 91, 91);
    font-weight: bold;
}
.personal-left{
    z-index: 1;
    width: 20%;
    background-color: rgb(158, 229, 147,0.3);
    box-shadow: 2px 0px 10px rgb(0, 0, 0,0.2);
}
.personal-content{
    background-image: url('/src/assets/contact_imgs/lun03.png');
    background-size: 100%;
    flex: 1;
    width: 100%;
    height: 680px;
    background-color: rgb(193, 253, 198);
    position:fixed;
}
.personal{
    display: flex;
    border-radius: 0 0 100px 0;
    background-color: rgb(175, 235, 166,0.6);
    width: 850px;
    height: 640px;
}
</style>