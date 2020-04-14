import request from '../utils/request'

export const login = (data: any) => {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}
