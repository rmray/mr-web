import type { Queue } from './queue'

/** 队列的实现-数组实现 */
class QueueArray<T = any> implements Queue<T> {
  private queue: T[] = []

  /** 入队 */
  enqueue(el: T): void {
    this.queue.push(el)
  }

  /** 出队 */
  dequeue(): T | undefined {
    return this.queue.shift()
  }

  /** 查看队首元素 */
  peek(): T | undefined {
    return this.queue[0]
  }

  /** 判断队列是否为空 */
  isEmpty(): boolean {
    return this.queue.length === 0
  }

  /** 获取队列的长度 */
  get size(): number {
    return this.queue.length
  }
}

export default QueueArray
