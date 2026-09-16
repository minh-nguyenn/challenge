/**
 * Thay plugin formatImage.js cua site goc ($appendWebpFormat / $transformImageSrc).
 */
export function appendWebpFormat(url?: string, q = 50, size?: number | null) {
  if (!url) return ''
  if (size) return `${url}?fm=webp&q=${q}&w=${size}`
  return `${url}?fm=webp&q=${q}`
}

export function transformImageSrc(html?: string) {
  if (!html) return ''
  return html.replace(
    /<img[^>]+src="([^"]+images\.microcms-assets\.io[^"]+)"[^>]*>/g,
    (match, src) => match.replace(src, appendWebpFormat(src))
  )
}
