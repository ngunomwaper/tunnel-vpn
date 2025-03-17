  
<script lang='ts' setup>

defineProps<{
    showGradient: boolean
    class?: string
}>()

</script>
  
<template>
    <div class="relative" :class="class">
        <div
            :class="{
                'absolute inset-0 rounded-full z-[1] opacity-60 group-hover:opacity-100 blur-xl transition duration-500 will-change-transform': showGradient,
                'bg-gradient-to-br from-blue-500 to-[#455bed]': showGradient
            }"
        />
        <div class="relative z-10">
            <slot></slot>
        </div>
    </div>
</template>
