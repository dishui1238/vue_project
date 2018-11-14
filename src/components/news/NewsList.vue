<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../imgs/shuijiao.jpg">
						<div class="mui-media-body">
							<h1>葬花吟</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：2018-11-11</span>
                <span>浏览次数：0次</span>
              </p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../imgs/shuijiao.jpg">
						<div class="mui-media-body">
							<h1>葬花吟</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：2018-11-11</span>
                <span>浏览次数：0次</span>
              </p>
						</div>
					</a>
				</li>
        <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../imgs/shuijiao.jpg">
						<div class="mui-media-body">
							<h1>葬花吟</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：2018-11-11</span>
                <span>浏览次数：0次</span>
              </p>
						</div>
					</a>
				</li>
        <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../../imgs/shuijiao.jpg">
						<div class="mui-media-body">
							<h1>葬花吟</h1>
							<p class='mui-ellipsis'>
                <span>发表时间：2018-11-11</span>
                <span>浏览次数：0次</span>
              </p>
						</div>
					</a>
				</li>

			</ul>
  </div>
</template>

<script>
import {Toast} from 'mint-ui';

  export default{
    data(){
      return {
        newslist:[]
      }
    },
    created(){
      this.getNewsList()
    },
    methods:{
      getNewsList(){//获取新闻列表
        this.$http.get('2/news/latest').then(result=>{
          if(result.body.status === 0){
            this.newslist=result.body.message
          }else{
            Toast('获取列表失败！')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mui-table-view{
    li{
      h1{
        font-size: 14px;
      }
      .mui-ellipsis{
        font-size: 12px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
      }
    }
  }
</style>
