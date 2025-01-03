<script setup lang="ts">
import { listToTree } from '@/utils/list-to-tree'
import { scanFile } from '@/utils/scan-file'

const props = defineProps<{
  categoryName: string
}>()

/** 业务逻辑 */
const files = scanFile() // 扫描文件，生成文件列表
const fileArr = files.map((file) => file.split('/').filter(Boolean)) // 分割成二维数组
const fileTrees = listToTree(fileArr) // 文件列表转文件树结构
const currentFileTree = fileTrees.filter((file) => file.name === props.categoryName)[0] // 过滤出当前分类的文件树结构
currentFileTree.children = currentFileTree.children.filter((file: any) => file.name !== 'index') // 过滤index文件
// console.log(currentFileTree)
</script>

<template>
  <div class="layout">
    <div class="aside">
      <ul class="outer">
        <template v-for="file in currentFileTree.children" :key="file.name">
          <li class="item">
            <div :class="{ title: file.children ? true : false }">{{ file.name }}</div>
            <ul class="inner">
              <template v-if="file.children" v-for="item in file.children" :key="item">
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

<style lang="scss" scoped>
.layout {
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
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

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
