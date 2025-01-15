<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="400" height="400">
      <defs>
        <!-- 定义图标 -->
        <symbol id="previous" viewBox="0 0 100 100">
          <polygon points="80 0, 80 100, 20 50"></polygon>
        </symbol>

        <symbol id="next" viewBox="0 0 100 100">
          <polygon points="20 0, 20 100, 80 50"></polygon>
        </symbol>
      </defs>

      <!-- 1. 在svg内部使用 -->
      <!-- <use href="#previous"></use> -->

      <!-- 2. 在svg内部使用，并设置大小 -->
      <use href="#previous" width="100" height="100"></use>

      <!-- 2=3. 在svg内部使用，并缩小 -->
      <use href="#previous" width="30" height="30"></use>
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
