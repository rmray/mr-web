<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="400" height="400">
      <g transform="translate(100, 100) rotate(45, 0, 25)">
        <rect x="0" y="0" width="100" height="50"></rect>
      </g>
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
