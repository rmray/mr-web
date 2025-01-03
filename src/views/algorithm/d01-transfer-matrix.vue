<script setup lang="ts">
import { listToTree } from '@/utils/list-to-tree'
let paths = [
  ['data-visualization', 'canvas', 'd00-canvas-template'],
  ['data-visualization', 'canvas', 'd01-canvas-rect'],
  ['data-visualization', 'canvas', 'd02-canvas-path-line'],
  ['data-visualization', 'canvas', 'd03-canvas-path-triangle'],
  ['data-visualization', 'canvas', 'd04-canvas-path-arc'],
  ['data-visualization', 'canvas', 'd05-canvas-path-circle'],
  ['data-visualization', 'canvas', 'd06-canvas-path-rect'],
  ['data-visualization', 'canvas', 'd07-canvas-globalAlpha'],
  ['data-visualization', 'canvas', 'd08-canvas-text'],
  ['data-visualization', 'case', 'cube'],
  ['data-visualization', 'case', 'webpack-logo']
]

console.log(listToTree(paths))
</script>

<template>
  <div class="transfer-matrix">transfer-matrix</div>
</template>

<style lang="scss" scoped>
.transfer-matrix {
  color: inherit;
}
</style>
