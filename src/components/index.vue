<template>
  <div class="index">
<!--1.轮播图-->
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 2" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
<!--2.固定右侧图片-->
    <div class="fixedgif"><img src="../../static/images/subcode.gif"></div>
<!-- 3.咨询-->
    <div class="ad">
      <p id="ad-tlt"><span>潮流资讯</span></p>
      <div id="adlist">
        <ul>
          <li v-for='item in items'><img :src="item.itemImg"></li>
        </ul>
      </div>
    </div>
<!--3.咨询-->
<!--4.潮品展示-->
    <el-tabs type="border-card" id="tab">
      <el-tab-pane label="最热潮品">
        <div class="shop">
          <ul class="shop_ul">
            <li class="shop_li" v-for="(good,index) in goods">
              <img :src="good.src" alt="good" class="good_img" @mouseover="changeFlagTrue(index)" />
              <div class="good_info">
                <p @click="changeSelectedItem(index)">
                  <router-link to="/shopcar" class="title_info">{{good.title}}</router-link>
                </p>
                <p class="good_info_bottom">
                  <span class="user_info"><img :src="good.shopsSrc" alt="shop"/><span class="user_name">{{good.shopsName}}</span></span>
                  <span class="price_info"><img :src="'../static/images/price.png'" alt="price"/><span class="price_num">{{good.price}}</span></span>
                </p>
              </div>

              <div class="layout" v-if="good.flag" @mouseout="changeFlagFalse(index,$event)" @click="changeSelectedItem(index)">
                <router-link to="/shopcar" tag="div" class="link">
                  <p><img :src="'../static/images/like.png'" alt="like"/><span class="like_num">{{good.likes}}</span></p>
                </router-link>
              </div>
              <div class="like" :class="good.isLike?'toLike':'noLike'" @click="changeLike(index)" v-if="good.flag"></div>
            </li>
          </ul>
        </div>
      </el-tab-pane>
      <el-tab-pane label="最新推荐">最新推荐</el-tab-pane>
      <el-tab-pane label="朋友发布">朋友发布</el-tab-pane>
      <el-tab-pane label="潮鞋">潮鞋</el-tab-pane>
    </el-tabs>
<!--4.潮品展示-->
  </div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        items:[
          {itemImg:"http://images.1626.com/public/upload/1626/201905/23/5ce6303f9a968.jpg"},
          {itemImg:"http://images.1626.com/public/upload/1626/201905/23/5ce6302bcf3a3.jpg"},
          {itemImg:"http://images.1626.com/public/upload/1626/201905/21/5ce3abe5361be.jpg"},
          {itemImg:"http://images.1626.com/public/upload/1626/201905/21/5ce3abd0bd1dc.jpg"},
          {itemImg:"http://images.1626.com/public/upload/1626/201905/23/5ce6303f9a968.jpg"}
        ],
        goods:[
          //商品信息
          {
            src:'../../static/images/goods_7.jpg',
            title:'Staple 联名 V/Sual MA1 鸽子 裸女 飞行员空军夹克外套',
            shopsSrc:'../static/images/shops_1.jpg',
            shopsName:'jenry',
            price:679,
            isLike:true,
            likes:10,
            flag:false,
            num:1,
            description:'版型选择中长款MA1进行改良 合身塑形 •使用杜邦梭织面料，抗风防水耐磨 •内里填充300克重鸭绒，恒温保暖 •胸口定制四个联名胸章 玩味十足 •DIE WELLE 延续秋冬沙漠主题将SAHARA之眼至于肩覆水，并将石莲花与TEAMAGE标志性玫瑰花置于左臂与面料质感形成强烈对比',
            sizes:['S','M','L','XL'],
            size:'',
            colors:['黑色','白色','红色','灰色'],
            color:'',
            completed:false//用来检测购物车中是否选中
          },
          {
            src:'../../static/images/goods_8.jpg',
            title:'MOSTWANTEDLAB 2016AW MWTD 植绒印花MA1飞行员夹克棉衣外套',
            shopsSrc:'../static/images/shops_2.jpg',
            shopsName:'买物教室',
            price:499,
            isLike:true,
            likes:5,
            flag:false,
            num:1,
            description:'大家都喜欢吃披萨，当然喵星人也不例外，萌猫躲在披萨里头仿佛在向主人抗议，简直萌化了。这件Stay gold 三色贪吃猫披萨卫衣正面采用刺绣工艺，完美呈现披萨拉丝效果，而且采用10支350克加绒面料，兼具舒适性和保暖性。',
            sizes:['S','M','L','XL'],
            size:'',
            colors:['黑色','白色','红色','灰色'],
            color:'',
            completed:false//用来检测购物车中是否选中
          },
          {
            src:'../../static/images/goods_9.jpg',
            title:'FTW FORTHEWIN M65 JTK 秋冬男重度水洗军事风四口袋工装夹克外套',
            shopsSrc:'../static/images/shops_1.jpg',
            price:380,
            shopsName:'jenry',
            isLike:true,
            likes:5,
            flag:false,
            num:1,
            description:'外星人系列。春秋教练夹克，白蓝黑红四色任意挑选。胸前的外星人设计，更显年轻时尚，街头范十足。冲锋衣面料，防水透气，穿着舒适，相比同类的冲锋衣夹克，这款性价比更高。推荐入手。',
            sizes:['S','M','L','XL'],
            size:'',
            colors:['黑色','白色','红色','灰色'],
            color:'',
            completed:false//用来检测购物车中是否选中
          },
          {
            src:'../../static/images/goods_4.jpg',
            title:'[PAPERWORKS]沙丁鱼罐头食物系列苹果i7/6/6S/plus原创全包手机壳',
            shopsSrc:'../static/images/shops_3.jpg',
            shopsName:'QW',
            price:119,
            isLike:true,
            likes:10,
            flag:false,
            num:1,
            description:'版型选择中长款MA1进行改良 合身塑形 •使用杜邦梭织面料，抗风防水耐磨 •内里填充300克重鸭绒，恒温保暖 •胸口定制四个联名胸章 玩味十足 •DIE WELLE 延续秋冬沙漠主题将SAHARA之眼至于肩覆水，并将石莲花与TEAMAGE标志性玫瑰花置于左臂与面料质感形成强烈对比',
            sizes:['S','M','L','XL'],
            size:'',
            colors:['黑色','白色','红色','灰色'],
            color:'',
            completed:false//用来检测购物车中是否选中
          },
          {
            src:'../../static/images/goods_5.jpg',
            title:'SSUR Plus 16秋冬新款 背后大字母 喷染 卫衣 帽衫 情侣',
            shopsSrc:'../static/images/shops_2.jpg',
            shopsName:'QW',
            price:698,
            isLike:true,
            likes:5,
            flag:false,
            num:1,
            description:'大家都喜欢吃披萨，当然喵星人也不例外，萌猫躲在披萨里头仿佛在向主人抗议，简直萌化了。这件Stay gold 三色贪吃猫披萨卫衣正面采用刺绣工艺，完美呈现披萨拉丝效果，而且采用10支350克加绒面料，兼具舒适性和保暖性。',
            sizes:['S','M','L','XL'],
            size:'',
            colors:['黑色','白色','红色','灰色'],
            color:'',
            completed:false//用来检测购物车中是否选中
          }]
      }//return
    }

  }
</script>
<style scoped>
  /*1.轮播*/
  .index{
    /*background: pink;*/
    /*height: 1000px;*/
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background:url("../../static/images/index1.jpg");
  }

  .el-carousel__item:nth-child(2n+1) {
    background:url("../../static/images/index2.jpg");
  }
  /*2.固定右侧图片*/
  .fixedgif{
    width: 156px;
    height: 156px;
    position: fixed;
    bottom: 195px;
    left: 50%;
    margin-left: 503px;
    z-index: 100;
  }
/*3.咨询*/
  .ad{
    margin: 0 auto;
    width: 980px;
  }
  #ad-tlt{
    display: block;
    padding-top: 10px;
    width: 36px;
    height: 119px;
    background: #000;
    text-align: center;
    z-index: 10;
    float: left;
    font-weight: bold;
  }
  #ad-tlt>span{
    color: #fff;
    text-align: center;
    line-height: 1.5em;
    font-size: 1.2em;
  }
  #adlist ul li{
    float: left;
    margin-left: 10px;
  }
  #adlist ul li img{
    width: 170px;
    height: 128px;
  }
  /*4.潮品展示*/
  #tab{
    margin-top: 180px;
    width: 940px;
    margin-left: 17%;
  }

  .shop{width: 980px;margin: 0 auto;padding-top: 20px}
  .shop:after{width: 0;height: 0;display: block;clear:both;content: ""}
  .shop_li{float:left;width: 422px;padding: 10px;border:1px solid #d9d9d9;margin-left:10px;margin-bottom: 20px;position: relative;box-sizing: border-box;}
  .good_img{width: 350px;height: 350px;border:none;}
  .title_info{display: inline-block;width: 300px;margin: 4px 0;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height: 24px;line-height: 24px;font-size:16px; }
  .good_info_bottom{height: 24px;display: block}
  .good_info_bottom:after{width: 0;height: 0;display: block;clear:both;content: ""}
  .price_info,.user_info{height: 24px;display: inline-block}
  .user_info{float:left;}
  .price_info{vertical-align: top;float:right;}
  .user_info img{width: 24px;height: 24px;margin-right:5px ;border: none}
  .price_info img{width: 18px;height: 18px;border: none;}
  .user_name{color:rgb(114, 113, 118);font-size: 12px;vertical-align: top;line-height: 24px;height: 24px;display: inline-block;}
  .price_num{color: #2C2C2C;font-size: 21px;line-height: 24px;font-weight: bold;height: 24px;display: inline-block;margin-left:3px;}
  .layout{z-index:2;width: 300px;height: 300px;opacity: 0.8;background: #111;position: absolute;top:10px;left: 10px;opacity: 0.8;cursor:pointer;}
  .layout p{text-align: right;}
  .layout img{width: 21px;height: 20px;margin-right:5px ;border: none;}
  .layout .like_num{color:#fff;font-size: 18px;vertical-align: top;line-height: 20px;height: 20px;display: inline-block;font-weight: bold}
  .like{top:115px;left: 50%;margin-left: -35px;position: absolute;width: 70px;height: 90px;    z-index: 9999;opacity: 1;cursor: pointer;}
  .link{width: 290px;height: 290px;padding: 10px 10px 0 0}

</style>

