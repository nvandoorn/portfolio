exports.modifyWebpackConfig = ({ config, stage }) => {
  const program = {
    directory: __dirname,
    browserslist: ['> 1%', 'last 2 versions', 'IE >= 9'],
  }

  return generateBabelConfig(program, stage).then(babelConfig => {
    config.removeLoader('js').loader('js', {
      test: /\.jsx?$/,
      exclude: modulePath => {
        return (
          /node_modules/.test(modulePath) &&
          !/node_modules\/(swiper|dom7)/.test(modulePath)
        )
      },
      loader: 'babel',
      query: babelConfig,
    })
  })
}
