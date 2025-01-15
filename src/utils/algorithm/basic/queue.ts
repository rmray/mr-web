import type { List } from "./list"

export interface Queue<T = any> extends List<T> {
  enqueue(el: T): void
  dequeue(): T | undefined
}
