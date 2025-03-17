<script lang='ts' setup>

interface Item {
    hidden?: boolean
    path: string
    text: string
}

defineProps<{
    item: Item
    isActive: boolean
    isScroll: boolean
}>()

</script>

<template>
    <li>
        <a
            v-if="!item.hidden"
            :href="`/#${ item.path }`"
            :class="{ 'bg-secondary': isActive }"
            class="text-base font-normal px-2 py-1 rounded-lg text-white hover:bg-secondary"
        >
            {{ item.text }}
        </a>
    </li>
</template>
