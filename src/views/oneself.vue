<template>
    <div>
        <div class="oneselfTop"><img src="@/assets/img/back.png" width="10%" @click="come"></div>
        <div class="oneselfName">
            <div><img src="@/assets/img/Coding.png" width="30%"></div>
            <div class="oneselfNames">云牧91373</div>
        </div>
        <div class="oneselfContent">
            <div class="osContents">
                <div>我的收藏</div>
                <div><img src="@/assets/img/arrow_right.png" width="80%"></div>
            </div>
            <div class="osContents">
                <div>我的消息</div>
                <div><img src="@/assets/img/arrow_right.png" width="80%"></div>
            </div>
        </div><!-- oneselfContent -->
        <div class="onselfSet">
            <div class="onselfSets">
                <div><img src="@/assets/img/moon.png" width="55%"></div>
                <div>夜间模式</div>
            </div>
            <div class="onselfSets">
                <div><img src="@/assets/img/shezhi.png" width="75%"></div>
                <div>设置</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
    come() {
      this.$router.replace('/')
    }
  }
}
</script>
<style>
.oneselfTop{width:100%;height:2rem;text-align:left;margin: 1rem 0}
.oneselfTop img{margin-left:0.5rem}
.oneselfNames{font-size:1.3rem}
.oneselfContent{margin-top:2rem}
.osContents{border-top:0.1rem solid #ccc;padding:0.6rem 1rem;display:flex;justify-content: space-between;align-items: center;font-size:1.1rem}
.onselfSet{display:flex;justify-content:center;width:100%;height:4rem;position: fixed;bottom: 2rem;z-index: 999;}
.onselfSets:last-child{margin-left:5rem}
</style>