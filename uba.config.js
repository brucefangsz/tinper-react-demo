/**
 * uba核心配置文件具体说明访问官网
 */
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
module.exports = env => {
  let uba = {
    config: {
      plugins: {
        static: {
          root: "src/static"
        },
        mock: {
          file: "uba.mock.js"
        },
        proxy: [{
          router: "/api/*",
          target: "https://cnodejs.org"
        }, {
          router: ["/users/*", "/orgs/*"],
          target: "https://api.github.com"
        }]
      },
      css: {
        name: "[name].[hash:8].css"
      },
      html: {
        xhtml: true,
        inject: "body",
        hash: env.production,
        favicon: "./src/assets/images/favicon.png",
        filename: 'index.html',
        template: "./src/index.html"
      },
      js: {
        min: env.production,
        optimize: true,
        opt: {
          test: /\.js($|\?)/i,
          sourceMap: env.production
        },
        name: "vendor",
        filename: "[name].[hash:8].js"
      },
      img: {
        limit: 8192,
        name: "images/[name].[hash:8].[ext]"
      }
    },
    pack: {
      devtool: env.production ? "source-map" : "cheap-module-eval-source-map",
      entry: {
        app: env.production ? "./src/index" : ["./src/index", env.HMR]
      },
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].[hash:8].bundle.js',
        publicPath: "/"
      },
      externals: {
        react: "React",
        "react-dom": "ReactDOM",
        "react-router": "ReactRouter",
        axios: "axios"
      },
      resolve: {
        alias: {
          components: path.resolve(__dirname, "src/components/"),
          assets: path.resolve(__dirname, "src/assets/"),
          containers: path.resolve(__dirname, "src/containers/"),
          static: path.resolve(__dirname, "src/static/")
        }
      },
      plugins: []
    }
  }
  if (env.production) {
    uba.pack.plugins.push(new CleanWebpackPlugin("dist"))
  }
  return uba;
}
