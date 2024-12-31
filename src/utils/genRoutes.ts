import type { RouteRecordRaw } from 'vue-router'

/** 根据目录结构生成路由 */
export function genRoutes() {
  const files: Record<string, any> = import.meta.glob(`@/views/**/*.vue`, { eager: true })
  console.log('files: ', files)
  const routes: RouteRecordRaw[] = []
  for (let key in files) {
    let path = key.replace('/src/views/', '/').replace('.vue', '').replace('/index', '')
    path = path === '' ? '/' : path
    routes.push({ path, component: files[key].default })
  }
  // console.log(routes)
  return routes
}
genRoutes()
