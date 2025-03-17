<script lang='ts' setup>

const props = withDefaults(defineProps<{
  number?: number
  size?: number
}>(), {
  number: 20,
  size: 8
})

const meteors = ref(new Array(props.number).fill(true))

const meteorClass = computed(() => {
    return [
        'animate-meteor-effect absolute top-1/2 left-1/2 rounded-full bg-yellow-300 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]',
        'before:content-[""] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#e9f98e] before:to-transparent',
    ]
})

// Добавляем типизацию для параметра size
const getMeteorStyle = (size?: number): Record<string, string> => {
    return {
        top: '0',
        left: `${ Math.floor(Math.random() * (400 - -400) + -400) }px`,
        animationDelay: `${ Math.random() * (0.8 - 0.2) + 0.2 }s`,
        animationDuration: `${ Math.floor(Math.random() * (10 - 2) + 2) }s`,
        height: `${ size }px`,
        width: `${ size }px`
    }
}

</script>

<template>
    <span
        v-for="(el, idx) in meteors"
        :key="'meteor' + el + idx"
        :class="meteorClass"
        :style="getMeteorStyle()"
    ></span>
</template>
  
