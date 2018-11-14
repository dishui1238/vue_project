<template>
  <div class="app-container">
    <!-- 顶部header区 -->
    <mt-header fixed title="固定在顶部"></mt-header>
    <!-- 中间的路由 router-view 区 -->
		<transition>
			<router-view></router-view>
		</transition>
		
    <!-- 底部 tabbar 区 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/message">
				<span class="mui-icon mui-icon-email"><span class="mui-badge mui-badge-danger">1</span></span>
				<span class="mui-tab-label">消息</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge mui-badge-danger">1</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/my">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>

  </div>
</template>

<script>
</script>

<style lang="css" scoped>
.app-container {
  padding-top: 40px;
	padding-bottom: 50px;
	overflow-x: hidden;
}
.v-enter,
{
	opacity: 0;
	transform:translate(100%);
}
.v-leave-to{
	opacity: 0;
	transform:translate(-100%);
	position: absolute;
}
.v-enter-active{
	transition: all 0.5s ease;
}
.v-leave-active{
	opacity: 0;
	transition: all 0.25s ease;
}
</style>

