<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  if (!canvasRef.value!.getContext('2d')) return
  const ctx = canvasRef.value!.getContext('2d')!

  /** 设置透明度 */
  // 方法一：RGBA
  ctx.beginPath()
  ctx.rect(0, 0, 100, 50)
  ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
  ctx.fill()

  // 方法二：globalAlpha
  ctx.beginPath()
  ctx.rect(100, 100, 100, 50)
  ctx.globalAlpha = 0.5
  ctx.fillStyle = 'rgb(0, 255, 0)'
  ctx.fill()

  // globalAlpha是全局属性，会影响后续所有绘图操作
  ctx.beginPath()
  ctx.rect(200, 200, 100, 50)
  ctx.fillStyle = 'rgb(0, 0, 255)'
  ctx.fill()
})
</script>

<template>
  <div class="container">
    <canvas class="canvas" ref="canvasRef" width="300" height="300">您的浏览器不支持Canvas，请尽快升级浏览器！</canvas>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .canvas {
    background-image: url('@/assets/images/grid.png');
  }
}
</style>
