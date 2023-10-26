/**
 * Webpack main configuration file
 */

const path = require('path')
const fs = require('fs')
const webpack = require('webpack') 
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const environment = require('./configuration/environment')

const templateFiles = fs.readdirSync(environment.paths.source)
  .filter((file) => ['.html', '.ejs'].includes(path.extname(file).toLowerCase())).map((filename) => ({
    input: filename,
    output: filename.replace(/\.ejs$/, '.html')
  }))

const htmlPluginEntries = templateFiles.map((template) => new HTMLWebpackPlugin({
  inject: true,
  hash: false,
  filename: template.output,
  template: path.resolve(environment.paths.source, template.input),
  favicon: path.resolve(environment.paths.source, 'assets/images', 'AutoRide-Logo-Favicon.png')
}))

module.exports = {
  entry: {
    app: path.resolve(environment.paths.source, 'index.tsx')
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'js/[name].js',
    path: environment.paths.output
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }]
            ]
          }
        }
      },
      {
        test: /\.(ts|tsx)$/, 
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|gif|jpe?g|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: environment.limits.images
          }
        },
        generator: {
          // filename: 'images/design/[name].[hash:6][ext]'
        }
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: environment.limits.images
          }
        },
        generator: {
          // filename: 'images/design/[name].[hash:6][ext]'
        }
      },
      {
        test: /\.(scss)$/,
        use: [{
          // inject CSS to page
          loader: 'style-loader'
        }, {
          // translates CSS into CommonJS modules
          loader: 'css-loader'
        }, {
          // Run postcss actions
          loader: 'postcss-loader',
          options: {
            // `postcssOptions` is needed for postcss 8.x;
            // if you use postcss 7.x skip the key
            postcssOptions: {
              // postcss plugins, can be exported to postcss.config.js
              plugins: () =>  [
                require('autoprefixer')
              ]
            }
          }
        }, {
          // compiles Sass to CSS
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource"
      }
    ]
  },
  resolve: {
    extensions: [".*", ".js", ".jsx", ".ts", ".tsx"],
  },
  optimization: {
    minimizer: [
      '...',
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              // Svgo configuration here https://github.com/svg/svgo#configuration
              [
                'svgo',
                {
                  plugins: [
                    {
                      name: 'removeViewBox',
                      active: false
                    }
                  ]
                }
              ]
            ]
          }
        }
      })
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CleanWebpackPlugin({
      verbose: true,
      cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json']
    }),
    new ESLintPlugin(),
    new webpack.HotModuleReplacementPlugin()
    // new CopyWebpackPlugin({
    // patterns: [
    //   {
    //     from: path.resolve(environment.paths.source, 'images', 'content'),
    //     to: path.resolve(environment.paths.output, 'images', 'content'),
    //     toType: 'dir',
    //     globOptions: {
    //       ignore: ['*.DS_Store', 'Thumbs.db']
    //     }
    //   },
    //   {
    //     from: path.resolve(environment.paths.source, 'videos'),
    //     to: path.resolve(environment.paths.output, 'videos'),
    //     toType: 'dir',
    //     globOptions: {
    //       ignore: ['*.DS_Store', 'Thumbs.db']
    //     }
    //   }
    // ]
    // })
  ].concat(htmlPluginEntries),
  target: 'web'
}
