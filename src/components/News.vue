<template>
 <div class="News">
   <!-- 滚动公告开始-->
   <div id="ad_remove">
     <ul id="con1" ref="con1" :class="{anim:animate==true}">
       <li v-for='item in items'><i class="el-icon-message-solid" style="color: deeppink"></i>&nbsp;&nbsp;{{item.name}}</li>
     </ul>
   </div>
   <!--滚动公告结束-->

   <div class="news">
     <div style="width: 980px;margin: 0 auto"><img src="../../static/images/newtlt.jpg" style="width: 100%"></div>
     <ul>
       <li v-for="content in contents" class="news_li">
         <router-link to="/newsdesc" tag="img" :src="content.src" class="news_img"></router-link>
         <router-link to="/newsdesc" class="news_title">{{content.title}}</router-link>
         <p class="news_p">{{content.time}}</p>
       </li>
     </ul>
   </div>

 </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    name:"News",
    data() {
      return {
        animate:false,
        items:[
          {name:"这个身高188的男孩，穿得比我还显矮！"},
          {name:"“ 啊啊啊 —— 夏天我也想成为这样的小仙女 ！“"},
          {name:"GIRL POWER 集结新女性“力”场"}
        ],
      }

    },

    created(){
      this.$store.dispatch('changeShow','news');
      setInterval(this.scroll,2000) // 在钩子函数中调用我在method 里面写的scroll()方法，注意此处不要忘记加this,我在这个位置掉了好几次坑，都是因为忘记写this。
    },
    methods: {
      scroll(){
        let con1 = this.$refs.con1;
        con1.style.marginTop='-30px';
        this.animate=!this.animate;
       const that = this; // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
        setTimeout(function(){
          that.items.push(that.items[0]);
          that.items.shift();
          con1.style.marginTop='0px';
          that.animate=!that.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
        },500)
      }
    },
    computed:{
      ...mapGetters({
        contents:'getNews'
      })
    }
  }
</script>

<style scoped>
  .News{
    /*background: pink;*/
  }
  /*滚动公告开始*/
  #ad_remove{
    width: 300px;
    height: 32px;
    line-height: 30px;
    overflow: hidden;
    padding-left: 258px;
    transition: all 0.8s;
  }
  .anim{
    transition: all 0.8s;
  }
  #con1 li{
    list-style: none;
    line-height: 30px;
    height: 30px;
  }
  /*滚动公告结束*/
/*news star*/
  .news{padding-top: 10px}
  .news ul{width:984px;margin: 0 auto}
  .news_li{display: inline-block;border: 1px solid #ccc;width: 226px;margin: 10px;box-sizing: border-box;height: 243px;vertical-align: top }
  .news_img{max-width: 100%;height: auto;cursor: pointer;}
  .news_title{word-wrap: break-word;word-break: break-all;color: #111;font-size: 16px;font-weight: bold;margin: 16px 0;display: inline-block;line-height: 20px;height: 40px;}
  .news_p{white-space: nowrap; line-height: 16px;font: 14px;color:#999;text-align: left;padding-bottom: 5px;margin-bottom: 0}
/*news end*/
</style>
