import { createService } from '@/utils/identify.js';

const service = createService('http://localhost:3000');
// 登录接口
export const ApiLogin = (data) => {
    return service.post('/login', data);
};