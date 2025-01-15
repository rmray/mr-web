import type { Stack } from './stack'

class StackLinked<T = any> implements Stack<T> {
  push(el: T): number {
    throw new Error('Method not implemented.')
  }
  pop(): T | undefined {
    throw new Error('Method not implemented.')
  }
  peek(): T | undefined {
    throw new Error('Method not implemented.')
  }
  isEmpty(): boolean {
    throw new Error('Method not implemented.')
  }
  get size(): number {
    throw new Error('Method not implemented.')
  }
}

export default StackLinked
