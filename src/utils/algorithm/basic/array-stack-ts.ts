/** 栈的实现-数组实现 */
class StackArray<T> {
  private stack: T[] = []

  /** 获取栈的长度 */
  get size() {
    return this.stack.length
  }

  /** 入栈 */
  push(el: T) {
    return this.stack.push(el)
  }

  /** 出栈 */
  pop() {
    return this.stack.pop()
  }

  /** 访问栈顶元素 */
  peek() {
    return this.stack[this.stack.length - 1]
  }

  /** 判断栈是否为空 */
  isEmpty() {
    return this.stack.length === 0
  }
}

export default StackArray
