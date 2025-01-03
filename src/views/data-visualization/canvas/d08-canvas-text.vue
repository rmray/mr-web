<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  if (!canvasRef.value!.getContext('2d')) return
  const ctx = canvasRef.value!.getContext('2d')!

  /** 绘制文本 */
  ctx.font = '30px sans-serif'
  ctx.fillText('Basic', 200, 50)

  // 设置对齐方式
  ctx.textAlign = 'start'
  ctx.fillText('textAlign start', 200, 100)
  ctx.textAlign = 'end'
  ctx.fillText('textAlign end', 200, 150)
  ctx.textAlign = 'center'
  ctx.fillText('textAlign center', 200, 200)

  // 设置基线对齐方式
  ctx.textAlign = 'start'
  ctx.textBaseline = 'top'
  ctx.fillText('top', 0, 300)
  ctx.textBaseline = 'bottom'
  ctx.fillText('top', 100, 300)
  ctx.textBaseline = 'middle'
  ctx.fillText('top', 200, 300)
  ctx.textBaseline = 'alphabetic'
  ctx.fillText('top', 300, 300)
  ctx.textBaseline = 'hanging'
  ctx.fillText('top', 400, 300)
})
</script>

<template>
  <div class="container">
    <canvas class="canvas" ref="canvasRef" width="600" height="400">您的浏览器不支持Canvas，请尽快升级浏览器！</canvas>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .canvas {
    background-image: url('@/assets/images/grid.png');
  }
}
</style>
