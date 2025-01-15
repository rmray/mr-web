import type { List } from './list'

export interface Stack<T = any> extends List<T> {
  push(el: T): number
  pop(): T | undefined
}
