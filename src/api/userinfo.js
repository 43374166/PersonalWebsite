import { request } from "./request";

let token = localStorage.getItem('token')

function getUserinfo(url) {
  return request({
    method: 'get',
    url: url,
    headers: {'authorization': token}
  })
}

function updateUserinfo(url, params) {
  return request({
    method: 'post',
    url: url,
    data: params,
    headers: {'authorization': token}
  })
}

function updateAvatar(url, params) {
  return request({
    method: 'post',
    url: url,
    data: params,
    headers: {
      'authorization': token,
      'Content-Type': 'multipart/form-data'
    }
  })
}

export {getUserinfo, updateUserinfo, updateAvatar}