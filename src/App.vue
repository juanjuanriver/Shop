<template>
  <div id="app">
    <el-container>
      <!--1.头部-->
      <el-header style="background:#000">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#000"
          text-color="#fff"
          active-text-color="#ffd04b" id="header" >
          <el-menu-item ><img src="../static/images/head.jpg" width="80%"></el-menu-item>
          <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
          <el-menu-item index="2"><router-link to="/News">潮流咨询</router-link></el-menu-item>
          <el-menu-item index="3" ><router-link to="/Collections">挑选中心</router-link></el-menu-item>
          <el-menu-item index="4"><router-link to="/Shop"><i class="el-icon-goods
"></i>潮购中心</router-link></el-menu-item>
          <el-menu-item index="5"><router-link to="/Shopcar"><i class="el-icon-shopping-cart-full"></i>购物车</router-link></el-menu-item>
          <el-menu-item index="6"><router-link to="/Login">登录&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<el-divider direction="vertical"></el-divider></router-link></el-menu-item>
          <el-menu-item index="7" ><router-link to="/zhuce">注册</router-link></el-menu-item>
        </el-menu>

      </el-header>
      <!-- 2.中间放组件出口-->
      <el-main>
            <router-view></router-view>
      </el-main>
      <!--3.尾部-->
      <el-footer id="footer">
        <div id="foot">
           <p> 备案号：粤ICP备11022094号-1</p>
            <p>联系我们<img src="http://images.1626.com/tpl/hi1626/images/beian.png">粤公网安备 44010402001211号</p>
            <p>  © 2014 广州市新元维讯传媒科技股份有限公司 1626.com 版权所有</p>
            <p class="payment">
              <span>我们接受:</span>
              <img :src="'../static/images/pay_1.jpg'" alt="pay" />
            </p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  export default {
    name:"App",
      data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      }

  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
/*reset*/
body,form,div,span,ul,ol,li,p,pre,dl,dt,dd,h1,h2,h3,h4,h5,h6,em,a,fieldset,legend,address,label,textarea,select,input,figure,table,th,td,b,i{
  margin:0;
  padding:0;
}
fieldset,img{border:0;}
ul,li{list-style:none;}
em,i{font-style:normal;}
table{border-collapse:separate;border-spacing:0;}
a{text-decoration:none;color: black}
body{
  margin:0px;
  width: 100% ;
  font-family: "Segoe UI","Lucida Grande",Helvetica,Arial,"Microsoft YaHei",FreeSans,Arimo,"Droid Sans","wenquanyi micro hei","Hiragino Sans GB","Hiragino Sans GB W3",FontAwesome,sans-serif;
  font-size:16px;
}
/*reset*/
#header{
  width: 80%;
  margin: 0 auto;
}
/*尾部*/
#footer{
  height: 120px!important;
  background: #545454;
  width: 100%;
  margin: 0 auto;
  line-height: 30px;
}
#foot{
   color: #ffffff;
  font-size: 0.8em;
  }
</style>


