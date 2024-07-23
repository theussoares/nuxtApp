import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import { useUuidStore } from '~/stores/uuidStore'

const uuid = useUuidStore()

export default defineNuxtRouteMiddleware((to, from) => {
    if(!uuid.isLogged.valueOf){
        return navigateTo("/login")
    }
})
  