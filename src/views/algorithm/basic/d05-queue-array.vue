<script setup lang="ts">
import QueueArray from '@/utils/algorithm/basic/queue-array-ts-implements'

// 测试：队列实现-数组
const queue = new QueueArray<string>()

queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')

console.log(queue.peek()) // a
console.log(queue.dequeue()) // a
console.log(queue.isEmpty()) // false
console.log(queue.size) // 2
</script>

<template>
  <div class="queue-array">queue-array</div>
</template>

<style lang="less" scoped>
.queue-array {
  color: inherit;
}
</style>
