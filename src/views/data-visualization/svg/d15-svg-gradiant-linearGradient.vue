<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="600" height="600">
      <defs>
        <!-- 1. 通过2个坐标点控制渐变方向 -->
        <linearGradient id="linear1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="red"></stop>
          <stop offset="100%" stop-color="blue"></stop>
        </linearGradient>

        <!-- 2. 通过gradientTransform属性控制渐变方向 -->
        <linearGradient id="linear2" gradientTransform="rotate(45)">
          <stop offset="0%" stop-color="red"></stop>
          <stop offset="100%" stop-color="blue"></stop>
        </linearGradient>
      </defs>

      <!-- 使用 -->
      <rect x="0" y="0" width="100" height="50" fill="url(#linear1)"></rect>
      <rect x="0" y="100" width="100" height="50" fill="url(#linear2)"></rect>
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
