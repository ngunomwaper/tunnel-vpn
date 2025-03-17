<script lang='ts' setup>
import { useFormatTime } from '~/composables/useFormatTime'
import earth from '~/assets/images/earth.png'

const isLoading = ref<boolean>(false)
const isAnimated = ref<boolean>(false)

const timer = ref<number>(0)
let interval: ReturnType<typeof setInterval> | undefined

const displayedText = ref<string>('127.0.0.1')

function generateRandomBrazilianIP() {
    // Диапазоны IP-адресов, используемые в Бразилии
    const ipRanges = [
        '177.0.0.0', '177.1.0.0', '177.2.0.0',
        '200.160.0.0', '200.170.0.0', 
        '189.0.0.0', '189.1.0.0', 
    ]

    // Выбираем случайный диапазон
    const randomRange = ipRanges[Math.floor(Math.random() * ipRanges.length)]
    
    // Генерация случайных октетов
    const octets = randomRange.split('.').map((octet, index) => {
        if (index < 3) {
            return octet 
        }
        return Math.floor(Math.random() * 256)
    });

    // Формируем IP-адрес
    const randomIP = octets.join('.')
    return randomIP
}

const startAnimation = () => {
    setTimeout(() => {
        isLoading.value = true

        setTimeout(() => {
            isLoading.value = false
            isAnimated.value = true
            
            displayedText.value = generateRandomBrazilianIP()

            // Проверяем, если интервал уже установлен, чтобы не создавать новый
            if (!interval) {
                interval = setInterval(() => {
                    timer.value++
                }, 1000)
            }
        }, 2000)
    }, 2000)
}

onMounted(() => startAnimation())

const displayTime = computed(() => useFormatTime(timer.value))

const show = ref(!isAnimated.value)

watch(() => isAnimated, (newVal) => {
    show.value = !newVal
})

</script>

<template>

    <CustomFade>
        <div class="relative overflow-hidden h-[36rem] md:w-[22rem] rounded-3xl bg-primary">

            <div class="hero-eclipse-2"></div>

            <div class="flex flex-col justify-between h-[80%] p-4">
                <div class="">

                    <header class="sticky top-0 z-30 px-5 py-4">
                        <div class="flex justify-between items-center">
                            
                            <button>
                                <div class="w-9 h-9 rounded-full bg-secondary"></div>
                            </button>

                            <button>
                                <div class="w-9 h-9 rounded-full bg-secondary"></div>
                            </button>

                        </div>
                    </header>

                    <div class="mt-5">
                        <div class="flex flex-col gap-1 justify-center items-center">
      
                            <div v-if="isAnimated" class="text-lg font-bold text-white">Brazil</div>

                            <div v-else class="text-sm font-medium text-[#999ec4]">Connecting Time</div>

                            <div class="text-5xl font-bold text-white">{{ displayTime }}</div>

                            <CustomTransition>
                                <div v-if="isAnimated" class="text-sm font-medium text-[#999ec4]">{{ displayedText }}</div>
                            </CustomTransition>

                        </div>
                    </div>

                    <div class="mt-4">
                        <div class="w-full z-20 flex items-center justify-center">
                            <div class="relative z-10">
                                <HeroFigureExtensionButton :is-animated="isAnimated" :is-loading="isLoading" />
                            </div>
                        </div>
                    </div>

                    <div class="my-4 h-20">
                        <div
                            v-show="!isAnimated"
                            class="flex flex-col items-center justify-center gap-4 mt-4 transition-opacity duration-1000 ease-in-out"
                            :class="{ 'opacity-0': !show, 'opacity-100': show }" 
                        >
                            <div
                                class="flex justify-between relative rounded-[1.2rem] appearance-none select-none p-4 overflow-hidden text-sm lex w-72 items-center text-white bg-[#1f2650]"
                                type="button"
                            >
                                <div class="flex items-center gap-2">
                                    <img src="public/flags/BL.svg" class="h-9 w-auto ml-2 rounded-full" alt="Brazil" />
                                    
                                    <div class="flex flex-col">
                                        <span class="font-semibold">Brazil</span>
                                        <p class="text-[#7b83aa]">{{ displayedText}}</p>
                                    </div>
                                </div>

                                <button class="p-2 rounded-full bg-[#384275]">
                                    <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 6L15 12L9 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                 
                    <div class="flex justify-center transition-all duration-1000 ease-in-out" :class="{ 'scale-[1.15] -translate-y-14': isAnimated }">
                        <Gradient :show-gradient="isAnimated">
                            <img :src="earth" class="w-80 h-auto" alt="" />
                        </Gradient>
                    </div>

                    
                </div>

            </div>

    
        </div>
    </CustomFade>
</template>

<style>

.animate-none {
    animation: none
}

.animate-spinner-ease-spin {
    animation: spinner-spin .8s ease infinite
}

@keyframes spinner-spin {
    0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(360deg)
    }
}

.animate-spinner-linear-spin {
    animation: spinner-spin .8s linear infinite
}

</style>