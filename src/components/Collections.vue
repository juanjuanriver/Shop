<template>
  <div class="app">
    <el-tabs v-model="activeName" @tab-click="handleClick" id="colle">
      <el-tab-pane label="潮流" name="first">
        <div class="collections">
          <div v-for="i in 28">
            <a href="#"><img class="animated fadeIn" v-lazy="'../../static/images/'+i+'.jpg'"/></a>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="潮鞋" name="second">潮鞋</el-tab-pane>
      <el-tab-pane label="潮女" name="third">潮女</el-tab-pane>
      <el-tab-pane label="娱乐" name="fourth">娱乐</el-tab-pane>
      <el-tab-pane label="潮女" name="third">生活</el-tab-pane>
      <el-tab-pane label="娱乐" name="fourth">文化</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  export default {
    name: 'Collections',
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>
<style scoped>
  #colle{
    width: 980px;
    margin: 0 auto;
  }
  .collections{
    width:980px;
    column-count: 4;
    -moz-column-count: 4;
    -webkit-column-count: 4;
    margin: 20px auto
  }
  .collections div{
    padding-bottom: 15px
  }
</style>
