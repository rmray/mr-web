<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="200" height="200" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50"></circle>
    </svg>
    <br />

    <svg width="200" height="200" viewBox="50 50 100 100">
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
