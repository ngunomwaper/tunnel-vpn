<script lang='ts' setup>
import store from '~/assets/images/store.svg'

interface Item {
    title: string
    content: string
    icon: string
}

const items = ref<Item[]>([
    {
        title: 'Download Iron Tunnel',
        content: 'Get our VPN Chrome Extension via the link below. Enable the Extension in your browser settings.',
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M12 2L12 15M12 15L9 11.5M12 15L15 11.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`
    },
    {
        title: 'Sign Up',
        content: 'Choose from a few subscription plans tailored to match your needs and sign up.',
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 13H16C17.7107 13 19.1506 14.2804 19.3505 15.9795L20 21.5M8 13C5.2421 12.3871 3.06717 10.2687 2.38197 7.52787L2 6M8 13V18C8 19.8856 8 20.8284 8.58579 21.4142C9.17157 22 10.1144 22 12 22C13.8856 22 14.8284 22 15.4142 21.4142C16 20.8284 16 19.8856 16 18V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="12" cy="6" r="4" stroke="currentColor" stroke-width="1.5"/>
            </svg>`
    },
    {
        title: 'Connect to VPN',
        content: 'Pick a server from out 2,500+ units in 89 locations. Get ready to securely browse the web!',
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 8L8 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6 4L8 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 6.56252L14.7001 2.93755C16.1597 1.50753 18.7629 1.73938 20.5145 3.4554M18.1358 12L21.043 9.15178C21.6325 8.57431 21.9453 7.81414 21.9934 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M15 15.5866L10.9653 20.001C9.57254 21.5247 7.0887 21.2777 5.41744 19.4492C3.74618 17.6207 3.52038 14.9032 4.91309 13.3795L6.17395 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
</svg>`
    }
])
</script>

<template>

    <section id="about" class="flex flex-col py-20 justify-center items-center px-3 md:px-0">

        <h2 class="text-center text-2xl md:text-4xl max-w-3xl font-bold text-white">
            How to Set Up a VPN on
            <img :src="store" class="inline w-9 h-9 mx-2" alt="Google Chrome Store" />
      
            Google Chrome
        </h2>

        <CustomFade>
            <p class="text-center mt-2 max-w-xl text-[#999ec4]">
                Take these simple steps to browse on Google Chrome safely.
            </p>
        </CustomFade>

        <CustomFade>
            <div class="max-w-5xl my-10 grid grid-cols-2 md:grid-cols-3 gap-4">

                <!-- <div class="flex flex-col text-center p-4 rounded-3xl mb-4 bg-[#455bed]/60">
                    <h3 class="text-2xl text-center font-semibold text-white">Subscribe Premium</h3>
                    <p class="text-[0.65rem] text-center text-[#8e9fff]">Subscribe our Premium mambership to access all premium locations</p>
                    <button class="mx-auto mt-2 w-24 py-1.5 font-medium rounded-full duration-500 hover:scale-105 text-white bg-[#5f73f6]">View Plan</button>
                </div> -->

                <template v-for="(item, index) in items">
                    <Gradient :show-gradient="true">
                        <div
                            :key="index"
                            class="cursor-pointer duration-500 hover:-translate-y-2 h-44 rounded-3xl text-white bg-primary"
                        >
                            <div class="flex justify-between items-center p-4 rounded-t-xl ">
                                <span class="font-semibold uppercase">{{ index + 1 }} Step</span>

                                <span v-html="item.icon"></span>
                            </div>
                            
                            <div class="px-4 py-4">
                                <span class="font-semibold text-white">{{ item.title }}</span>

                                <p class="mt-2 text-sm text-[#8e9fff]">{{ item.content }}</p>
                            </div>

                        </div>
                    </Gradient>
                </template>

            </div>
        </CustomFade>

        <CustomFade>
            <a href="https://chromewebstore.google.com/detail/iron-tunnel-unlimited-vpn/faihnblmeedkfdeghdhimhgcdkhcaphb" class="flex items-center px-14 py-3 rounded-xl border-2 duration-300 text-white border-secondary hover:bg-secondary" target="_blank">
                Get the Extension

                <svg class="w-5 h-5 ml-2 " viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8 3.517a1 1 0 011.62-.784l5.348 4.233a1 1 0 010 1.568l-5.347 4.233A1 1 0 018 11.983v-1.545c-.76-.043-1.484.003-2.254.218-.994.279-2.118.857-3.506 1.99a.993.993 0 01-1.129.096.962.962 0 01-.445-1.099c.415-1.5 1.425-3.141 2.808-4.412C4.69 6.114 6.244 5.241 8 5.042V3.517zm1.5 1.034v1.2a.75.75 0 01-.75.75c-1.586 0-3.066.738-4.261 1.835a8.996 8.996 0 00-1.635 2.014c.878-.552 1.695-.916 2.488-1.138 1.247-.35 2.377-.33 3.49-.207a.75.75 0 01.668.745v1.2l4.042-3.2L9.5 4.55z" clip-rule="evenodd"/></svg>
            
            </a>
        </CustomFade>

    </section>

</template>