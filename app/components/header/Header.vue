<script lang='ts' setup>
import logo from '~/assets/images/logo.png'
import { useScroll } from '~/composables/useScroll'

const route = useRoute()

const { isScroll } = useScroll()

</script>

<template>
    <header
     :class="[ route.name !== 'index' || isScroll ? 'bg-primary' : 'bg-primary' ]"
      class="sticky top-0 z-10 transition duration-500 "
    >

        <div class="lg:flex items-center justify-between py-4 px-8 lg:px-12">
            <div class="flex justify-between items-center">

               <div class="font-bold lg:text-3xl">
                  <NuxtLink to="/" class="flex items-center gap-2">
                      <img :src="logo" :class="[ route.name !== 'index' || isScroll ? 'w-10' : 'h-12' ]" class="transition-transform duration-300" alt="Iron Tunnel Logo" />
                      <span class="text-xl text-white">Iron Tunnel</span>
                  </NuxtLink>
               </div>

                <HeaderMobile />
            </div>

            <div class="flex-row hidden lg:block space-x-4 -mx-2">
               <HeaderItems />
            </div>

            <div class="hidden lg:flex">
                <HeaderAdd />
            </div>
            
        </div>
    </header>

</template>