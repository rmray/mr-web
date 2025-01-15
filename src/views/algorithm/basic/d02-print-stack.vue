<script setup lang="ts">
import StackArray from '@/utils/algorithm/basic/array-stack-ts-implements'
import type { Stack } from '@/utils/algorithm/basic/stack'

// 测试：生成StackArray实例
function printStack(stack: Stack) {
  console.log(stack)
}

printStack(new StackArray())
// printStack(new StackLinked())
</script>

<template>
  <div class="array-stack">array-stack</div>
</template>

<style lang="less" scoped>
.array-stack {
  color: inherit;
}
</style>
