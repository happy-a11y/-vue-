<template>
  <div class="container">
    <div class="top-bar"><el-icon  @click="goBack" class="icon"><ArrowLeftBold /></el-icon><div class="title">待评价</div></div>
    <div class="content">
      <RowCard />
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router';
import {useStore} from '@/stores';
import {ref} from 'vue';
import {ArrowLeftBold} from "@element-plus/icons-vue";
import RowCard from '@/components/rowCard.vue'

const currentTab = ref(useStore().currentTab);
const router = useRouter();

const goBack = () => {
  router.back(); // 返回到上一页
  currentTab.value = 'user';
};
</script>
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 100%;

  .top-bar {
    width: 100%;
    height: 52px;
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: orange;
    z-index: 9;

    .icon {
      color: white;
      margin-left: 10px;
      font-size: 20px;
    }

    .title {
      margin-left: 34%;
      color: white;
      font-weight: bold;
      font-size: 20px;
    }
  }

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 60px;
    padding: 0 10px;
    justify-content: space-around;
  }
}
</style>