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

  // 配置多页面
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
      filename: 'about/index.html'
    },

    login: {
      entry: './src/pages/login&register/login/login.js',
      title: '鱼梦-登录',
      filename: 'login/index.html'
    },

    register: {
      entry: './src/pages/login&register/register/register.js',
      title: '鱼梦-注册',
      filename: 'register/index.html'
    },

    forgetPwd: {
      entry: './src/pages/login&register/forgetPwd/forgetPwd.js',
      title: '鱼梦-找回密码',
      filename: 'forgetPwd/index.html'
    },

    personalcenter: {
      entry: './src/pages/personalCenter/personalCenter.js',
      title: '鱼梦-个人中心',
      filename: 'personalCenter/index.html'
    },
  },

  // 设置测试本地启动主机和端口
  devServer: {
    port: 8000, // 端口号
    open: true, // 是否自动打开浏览器
  }
}