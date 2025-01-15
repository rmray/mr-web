class Node<T = any> {
  value: T
  next: Node<T> | null

  constructor(value: T) {
    this.value = value
    this.next = null
  }
}

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
      let previous: Node | null = null
      let index = 0
      // 链表不为空
      // 遍历链表，并移动指针到指定位置
      while (current && index++ < pos) {
        previous = current
        current = current?.next
      }

      // 插入节点
      // console.log(previous, current) // e null
      newNode.next = current
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
      let previous: Node<T> | null = null
      // 移除中间或最后一项
      let index = 0
      while (current && index++ < pos) {
        previous = current
        current = current.next
      }
      // 找到被移除节点和它的上个节点
      console.log(current, previous)
      previous!.next = current?.next ?? null
    }
    this.size--
    return true
  }

  /** 获取链表指定位置的节点值 */
  get(pos: number) {
    // 边界条件
    if (pos < 0 || pos >= this.size) return false

    // 遍历链表，并移动指针到指定位置
    let current = this.head
    let index = 0
    while (current && index++ < pos) {
      current = current.next
    }
    return current?.value
  }

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
