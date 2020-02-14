import axios from 'axios'
import qs from 'qs'
const Api = {
    development:'',
    test:'',
    uat:'',
    production:''
}
const http = {}
const service = axios.create({
    baseURL:Api[process.env.NODE_ENV],
    timeout:60000
})
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 请求拦截器
service.interceptors.request.use(
    config =>{
        const token = window.localStorage.getItem('token')
        if(token){
            config.headers.common['Authorization'] = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// 响应拦截器
service.interceptors.response.use(
    res=>{
        return res.data
    },
    error => {
        Promise.resolve(error.response).then(checkReject)
    }
)
const checkReject = res =>{
    switch (res.status) {
        case 401:{

        }
        default:{

        }
    }
}

http.get = function (url,params) {
    return new Promise((resolve,reject) =>{
        service({
            method:'get',
            url,
            params
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}
http.post = function (url,params) {
    return new Promise((resolve,reject) =>{
        service({
            method:'post',
            url,
            data:qs.stringify(params)
        }).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })
}

// index.js 使用
// import http from './http.js'
// export const userLogin = (params) =>{
//     return http.post('api/vi/auth/login',params)
// }
