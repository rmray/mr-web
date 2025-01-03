<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  if (!canvasRef.value!.getContext('2d')) return
  const ctx = canvasRef.value!.getContext('2d')!

  /** 旋转 rotate */

  /** 1. 旋转后x y轴也会随着一起旋转 */
  ctx.save()
  ctx.translate(100, 100)
  ctx.rotate((Math.PI / 180) * 45)
  ctx.fillRect(0, 0, 100, 50)

  ctx.translate(200, 0)
  ctx.fillRect(0, 0, 100, 50)
  ctx.restore()

  /** 2. 使用save和restore恢复旋转状态 */
  ctx.save()
  ctx.translate(100, 0)
  ctx.fillRect(0, 0, 100, 50)
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
