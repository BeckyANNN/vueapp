<template>
    <footer>
        <div v-for="(foot,i) in footList" :key="i">
            <router-link  :to="{name:foot.name}">
                <i class="iconfont" v-html="foot.icon"></i>
				<!-- <i class="iconfont icon-query"></i> -->
                <span>{{foot.txt}}</span>
            </router-link>
        </div>
    </footer>
</template>

<script>
import {mapState} from "vuex";
export default {
	computed:{
		...mapState([
			"footList"
		]),
		...mapState({
			list:"footList"
		})
	},
	mounted(){
		
	}
}
</script>

<style scoped lang="less">

footer{
	position:fixed;
	width:100%;
	height:90px;
	left:0;
	bottom:0;
	background:#fff;
	display:flex;
    z-index:100;
    border-top:1px solid black;
	div{
		flex:1;
		height:90px;
		a{
			display: block;
			width:100%;
			height:100%;
			display:flex;
			flex-direction:column;
			box-sizing:border-box;
			padding:6px 0;
			text-align:center;
			font-family:"微软雅黑";
			color:#999;
			i{
			width:100%;
			height:45px;
			line-height:45px;
			font-size:42px !important;
			}
			span{
				width:100%;
				height:35px;
				line-height:35px;
				font-size:26px;
			}
		}
		.router-link-active{
			color:#0dc441;
		    border-color:#0dc441;
		}
		.ft-active-1{
			color:#0dc441;;
			border-color:#0dc441;
		}
	}
}
</style>
