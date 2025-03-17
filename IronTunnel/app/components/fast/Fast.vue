<script lang='ts' setup>
import fast from '~/assets/images/illustrations/3vpn.png'
import store from '~/assets/images/store.svg'
import { CheckIcon } from '@heroicons/vue/24/outline'

const items = ref<string[]>([])
</script>

<template>

    <section id="fast" class="lg:py-20">
        <CustomFade>
            <div class="container mx-auto mt-14 relative flex items-center w-full">

                <div class="relative items-center w-full px-3 lg:px-10">
                    <div class="relative">

                        <div class="flex flex-col lg:flex-row justify-between items-center">
                            
                            <div class="relative lg:max-w-[40%] mt-20 lg:mt-0">

                                <img :src="fast" />

                                <div class="hero-eclipse-3"></div>

                            </div>

                            <div class="lg:w-1/2 mt-4 md:mt-0 relative flex flex-col text-center lg:text-start space-y-10">
                                
                                <div>
                                    <div class="font-samurai text-4xl lg:text-5xl font-medium text-white">
                                        Super fast speeds 
                                    </div>

                                    <span class="lg:line-clamp-3 mt-2 text-[#999ec4]">
                                        Iron Tunnel Google Chrome browser extension has been optimized for speed so you can enjoy the fast download rates you expect. Stream seamlessly and browse online without interruption when you download our Chrome extension VPN.
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

                                        <a href="https://chromewebstore.google.com/detail/iron-tunnel-unlimited-vpn/faihnblmeedkfdeghdhimhgcdkhcaphb" class="flex mx-auto md:mx-0 w-2/3 md:w-60 justify-center items-center rounded-full duration-300 py-3 text-white bg-gradient-to-r from-[#4055e2] via-[#2c3698] to-[#3faee3] hover:opacity-90 transition-opacity" target="_blank">
                                            <img :src="store" class="w-5 h-5 mr-2" alt="Google Chrome Store" />
                                            Super fast speeds 
                                        </a>

                                    </div>
                                </CustomFade>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </CustomFade>
    </section>
    
</template>