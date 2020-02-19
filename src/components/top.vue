<template>
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
</template>