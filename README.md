---
title: "S20-01 项目-mr-web"
date: "2024-12-30"
---

# S20-01 项目-mr-web

[[TOC]]

[TOC]

## 环境搭建

### 创建项目-vite

```sh
pnpm create vite mr-web
```

*注意：* 选择了TS

### 设置别名

在`vite.config.ts`文件中设置`resolve.alias`别名

```ts {6-11}
// vite.config.ts

export default defineConfig({
  plugins: [vue()],

  // 别名配置
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
```

*注意：* 使用node中的`path`模块，需要安装`@type/node`TS类型插件

```sh
pnpm i @type/node -D
```

### 别名TS检测

在`tsconfig.app.json`或`tsconfig.json`文件的`compilerOptions`选项中添加以下代码

```json {3-7}
{
  "compilerOptions": {
    // TS检测路径别名@的配置
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
}

```

### 根据目录结构生成路由

```ts
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { homeHeader } from '../data/home-header'
import type { HomeHeaderItem } from '../types/data'

/** 根据目录结构生成路由 */
function genRoutes() {
  const files: Record<string, any> = import.meta.glob(`@/views/**/*.vue`, { eager: true })
  const routes: RouteRecordRaw[] = []
  for (let key in files) {
    let path = key.replace('/src/views/', '/').replace('.vue', '').replace('/index', '')
    path = path === '' ? '/' : path
    routes.push({ path, component: files[key].default })
  }
  // console.log(routes)
  return routes
}

function genChildrenRoutes(homeHeader: HomeHeaderItem[]) {
  const routes: RouteRecordRaw[] = []
  homeHeader.forEach((item) => {
    // let route: RouteRecordRaw
    let route = genRoutes().filter((route) => route.path === item.path)[0]
    let newRoute = {
      ...route,
      children: genRoutes().filter((route) => {
        if (route.path.startsWith(`${item.path}/`)) {
          route.path = route.path.replace(item.path + '/', '')
          return true
        }
      })
    }
    routes.push(newRoute)
  })
  console.log(routes)
  return routes
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/index.vue'),
      children: genChildrenRoutes(homeHeader)
    }
  ]
})

export default router
```

### 根据目录结构生成侧边栏

```vue
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
```





## 问题

![image-20241230165514114](http://cdn.mrer.top/2024/s4/image-20241230165514114.png)

**解决：** 在`@/src/vite-env.d.ts`中定义vue模块

```ts {3-7}
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
```







