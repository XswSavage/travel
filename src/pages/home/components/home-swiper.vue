<template>
  <div class="swiper-content">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper" :src="item.url"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination' // 控制小点点显示
      },
      swiperList: [
        {
          id: 1,
          url: require('../../../assets/images/oz.jpg')
        },
        {
          id: 2,
          url: require('../../../assets/images/yn.jpg')
        },
        {
          id: 3,
          url: require('../../../assets/images/xxl.jpg')
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  // 这里是对swiper的属性swiper-pagination-bullet-active进行穿透,否则的话我们无法让当前css生效,因为 scoped限定死了作用域
  .swiper-content >>> .swiper-pagination-bullet-active
      background #FFF
  .swiper-content   // 这样写的意义是防止网络过慢内容没有被撑开,下面内容上移给人一种抖动的感觉
    overflow hidden
    width 100%
    height 0
    background #eee // 给一个背景,图片未加载出来不至于空白显示
    padding-bottom 36%
    .swiper
      width 100%
</style>
