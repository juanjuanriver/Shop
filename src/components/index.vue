<template>
  <div class="index">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 2" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
      }
    }
  }
</script>
<style scoped>
  .index{
    background: pink;
    height: 500px;
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
</style>
