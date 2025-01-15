<script setup lang="ts">
import { onMounted, ref } from 'vue'

const divRef = ref<HTMLDivElement>()

onMounted(() => {
  // 3. 使用JS创建svg
  createSvg()
})

/** 使用JS创建svg */
function createSvg() {
  const ns = 'http://www.w3.org/2000/svg'

  const svgEl = document.createElementNS(ns, 'svg')
  svgEl.setAttributeNS(null, 'width', '300')
  svgEl.setAttributeNS(null, 'height', '300')

  const rectEl = document.createElementNS(ns, 'rect')
  rectEl.setAttributeNS(null, 'x', '0')
  rectEl.setAttributeNS(null, 'y', '0')
  rectEl.setAttributeNS(null, 'width', '100')
  rectEl.setAttributeNS(null, 'height', '100')
  rectEl.setAttributeNS(null, 'fill', 'blue')

  svgEl.appendChild(rectEl)
  divRef.value?.appendChild(svgEl)
}
</script>

<template>
  <div class="svg" ref="divRef">
    <!-- 1. 内部定义svg -->
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <rect x="0" y="0" width="100" height="50" fill="red"></rect>
    </svg>

    <!-- 2. 引入外部svg文件 -->
    <img src="./d01-svg-create.svg" alt="svg" />
  </div>
</template>

<style lang="scss" scoped>
.svg {
  svg {
    background-image: url('@/assets/images/grid.png');
  }
}
</style>
