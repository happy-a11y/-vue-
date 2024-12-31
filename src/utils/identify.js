// identify.js
import { jwtDecode } from 'jwt-decode'; // 使用命名导入
import { ElMessage } from 'element-plus';

const SECRET_KEY = "secret"; // 实际使用时，建议使用更安全的方式存储密钥

export function verifyToken() {
    const token = localStorage.getItem('token');
    if (token) {
        try {
            const decoded = jwtDecode(token); // 直接使用 jwtDecode
            return decoded.user_id;
        } catch (err) {
            ElMessage.error('Token无效，请重新登录');
            localStorage.removeItem('token');
            return null;
        }
    }
    return null;
}
