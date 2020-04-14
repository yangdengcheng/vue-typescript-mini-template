import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use((config) => {
    // 增加请求逻辑的内容写在这里，例如token
    return config
}, (error) => {
    Promise.reject(error)
})

/**
 * 响应拦截器
 */
service.interceptors.response.use((response) => {
    const res = response.data
    if (res.code !== 200) {
        Message({
            message: res.message || 'Error',
            type: 'error',
            duration: 2 * 1000
        })
        return Promise.reject(new Error(res.message || 'Error'))
    } else {
        return res
    }
}, (error) => {
    Message({
        message: error.message,
        type: 'error',
        duration: 2 * 1000
    })
    return Promise.reject(error)
})

export default service
