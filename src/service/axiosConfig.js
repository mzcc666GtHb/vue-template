import axios from 'axios'

//判断环境
const baseURL = (() => {
  let tempEnv = process.env.NODE_ENV
  if (tempEnv === 'development') {
    return 'http://10.0.21.95:9000' //开发环境
  } else if (tempEnv === 'production') {
    return 'http://10.0.0.124:9000' //生产环境
  }
})()

//axios配置
const axiosCofig = {
  baseURL: baseURL,
  timeout: 30000,
  withCredentials: true,
  responseType: "json",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
  }
}

//创建实例
const Axios = axios.create(axiosCofig)

//转换成可以直接调用的
const apiMap = map => {
  let tempObj = {},
    toMethod = (options) => {
      return (params) => Axios[options.type](options.url, params)
    }
  for (let key in map) {
    tempObj[key] = toMethod(map[key])
  }
  return tempObj
}


//添加请求拦截器
Axios.interceptors.request.use(
  config => {
    //请求之前更改配置
    alert('开启')
    return config
  },
  err => {
    //在这里处理错误
    return Promise.reject(error)
  })

//添加响应拦截器
Axios.interceptors.response.use(
  res => {
    //在这里对返回的数据进行处理
    alert('结束')
    alert(res.data.message)
    return res
  },
  err => {

    //在这里处理错误
    return Promise.reject(error)
  })


export default {
  apiMap
}
