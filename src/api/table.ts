import request from '../utils/request'

export const getTableList = (params: any) => {
    return request({
        url: '/table',
        method: 'get',
        params
    })
}
