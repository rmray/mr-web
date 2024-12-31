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
