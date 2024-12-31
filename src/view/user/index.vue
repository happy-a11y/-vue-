<template>
  <div class="user-container">
    <div class="user-avatar">
      <el-avatar :src="userInfo.user_avatar" :size="70" />
    </div>
    <div class="setting"  @click="loginSettingDialogVisible = true">{{ settings }}<el-icon><Setting /></el-icon></div>
    <div class="username">{{ userInfo.user_name }}</div>

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

    <el-dialog
        v-model="loginSettingDialogVisible"
        :title="isRegister ? '注册' : '登录'"
        width="100%"
        :before-close="handleClose"
    >
      <div v-if="!isRegister">
        <el-form :model="loginForm" label-width="100px">
          <el-form-item label="账号">
            <el-input v-model="loginForm.user_id" placeholder="学号+身份证号后四位"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="loginForm.password"></el-input>
          </el-form-item>
        </el-form>
        <span class="small-text">没有账号？<a @click="switchToRegister">点此注册</a></span>
      </div>
      <div v-else>
        <el-form :model="registerForm" label-width="100px">
          <el-form-item label="账号">
            <el-input v-model="registerForm.user_id" placeholder="学号+身份证号后四位"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="registerForm.password"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input type="password" v-model="registerForm.confirmPassword"></el-input>
          </el-form-item>
        </el-form>
        <span class="small-text">已有账号？<a @click="switchToLogin">点此登录</a></span>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="loginSettingDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmit">
            {{ isRegister ? '注册' : '登录' }}
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { Checked, Flag, List, Finished, Setting } from '@element-plus/icons-vue';
import { ElAvatar, ElMessage } from 'element-plus';
import { ref, reactive, onMounted } from 'vue';
import router from "@/router/index.js";
import { verifyToken } from "@/utils/identify.js";
const settings = ref('点此登录');
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
const userInfo = reactive({
      user_name: '未登录',
      user_avatar: 'src/assets/testImage.png',
}
);
const gotoMessage = () => {
  router.push('/chat');
};

// 弹窗相关
const isRegister = ref(false);
const loginSettingDialogVisible = ref(false);

const loginForm = ref({
  user_id: '',
  password: '',
});

const registerForm = ref({
  user_id: '',
  password: '',
  confirmPassword: '',
});

const switchToLogin = () => {
  isRegister.value = false;
  registerForm.value.user_id = '';
  registerForm.value.password = '';
  registerForm.value.confirmPassword = '';
};

const switchToRegister = () => {
  isRegister.value = true;
  loginForm.value.user_id = '';
  loginForm.value.password = '';
};

const handleClose = () => {
  loginSettingDialogVisible.value = false;
};


// 登录相关
const getLogin = async () => {
  if (!loginForm.value.user_id || !loginForm.value.password) {
    ElMessage.error('账号和密码不能为空');
    return null;
  }
  try {
    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',  // 如果你的登录接口是POST方法，否则请修改为对应的HTTP方法
      headers: {
        'Content-Type': 'application/json',  // 设置请求头，告诉服务器发送的是JSON格式的数据
      },
      body: JSON.stringify({  // 将用户名和密码对象转换为JSON字符串
        user_id: loginForm.value.user_id,
        password: loginForm.value.password
      })
    });
    const data = await res.json();
    if (data.code) {
      ElMessage.success('登录成功');
      loginSettingDialogVisible.value = false;
      const avatarSrc = ref(`data:image/png;base64,${data.data.user_avatar}`);
      userInfo.user_name = data.data.user_name;
      userInfo.user_avatar = avatarSrc;
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
    }else {
      ElMessage.error('用户名或密码错误');
    }
  } catch (error) {
    ElMessage.error('获取用户信息失败，请重试');
    return null;
  }
};


// 注册相关
const getRegister = async () => {
  if(!registerForm.value.user_id || !registerForm.value.password || !registerForm.value.confirmPassword){
    ElMessage.error('账号、密码和确认密码不能为空');
    return null;
  }
  if(registerForm.value.password !== registerForm.value.confirmPassword){
    ElMessage.error('密码和确认密码不一致');
    return null;
  }
  try {
    const res = await fetch('http://localhost:3000/register', {
      method: 'POST',  // 如果你的登录接口是POST方法，否则请修改为对应的HTTP方法
      headers: {
        'Content-Type': 'application/json',  // 设置请求头，告诉服务器发送的是JSON格式的数据
      },
      body: JSON.stringify({  // 将用户名和密码对象转换为JSON字符串
        user_id: registerForm.value.user_id,
        password: registerForm.value.password
      })
    });
    const data = await res.json();
    if (data.code) {
      ElMessage.success('注册成功，请登录');
      isRegister.value = false;
    }else {
      console.log(registerForm.value)
      ElMessage.error('注册失败,账号已存在，更换账号试试');
    }
  } catch (error) {
    ElMessage.error('网络连接失败，请重试');
    return null;
  }
};


// 登录与注册按钮点击事件
const handleSubmit = async () => {
  if (isRegister.value) {
    await getRegister()
  }else{
    await getLogin();
  }
};

// 根据登录状态确定登录按钮文字
const settingChange = () => {
  if (verifyToken()) {
    settings.value = '退出登录';
  }else {
    settings.value = '点此登录';
  }
};

// 生命周期函数
onMounted(()=>{
  settingChange();
});
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
  .setting {
    display: flex;
    position: absolute;
    top: 10px;
    right: 10px;
    align-items: center;
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

.el-dialog {
  width: 100%;

  .small-text {
    font-size: 14px;
    color: #606266;
    cursor: pointer;
  }

  .small-text a {
    text-decoration: none;
    color: #409EFF;
  }
}
</style>
