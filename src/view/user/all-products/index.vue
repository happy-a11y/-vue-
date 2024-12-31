<template>
  <div class="container">
    <div class="top-bar"><el-icon  @click="goBack" class="icon"><ArrowLeftBold /></el-icon><div class="title">我的买卖</div></div>
    <div class="content">
      <div class="top">
        <el-button key="plain" @click="handleChange('1')" text>我发布的</el-button>
        <el-button key="plain" @click="handleChange('2')" text>我买到的</el-button>
      </div>
      <div class="bottom"><Card /></div>
    </div>
  </div>
</template>
<script setup>
import {useRouter} from 'vue-router';
import {useStore} from '@/stores';
import {ref} from 'vue';
import {ArrowLeftBold} from "@element-plus/icons-vue";
import Card from '@/components/Card.vue'

const currentTab = ref(useStore().currentTab);
const router = useRouter();
const goBack = () => {
  router.back(); // 返回到上一页
  currentTab.value = 'user';
};

const handleChange = (name) => {
  console.log(name);
}
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
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>