<script lang='ts' setup>
import { CheckIcon } from '@heroicons/vue/24/solid'
import store from '~/assets/images/store.svg'
import earth from '~/assets/images/earth.png'

const items = ref([
    'Secure browsing with top speeds',
    'Block intrusive ads and get faster loading',
    'Control the Forto VPN from within Chrome browsers',
    'Hide your IP address with servers'
])

const showGradient = ref(false)

onMounted(() => {
    setTimeout(() => {
        showGradient.value = !showGradient.value
    }, 1_000)
})

</script>

<template>

    <section id="vpn" class="relative overflow-hidden min-h-screen items-center bg-primary">

        <div class="absolute md:right-1/2 translate-y-20 ">
            <Gradient :show-gradient="showGradient">
                <img :src="earth" class="w-[800px] h-auto" />
            </Gradient>
        </div>
        
        <CustomFade>
            <div class="container justify-center  m-auto relative flex items-center mt-10 md:mt-40 w-full">

                <div class="flex flex-col lg:flex-row justify-between items-start">
                    
                    <div class="relative flex flex-col text-center lg:text-start gap-4">
                        
                        <div>
                            <div class="font-samurai text-4xl lg:text-5xl font-bold line-clamp-3 text-white">
                                Get the Best VPN Chrome Extension
                            </div>
                        </div>

                        <CustomFade>
                            <span class="lg:line-clamp-3 text-[#e0d9d9]">
                                Iron Tunnel Chrome Extension masks your physical location, circumvents censorship, and blocks ads and trackers with minimal fuss.
                            </span>
                        </CustomFade>

                        <CustomFade>
                            <ul class="text-[#e0d9d9] list-none pl-4">
                                <li
                                    v-for="(item, index) in items"
                                    :key="index"
                                    class="flex items-start gap-4"
                                >
                                    <div class="flex items-start mt-1">
                                        <CheckIcon class="w-3.5 h-3.5 rounded-full p-0.5 text-white bg-green-500" />
                                    </div>
                                    
                                    <span>{{ item }}</span>
                                </li>
                            </ul>
                        </CustomFade>

                        <div class="flex flex-col space-y-4 w-full">

                            <CustomFade>
                                <div class="flex flex-col md:flex-row md:gap-9 mb-2 px-7 md:px-0">
                                    <a href="https://chromewebstore.google.com/detail/iron-tunnel-unlimited-vpn/faihnblmeedkfdeghdhimhgcdkhcaphb" class="flex w-full md:w-1/3 justify-center items-center  rounded-full duration-300 h-14 text-white bg-gradient-to-r from-[#4055e2] via-[#2c3698] to-[#3faee3] hover:opacity-70 transition-opacity" target="_blank">
                                        <img :src="store" class="w-7 h-7 mr-2" alt="Google Chrome Store" />
                                        Add to Chrome
                                    </a>

                                    <HeroRating />
                                    
                                </div>
                            </CustomFade>

                            <CustomFade>
                                <div class="space-x-2">
                                    <span class="border px-2 py-0.5 text-sm rounded-lg text-white border-secondary">It's free</span>

                                    <span class="text-sm text-white">and it takes 20 sec</span>
                                </div>
                            </CustomFade>

                        </div>

                        <div class="hero-eclipse"></div>

                    </div>

                    <div class="relative">
                        <div class="hero-eclipse-2"></div>
                        
                        <HeroFigure />

                    </div>

                </div>

            </div>
        </CustomFade>

        <!-- <CustomMeteor :size="40" /> -->

    </section>
    
</template>

<style>
@keyframes meteor {
    0% {
        transform: rotate(215deg) translate(0);
        opacity: 1
    }

    70% {
        opacity: 1
    }

    to {
        transform: rotate(215deg) translate(-500px);
        opacity: 0
    }
}

.animate-meteor-effect {
    animation: meteor 5s linear infinite
}
</style>