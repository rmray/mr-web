<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="400" height="400">
      <polyline
        id="polyline1"
        points="100 100, 200 100, 200 150"
        stroke="blue"
        stroke-width="10"
        stroke-dasharray="150"
        stroke-dashoffset="150"
        fill="transparent"
      ></polyline>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.svg {
  svg {
    background-image: url('@/assets/images/grid.png');
  }

  #polyline1 {
    animation: dash 2s linear infinite;
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
}
</style>
