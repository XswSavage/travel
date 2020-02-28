<template>
  <div id="ctx">
    <HomeHeader></HomeHeader>
    <HomeSwiper></HomeSwiper>
  </div>
</template>
<script>
import HomeSwiper from './components/home-swiper'
import HomeHeader from './components/header'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="stylus" scoped>
   #ctx
     margin : 0 auto
</style>
