<template>
    <div class="personal-content">
        <div class="card-personal">
            <div class="personal">
            <div class="personal-left">
                <div class="personal-left-up">消息中心</div>
                <el-menu
                    background-color="rgb(158, 229, 147,0)"
                    default-active="1"
                    class="el-menu-vertical-demo"
                    text-color="rgb(91, 91, 91)"
                    active-text-color="rgb(71, 176, 78)"
                >
                <RouterLink to="/main/email/content">
                    <el-menu-item index="1">
                        <el-icon><svg class="icon" style="width: 25px;height: 25px;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2843"><path d="M560.633 162.477c-13.901-6.832-28.731-5.465-40.683 3.757-43.652 33.684-158.527 135.172-177.84 152.27H195.421c-35.74 0-64.817 29.077-64.817 64.817v233.126c0 35.74 29.077 64.82 64.817 64.82h125.75C347.076 704.61 471.183 816.17 519.74 854.64c6.955 5.506 14.927 8.299 23.145 8.299 5.772 0 11.665-1.378 17.415-4.159 20.77-10.048 37.668-38.89 37.668-64.293V226.552c0-25.213-16.748-53.957-37.334-64.075z m-5.879 632.01c0 8.774-6.611 19.758-11.158 23.91-54.496-43.754-196.609-172.036-198.065-173.35-0.01-0.01-0.02-0.016-0.03-0.024-3.946-4.275-9.58-6.968-15.858-6.968H195.421c-11.913 0-21.606-9.693-21.606-21.606V383.322c0-11.913 9.693-21.606 21.606-21.606h150.567c4.353 0 8.399-1.3 11.79-3.514a21.473 21.473 0 0 0 10.394-5.056c1.295-1.148 127.486-112.995 175.377-150.524 4.524 4.04 11.204 15.081 11.204 23.93v567.936zM799.893 512.648c-5.564-85.615-69.287-140.72-71.996-143.024-9.09-7.728-22.726-6.626-30.456 2.467-7.729 9.09-6.626 22.726 2.466 30.455 0.524 0.446 52.474 45.351 56.865 112.905 2.918 44.875-16.032 90.163-56.32 134.607-8.013 8.842-7.344 22.505 1.498 30.52a21.53 21.53 0 0 0 14.504 5.598c5.886 0 11.75-2.392 16.015-7.096 48.444-53.442 71.129-109.438 67.424-166.432zM916.537 408.311c-33.194-93.424-95.514-149.89-98.15-152.248-8.895-7.953-22.553-7.193-30.508 1.703-7.954 8.894-7.192 22.553 1.702 30.508 0.563 0.504 56.696 51.358 86.238 134.505 17.195 48.393 21.879 97.97 13.923 147.354-10.062 62.459-40.517 125.212-90.518 186.518-7.542 9.247-6.16 22.858 3.088 30.4a21.52 21.52 0 0 0 13.643 4.862c6.268 0 12.486-2.715 16.757-7.951 54.864-67.269 88.406-136.9 99.692-206.956 9.123-56.63 3.785-113.386-15.867-168.695z" p-id="2844"></path></svg></el-icon>
                        <span>官方通知</span>
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