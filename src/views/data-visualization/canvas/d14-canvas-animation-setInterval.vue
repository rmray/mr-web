<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  if (!canvasRef.value!.getContext('2d')) return
  const ctx = canvasRef.value!.getContext('2d')!

  /** 动画-setInterval */
  let count = 0
  setInterval(() => {
    draw()
  }, 1000)

  /** 绘制函数 */
  function draw() {
    count++
    if (count > 60) count = 0

    // 清除画布
    ctx.clearRect(0, 0, canvasRef.value?.width!, canvasRef.value?.height!)

    // 绘制指针
    ctx.save()
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 5
    ctx.lineCap = 'round'

    ctx.translate(200, 200)
    ctx.rotate(((Math.PI * 2) / 60) * count) // 出错：设置成了ctx.rotate(((Math.PI * 360) / 60) * count)

    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(0, -100)
    ctx.stroke()
    ctx.restore()
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
