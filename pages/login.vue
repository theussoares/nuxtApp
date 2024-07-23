<template>
    <Main />
</template>

<script setup>
import { onBeforeMount, onMounted } from 'vue';
import { useUuidStore } from '~/stores/uuidStore'
const uuid = useUuidStore()

onBeforeMount(() => {
    uuid.generateUuid()
})

onMounted(() => {
    const id = localStorage.getItem('uuid')
    if(id){
        navigateTo('/')
    }
})
</script>