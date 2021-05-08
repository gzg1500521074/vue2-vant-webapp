const autoprefixer = require('autoprefixer');
module.exports = {
	publicPath: './',
	// 在vue中开启eslint验证
	lintOnSave: true,
	devServer: {
		//  项目时是否打开浏览器
		open: false,
		//  开服务的端口(和跨域的端口无关)
		port: 8082,
		//  开启ssl
		https: false,
		hotOnly: false,
		proxy: {
			'/dualTeacher': {
				// target: 'http://127.0.0.1:3000', // 接口的域名
				target: 'https://d.geek-8.com', // 接口的域名
				// secure: false,  // 如果是https接口，需要配置这个参数
				changeOrigin: true
			}
		}
	},
	configureWebpack: (config) => {
		// 打开sourceMap
		config.devtool = 'source-map';
	},
	css: {
		loaderOptions: {
			postcss: {
				plugins: [
					autoprefixer(),
					require('postcss-pxtorem')({
						// 将实际像素换算成rem单位计算方式:  其实就是实际像素除以rootValue
						rootValue: function ({ file }) {
							// 要看设计稿，设计稿750，那这里就写750/10, 计算公式： 1rem = 设置宽度/设计稿宽度*rootValue = 375/750*75=37.5
							return file.indexOf('vant') !== -1 ? 37.5 : 75;
						}, //
						propList: ['*'], // 是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，可以写['*', '!border*']
						unitPrecision: 5, // 保留rem小数点多少位
						// selectorBlackList: ['van-'], //则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，里面有关px的样式将不被转换，这里也支持正则写法。
						replace: true, // 这个真不知到干嘛用的。有知道的告诉我一下
						mediaQuery: false, // 媒体查询( @media screen 之类的)中不生效
						minPixelValue: 12, // px小于12的不会被转换
						exclude: 'node_modules'
					})
				]
			}
		}
	}
};
