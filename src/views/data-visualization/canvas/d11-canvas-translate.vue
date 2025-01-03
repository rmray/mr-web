<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  if (!canvasRef.value!.getContext('2d')) return
  const ctx = canvasRef.value!.getContext('2d')!

  /** 平移 translate */

  // 1. 平移2次
  ctx.save()
  ctx.translate(200, 0)
  ctx.fillRect(0, 0, 100, 50)

  ctx.translate(200, 0)
  ctx.fillRect(0, 0, 100, 50)
  ctx.restore()

  // 2. 平移结合save和restore
  ctx.save()
  ctx.translate(200, 200)
  ctx.fillStyle = 'red'
  ctx.fillRect(0, 0, 100, 50)
  ctx.restore()

  ctx.save()
  ctx.translate(200, 200)
  ctx.fillStyle = 'blue'
  ctx.fillRect(0, 0, 50, 25)
  ctx.restore()
})
</script>

<template>
  <div class="container">
    <canvas class="canvas" ref="canvasRef" width="600" height="600">您的浏览器不支持Canvas，请尽快升级浏览器！</canvas>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .canvas {
    background-image: url('@/assets/images/grid.png');
  }
}
</style>
