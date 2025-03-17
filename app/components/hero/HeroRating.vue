<script lang='ts' setup>
import { StarIcon } from '@heroicons/vue/24/solid'

</script>

<template>

    <div class="flex flex-row justify-center md:justify-start items-center mt-4 md:mt-0 gap-2">
        <div class="flex">
            <img :src="'https://randomuser.me/api/portraits/women/44.jpg'" class="avatar" />
            <img :src="'https://randomuser.me/api/portraits/men/58.jpg'" class="avatar" />
            <img :src="'https://randomuser.me/api/portraits/men/78.jpg'" class="avatar" />
            <img :src="'https://randomuser.me/api/portraits/women/10.jpg'" class="avatar" />

            <div class="flex justify-center items-center font-medium avatar text-xs text-white bg-secondary">68K+</div>
        </div>

        <div class="flex flex-col space-y-2 text-white">
            <div class="flex items-center space-x-2">
            <div class="flex">
                <StarIcon class="w-5 h-5 text-yellow-400" />
                <StarIcon class="w-5 h-5 text-yellow-400" />
                <StarIcon class="w-5 h-5 text-yellow-400" />
                <StarIcon class="w-5 h-5 text-yellow-400" />
                <StarIcon class="w-5 h-5 text-yellow-400" />
            </div>

            <div>
                <strong>4,99</strong>/5
            </div>
            </div>

            <div>Trusted by <strong>68,378+</strong> users</div>
        </div>
    </div>
    
</template>

<style>
.avatar {
  @apply w-10 h-10 rounded-full border-[3px] border-white -ml-4
}
</style>