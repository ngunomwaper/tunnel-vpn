<script lang='ts' setup>

defineProps<{
    isAnimated: boolean
    isLoading: boolean
}>()

</script>

<template>

    <button v-if="isAnimated" class="w-44 h-12 relative transition-transform transform text-sm font-semibold duration-500 hover:scale-105 active:scale-90 rounded-2xl border-[2.5px] text-white border-white bg-[#1f2650]">
        Disconnect
    </button>

    <button v-else :class="{ 'cursor-wait': isLoading }" class="w-36 h-36 border-4 relative transition-transform transform duration-500 hover:scale-110 active:scale-105 rounded-full border-white bg-[#151b3d]">
        <span class="flex justify-center items-center m-auto text-white text-lg">
            <Loading v-if="isLoading" />

            <svg v-else class="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V12M18.3611 5.64001C19.6195 6.8988 20.4764 8.50246 20.8234 10.2482C21.1704 11.994 20.992 13.8034 20.3107 15.4478C19.6295 17.0921 18.4759 18.4976 16.9959 19.4864C15.5159 20.4752 13.776 21.0029 11.9961 21.0029C10.2162 21.0029 8.47625 20.4752 6.99627 19.4864C5.51629 18.4976 4.36274 17.0921 3.68146 15.4478C3.00019 13.8034 2.82179 11.994 3.16882 10.2482C3.51584 8.50246 4.37272 6.8988 5.6311 5.64001" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    </button>

</template>

