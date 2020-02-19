<template>
<div>
    <div id="indexTop">
        <!-- it是首页头部的缩写 -->
        <div class="itLeft">
            <div class="itTime">
                <div class="itTime_day">{{day}}</div>    
                <div class="itTime_month">{{month}}月</div>
            </div>   
            <div class="itTitle">{{sayHao}}</div>    
        </div><!--左-->
        <div class="itRight">
            <img src="@/assets/img/Coding.png" width="50rem" height="50rem" @click="gos">
        </div><!--右-->
    </div><!-- 头部 -->
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" :head-height="80">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in swiperList" :key="item.id" @click="back">
                <!-- <a :href="item.url"> -->
                    <img :src="item.image">
                    <p>
                        {{item.title}}
                        <span>{{item.hint}}</span>
                    </p>
                <!-- </a> -->
            </van-swipe-item>
        </van-swipe><!-- 轮播 -->
        <div id="listBox" @click="to_back" v-for="item in conList" :key="item.id">
            <!-- <a :href="item.url" > -->
                <div class="listLeft">
                    <div class="big">{{item.title}}</div>
                    <div class="small">{{item.hint}}</div>
                </div>
                <img :src="item.images">
            <!-- </a> -->
        </div>
    </van-pull-refresh><!--下拉刷新-->
</div>
</template>
<script>
import { Toast } from 'vant';
import hello from '../assets/js/hello.js'
export default {
    data() {
        return {
            day:'',
            month:'',
            sayHao:'',
             // 刷新
            count: 0,
            isLoading: false,
            // 接口
            swiperList:[],
            conList:[]
        }
    },
    methods: {
        back(){
            this.$router.replace('/textDetails')
        },
        gos(){
            this.$router.replace('/oneself')
        },
        to_back(){
            this.$router.replace('/textDetails')
        },
        onRefresh() {
        setTimeout(() => {
            this.isLoading = false;
        }, 1000);
        }
    },
    // mounted:function(){
       
    // },
    mounted(){
        // this.axios.get("news/latest").then(res => {
        //     this.swiperList=res.data.top_stories;
        //     this.conList=res.data.stories
        // }),
        var _this = this;
        this.axios.get("news/latest").then(res => {
        for (let i = 0; i < res.data.top_stories.length; i++) {
            if (res.data.top_stories[i].image.indexOf("pic3") != -1) {
            res.data.top_stories[i].image = res.data.top_stories[i].image.replace(
                /pic3/,
                "pic1"
            );
            }
        }
        for (let i = 0; i < res.data.stories.length; i++) {
            if (res.data.stories[i].images[0].indexOf("pic3") != -1) {
            res.data.stories[i].images[0] = res.data.stories[i].images[0].replace(
                /pic3/,
                "pic1"
            );
            }
        }
        this.swiperList = res.data.top_stories;
        this.conList=res.data.stories;
        });
        this.day = getNowDate().getDate();
        this.month = getNowDate().getMonth()+1;
        let sayHao = getNowDate().getHours();
        switch(sayHao){
                case 0:;
                case 1:;
                case 2:;
                case 3:;
                case 4:;
                case 5:;
                case 6:;
                case 7:;
                case 8 : this.sayHao = '早上好' ; break;
                case 9:;
                case 10:;
                case 11:;
                case 12:;
                case 13 : this.sayHao = '中午好' ; break;
                case 14:;
                case 15:;
                case 16:;
                case 17:;
                case 18:;
                case 19 : this.sayHao = '下午好' ; break;
                case 20:;
                case 21:;
                case 22:;
                case 23 : this.sayHao = '晚上好' ; break;
        }
        }
    }
    var getNowDate = function(){
        return new Date();
    }
</script>
<style>
*{padding:0;margin:0}
#indexTop{display:flex;justify-content: space-between}
.itLeft{width:65%;display:flex;justify-content: flex-start;align-items: center}
.itTime{border-right:0.1rem solid #ccc;padding:0rem 1.5rem;margin:0.8rem 1rem 0.8rem 0}
.itTime_day{font-size:1.8rem}
.itTime_month{font-size:0.8rem}
.itTitle{font-size:1.8rem;font-weight:540}
.itRight{margin-right:1rem;display:flex;align-items: center}
/* 轮播 */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  }
.van-swipe__indicators{
    left:90%!important
}
.my-swipe .van-swipe-item {width: 100%;}
.van-swipe-item  img{width: 100%;}
.van-swipe-item  p{width: 85%;padding-left: 1rem;position: absolute;font-size: 1.4rem;font-weight: 600;bottom: 2rem;color: #fff;text-align: left}
.van-swipe-item p span{display: block;font-weight: 400;font-size: 0.8rem;padding-top: 0.5rem;}
.van-swipe__indicators{position: absolute;bottom: 12px;left: 85%;}
/* 列表 */
#listBox{display: flex;justify-content: space-between;text-align: left}
.listLeft{width:85%;padding:1rem 0 1.8rem 0.5rem}
.listLeft .big{font-size:1.1rem;font-weight:bold}
.listLeft .small{font-size:1rem;color:#999;margin-top:0.5rem}
#listBox img{padding:1rem 1rem;width:25%;height:25%;text-align:right}
</style>