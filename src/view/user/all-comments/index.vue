<template>
  <div class="container">
    <div class="top-bar"><el-icon  @click="goBack" class="icon"><ArrowLeftBold /></el-icon><div class="title">我的评价</div></div>
    <div class="main-content">
      <div class="messages-container">
        <div class="message" v-for="(msg, index) in messages" :key="index">
          <div class="avatar">
            <el-avatar :src="msg.avatar" size="50" />
          </div>
          <div class="message-info">
            <div class="header">
              <span class="username">{{ msg.username }}</span>
              <span class="time">{{ msg.time }}</span>
            </div>
            <div class="content">{{ msg.content }}</div>
          </div>
        </div>
      </div>
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

const handleChange = (name) => {
  console.log(name);
}
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

  .main-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 60px;
    padding: 0 10px;
    justify-content: space-around;
    .messages-container {
      background-color: #fff; /* 背景颜色 */
      border-radius: 10px; /* 圆角 */
      padding: 15px; /* 内边距 */
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* 阴影效果 */
      width: 100%; /* 最大宽度 */

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