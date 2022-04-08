const path = require('path');

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : './',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'pages': '@/pages',
        'router': '@/router',
        'store': '@/store',
        'api': '@/api',
      }
    }
  },
  pages: {
    home: {
      entry: './src/pages/home/home.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '鱼梦',
    },

    about: {
      entry: './src/pages/about/about.js',
      title: '关于-鱼梦',
    },

    login: {
      entry: './src/pages/login&register/login/login.js',
      title: '鱼梦-登录',
    },

    register: {
      entry: './src/pages/login&register/register/register.js',
      title: '鱼梦-注册',
    },

    forgetPwd: {
      entry: './src/pages/login&register/forgetPwd/forgetPwd.js',
      title: '鱼梦-找回密码',
    },

    personalCenter: {
      entry: './src/pages/personalCenter/personalCenter.js',
      title: '鱼梦-个人中心',
    },
  }
}