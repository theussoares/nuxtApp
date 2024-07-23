import { defineStore } from "pinia"
import { ref } from "vue"
import axios from 'axios'

export const useUuidStore = defineStore('uuid', () => {
    const userUuid = ref<String>('')
    const isLogged = ref<Boolean>(false)
    const generateUuid = async (): Promise<void> => {
        const newUuid = await axios.get("https://www.uuidtools.com/api/generate/v4")
        userUuid.value = newUuid.data[0]
    }
    return { userUuid, generateUuid, isLogged }
})