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
      }
    }
  },
  pages: {
    home: {
      entry: './src/pages/home/home.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Fish Dreams',
    },

    about: {
      entry: './src/pages/about/about.js'
    },

    login: {
      entry: './src/pages/login/login.js'
    },

    about: {
      entry: './src/pages/register/register.js'
    },
  }
}