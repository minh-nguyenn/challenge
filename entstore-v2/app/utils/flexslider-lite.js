/**
 * Thay jQuery + flexslider cho 4 trang con dung window.$(...).flexslider(...).
 *
 * Site goc nap jQuery tu CDN googleapis roi goi:
 *     window.$('#slider').flexslider({ animation:'slide', rtl:true })
 *     window.$('#carousel').flexslider({ itemWidth:130, itemMargin:5, asNavFor:'#slider' })
 *     window.$('map').imageMapResize()
 *     window.$('.cboxElement').colorbox()
 *
 * Thay vi keo ca jQuery (90KB) cho 4 lenh, dung mot ham $ toi gian co dung
 * 4 phuong thuc do. Cau truc DOM giu nguyen (.flexslider > ul.slides > li)
 * nen CSS goc cua flexslider van bam dung.
 */

function initFlexslider(root, opts = {}) {
  const slides = root.querySelector('ul.slides')
  if (!slides) return
  const items = [...slides.children]
  if (items.length === 0) return

  const isCarousel = !!opts.itemWidth
  const perView = isCarousel
    ? Math.max(1, Math.floor(root.clientWidth / (opts.itemWidth + (opts.itemMargin || 0) * 2)))
    : 1

  Object.assign(slides.style, {
    display: 'flex',
    transition: 'transform .6s ease',
    margin: '0',
    padding: '0',
    listStyle: 'none',
  })
  for (const li of items) {
    li.style.flex = `0 0 ${100 / perView}%`
    li.style.maxWidth = `${100 / perView}%`
    if (isCarousel && opts.itemMargin) li.style.padding = `0 ${opts.itemMargin}px`
  }
  root.style.overflow = 'hidden'
  root.style.position = 'relative'

  let index = 0
  const total = items.length
  const go = (i) => {
    index = ((i % total) + total) % total
    slides.style.transform = `translateX(-${index * (100 / perView)}%)`
  }

  // flexslider mac dinh tu chay (slideshow: true)
  if (total > perView && opts.slideshow !== false) {
    setInterval(() => go(index + 1), opts.slideshowSpeed || 7000)
  }

  root.__flexGo = go
  return { go }
}

/** jQuery toi gian: chi du cho 4 lenh ma site goc goi */
function $(selector) {
  const nodes =
    typeof selector === 'string' ? [...document.querySelectorAll(selector)] : [selector].filter(Boolean)

  return {
    length: nodes.length,
    flexslider(opts) {
      nodes.forEach((n) => initFlexslider(n, opts || {}))
      return this
    },
    imageMapResize() {
      // Ban goc dung imageMapResizer de toa do <area> co dan theo anh.
      // Viet gon: tinh lai coords theo ty le anh hien tai / anh goc.
      nodes.forEach((map) => {
        const img = document.querySelector(`img[usemap="#${map.name}"]`)
        if (!img) return
        const areas = [...map.querySelectorAll('area')]
        if (!areas.length) return
        if (!map.__orig) map.__orig = areas.map((a) => a.coords.split(',').map(Number))
        const resize = () => {
          const rx = img.clientWidth / (img.naturalWidth || img.clientWidth)
          const ry = img.clientHeight / (img.naturalHeight || img.clientHeight)
          areas.forEach((a, i) => {
            a.coords = map.__orig[i].map((v, j) => Math.round(v * (j % 2 ? ry : rx))).join(',')
          })
        }
        if (img.complete) resize()
        else img.addEventListener('load', resize)
        window.addEventListener('resize', resize)
      })
      return this
    },
    colorbox() {
      // Ban goc mo anh phong to trong lop phu. Giu hanh vi don gian:
      // bam vao link thi mo anh o tab moi (khong chan luong nguoi dung).
      nodes.forEach((a) => a.setAttribute('target', '_blank'))
      return this
    },
  }
}

export function installJQueryShim() {
  if (typeof window === 'undefined') return
  if (!window.$) window.$ = $
  if (!window.jQuery) window.jQuery = $
}
