import {
  request
} from "./request";

function get(url, params) {
  return request({
    method: 'get',
    url: url,
    data: params
  })
}

function sentEmaliV(url, parmas) {
  return request({
    method: 'post',
    url: url,
    data: {
      email: parmas.email
    }
  })
}

function register(url, parmas) {
  return request({
    method: 'post',
    url: url,
    data: parmas
  })
}

function login(url, params) {
  return request({
    method: 'post',
    url,
    data: params
  })
}

function forgetPwdGetCode(url, params) {
  return request({
    method: 'post',
    url,
    data: params
  })
}

function changePwd(url, params) {
  return request({
    method: 'post',
    url,
    data: params
  })
}

function getVersion() {
  return request({
    method: 'get',
    url: '/api/getVersion'
  })
}

export {
  get,
  sentEmaliV,
  register,
  login,
  forgetPwdGetCode,
  changePwd,
  getVersion
}