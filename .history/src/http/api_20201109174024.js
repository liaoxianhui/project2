import {get } from 'core-js/fn/dict'
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
        return http.get('/recommend')
    },
    getSearch(value) {
        return http.get('/search', {
            value,
        })
    },
    getClassify(id) {
        return http.get(`/classification?mallSubId=${id}`)
    },
    getCard() {
        return http.get('/getCard')
    },
    getEditCart(count, id, mallPrice) {
        return http.post('/editCart', {
            count,
            id,
            mallPrice,
        })
    },
    getDeleteShop(id) {
        return http.post('/deleteShop', {
            id,
        })
    },
    getOrder(address, tel, orderId, totalPrice, idDirect, count) {
        return http.post('/order', {
            address,
            tel,
            orderId,
            totalPrice,
            idDirect,
            count,
        })
    },
    getGoods(id) {
        return http.get(`/goods/one?id=${id}`)
    },
    getCollection(goods) {
        return http.post('/collection', goods)
    },
    getCancelCollection(id) {
        return http.post('/cancelCollection', id)
    },
    getIsCollection(id) {
        return http.post('/isCollection', id)
    },
    getAddShop(id) {
        return http.post('/addShop', id)
    },
    getLoginOut() {
        return http.post('/loginOut', {})
    },
    getQueryUser() {
        return http.post('/queryUser', {})
    },
    getSaveUser(gender, year, month, day, id, nickname) {
        return http.post('/saveUser', {
            gender,
            year,
            month,
            day,
            id,
            nickname,
        })
    }

}


// 15. 修改保存用户信息(post)
// /saveUser
// 参数:
// gender: 性别
// year: 年
// month: 月
// day: 日
// id: 用户id
// nickname: 昵称

// 16. 查询用户订单数量(get)
// /myOrder/orderNum

// 17. 商品评论(post)
// /goodsOne/comment
// 参数:
// id: 商品cid
// rate: 分数
// content: 内容
// anonymous: 是否匿名 
// _id: 商品的_id
// order_id: 商品的order_id
// image: []

// 18. 获取登录注册默认验证码(get)
// /v1/verify

// 19. 查询用户收货地址(get)
// /getAddress

// 20. 查询默认收货地址(get)
// /getDefaultAddress

// 21. 设置默认收货地址(post)
// /setDefaultAddress
// 参数:
// id: 地址id

// 22. 增加收货地址(post)
// /address
// 参数:
// name:用户名
// tel:电话
// address:(省+市+区+详情地址)
// isDefault:是否默认
// province:省
// city:市
// county:区
// addressDetail:详情地址，
// areaCode:地区代码
// id:修改地址时候要传id

// 23. 删除地址(post)
// /deleteAddress
// 参数:
// id:地址_id

// 24. 查询我的收藏(get)
// /collection/list

// 25. 注册(post)
// /register
// 参数:
// nickname: 用户名
// password:密码
// verify:验证码

// 26. 登录(post)
// /login
// 参数:
// nickname: 用户名
// password:密码
// verify:验证码

// 27. 订单查询(get)
// /getMyOrder

// 28. 查询已评价(get)
// /alreadyEvaluated

// 29. 查询未评价(get)
// /tobeEvaluated

// 30. 查询单条评论(post)
// 参数: 
// id:商品id
// _id:数据库的那条id