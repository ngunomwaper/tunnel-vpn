<script lang='ts' setup>

const props = defineProps<{
    isOpen: boolean
    aside?: string
}>()

const emit = defineEmits(['close'])

// Watch for changes in isOpen to enable/disable scroll
watch(() => props.isOpen, (newValue) => {
    if (newValue) {
        // Disable scroll when menu is open
        document.body.style.overflow = 'hidden'
    } else {
        // Re-enable scroll when menu is closed
        document.body.style.overflow = ''
    }
})

</script>

<template>

    <teleport to="body">
        <div class="lg:hidden">
        
            <div v-show="isOpen" @click="emit('close')" class="bg-black/30 fixed inset-0 z-20"></div>

            <aside
                :class="[ isOpen ? 'transform-none lg:right-2 py-2' : 'translate-y-full translate-x-0 lg:translate-y-0 lg:translate-x-full' ]"
                class="fixed top-0 z-30 w-full lg:w-auto h-screen transition-transform right-0"
            >
                <div class="flex flex-col lg:flex-row w-full h-full">

                    <div @click="emit('close')" class="z-10 h-20 group cursor-pointer lg:h-full p-6 rounded-l-3xl duration-300 hover:translate-y-2 hover:translate-x-0 lg:hover:translate-y-0 lg:hover:translate-x-2 hover:bg-[#98a1c014]">
                        <button>
                            <svg class="w-7 h-7 rotate-90 lg:rotate-0 duration-300 text-white group-hover:text-secondary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 19L17 12L15.5 10.25M11 5L13 7.33333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 5L13 12L11.5 13.75M7 19L9 16.6667" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    <div class="z-20 w-full lg:w-[22rem] h-full px-3 overflow-y-auto rounded-xl bg-primary">
                        <slot />
                    </div>
                </div>
            </aside>
        </div>
    </teleport>

</template>
