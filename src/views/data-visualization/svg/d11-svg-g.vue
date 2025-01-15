<script setup lang="ts"></script>

<template>
  <div class="svg" ref="divRef">
    <svg width="400" height="400">
      <g id="audi" transform="translate(75,100)" stroke="red" stroke-width="2" fill="transparent">
        <circle cx="50" cy="50" r="40" />
        <circle cx="100" cy="50" r="40" />
        <circle cx="150" cy="50" r="40" />
        <circle cx="200" cy="50" r="40" />
      </g>

      <use href="#audi" transform="translate(0,100)"></use>
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
