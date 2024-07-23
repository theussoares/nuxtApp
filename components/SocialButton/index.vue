<template>
    <button :class="styled">
        <img class="w-4" :src="src" :alt="alt"/>
        {{ text }}
    </button>
</template>

<script setup lang="ts">

const props = defineProps<{
    styled: string,
    text: string,
    alt: string,
    src: string
}>()
</script>