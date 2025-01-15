<script setup lang="ts">
import StackArray from '@/utils/algorithm/basic/array-stack-ts'

// 测试：栈的实现-数组
// const stackArray = new StackArray<number>()
const stackArray = new StackArray<string>()
stackArray.push('a')
stackArray.push('b')
stackArray.push('c')

console.log(stackArray.peek()) // c

console.log(stackArray.pop()) // c
console.log(stackArray.pop()) // b
console.log(stackArray.pop()) // a

console.log(stackArray.size) // 0
console.log(stackArray.isEmpty()) // true
</script>

<template>
  <div class="array-stack">
    <h3>array-stack</h3>
    <pre>
      <code>
        import StackArray from '@/utils/algorithm/basic/array-stack-ts'

        // 测试：栈的实现-数组
        <!-- // const stackArray = new StackArray<number>()
        const stackArray = new StackArray<string>() -->
        stackArray.push('a')
        stackArray.push('b')
        stackArray.push('c')

        console.log(stackArray.peek()) // c

        console.log(stackArray.pop()) // c
        console.log(stackArray.pop()) // b
        console.log(stackArray.pop()) // a

        console.log(stackArray.size) // 0
        console.log(stackArray.isEmpty()) // true
      </code>
    </pre>
  </div>
</template>

<style lang="less" scoped>
.array-stack {
  color: inherit;
}
</style>
