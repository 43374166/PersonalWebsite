<template>
  <div id="about">
    <div class="about-navbar">
      <nav-bar-slot class="logo-content">
        <template #left>
          FishDream
        </template>
        <template #center>
          About Me
        </template>
        <template #right>
          Message
        </template>
      </nav-bar-slot>
    </div>
    <div class="about-content">
      
    </div>
    <div class="about-footer">
      <footer-content />
    </div>
  </div>
</template>

<script>
import NavBarSlot from 'components/common/navbar/NavbarSlot.vue'
import FooterContent from 'components/common/FooterContent.vue'

export default {
  components: {
    NavBarSlot,
    FooterContent
  }
}
</script>

<style lang="less" scoped>
  .logo-content {
    font-size: 28px;
  }

  .about-footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;

    overflow: hidden;
  }
</style>>