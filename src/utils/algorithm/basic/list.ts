export interface List<T = any> {
  peek(): T | undefined
  isEmpty(): boolean
  get size(): number
}
