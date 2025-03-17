<script lang='ts' setup>

const showButton = ref(true)

const handleScroll = () => {
  const scrollHeight = document.documentElement.scrollHeight
  const visibleHeight = window.innerHeight
  const scrollPosition = window.scrollY

  if (scrollHeight - scrollPosition > visibleHeight * 2) {
    showButton.value = true
  } else {
    showButton.value = false
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

</script>

<template>
    <button
      @click="scrollToTop"
      :class="{ 'ease-in-out translate-x-40': showButton }"
      class="fixed right-[1.2rem] z-20 bottom-[2rem] p-3 rounded-full shadow-md focus:outline-none text-white bg-primary hover:bg-secondary transform transition-transform duration-500"
    >
      <svg class="text-current w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 13L12 7L10.25 8.5M5 13L7.33333 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M5 17L12 11L13.75 12.5M19 17L16.6667 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
</template>