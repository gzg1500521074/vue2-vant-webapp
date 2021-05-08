import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 引入移动端布局库
import 'amfe-flexible';

// 引入样式文件及解决1px像素文件
import '@/assets/reset.css';
import '@/assets/border.css';

// 按需导入vant
import vant from '@/plugin/vant.js';
Vue.use(vant);

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
