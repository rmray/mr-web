<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="400" height="400">
      <g transform="translate(100, 100) rotate(45, 0, 25) scale(2)">
        <rect x="0" y="0" width="100" height="50"></rect>
      </g>

      <rect transform="translate(300, 100) scale(2)" x="-25" y="-25" width="50" height="50"></rect>
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
