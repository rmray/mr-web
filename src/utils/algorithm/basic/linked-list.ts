/** 链表节点类 */
class Node<T = any> {
  value: T
  next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

/** 链表类 */
class LinkedList<T> {
  private head: Node | null = null
  size: number = 0

  /** 追加节点到链表尾部 */
  append(el: T) {
    // 创建新节点
    const newNode = new Node(el)

    if (!this.head) {
      // 链表为空
      this.head = newNode
    } else {
      // 链表不为空
      let current = this.head
      while (current.next) {
        current = current.next
      }
      // 找到最后一个节点
      current.next = newNode
    }
    this.size++
  }

  /** 遍历链表 */
  traverse() {
    const values: T[] = []
    let current = this.head

    while (current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values.join('->'))
  }

  /** 在链表指定位置插入节点 */
  insert(el: T, pos: number) {
    // 边界条件
    if (pos < 0 || pos > this.size) return false

    // 创建新节点
    const newNode = new Node(el)

    let current = this.head
    if (pos === 0) {
      // 链表为空
      newNode.next = current
      this.head = newNode
    } else {
      // 使用getNode重构
      let previous = this.getNode(pos - 1)
      newNode.next = previous?.next ?? null
      previous!.next = newNode
    }
    this.size++
    return true
  }

  /** 移除链表指定位置的节点 */
  removeAt(pos: number) {
    // 边界条件
    if (pos < 0 || pos >= this.size) return false

    let current = this.head
    if (pos === 0) {
      // 移除第一项
      this.head = current?.next ?? null
    } else {
      // 使用getNode重构
      let previous = this.getNode(pos - 1)
      previous!.next = previous!.next?.next ?? null
    }
    this.size--
    return true
  }

  /** 获取链表指定位置的节点值 */
  get(pos: number) {
    // 边界条件
    if (pos < 0 || pos >= this.size) return false

    // 遍历链表，并移动指针到指定位置
    // 使用getNode重构
    let current = this.getNode(pos)
    return current?.value
  }

  /** 更新链表指定位置的节点值 */
  update(el: T, pos: number) {
    // 边界条件
    if (pos < 0 || pos >= this.size) return false

    let current = this.getNode(pos)
    current!.value = el
    return true
  }

  /** 获取链表指定值的索引 */
  indexOf(el: T) {
    let current = this.head
    let index = 0

    while (current) {
      if (current.value === el) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  /** 移除链表指定值的元素节点 */
  remove(el: T) {
    let index = this.indexOf(el)
    return this.removeAt(index)
  }

  /** 判断链表是否为空 */
  isEmpty() {
    return this.size === 0
  }

  /** 获取链表指定位置的节点 */
  private getNode(pos: number): Node<T> | null {
    let current = this.head
    let index = 0
    while (current && index++ < pos) {
      current = current.next
    }
    return current
  }

  /** 获取链表长度 */
  get length() {
    return this.size
  }
}

export default LinkedList
