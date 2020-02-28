<template>
  <div class="header">
    <div class="header-left el-icon-arrow-left"></div>
    <div class="header-input"><input type="text"/></div>
    <div class="header-right el-icon-arrow-down"></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
<!--1rem = html  font-size = 50px-->
<style lang="stylus" scoped>
  @import '~@/assets/style/varibles.styl'
  .header
    margin-top:0
    display : flex
    line-height : .90rem
    height .90rem
    background: $bgColor
    color : #FFF
  .header-left
    width :.64rem
    float : left
    padding-top: .3rem
  .header-input
    flex : 1
    height :.64rem
    line-height:.64rem
    margin-top :.12rem
    background :#FFF
    color : #CCC
    border-radius: .1rem
  .header-right
    width : 1.24rem
    float:right
    padding-top .3rem
</style>
