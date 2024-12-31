<script setup lang="ts">
import { onMounted, ref } from 'vue'

// 定义一个引用，用来存放canvas的DOM元素
const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  // 判断浏览器是否支持Canvas
  if (!canvasRef.value!.getContext('2d')) return

  // 获取Canvas的2D渲染上下文对象
  const ctx = canvasRef.value!.getContext('2d')!

  // 1. 开启路径
  ctx.beginPath()

  // 2. 设置线条样式
  ctx.lineWidth = 20 // 宽度
  ctx.fillStyle = 'red' // 颜色
  ctx.lineCap = 'round' // 末端样式
  ctx.lineJoin = 'bevel' // 拐点样式

  // 3. 移动笔触
  ctx.moveTo(20, 20)

  // 4. 绘制线条
  ctx.lineTo(80, 80)
  ctx.lineTo(200, 50)

  // 5. 闭合路径
  ctx.closePath()

  // 6. 绘制
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
