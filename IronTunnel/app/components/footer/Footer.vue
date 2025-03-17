<script lang='ts' setup>

</script>

<template>

    <footer class="p-4 space-x-8 mt-10 text-sm z-10 text-white bg-gradient-to-r from-primary to-secondary">

        <div class="flex justify-between md:px-10">
          <span class="flex items-center">
            © {{ new Date().getFullYear() }} Made with <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-4 w-4 text-red-500 mx-1"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg> Iron Tunnel.
          </span>

          <div class="hidden md:flex space-x-2">
            <NuxtLink :to="{ name: 'privacy-policy' }" class="hover:underline">
              Privacy Policy
            </NuxtLink>

            <NuxtLink :to="{ name: 'terms' }" class="hover:underline">
              Terms and Conditions
            </NuxtLink>
          </div>

          <a href="mailto:support@irontunnel.world" class="hover:underline">
            support@irontunnel.world
          </a>
        </div>
    </footer>

    <TopUp />

</template>