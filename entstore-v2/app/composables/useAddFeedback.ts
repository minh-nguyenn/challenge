/**
 * Phản hồi khi thêm hàng vào 買い物リスト / カート.
 *
 * Trước đây bấm 「お店で買う」 thì mở luôn sơ đồ 売場 — nặng tay và che mất
 * trang. Giờ chỉ cần một viên chip bay từ nút lên đúng lối vào ở thanh trên,
 * rồi lối vào đó nảy một cái. Người dùng thấy "đã vào chỗ nào" mà không bị
 * cắt ngang thao tác.
 *
 * Toàn bộ style gán thẳng vào phần tử nên không phụ thuộc file .scss nào,
 * và chip được gắn vào <body> để không bị cha nào cắt (overflow/transform).
 */

/** Lối vào tương ứng trên thanh tìm kiếm */
export const FLY_TARGET = {
  list: 'a.ss-link[href="/list"]',
  cart: 'a.ss-link-cart',
} as const

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

/** Cho lối vào nảy nhẹ một cái để mắt bắt được là số vừa đổi */
function pulse(el: HTMLElement | null) {
  if (!el?.animate) return
  el.animate(
    [
      { transform: 'scale(1)' },
      { transform: 'scale(1.18)', offset: 0.4 },
      { transform: 'scale(0.96)', offset: 0.7 },
      { transform: 'scale(1)' },
    ],
    { duration: 420, easing: 'cubic-bezier(.34,1.56,.64,1)' }
  )
}

export function useAddFeedback() {
  /**
   * @param fromEl phần tử vừa được bấm (lấy điểm xuất phát)
   * @param target 'list' | 'cart'
   * @param label  chữ trên chip, vd '+7'
   */
  function fly(fromEl: HTMLElement | null | undefined, target: keyof typeof FLY_TARGET, label: string) {
    if (typeof document === 'undefined') return
    const dest = document.querySelector<HTMLElement>(FLY_TARGET[target])

    // Tôn trọng cài đặt giảm chuyển động của máy: bỏ phần bay, giữ cái nảy
    if (!fromEl || prefersReducedMotion() || !(fromEl as any).animate) return pulse(dest)

    const a = fromEl.getBoundingClientRect()
    const b = dest?.getBoundingClientRect()

    const chip = document.createElement('div')
    chip.textContent = label
    chip.setAttribute('aria-hidden', 'true')
    chip.style.cssText = [
      'position:fixed',
      'z-index:9999',
      'pointer-events:none',
      'display:flex',
      'align-items:center',
      'justify-content:center',
      'min-width:34px',
      'height:34px',
      'padding:0 10px',
      'border-radius:17px',
      'background:#c7273b',
      'color:#fff',
      'font-size:14px',
      'font-weight:bold',
      'box-shadow:0 6px 18px rgba(199,39,59,.45)',
      `left:${a.left + a.width / 2 - 17}px`,
      `top:${a.top + a.height / 2 - 17}px`,
    ].join(';')
    document.body.appendChild(chip)

    // Không thấy lối vào (cuộn khuất / màn hình hẹp) thì bay vọt lên đỉnh trang
    const dx = b ? b.left + b.width / 2 - (a.left + a.width / 2) : 0
    const dy = b ? b.top + b.height / 2 - (a.top + a.height / 2) : -(a.top + a.height / 2) - 40

    const anim = chip.animate(
      [
        { transform: 'translate(0,0) scale(.6)', opacity: 0 },
        { transform: `translate(${dx * 0.35}px, ${dy * 0.35 - 38}px) scale(1.12)`, opacity: 1, offset: 0.35 },
        { transform: `translate(${dx}px, ${dy}px) scale(.45)`, opacity: 0 },
      ],
      { duration: 760, easing: 'cubic-bezier(.32,.72,.35,1)' }
    )
    anim.onfinish = () => {
      chip.remove()
      pulse(dest)
    }
    anim.oncancel = () => chip.remove()
  }

  return { fly }
}
