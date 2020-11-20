// 封装axios
import axios from 'axios'
import { Toast } from 'vant';

// 创建一个实例
const http = axios.create({
    // 基础路径
    baseURL: '/api',
    // 超时，如果请求的时间大于超时时间，就会判定请求失败
    timeout: 10000,
})

// 响应拦截 处理请求返回回来的结果
http.interceptors.response.use(res => {
    // 请求拿到的结果直接就是需要的数据
    return res.data
}, err => {
    // 请求失败的错误
    // 根据状态码来判断
    let status = err.response && err.response.status
    if (status === 400) {

    }
    if (status === 401) {

    }
    if (status === 403) {

    }
    if (status === 404) {

    }
    if (status === 405) {

    }
})