<script setup lang="ts">
import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  if (!canvasRef.value!.getContext('2d')) return
  const ctx = canvasRef.value!.getContext('2d')!

  /** 动画-requestAnimationFrame */
  clock()

  /** 绘制时钟-requestAnimationFrame */
  function clock() {
    // 获取当前时间
    const seconds = new Date().getSeconds()

    // 绘制指针
    ctx.clearRect(0, 0, canvasRef.value?.width!, canvasRef.value?.height!)
    ctx.save()
    ctx.translate(200, 200)
    ctx.rotate(((Math.PI * 2) / 60) * seconds)
    ctx.beginPath()
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 5
    ctx.lineCap = 'round'
    ctx.moveTo(0, 0)
    ctx.lineTo(0, -100)
    ctx.stroke()
    ctx.restore()

    // 递归调用
    requestAnimationFrame(clock)
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
