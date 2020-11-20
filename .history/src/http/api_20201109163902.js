// 封装所有的请求
import http from './index'
export default {
    // 对象的属性就是请求的方法名
    login({ usernam, password }) {
        return http.post('/login', {
            usernam,
            password,
        })
    },
    getRecommend() {
        return http.get('/Recommend')
    }
}