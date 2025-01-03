/** 扫描文件，生成文件列表 */
export function scanFile() {
  let files: Record<string, any> = import.meta.glob('@/views/**/*.vue', { eager: true })
  return Object.keys(files).map((file: string) => file.replace('/src/views/', '/').replace('.vue', ''))
}
