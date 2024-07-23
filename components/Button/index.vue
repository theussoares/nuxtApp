<template>
    <button :type="type" :class="styled">
        {{ text }}
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    type: "button" | "reset" | "submit" | undefined,
    styled: string,
    text: string,
}>()
</script>