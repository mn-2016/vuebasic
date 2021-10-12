/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';

// 环境切换
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'http://58.243.0.26:81/api';
    // axios.defaults.baseURL = 'http://139.9.170.94:8002/api';
} else if (process.env.NODE_ENV == 'test') {
    axios.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = '';
}

// 请求超时时间
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = false;
// 请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截
axios.interceptors.request.use(
    config => {
        const token = localStorage.getItem("token");
        token && (config.headers.token = token);
        return config;
    },
    error => {
        return Promise.error(error);
    })

// 响应拦截
axios.interceptors.response.use(
    response => {
        // -2  token过期
        // -3 字段验证没有通过
        if (response.data.code === -2) {
            localStorage.removeItem('token');
            window.location.href="#/login";
            return Promise.resolve(response);
        } else {            
            return Promise.resolve(response);
        }    
    },
    // 服务器状态码不是200的情况
    error => {        
        return Promise.reject(error)
    }
)
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params, headers = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params), headers)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/**
 * postFile方法，上传文件或者图片
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
*/

export function postImg(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}