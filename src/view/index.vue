<template>
  <div class="index-container">
    <div class="content">
      <Home v-if="currentTab === 'home'" />
      <Publish v-if="currentTab === 'publish'" />
      <User v-if="currentTab === 'user'" />
    </div>
    <div class="tabbar-container">
      <Tabbar @update:activeTab="handleActiveTabChange" />
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import Tabbar from '@/components/tabbar.vue';
import Home from '@/view/home/index.vue';
import Publish from '@/view/publish/index.vue';
import User from '@/view/user/index.vue';
import { useStore } from '@/stores';
const currentTab = ref(useStore().currentTab);

const handleActiveTabChange = (tab: string) => {
  useStore().setCurrentTab(tab); // 更新 store 中的当前标签
  currentTab.value = tab; // 保存当前活动的标签
};
</script>
<style scoped lang="scss">
.index-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  .content {
    flex:1;
    display: flex;
    flex-wrap: wrap;
    width: 100%;

  }
  .tabbar-container {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
  }
}
</style>
