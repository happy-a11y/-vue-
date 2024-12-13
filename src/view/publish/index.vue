<template>
  <div class="container">
    <div class="header">
      <h2 class="title">发布</h2>
      <el-button type="primary" @click="onSubmit" class="submit-button">发布</el-button>
    </div>

    <el-form :model="form" class="form-container">
      <el-form-item>
        <el-input
            v-model="form.desc"
            maxlength="300"
            type="textarea"
            placeholder="描述一下宝贝的品牌型号、货品来源..."
            show-word-limit
            :autosize="{ minRows: 4, maxRows: 6 }"
        />
      </el-form-item>

      <el-form-item>
        <el-upload
            class="upload-demo"
            :file-list="fileList"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-error="handleError"
        >
          <el-icon class="upload-icon"><Plus /></el-icon>
          <div class="upload-text">添加图片</div>
        </el-upload>
      </el-form-item>

      <el-form-item label="价格" prop="price">
        <el-input v-model="form.price" placeholder="￥0.00" />
      </el-form-item>
    </el-form>

    <el-dialog v-model="dialogVisible">
      <img class="dialog-image" :src="dialogImageUrl" alt="预览图" />
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps, UploadUserFile } from 'element-plus'

const form = ref({
  desc: '',
  price: '',
  shippingMethod: ''
})

const onSubmit = () => {
  console.log('submit!', form.value)
}

const fileList = ref<UploadUserFile[]>([])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  dialogImageUrl.value = uploadFile.url!
  dialogVisible.value = true
}

const handleError: UploadProps['onError'] = (err, file) => {
  console.error('Upload failed:', err, file);
}
</script>

<style scoped lang="scss">
.container {
  padding: 15px;
  background-color: #f8f9fa; /* 背景色 */
  border-radius: 8px;
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px; /* 顶部间距 */

    .title {
      font-size: 24px;
      font-weight: bold;
    }

    .submit-button {
      background-color: orange; /* 橙色按钮 */
      border-color: orange; /* 橙色边框 */
      color: white; /* 字体颜色 */
    }
  }

  .form-container {
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    height: calc(100% - 140px);
    .upload-demo {
      padding: 10px;
      text-align: center;
      cursor: pointer;
      color: #999;
      transition: border-color 0.3s;
      margin-top: 10px;

      &:hover {
        border-color: #409EFF;
      }

      .upload-icon {
        font-size: 28px;
        color: #409EFF;
      }

      .upload-text {
        margin-top: 8px;
        font-size: 14px;
        color: #666;
        line-height: 1.5; /* 适当行高 */
      }
    }
  }

  .dialog-image {
    width: 100%;
    max-height: 400px; /* 限制最大高度 */
    object-fit: contain; /* 让图像自动适应大小 */
  }
}

</style>
