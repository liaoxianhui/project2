// 检查当前用户是否登陆
import { Dialog, Toast } from 'vant'
import router from '../router'

// 检查是否登陆
export const checkLogin = ({ next, params }) => {
    let user = localStorage.getItem('user')
    if (!user) {
        Dialog.confirm({
            title: '您当前没有登陆',
            message: '是否跳转到登录页面'
        }).then(() => {
            router.push('/')
        }).catch(() => {
            Toast('您取消了操作')
        })
    } else {
        // 登录了
        next(params)
    }
}

// 存历史(搜索: search，收藏: collection，浏览: browse)
export const saveHistory = ({ key, item }) => {
    let user = JSON.parse(localStorage.getItem('user'))
    let username = user && user.username
        // 存到本地
        // 判断当前的用户是否之前有记录
        // 在本地存储里面存的都是数组 而这个数组的名字 username+key+'history'
    let name = username + key + 'history'
    if (localStorage.getItem(name)) {
        // 之前已经有记录了
        let arr = JSON.parse(localStorage.getItem(name))
        let flag = true
            // 是否是重复的数据
        if (key === 'record' || key === 'browse') {
            // 存的都是商品对象
            arr.map(opt => {
                if (opt.id === item.id) {
                    flag = false
                }
            })
        } else {
            arr.map(opt => {
                if (opt.id == item.id) {
                    flag = false
                }
            })
        }
        if (flag) {
            arr.push(item)
        }
        localStorage.setItem(name, JSON.stringify(arr))
    } else {
        // 用户没有记录
        let arr = []
        arr.push(item)
        localStorage.setItem(name, JSON.stringify(arr))
    }
}

// 存用户名
export const useradmin = (user) => {

}