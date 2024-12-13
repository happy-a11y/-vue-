<template>
  <div class="card-content">
    <el-card style="width: 100%;">
      <div class="card-content">
        <div class="left-content">
          <el-image style="width: 80px; height: 80px" src="src/assets/testImage.png" fit="cover" />
        </div>
        <div class="right-content">
          <div class="header">
            <div class="product-name">111111</div>
            <div class="product-price">￥99.99</div>
          </div>
          <div class="button-container"> <!-- 包裹按钮的容器 -->
            <el-button type="primary" class="btn-evaluate">填写评价</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.card-content {
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  height: 100px;
  .left-content {
    margin-right: 30px;
  }

  .right-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      display: flex;
      justify-content: space-between; /* 左右对齐 */
      align-items: center; /* 垂直居中 */
      margin-bottom: 10px; /* 下间距 */

      .product-name {
        font-size: 16px; /* 商品名称字体大小 */
        font-weight: bold; /* 加粗 */
        color: #333; /* 字体颜色 */
      }

      .product-price {
        font-size: 14px; /* 商品价格字体大小 */
        color: #e74c3c; /* 使用红色或其他突出颜色 */
      }
    }

    .button-container {
      margin-top: 20px; /* 上间距 */
      display: flex; /* 保持按钮居中 */
      justify-content: flex-end; /* 右对齐按钮 */
    }

    .btn-evaluate {
      background-color: orange; /* 橙色按钮 */
      border-color: orange; /* 橙色边框 */
      color: white; /* 白色字体 */
      width: 100px;
    }
  }
}
::v-deep(.el-card__body) {
  padding: 10px;
}
</style>

<script setup>
</script>
