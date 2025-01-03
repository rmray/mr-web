<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  if (!canvasRef.value!.getContext('2d')) return
  const ctx = canvasRef.value!.getContext('2d')!

  /** 缩放 scale */
  ctx.save()
  ctx.translate(100, 100)
  ctx.scale(2, 2) // x y轴都放大2倍
  ctx.translate(10, 0) // 移动10px缩放后会移动20px
  ctx.fillRect(0, 0, 100, 100) // 100px的宽度缩放后会变成200px的宽度
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
