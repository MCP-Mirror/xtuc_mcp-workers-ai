import { tools, toolHandler } from "./sdk/server/index.js"

export async function loadTools(list) {
  await Promise.all(list)
  return tools
}

export function callTool(params) {
  return toolHandler({ params })
}
