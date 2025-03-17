export function useScroll() {
  const isScroll = ref(false)

  const handleScroll = () => {
    isScroll.value = window.scrollY > 0
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { isScroll }
}