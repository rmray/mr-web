<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  if (!canvasRef.value!.getContext('2d')) return
  const ctx = canvasRef.value!.getContext('2d')!

  /** 保存和恢复绘画状态 */
  ctx.fillStyle = 'red'
  ctx.fillRect(10, 10, 30, 15)
  ctx.save()

  ctx.fillStyle = 'blue'
  ctx.fillRect(50, 10, 30, 15)
  ctx.save()

  ctx.fillStyle = 'green'
  ctx.fillRect(90, 10, 30, 15)
  ctx.save()

  ctx.restore()
  ctx.fillRect(90, 40, 30, 80)

  ctx.restore()
  ctx.fillRect(50, 40, 30, 80)

  ctx.restore()
  ctx.fillRect(10, 40, 30, 80)
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
