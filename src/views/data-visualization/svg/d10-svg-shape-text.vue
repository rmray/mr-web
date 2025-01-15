<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="400" height="400">
      <text
        x="100"
        y="100"
        font-size="30"
        font-weight="bold"
        fill="red"
        text-anchor="middle"
        dominant-baseline="middle"
      >
        无人机
        <tspan dx="20" dy="20" text-anchor="start" alignment-baseline="hanging">大疆</tspan>
      </text>
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
