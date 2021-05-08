<template>
	<div class="home">
		<div class="box">
			<img class="icon" src="@/assets/img/logo2.png" />
			<span class="text">垂直居中</span>
		</div>
		<TabBar :tarList="tarList" />
	</div>
</template>

<script>
// @ is an alias to /src
import TabBar from '@/components/TabBar.vue';

export default {
	name: 'Home',
	components: {
		TabBar
	},
	data() {
		return {
			tarList: [
				{ name: 'post', icon: 'home-o', text: '职位' },
				{ name: 'recommended', icon: 'search', text: '有了' },
				{ name: 'msg', icon: 'friends-o', text: '消息' },
				{ name: 'my', icon: 'setting-o', text: '我的' }
			]
		};
	}
};
</script>

<style scoped lang="scss">
.box {
	width: 200px;
	height: 200px;
	border: 1px solid red;
}

.icon {
	display: inline-block;
	width: 55px;
	height: 55px;
	vertical-align: middle;
}
.text {
	font-size: 12px;
}
</style>
