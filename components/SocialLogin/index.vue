<template>
    <div class="w-full flex flex-col items-center gap-2 p-2">
        <p class="text-gray-500 font-medium"> Or log with </p>
        <SocialButton v-for="(btn, i) in socialButtonArray" v-bind:key="i"
            :text="btn.text"
            :alt="btn.alt"
            :src="btn.src"
            styled="w-full border-2 rounded-md p-2 text-base font-medium flex items-center justify-center gap-2"
        />
    </div>
</template>

<script setup lang="ts">

import google from '../../public/googleLogo.png'
import microsofit from '../../public/microsoftLogo.png'
import x from '../../public/XLogo.png'
import github from '../../public/githubLogo.png'

const socialButtonArray = [
    {
        src: google,
        alt: "Logo do Googlw",
        text: "Sing up with Google"
    },
    {
        src: microsofit,
        alt: "Logo da Microsoft",
        text: "Sing up with Microsoft"
    },
    {
        src: x,
        alt: "Logo do X",
        text: "Sing up with X"
    },
    {
        src: github,
        alt: "Logo do GitHub",
        text: "Sing up"
    }
]
</script>