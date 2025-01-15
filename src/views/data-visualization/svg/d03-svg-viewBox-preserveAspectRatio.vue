<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="400" height="400" viewBox="0 0 200 100" preserveAspectRatio="xMinYMin slice">
      <circle cx="50" cy="50" r="50"></circle>
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
