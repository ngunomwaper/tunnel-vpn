<script lang='ts' setup>
import protect from '~/assets/images/illustrations/2vpn.png'
import store from '~/assets/images/store.svg'
import { CheckIcon } from '@heroicons/vue/24/outline'

const items = ref<string[]>([
    '2,500+ servers in 60 countries.',
    'Unlimited bandwidth.',
    'Strict No Logs policy.',
    '24/7 customer support.'
])
</script>

<template>

    <section id="protect" class="lg:py-20">
        <CustomFade>
            <div class="container mx-auto mt-14 relative flex items-center w-full">

                <div class="relative items-center w-full px-3 lg:px-10">
                    <div class="relative">

                        <div class="flex flex-col lg:flex-row justify-between items-center">
                            
                            <div class="w-full lg:w-1/2 relative flex flex-col text-center lg:text-start space-y-10">
                                
                                <div>
                                    <div class="font-samurai text-4xl lg:text-5xl font-medium text-white">
                                        Protect your location
                                    </div>

                                    <span class="lg:line-clamp-4 mt-2 text-[#999ec4]">
                                        Keep your whereabouts to yourself and surf with peace of mind using the Iron Tunnel Chrome extension. When you connect to any of Iron Tunnel server locations, you get a different IP address and can make yourself appear to be in a different country. Avoid price discrimination based on location, and help keep your identity private. 
                                    </span>
                                </div>

                                <ul class="space-y-4">
                                    <template v-for="item in items" :key="item">
                                        <CustomFade>
                                            <li class="flex items-start gap-4">
                                                <div class="flex items-start mt-1">
                                                    <CheckIcon class="w-3.5 h-3.5 rounded-full p-0.5 text-white bg-green-500" />
                                                </div>

                                                <span class="lg:line-clamp-3 font-extralight text-[#999ec4]">
                                                    {{ item }}
                                                </span>
                                            </li>
                                        </CustomFade>
                                    </template>
                                </ul>

                                <CustomFade>
                                    <div class="flex flex-col space-y-4 w-full lg:w-2/3">

                                        <a href="https://chromewebstore.google.com/detail/iron-tunnel-unlimited-vpn/faihnblmeedkfdeghdhimhgcdkhcaphb" class="flex mx-auto md:mx-0 w-1/2 md:w-36 justify-center items-center rounded-full duration-300 py-3 text-white bg-gradient-to-r from-[#4055e2] via-[#2c3698] to-[#3faee3] hover:opacity-90 transition-opacity" target="_blank">
                                            <img :src="store" class="w-5 h-5 mr-2" alt="Google Chrome Store" />
                                            Try it
                                        </a>

                                    </div>
                                </CustomFade>

                            </div>

                            <div class="relative lg:max-w-[40%] mt-20 lg:mt-0">

                                <img :src="protect" />

                                <div class="hero-eclipse-3"></div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </CustomFade>
    </section>
    
</template>