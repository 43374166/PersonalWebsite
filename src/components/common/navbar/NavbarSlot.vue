<template>
  <div class="navbar">
    <div class="navbar-bg">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .navbar {
    width: 100%;
    height: 60px;
    color: #fff;
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    .navbar-bg {
      width: 96%;
      height: 60px;
      background-color: #000;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  
</style>