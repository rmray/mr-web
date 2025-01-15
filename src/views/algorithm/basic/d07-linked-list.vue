<script setup lang="ts">
import LinkedList from '@/utils/algorithm/basic/linked-list'

// 测试链表封装
const linked = new LinkedList()

// 1. 追加元素
linked.append('a')
linked.append('b')
linked.append('c')
linked.append('d')
linked.append('e')
// 2. 遍历链表元素
// linked.traverse()

// 3. 向链表指定位置插入元素
// linked.insert('哈', 0) // 哈->a
// linked.insert('呵', 2) // a->b->呵->c->d->e
// linked.insert('嘻', 4) // a->b->c->d->嘻->e
// linked.insert('呜', 5) // a->b->c->d->e->呜
// linked.traverse()

// 4. 删除链表元素
// linked.removeAt(0) // b->c->d->e
// linked.removeAt(2) // a->b->d->e
// linked.removeAt(4) // a->b->c->d
// console.log(linked.removeAt(5)) // false
// linked.traverse()

// 5. 获取链表元素
// console.log(linked.get(3)) // d

// 6. 更新链表元素
// linked.update('哈', 0)
// linked.traverse()

// 7. 查找指定链表元素的索引
// console.log(linked.indexOf('a')) // 0
// console.log(linked.indexOf('f')) // -1

// 8. 删除链表元素
// console.log(linked.remove('c')) // true
// linked.traverse() // a->b->d->e

// 9. 判断链表是否为空
// console.log(linked.isEmpty()) // false
</script>

<template>
  <div class="linked-list">linked-list</div>
</template>

<style lang="less" scoped>
.linked-list {
  color: inherit;
}
</style>
