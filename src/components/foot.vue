<template>
<div class="footBox">
    <div @click="onClickLeft" class="footBack"><img src="@/assets/img/back.png" width="50%"></div>
    <div class="footGod">
      <img src="@/assets/img/msg.png" width="35%" height="35%" @click="next">
      <span style="padding-bottom:1rem">90</span>
    </div>
    <div class="footCol"><img src="@/assets/img/zan.png" width="35%" height="35%" @click="zan">{{like_count}}</div>
    <div class="footDow" @click="collect">
		<img src="@/assets/img/shouc.png" width="45%" v-show="downIcon">
		<img src="@/assets/img/yisc.png" width="45%" v-show="!downIcon">
	</div>
    <div class="footDow"><img src="@/assets/img/share.png" width="45%"></div>
</div>
</template>
<script>
import jquery from '../assets/js/jquery-1.js'
export default {
	data(){
		return {
			like_count:10,
			downIcon:true
		}
	},
  methods: {
    onClickLeft() {
      this.$router.replace('/')
    },
    next(){
      this.$router.replace('/comment')
	},
	// 点赞
	zan(){
		if(this.flg){
			this.like_count++;
			this.flg = false;
		}
		else{
			this.like_count--;
			this.flg = true;
		}
	},
	// 收藏
	collect(){
		this.downIcon=!this.downIcon
	}
  }
}
</script>
<style>
/* 底部定位 */
.footBox{background-color:#fff;width:100%;height:3rem;position: fixed;bottom: 0;z-index: 999;display:flex;justify-content: space-between;align-items: center;}
.footBack{border-right:0.1rem solid #ccc;}
.footGod{margin-left:1rem}
</style>