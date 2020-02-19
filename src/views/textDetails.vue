<template>
<div>
    <div class="topAll">
        <div class="detailsTop">
            <img :src="main.image">
        </div>
        <div class="detailstitle">
            {{main.title}}
            <div class="subTitle">{{main.image_source}}</div>
        </div>
        <div v-html="main.body" class="dParagraph"></div>
    </div>
    <foot />
</div>
</template>
<script>
import foot from '@/components/foot.vue'
export default {
    components:{
        foot
    },
    data() {
        return {
            id:'',
            main:''
        }
    },
    mounted:function(){
        // this.id = this.$route.params.id
        this.axios.get('news/3892357').then(res => {
            this.main = res.data
        })
    }
}
</script>
<style>
.detailsTop{position:relative;width:100%;height:50%}
.topAll img{width:100%}
.detailstitle{position:absolute;top:18rem;color:#fff;font-size:1.2rem;text-align:left;padding:0 0.5rem;line-height:2rem}
.subTitle{text-align:right;font-size:1rem;color:#999}
.dParagraph{padding:0 0.5rem}
.dParagraph p{text-align:left;text-indent:1rem;line-height:1.5rem;margin:1rem 0}
.dParagraph p:last-child{margin-bottom:4rem}
.meta{text-align:left;margin:1rem 0.5rem}
.question-title{text-align:left;font-size:1.3rem;margin:1rem 0.5rem}
.meta img{width:50px!important}
</style>