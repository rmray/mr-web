<script setup lang="ts">
import StackArray from '@/utils/algorithm/basic/array-stack-ts-implements'

/**
 * 有效的括号
 * @param s 有效的括号字符串
 * @returns 有效的括号字符串返回 true，否则返回 false
 */
function isValid(s: string) {
  const stack = new StackArray<string>()

  for (let i = 0; i < s.length; i++) {
    let c = s[i]

    switch (c) {
      case '(':
        stack.push(')')
        break
      case '[':
        stack.push(']')
        break
      case '{':
        stack.push('}')
        break
      default:
        if (c !== stack.pop()) return false
        break
    }
  }

  return stack.isEmpty()
}

// 测试
console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
</script>

<template>
  <div class="is-valid">有效的括号</div>
</template>

<style lang="less" scoped>
.is-valid {
  color: inherit;
}
</style>
