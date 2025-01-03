export type HomeHeaderItem = {
  id?: number
  title?: string
  path?: any
}

export type FileTree = {
  name: string
  path: string
  children: FileTree[]
  _pathArr?: string[]
}
