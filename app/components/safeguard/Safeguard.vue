<script lang='ts' setup>
import safeguard from '~/assets/images/illustrations/5vpn.png'
import store from '~/assets/images/store.svg'
import { CheckIcon } from '@heroicons/vue/24/outline'

const items = ref<string[]>([])
</script>

<template>

    <section id="safeguard" >
        <CustomFade>
            <div class="container mx-auto mt-14 relative flex items-center w-full">

                <div class="relative items-center w-full px-3 lg:px-10">
                    <div class="relative">

                        <div class="flex flex-col lg:flex-row justify-between items-center">
                            
                            <div class="w-full lg:w-1/2 relative flex flex-col text-center lg:text-start space-y-10">
                                
                                <div>
                                    <div class="font-samurai text-4xl lg:text-5xl font-medium text-white">
                                        Safeguard your IP
                                    </div>

                                    <span class="lg:line-clamp-4 mt-2 text-[#999ec4]">
                                        Protect your privacy by preventing websites from discovering your true IP address and location. Some apps are prone to WebRTC leaks, which could reveal your real IP even when using a VPN. Iron Tunnel Chrome VPN extension prevents this by blocking WebRTC. Easily keep your location private, protect your identity, and enjoy a safe and secure online experience.
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

                                        <a href="https://chromewebstore.google.com/detail/iron-tunnel-unlimited-vpn/faihnblmeedkfdeghdhimhgcdkhcaphb" class="flex mx-auto md:mx-0 w-1/2 md:w-58 justify-center items-center rounded-full duration-300 py-3 text-white bg-gradient-to-r from-[#4055e2] via-[#2c3698] to-[#3faee3] hover:opacity-90 transition-opacity" target="_blank">
                                            <img :src="store" class="w-5 h-5 mr-2" alt="Google Chrome Store" />
                                            Protect your privacy
                                        </a>

                                    </div>
                                </CustomFade>

                            </div>

                            <div class="relative lg:max-w-[40%] mt-20 lg:mt-0">

                                <img :src="safeguard" />

                                <div class="hero-eclipse-3"></div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </CustomFade>
    </section>
    
</template>