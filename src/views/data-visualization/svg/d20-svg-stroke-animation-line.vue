<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="400" height="400">
      <line
        id="line1"
        x1="100"
        y1="100"
        x2="200"
        y2="100"
        stroke="red"
        stroke-width="10"
        stroke-dasharray="100"
        stroke-dashoffset="100"
      ></line>
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.svg {
  svg {
    background-image: url('@/assets/images/grid.png');
  }

  #line1 {
    animation: dash 2s linear infinite;
  }
  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }
}
</style>
