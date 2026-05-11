import { ref, onMounted, onBeforeUnmount } from 'vue'

// Returns a reactive Y-offset (in px) that tracks window scroll, multiplied
// by `speed`. Use to translate background layers slower than scroll for a
// subtle parallax. Updates are rAF-throttled, so the listener is cheap.
//
// Usage:
//   const offset = useParallax(0.3)
//   <div :style="{ transform: `translate3d(0, ${offset}px, 0)` }" />

export function useParallax(speed = 0.3) {
  const offset = ref(0)
  let frameId: number | null = null

  function update() {
    offset.value = window.scrollY * speed
    frameId = null
  }

  function onScroll() {
    if (frameId === null) frameId = requestAnimationFrame(update)
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    update()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    if (frameId !== null) cancelAnimationFrame(frameId)
  })

  return offset
}
