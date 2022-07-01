import axios from 'axios'

export function request(config) {
  // 区分开发环境和生产环境
  let baseURL = ''

  if(process.env.VUE_APP_CURRENTMODE == 'production') {
    baseURL = 'http://159.138.57.207/:8080'
  }

  if(process.env.VUE_APP_CURRENTMODE == 'development') {
    baseURL = 'http://127.0.0.1:8080'
  }
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 5000
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  return instance(config)
}

function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
    .then(res => {
      resolve(res.data)
    })
    .catch(err => {
      reject(err.data)
    })
  })
}


function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, Qs.stringify(params))
    .then(res => {
      resolve(res.data)
    })
    .catch(err => {
      reject(err.data)
    })
  })
}

export {get, post}
