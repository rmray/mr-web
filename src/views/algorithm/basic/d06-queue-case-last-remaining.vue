<script setup lang="ts">
import QueueArray from '@/utils/algorithm/basic/queue-array-ts-implements'

/**
 * 约瑟夫环问题
 * @param num 队列长度，即数组的长度
 * @param target 每次数的目标数
 */
function lastRemaining(num: number, target: number) {
  const queue = new QueueArray<number>()

  // 边界条件判断
  if (num === 0) return -1

  // 初始化队列
  for (let i = 0; i < num; i++) {
    queue.enqueue(i)
  }

  // 循环直到队列只剩下一个元素
  while (queue.size > 1) {
    for (let i = 1; i < target; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    queue.dequeue()
  }

  // 返回最后一个元素
  return queue.dequeue()
}

// 测试
console.log(lastRemaining(7, 4)) // 1
console.log(lastRemaining(12, 5)) // 0
</script>

<template>
  <div class="last-remaining">last-remaining</div>
</template>

<style lang="less" scoped>
.last-remaining {
  color: inherit;
}
</style>
