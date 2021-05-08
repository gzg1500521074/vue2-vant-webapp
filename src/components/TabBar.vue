<template>
	<div>
		<!-- 引入子组件 -->
		<van-tabbar v-model="active">
			<van-tabbar-item v-for="item in tarList" :key="item.name" :name="item.name" :icon="item.icon">{{
				item.text
			}}</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
export default {
	name: 'TabBar',
	props: {
		tarList: Array
	},
	data() {
		return {
			active: 'home'
		};
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
