module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : './',

  pages: {
    home: {
      entry: './src/pages/home/home.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Fish Dreams',
    },

    about: {
      entry: './src/pages/about/about.js'
    }
  }
}