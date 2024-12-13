<template>
  <div class="product-detail">
    <div class="top-bar">
      <el-icon @click="goBack" class="icon"><ArrowLeftBold /></el-icon>
      <div class="title">商品详情</div>
    </div>

    <div class="user-info">
      <el-avatar src="src/assets/userAvatar.png" size="50" />
      <div class="user-details">
        <div class="user-id">阿阿康的小姐部</div>
        <div class="timestamp">1分钟前来自 长沙</div>
      </div>
      <div class="price-info">
        <div class="price">￥34.29</div>
      </div>

    </div>


    <el-carousel class="product-image" autoplay height="300px">
      <el-carousel-item v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Product Image" style="width: 100%; height: 100%; object-fit: cover;" />
      </el-carousel-item>
    </el-carousel>

    <div class="product-description">
      <p>这是商品的描述内容，详细阐述商品的信息与特点...</p>
    </div>
    <el-button class="want-button" type="primary" @click="want">我想要</el-button>
  </div>
</template>

<style scoped lang="scss">
.product-detail {
  background-color: #fff; /* 背景颜色 */
  border-radius: 10px; /* 圆角 */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 阴影 */
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
  .back-button {
    margin-bottom: 15px; /* 按钮与用户信息之间的间距 */
    font-size: 16px; /* 按钮字体大小 */
    color: #409EFF; /* 按钮颜色 */
  }

  .user-info {
    display: flex;
    align-items: center; /* 垂直居中 */
    padding: 16px 16px 0 16px;
    margin: 30px 0 0 0; /* 下间距 */

    .user-details {
      margin-left: 10px; /* 头像与用户信息间距 */
     width: 50%;
      .user-id {
        font-weight: bold; /* 加粗 */
        color: #333; /* 字体颜色 */
      }

      .timestamp {
        color: #999; /* 时间颜色 */
        font-size: 12px; /* 字体大小 */
      }
    }

    .price-info {
      display: flex;
      justify-content: space-between; /* 左右对齐 */
      margin-bottom: 15px; /* 下间距 */
      padding: 16px;
      .price {
        font-size: 24px; /* 价格字体大小 */
        color: #e74c3c; /* 红色 */
        font-weight: bold; /* 加粗 */
      }
    }
  }


  .product-image {
    width: 100%; /* 适应宽度 */
    border-radius: 8px; /* 圆角 */
    overflow: hidden; /* 隐藏溢出 */
  }

  .product-description {
    margin-bottom: 15px; /* 下间距 */
    color: #333; /* 描述颜色 */
    line-height: 1.5; /* 行高 */
    padding: 20px;
  }

  .product-image {
    width: 100%; /* 适应宽度 */
    border-radius: 8px; /* 圆角 */
  }
  .want-button {
    margin-top: 20px; /* 上间距 */
    background-color: orange; /* 橙色按钮 */
    border-color: orange; /* 橙色边框 */
    color: white; /* 白色字体 */
    width: 100%; /* 按钮宽度占满 */
    height: 45px; /* 按钮高度 */
    font-size: 18px; /* 字体大小 */
  }
}
</style>

<script setup>
import { useRouter } from 'vue-router';
import {ArrowLeftBold} from "@element-plus/icons-vue";

const router = useRouter();
const want = () => {
  // 这里可以添加想要按钮的逻辑，例如添加到购物车
  console.log("我想要这个商品！");
};
const goBack = () => {
  router.go(-1); // 返回上一个路由
};

const images = [
  'src/assets/testImage.png',
  'src/assets/testImage.png',
  'src/assets/testImage.png',
];
</script>
