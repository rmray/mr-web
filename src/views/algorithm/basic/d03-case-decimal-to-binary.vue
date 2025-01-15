<script setup lang="ts">
import StackArray from '@/utils/algorithm/basic/array-stack-ts-implements'

/**
 * 十进制转二进制数
 * @param decimal 十进制数
 * @returns {string} 二进制数(使用字符串显示二进制数)
 */
function decimalToBinary(decimal: number) {
  let binary = ''

  // 1. 使用栈来存储二进制数中的每一位
  const stack = new StackArray()

  // 2. 将十进制数转换为二进制
  while (decimal > 0) {
    const result = decimal % 2
    stack.push(result)

    decimal = Math.floor(decimal / 2)
  }

  // 3. 将二进制数反转并拼接为字符串
  while (!stack.isEmpty()) {
    binary += stack.pop()
  }

  return binary
}

// 测试
console.log(decimalToBinary(35))
</script>

<template>
  <div class="decimal-to-binary">decimal-to-binary</div>
</template>

<style lang="less" scoped>
.decimal-to-binary {
  color: inherit;
}
</style>
