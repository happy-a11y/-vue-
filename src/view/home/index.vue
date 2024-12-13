<template>
  <div class="home-container">
    <div class="mt-4">
      <el-input
          v-model="input"
          placeholder="Please input"
          class="input-with-select"

      >
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>
    <div class="home-content">
      <Card /><Card />
      <Card />
      <Card /><Card />

    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import Card from '@/components/Card.vue'
const input = ref('')
</script>
<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  .mt-4 {
    width: 95%;
    height: 32px;
    padding: 10px;
    background-color: orange;
    position: fixed;
    top: 0;
    z-index: 9;
    .input-with-select {
      display: flex;
      width: auto;
    }
  }
  .home-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 60px;
    padding: 0 10px;
    justify-content: space-around;
  }
}
</style>