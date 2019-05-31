<template>
  <div class="cart" >
    <table :style="{height:home_first_height+'px'}" v-if="cart.length" ref="table">

      <thead id="tabletlt">
      <th id="shoptlt">购物清单</th>
        <tr>
          <th class="th_chk" style="margin-right: 66px"><div><input type="checkbox" @change="selectAll" id="selectAll" v-model="isAll"/><label for="selectAll">全选</label></div></th>
          <th class="th_info">商品详情</th>
          <th>商品信息</th>
          <th class="th_price">单价</th>
          <th class="th_amount">数量</th>
          <th class="th_sum">金额</th>
          <th class="th_op">操作</th>
        </tr>
      </thead>

      <tbody>
      <tr v-for="(single,index) in cart" class="clearfix">
        <td class="td_chk fl"><input type="checkbox" v-model="single.completed" name="singlecheck"/></td>
        <td class="td_item">
          <div>
            <img :src="single.src" alt="single"/>
            <p>{{single.title}}<br>颜色：{{single.color}}<br/>尺码：{{single.size}}</p>
          </div>
        </td>
        <td class="td_price" id="td_price">
          ￥{{parseFloat(single.price).toFixed(2)}}
        </td>
        <td class="td_amount">
          <div>
            <span class="subtract" @click="changeNumSub(index)" :class="{disabled:single.num<=1}">-</span>
            <input type="text" class="input_num" :value="single.num" disabled/>
            <span class="add" @click="changeNumAdd(index)" :class="{disabled:single.num>=8}">+</span>
          </div>
        </td>
        <td class="td_sum" >￥{{parseFloat(single.num*single.price).toFixed(2)}}</td>
        <td class="td_op"><span @click="remove(index)"><i class="el-icon-delete"></i></span></td>
      </tr>
      </tbody>
      <div class="t_foot clearfix">
        <p >
          已选<span>{{selectedSum}}</span>件商品
          总计（不含运费）
        </p>
        <p >共<span>{{priceSum}}</span>元</p>
        <p class="fr button">去结算</p>
      </div>
    </table>
    <div v-if="!cart.length" :style="{height:home_first_height+'px'}">
      <p class="empty">你的购物车空空如也</p>
    </div>
  </div>

</template>
<script type="text/javascript">
  import {mapGetters} from 'vuex'
  export default {
    name:"Cart",
    data(){
      return {
        isSelectedAll:false,
      }
    },
    computed:{
      ...mapGetters({
        cart:'getCart',
        hw:'getHW'
      }),
      selectedSum(){
        return this.cart.filter(function(e){
          return e.completed
        }).length
      },
      priceSum(){
        //浮点数加法
        let floatMul=function(m,n,sum){
          let _m=m.split('.');
          let _n=n.split('.');
          let maxFloatNum=Math.max(parseInt(_m[1].length),parseInt(_n[1].length))
          console.log(maxFloatNum);
          let multiple=(parseFloat(m)*Math.pow(10,maxFloatNum)+parseFloat(n)*Math.pow(10,maxFloatNum))/Math.pow(10,maxFloatNum)
          return multiple.toFixed(sum)
        };
        let sum='0.00';
        this.cart.filter(function(e){
          return e.completed
        }).forEach(function(n){
          sum=floatMul(sum,parseFloat(n.num*n.price).toFixed(2),2)
        });
        return sum
      },
      //点击单个选择到全部选到时，会将全选按钮一起带动
      isAll(){
        return this.cart.every(function(e){
          return e.completed
        })
      },
      home_first_height:function(){
        const a= parseInt(this.hw.h)-200;
      },
    },
    methods:{
      selectAll(){

        //依靠isAll
        if(this.isAll){
          this.cart.forEach(function(e){
            e.completed=false
          })
        }else{
          this.cart.forEach(function(e){
            e.completed=true
          })
        }
      },
      changeNumSub(index){

        if(this.cart[index].num>1){
          this.$store.dispatch('changeNumSub',index)
        }

      },
      changeNumAdd(index){
        if(this.cart[index].num<8){
          this.$store.dispatch('changeNumAdd',index);
        }
      },
      remove(index){
        this.$store.dispatch('remove',index)
      }

    },
    created(){
      this.cart.forEach(function(e){
        e.completed=false
      });
      this.$store.dispatch('changeShow','')
    },
  }
</script>
<style>
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  .clearfix {
    zoom: 1;
  }
  .clearfix:after {
    clear: both;
  }
  .clearfix:after {
    content: '.';
    display: block;
    overflow: hidden;
    visibility: hidden;
    font-size: 0;
    line-height: 0;
    width: 0;
    height: 0;
  }


.cart{
  width: 1060px;
  margin: auto;
  border: 1px solid #e3e3e3;
}
#tabletlt{
  background: #f7f7f7;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
}
  #tabletlt>tr>th{
   font-size: 1.0em;
    font-weight: normal;
    margin-right: 103px;
    float: left;
  }
  #shoptlt{
    color: #317ee7;
    font-size: 16px;
    padding-right: 90%;

  }

  table{
    border-top: 2px solid #317ee7;
    margin:0 auto;
    padding-bottom: 60px;
    position: relative;
  }
  tbody{
    width:1060px;
    display: block;margin:0;
  }
  tbody tr{
    display:block;
    margin: 20px 0;
  }
  tbody tr:first-child{border: none;}
  tbody td{height: 100px;display: inline-block;padding-top: 20px;}
  th{text-align: left;display: inline-block;padding-top: 20px;font-size: 12px;height: 40px;}
  label{font-size: 12px}

  .td_chk input {
    display: inline-block;
    margin: 32px 20px;
    cursor: pointer;
  }
  .td_item{
    width: 300px;
    overflow: hidden;
  }
  .td_item img{
    width: 80px;
    height: 80px;
  }
  .td_item p{
    display: inline-block;
    width: 186px;
    font-size: 12px;
    text-overflow: ellipsis;
    max-height: 36px;
    color: #3c3c3c;
    text-align: left;
    vertical-align: top;
    margin-left: 24px;
    cursor: pointer;
  }
  .td_item p:hover{
    color:#317ee7;
  }
  .td_info p{
    color:#9c9c9c;font-size: 12px;
  }
  .td_price,.td_sum{
    width: 178px;
    color: #3c3c3c;
    font-weight: 700;
    font-family: Verdana,Tahoma,arial;
    font-size: 12px;
  }
  #td_price{
    color: red;
  }
  .td_sum{color:red;}
  .td_op span{cursor: pointer;font-size: 12px;}
  .td_op span:hover{color:rgb(255, 208, 75);text-decoration: underline;}
  .th_chk input{
    display: inline-block;
    padding:38px 10px;
    cursor: pointer;
  }
  #selectAll{
    margin:0 23px ;
  }
  .t_foot{
    height: 50px;
    line-height: 50px;
    background: #f7f7f7;
    position: absolute;
    bottom: 0px;
    width:1060px;
  }
  .t_foot span{color:red;}
  .t_foot p{
    display: inline-block;
    text-align: center
  }
  .t_foot .button{
    float: right;
    height: 50px;
    color: #fff;
    font-size: 20px;
    display: block;
    width: 110px;
    background: #ff7700;
    text-align: center;
    margin-left: 30px;
  }
  .empty{
    width: 500px;
    height: 200px;
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
    padding-top: 100px
  }
</style>
