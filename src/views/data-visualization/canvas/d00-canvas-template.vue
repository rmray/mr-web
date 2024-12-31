<script setup lang="ts">
import { onMounted, ref } from 'vue'

// 定义一个引用，用来存放canvas的DOM元素
const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  // 判断浏览器是否支持Canvas
  if (!canvasRef.value!.getContext('2d')) return

  // 获取Canvas的2D渲染上下文对象
  const ctx = canvasRef.value!.getContext('2d')!

  // 绘制一个红色的矩形
  ctx.fillStyle = 'red'
  ctx.fillRect(0, 0, 100, 50)
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
