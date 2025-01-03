<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  if (!canvasRef.value!.getContext('2d')) return
  const ctx = canvasRef.value!.getContext('2d')!

  /** 绘制图片 */
  const img = new Image()
  img.src = '/src/assets/images/backdrop.png'
  img.onload = function () {
    // 1. 第一种绘制方式
    ctx.drawImage(img, 0, 0)

    // 2. 第二种绘制方式
    ctx.drawImage(img, 0, 200, 100, 100)

    // 3. 第三种绘制方式
    ctx.drawImage(img, 0, 0, 100, 100, 0, 400, 100, 100)

    // 4. 在图片上绘制其他图形
    ctx.beginPath()
    ctx.moveTo(40, 100)
    ctx.lineTo(60, 80)
    ctx.lineTo(80, 90)
    ctx.lineTo(120, 30)

    ctx.strokeStyle = 'red'
    ctx.stroke()
  }
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
