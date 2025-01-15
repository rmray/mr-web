<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="400" height="400">
      <image href="@/assets/images/ren.png" x="100" y="100" width="200" height="200"></image>
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
