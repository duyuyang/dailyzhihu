<template>
    <div>
        <div class="commentTop">
            <img src="@/assets/img/back.png" @click="one" width="10%"><span>{{all}}条评论</span>
        </div>
        <div class="lang">
            <div class="langText">{{long}}条长评</div>
            <div class="langEssay" v-for="item in langList" :key="item.id">
                <img :src="item.avatar" width="10%" height="10%" style="border-radius:2rem">
                <div class="langcom">
                    <div>{{item.author}}</div>
                    <div>{{item.content}}</div>
                    <div class="langtime"><div>{{item.time}}</div><div class="langtimeRight"><img src="@/assets/img/zan1.png" width="15%"><img src="@/assets/img/message.png" width="15%"></div></div>
                </div>
            </div>
        </div>
        <div class="lang"><!-- 短评 -->
            <div class="shortText"><div>{{short}}条短评</div><img src="@/assets/img/back.png" width="10%"></div>
            <div class="langEssay" v-for="items in shortList" :key="items.id">
                <img :src="items.avatar" width="10%" height="10%" style="border-radius:2rem">
                <div class="langcom">
                    <div>{{items.author}}</div>
                    <div>{{items.content}}</div>
                    <div class="langtime"><div>{{items.time}}</div><div class="langtimeRight"><img src="@/assets/img/zan1.png" width="15%"><img src="@/assets/img/message.png" width="15%"></div></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 接口
            langList:'',
            shortList:''
        }
    },
    methods:{
        one() {
            this.$router.replace('/textDetails')
        }
    },
     mounted:function(){
        this.axios.get("story/4232852/long-comments").then(res => {
            this.langList=res.data.comments;
        }),
        this.axios.get("story/4232852/short-comments").then(res => {
            this.shortList=res.data.comments;
        }),
        this.axios.get("story-extra/3892357").then(res => {
            this.long=res.data.long_comments;
            this.short=res.data.short_comments;
            this.all=res.data.comments;
        })
    }
}
</script>
<style>
.commentTop{display:flex;align-items: center;margin-top:1rem}
.commentTop span{margin:0 auto}
.langText,.sortText{text-align:left;font-size:1.1rem;color:#000;margin:1rem 0.5rem}
.langEssay{display:flex;justify-content: flex-start;padding:1rem 0.5rem;border-bottom:0.1rem solid #ccc}
.langcom{text-align:left;margin:0 1rem}
.langtime{display: flex;justify-content:space-between;margin-top:1rem}
.langtimeRight{width:50%;text-align:right}
.langtimeRight img:first-child{margin-right:1rem}
.shortText{border-bottom:0.1rem solid #ccc;padding:0.5rem;margin:0;display: flex;justify-content:space-between;align-items: center}
</style>