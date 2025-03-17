<template>
    <div role="status">
        <div aria-label="Loading" class="relative inline-flex flex-colitems-center justify-center">
            <div class="relative flex w-8 h-8">
                <i class="absolute w-full h-full rounded-full animate-spinner-ease-spin border-solid border-t-transparent border-l-transparent border-r-transparent border-[3px] border-white"></i>
                <i class="absolute w-full h-full rounded-full opacity-75 animate-spinner-linear-spin border-dotted border-t-transparent border-l-transparent border-r-transparent border-[3px] border-white"></i>
            </div>
        </div>
        <span class="sr-only">Loading...</span>
    </div>
</template>

<style scoped>

.animate-none {
    animation: none
}

.animate-spinner-ease-spin {
    animation: spinner-spin .8s ease infinite
}

@keyframes spinner-spin {
    0% {
        transform: rotate(0)
    }

    to {
        transform: rotate(360deg)
    }
}

.animate-spinner-linear-spin {
    animation: spinner-spin .8s linear infinite
}

</style>