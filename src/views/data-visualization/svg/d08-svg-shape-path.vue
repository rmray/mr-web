<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="400" height="400">
      <path d="M 20 20, L 80 50, L 40 80" stroke="orange" fill="transparent"></path>
      <path d="M 20 20, L 80 50, L 40 80 Z" transform="translate(100, 100)" stroke="orange" fill="transparent"></path>
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
