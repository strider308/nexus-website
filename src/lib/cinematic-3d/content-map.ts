/**
 * Content Mapping between HTML/DOM and WebGL elements
 */

export interface SceneNode {
  label: string;
  y: number;
  color: string;
}

export function mapHTMLStateToWebGL(activeNodeId: string | null, nodes: readonly SceneNode[]) {
  if (!activeNodeId) return null;
  return nodes.find((node) => node.label.toLowerCase() === activeNodeId.toLowerCase()) || null;
}
