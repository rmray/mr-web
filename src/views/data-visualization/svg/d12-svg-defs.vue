<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="400" height="400">
      <defs>
        <!-- 0. 定义样式：vue组件中会有冲突 -->
        <!-- <style>
          #rect {
          }
        </style> -->

        <!-- 1. 定义组合图形 -->
        <g id="audi" transform="translate(75,100)" stroke="red" stroke-width="2" fill="transparent">
          <circle cx="50" cy="50" r="40" />
          <circle cx="100" cy="50" r="40" />
          <circle cx="150" cy="50" r="40" />
          <circle cx="200" cy="50" r="40" />
        </g>

        <!-- 2. 定义矩形 -->
        <rect id="rect" x="0" y="0" width="100" height="50"></rect>

        <!-- 3. 定义线性渐变 -->
        <linearGradient id="linear">
          <stop offset="0%" stop-color="red" stop-opacity="1"></stop>
          <stop offset="50%" stop-color="blue" stop-opacity="0"></stop>
          <stop offset="100%" stop-color="green" stop-opacity="1"></stop>
        </linearGradient>

        <!-- 4. 定义径向渐变 -->
        <radialGradient id="radial" cx="50%" cy="50%" r="40%" fx="70%" fy="70%">
          <stop offset="0%" stop-color="red" stop-opacity="1"></stop>
          <stop offset="50%" stop-color="blue" stop-opacity="1"></stop>
          <stop offset="100%" stop-color="green" stop-opacity="0"></stop>
        </radialGradient>

        <!-- 5. 定义symbol -->
        <symbol id="symbol" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="50"></circle>
        </symbol>
      </defs>

      <!-- 使用定义的图形 -->
      <use href="#audi" transform="translate(0,100)"></use>
      <use href="#rect" x="100" y="100"></use>
      <rect id="rect2" x="0" y="0" width="100" height="50" fill="url(#linear)"></rect>
      <circle cx="300" cy="100" r="100" fill="url(#radial)"></circle>
      <!-- <use href="#symbol" x="200" y="200"></use> -->
      <use href="#symbol" width="200" height="200"></use>
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
