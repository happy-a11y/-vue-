<template>
  <div class="user-container">
    <div class="user-avatar">
      <el-avatar src="src/assets/testImage.png" :size="70" />
    </div>



    <div class="action">
      <router-link to="/my-publish" tag="div" class="action-items">
        <el-icon :size="40" class="orange-icon"><Flag /></el-icon>
        <span class="orange-text">我的发布</span>
      </router-link>
      <router-link to="/my-comments" tag="div" class="action-items">
        <el-icon :size="40" class="orange-icon"><List /></el-icon>
        <span class="orange-text">待评价</span>
      </router-link>
      <router-link to="/all-products" tag="div" class="action-items">
        <el-icon :size="40" class="orange-icon"><Finished /></el-icon>
        <span class="orange-text">我的买卖</span>
      </router-link>
      <router-link to="/all-comments" tag="div" class="action-items">
        <el-icon :size="40" class="orange-icon"><Checked /></el-icon>
        <span class="orange-text">我的评价</span>
      </router-link>
    </div>

    <div class="messages-container">
      <div class="message" v-for="(msg, index) in messages" :key="index">
        <div class="avatar">
          <el-avatar :src="msg.avatar" size="50" />
        </div>
        <div class="message-info" @click="gotoMessage">
          <div class="header">
            <span class="username">{{ msg.username }}</span>
            <span class="time">{{ msg.time }}</span>
          </div>
          <div class="content">{{ msg.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Checked, Flag, List, Finished } from '@element-plus/icons-vue';
import { ElAvatar } from 'element-plus';
import { ref } from 'vue';
import router from "@/router/index.js";
const messages = ref([
  {
    avatar: 'src/assets/testImage1.png',
    username: '深水黑暗花开',
    time: '12:00',
    content: '[自动回复]感谢支持！',
  },
  {
    avatar: 'src/assets/testImage2.png',
    username: '哔哩哔哩英雄联盟赛事',
    time: '11-02',
    content: '[有新通知]你订阅的比赛开播了～',
  },
  {
    avatar: 'src/assets/testImage3.png',
    username: '哔哩哔哩智能机',
    time: '09-25',
    content: '登录操作通知',
  },
]);
const gotoMessage = () => {
  router.push('/chat');
}
</script>

<style scoped lang="scss">
.user-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background-color: #f0f2f5; /* 背景色 */
  padding: 0 10px; /* 内边距 */

  .user-avatar {
    height: 100px; /* 固定头像高度 */
    width: 100px; /* 固定头像宽度 */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0; /* 头像与信息之间的间距 */
    border-radius: 50%; /* 圆形效果 */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2); /* 加入阴影 */
    background-color: orange; /* 背景颜色 */
  }

  .messages-container {
    background-color: #fff; /* 背景颜色 */
    border-radius: 10px; /* 圆角 */
    padding: 15px; /* 内边距 */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
    width: 95%; /* 最大宽度 */

    .message {
      display: flex;
      align-items: center; /* 垂直居中对齐 */
      padding: 10px 0; /* 上下内边距 */
      border-bottom: 1px solid #eee; /* 分隔线 */

      &:last-child {
        border-bottom: none; /* 去掉最后一条分隔线 */
      }

      .avatar {
        margin-right: 10px; /* 头像与后面内容的间距 */
      }

      .message-info {
        flex-grow: 1; /* 填充剩余空间 */

        .header {
          display: flex;
          justify-content: space-between; /* 左右对齐 */
          color: #333; /* 用户名颜色 */

          .username {
            font-weight: bold; /* 用户名加粗 */
            color: orange; /* 用户名颜色 */
          }

          .time {
            color: #999; /* 时间颜色 */
            font-size: 12px; /* 字体大小 */
          }
        }

        .content {
          color: #555; /* 消息内容颜色 */
          margin-top: 5px; /* 上间距 */
        }
      }
    }
  }

  .action {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    flex-wrap: wrap; /* 支持换行 */

    .action-items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none; /* 去掉下划线 */
      color: #333; /* 选项颜色 */
      margin: 10px; /* 选项之间的间距 */
      transition: transform 0.2s; /* 动效过渡 */

      &:hover {
        transform: translateY(-3px); /* 悬停时向上移动 */
        color: orange; /* 悬停时颜色变化 */
      }

      el-icon {
        margin-bottom: 5px; /* 图标与文字之间的间距 */
      }

      .orange-icon {
        color: orange; /* 图标颜色 */
      }

      .orange-text {
        color: orange; /* 文字颜色 */
      }
    }
  }
}
</style>
