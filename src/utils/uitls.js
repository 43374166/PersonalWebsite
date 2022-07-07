import JSEncrypt from 'jsencrypt' // 前端密码加密

/**
 * 加密
 * @params key 加密公钥
 * @params field 需要加密的字段
 */
 export const encryption = (key, field) => {
  const encrypt = new JSEncrypt();
  encrypt.setPublicKey(key);
  return encrypt.encrypt(field);
};