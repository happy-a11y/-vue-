<template>
  <div class="tabbar-container">
    <div
        class="tab-item home"
        :class="{ active: activeTab === 'home' }"
        @click="setActiveTab('home')"
    >
      <el-icon><Shop /></el-icon>
      <div>首页</div>
    </div>
    <div
        class="tab-item publish"
        :class="{ active: activeTab === 'publish' }"
        @click="setActiveTab('publish')"
    >
      <el-icon><CirclePlusFilled /></el-icon>
      <div>发布</div>
    </div>
    <div
        class="tab-item user"
        :class="{ active: activeTab === 'user' }"
        @click="setActiveTab('user')"
    >
      <el-icon><UserFilled /></el-icon>
      <div>我的</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
import { Shop, CirclePlusFilled, UserFilled } from '@element-plus/icons-vue';
import { useStore } from '@/stores';
const activeTab = ref(useStore().currentTab);
// 定义自定义事件
const emit = defineEmits<{
  (e: 'update:activeTab', tab: string): void;
}>();

// 定义一个函数来设置活动标签并发出事件
const setActiveTab = (tab: string) => {
  activeTab.value = tab;
  emit('update:activeTab', tab); // 发送事件将当前活动标签传递给父组件
};
</script>

<style scoped lang="scss">
.tabbar-container {
  display: flex;
  justify-content: space-around;
  height: 50px;
  width: 100%;
  background-color: white; /* 设置背景颜色，以便阴影效果明显 */
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* 添加上边缘阴影 */

  .tab-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: gray;
    cursor: pointer; // 鼠标悬停时变为手型

    &.active {
      color: orange; // 激活状态时的颜色
    }
  }
}
</style>
