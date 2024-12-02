<template>
  <div >
    <div class="content">
      <RouterView>
      </RouterView><!--RouterView和RouterLink这个系统本身就有不用引入-->
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
<style>
.content{
  height: 100vh;
}
.logo{
  margin-top: -1vh;
  min-width: 10rem;
  margin-left: -2rem;
  height: 2.5rem;
  z-index: -1;
}
body{
  padding: 0;
  margin: 0;
}
.home{
  text-decoration: none;
}
.zhuye{
  width: 10rem;
  height: 10rem;
  position: absolute;
  right: -1rem;
  margin-top: 2rem;
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
  transform:rotate(-25deg); 
  z-index: -1;
  pointer-events:none; 
}
.logo01{

  pointer-events:none; 
  min-width:8rem;  
  width: 8rem;
  margin-left: -2rem;
  height: 8rem;
  min-height: 8rem;
  transform:rotate(45deg); 
  vertical-align: middle;
  fill: currentColor;
  overflow: hidden;
}
.login{
  margin-left: 1rem;
  text-decoration: none; 
  color: #3c3c3c;
}
@media(max-width:768px){
  .login00{
    color: black;
    white-space:nowrap;
  }
}
@media(min-width:768px){
  .login00{
    margin-left: 40%;
  
    display: flex;
    align-items: center;
    color: black;
    white-space:nowrap;
  }
}

a{
  white-space: nowrap;
  color: black;
  transition: color 0.5s;
}
a:hover{
  cursor:default;
  color: rgb(45, 112, 0);
}
.daohang{
  mask-image:url('/src/assets/logo/zhezhu.png'); 
  mask-size:cover; 
  mask-position:center; 
  mask-repeat:no-repeat;
  display:flex; 
  overflow: hidden;
  align-items:center;
  background-image: linear-gradient(to right,rgb(255, 255, 255),rgb(175, 241, 168));
}
</style>

