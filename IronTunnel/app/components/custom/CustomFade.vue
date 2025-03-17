<script lang='ts' setup>

const isVisible = ref<boolean>(false)
const section = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null // Объявление observer с типом

// Объявление типа для entries в observerCallback
const observerCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            isVisible.value = true // Устанавливаем видимость

            if (observer) {
                observer.unobserve(entry.target) // Отключаем наблюдение
            }
        }
    })
}

onMounted(() => {
    observer = new IntersectionObserver(observerCallback, {
        threshold: 0.2, // Загрузка при 20% видимости
    })

    if (section.value) {
        observer.observe(section.value) // Наблюдаем за элементом
    }
})

</script>

<template>
    <div ref="section" class="fade-section" :class="{ 'visible': isVisible }">
      <slot />
    </div>
</template>

<style scoped>
.fade-section {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-section.visible {
    opacity: 1;
    transform: translateY(0);
}
</style>
  