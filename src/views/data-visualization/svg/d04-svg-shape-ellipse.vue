<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="400" height="400">
      <ellipse cx="100" cy="100" rx="100" ry="50" stroke="red" fill="transparent"></ellipse>
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
