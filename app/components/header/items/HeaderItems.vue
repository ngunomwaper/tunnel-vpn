<script lang='ts' setup>
import { useScroll } from '~/composables/useScroll'

interface Item {
  path: string
  text: string
}

const { isScroll } = useScroll()

const navItems = ref<Item[]>([
  { path: 'vpn', text: `Iron Tunnel`},
  { path: 'about', text: 'About' },
  { path: 'protect', text: 'Protect' },
  { path: 'fast', text: 'Fast' },
  { path: 'safeguard', text: 'Safeguard' }
])

const currentSection = ref<string | null>(null)

const observerCallback: IntersectionObserverCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      currentSection.value = entry.target.id
      history.replaceState(null, 'null', `#${ entry.target.id }`)
    }
  })
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(observerCallback, {
    root: null,
    threshold: 0.5 // Секция считается видимой, если 50% ее высоты видимо
  })

  const sections = document.querySelectorAll<HTMLElement>('section')
  sections.forEach(section => observer!.observe(section))
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <ul class="flex lg:space-x-7 space-y-4 lg:space-y-0 flex-col lg:flex-row lg:items-center">
    <HeaderItemsItem
      v-for="item in navItems"
      :key="item.path"
      :item="item"
      :isActive="currentSection === item.path"
      :isScroll="isScroll"
    />

  </ul>

  <div class="lg:hidden">
    <!-- <HeaderWallet /> -->
  </div>
</template>
