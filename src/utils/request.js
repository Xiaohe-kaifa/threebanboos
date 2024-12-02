// 引入 Axios 库
import axios from "axios";

// 创建一个 Axios 实例
const service = axios.create({
<<<<<<< HEAD
  baseURL: 'http://127.0.0.1:8000/', // API 基础 URL
  timeout: 5000, // 请求超时时间
  withCredentials: true,//设置是否允许跨域请求携带凭证
  crossDomain: true
=======
  baseURL: 'http://127.0.0.1:8000', // API 基础 URL
  timeout: 20000, // 请求超时时间
  withCredentials: true//防止每次请求时session都变化
>>>>>>> 85ac70ebb1e6dca1ea4e166c6dbc581239dfc71e
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// 封装 GET 请求
export async  function http (url, params,type)  {
    switch (type.toUpperCase()) {
        case 'GET': {
          switch(typeof params){
            case 'undefined':
              return await service.get(url);; // 返回处理后的响应数据
            case 'string':
              return await service.get(url + params);; // 返回处理后的响应数据
          }
        }
        case 'POST':
          return await service.post(url, params );; // 返回处理后的响应数据
        case 'POST-X':
          promise = service.post(url, params, {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            },
          })
          break
        case 'PATCH':
          promise = service.patch(url, params)
          break
        case 'DELETE':
            const response = await service.delete(url + params );
            return response; // 返回处理后的响应数据
        case 'PUT':
          return await service.put(url, params );;
      }
};

