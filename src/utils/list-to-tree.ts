/** 文件路径转文件树结构 */
export function listToTree(paths: string[][]) {
  const root: any[] = []

  // 辅助函数，递归地构建树
  function addPath(path: string[], nodeList: any[], currentPath: any[]) {
    // 获取当前路径的第一个部分
    const [currentPart, ...restParts] = path

    // 查找当前节点是否存在
    let node = nodeList.find((item) => item.name === currentPart)

    // 如果当前节点不存在，则创建并加入列表
    if (!node) {
      let pathArr = [...currentPath, currentPart]
      let pathStr = '/' + pathArr.join('/')
      if (restParts.length === 0) {
        node = { name: currentPart, path: pathStr, _pathArr: pathArr }
      } else {
        node = { name: currentPart, path: pathStr, _pathArr: pathArr, children: [] }
      }
      nodeList.push(node)
    }

    // 如果还有剩余路径部分，则递归地处理下一级
    if (restParts.length > 0) {
      addPath(restParts, node.children, node._pathArr)
    }
  }

  // 遍历所有路径并调用递归函数
  paths.forEach((path) => {
    addPath(path, root, [])
  })

  return root
}

// 测试
// let paths = [
//   ['data-visualization', 'canvas', 'd00-canvas-template'],
//   ['data-visualization', 'canvas', 'd01-canvas-rect'],
//   ['data-visualization', 'canvas', 'd02-canvas-path-line'],
//   ['data-visualization', 'canvas', 'd03-canvas-path-triangle'],
//   ['data-visualization', 'canvas', 'd04-canvas-path-arc'],
//   ['data-visualization', 'canvas', 'd05-canvas-path-circle'],
//   ['data-visualization', 'canvas', 'd06-canvas-path-rect'],
//   ['data-visualization', 'canvas', 'd07-canvas-globalAlpha'],
//   ['data-visualization', 'canvas', 'd08-canvas-text'],
//   ['data-visualization', 'case', 'cube'],
//   ['data-visualization', 'case', 'webpack-logo']
// ]
// console.log(listToTree(paths))
