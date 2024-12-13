<template>
  <div class="chat-container">
    <div class="top-bar">
      <el-icon @click="goBack" class="icon"><ArrowLeftBold /></el-icon>
      <div class="title">我的买卖</div>
    </div>

    <div class="messages-container">
      <div class="message" v-for="(msg, index) in messages" :key="index" :class="{'sent': msg.sender === 'me', 'received': msg.sender === 'other'}">
        <div class="content">
          <span class="text">{{ msg.content }}</span>
        </div>
      </div>
    </div>

    <div class="input-container">
      <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 4 }"
                v-model="newMessage" placeholder="想跟TA说点什么..." @keyup.enter="sendMessage"
      class="input-area"/>
      <button class="send-button" @click="sendMessage">发送</button> <!-- 添加类名 -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { ElAvatar } from 'element-plus';
import router from "@/router/index.js";
import { ArrowLeftBold } from "@element-plus/icons-vue";

const messages = ref([
  { sender: 'other', content: '你好， 还有懂得74代100代券吗?', avatar: 'src/assets/testImage1.png' },
  { sender: 'me', content: '没有了', avatar: '' },
  { sender: 'other', content: '好吧', avatar: 'src/assets/testImage1.png' },
]);

const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.value.trim()) {
    messages.value.push({ sender: 'me', content: newMessage.value, avatar: '' });
    newMessage.value = '';
  }
};

const goBack = () => {
  router.back();
};
</script>

<style scoped lang="scss">
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f0f2f5;
}

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

.messages-container {
  margin-top: 52px;
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  background-color: white;
}

.message {
  display: flex;
  margin: 10px 0;
}

.sent {
  justify-content: flex-end;
}

.received {
  justify-content: flex-start;
}

.content {
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 10px;
  margin-left: 10px;
  color: white;
}

.sent .content {
  background-color: orange;
}

.received .content {
  background-color: #e0e0e0;
  color: black;
}

.input-container {
  display: flex;
  align-items: flex-end; /* 垂直对齐输入框和按钮 */
  padding: 10px;
  background-color: white;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  position: relative; /* 使子元素可以绝对定位 */
  .input-area {
    margin-right: 57px;
  }
}

.input-container input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 20px;
  margin-right: 10px;
}

.input-container .send-button {
  height: 28px; /* 固定高度 */
  width: 50px;  /* 可选，设置宽度 */
  border: none;
  border-radius: 20px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  position: absolute; /* 绝对定位按钮 */
  right: 10px;       /* 距离右侧 */
  bottom: 10px;      /* 距离底部 */
}
</style>
