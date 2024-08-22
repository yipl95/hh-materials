module.exports = {
  module: {
    rules: [
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.(jpeg|png)(\?\S*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            // 图片大小小于15kb，就会被base64处理
            // 优点: 减少请求数量（减轻服务器压力）
            // 缺点：图片体积会更大（文件请求速度更慢）
            limit: 15 * 1024
          }
        },
      },
      {
        test: /\.(sc|sa|c)ss$/i,
        use: [
          "sass-loader",
        ]
      }
    ],
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://csc-dev.boundless-tech.com.cn/backend',
        secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
};
