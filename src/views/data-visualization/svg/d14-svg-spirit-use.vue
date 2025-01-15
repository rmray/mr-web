<script setup lang="ts">
import SvgSpirit from './d14-svg-spirit.vue'
</script>

<template>
  <SvgSpirit />
  <div class="svg" ref="divRef">
    <svg width="50" height="50">
      <use href="#bianji"></use>
    </svg>
    <svg width="100" height="100">
      <use href="#gongnengdingyi"></use>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.svg {
  svg {
    background-image: url('@/assets/images/grid.png');
  }
}
</style>
