<template>
    <ul class="w-2/5 flex flex-wrap flex-row last:w-4/5">
        <li :class="styled">
            {{ text }}
        </li>
    </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
    text: string,
    styled: string
}>()
</script>