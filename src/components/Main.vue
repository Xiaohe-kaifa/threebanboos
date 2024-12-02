<template>
  <el-scrollbar   max-height="100vh">
  <!--导航区-->
  <HomeMenu/>
  <!--展示区RouterView------>
  <div class="phone_style">
    <RouterView>
    </RouterView>
  </div>
</el-scrollbar>
</template>
<script lang="ts" setup>
import HomeMenu from '@/views/user/menu/Menu.vue';
import { ref } from 'vue';

</script>
