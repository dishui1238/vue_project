<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
     <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/NewsList">
            <img src="../../imgs/menu1.png">
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newsList">
            <img src="../../imgs/menu2.png">
            <div class="mui-media-body">Email</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newsList">
            <img src="../../imgs/menu3.png">
            <div class="mui-media-body">Chat</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newsList">
            <img src="../../imgs/menu4.png">
            <div class="mui-media-body">location</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newsList">
            <img src="../../imgs/menu5.png">
            <div class="mui-media-body">Search</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newsList">
            <img src="../../imgs/menu6.png">
            <div class="mui-media-body">Phone</div>
          </router-link>
        </li>
    </ul> 
  </div>
</template>

<script>
// export default {
//   data() {},
//   created() {
//     this.getLunbotu();
//   },
//   methods: {
//     // 获取轮播图的方法
//     getLunbotu() {
//       this.$http.get().then();
//     }
//   }
// };
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: orange;
    }
    &:nth-child(3) {
      background-color: #ccc;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: none;
  img{
    width: 60px;
  }
}
</style>
