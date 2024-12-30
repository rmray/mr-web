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







