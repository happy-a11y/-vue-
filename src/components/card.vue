<template>
  <router-link to="/details" class="card-content"> <!-- 包裹在 router-link 中 -->
    <el-card class="custom-card" shadow="hover">
      <el-image class="main-image" src="src/assets/testImage.png" fit="cover" />
      <div class="price">￥99.99</div> <!-- 新增价格元素 -->
      <template #footer>
        <div class="footer">
          <div class="left">
            <el-image class="avatar" src="src/assets/testImage.png" fit="cover" />
          </div>
          <div class="right">
            <div class="product">11111111111111</div>
            <div class="name">用户名称</div>
          </div>
        </div>
      </template>
    </el-card>
  </router-link>
</template>

<style scoped lang="scss">
.card-content {
  display: flex;
  margin-bottom: 10px;
  width: 45%;
  text-decoration: none; /* 去掉链接下划线 */
  color: inherit; /* 继承颜色 */
}

.custom-card {
  position: relative; /* 使子元素可以绝对定位 */
  border-radius: 10px; /* 卡片圆角 */
  overflow: hidden; /* 隐藏溢出 */
}

.price {
  position: absolute; /* 绝对定位 */
  bottom: 55px; /* 距离底部10px */
  right: 10px; /* 距离右侧10px */
  color: red; /* 红色字体 */
  font-weight: bold; /* 加粗字体 */
  font-size: 16px; /* 字体大小 */
}

.footer {
  display: flex;
  align-items: center; /* 垂直居中对齐 */
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%; /* 圆形用户头像 */
  border: 2px solid #f0f0f0; /* 用户头像边框 */
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-left: 12px;
}

.product {
  overflow: hidden;
  width: 68%;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold; /* 加粗产品名 */
  color: #333; /* 产品名颜色 */
  margin-bottom: 4px; /* 产品名与用户名称之间的间距 */
}

.name {
  color: #777; /* 用户名称颜色 */
  font-size: 14px; /* 用户名称字体大小 */
}

.el-card {
  --el-card-padding: 10px;
}
</style>

<script setup>
</script>
