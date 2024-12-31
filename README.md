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
  const files: Record<string, any> = import.meta.