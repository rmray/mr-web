<script setup lang="ts">
// 引入所有组件
let files: Record<string, any> = import.meta.glob(`@/views/**/*.vue`, { eager: true })
let paths = Object.keys(files)
paths = paths.map((path) => path.replace('/src/views/', '/').replace('.vue', ''))

// console.log(currentFiles)

// 构建树形目录结构
function genTree(files: string[]) {
  const root: any[] = []
  files.forEach((file) => {
    let currLevel = root
    const parts = file.split('/').filter(Boolean)
    // console.log(parts)
    let path = ''
    parts.forEach((part) => {
      path += `/${part}`
      let existingNode = currLevel.find((node) => node.name === part)
      if (!existingNode) {
        existingNode = { name: part, path, children: [] }
        currLevel.push(existingNode)
      }
      currLevel = existingNode.children // 深入到下一层级
    })
  })
  // console.log(root)
  return root
}
const trees = genTree(paths)
const currTrees = trees.filter((tree) => tree.name === 'data-visualization')[0].children
</script>

<template>
  <div class="data-visualization">
    <div class="aside">
      <ul class="outer">
        <template v-for="tree in currTrees" :key="tree.name">
          <li class="item">
            <div class="title">{{ tree.name }}</div>
            <ul class="inner">
              <template v-if="tree.children" v-for="item in tree.children" :key="item">
                <li class="item">
                  <router-link :to="item.path">{{ item.name }}</router-link>
                </li>
              </template>
            </ul>
          </li>
        </template>
      </ul>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style lang="less" scoped>
.data-visualization {
  display: flex;
  justify-content: space-between;

  ul.inner {
    padding-left: 20px;
  }

  .aside {
    width: var(--aside-width);
    height: 100vh;
    // background-color: aqua;
    border-right: 1px solid #d3d4d5;
    padding: 20px;

    li.item {
      .title {
        line-height: 30px;
        font-weight: bold;
        border-bottom: 1px solid #d3d4d5;
      }
      a {
        line-height: 30px;
      }
    }
  }
  .content {
    flex: 1;
    height: 100vh;
    // background-color: skyblue;
  }
}
</style>
