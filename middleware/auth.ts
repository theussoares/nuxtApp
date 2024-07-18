import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app'
import { useUuidStore } from '~/stores/uuidStore'

const uuid = useUuidStore()

export default defineNuxtRouteMiddleware((to, from) => {
    if(!uuid.isLogged){
        console.log(to, from, uuid.isLogged)
        return navigateTo("/login")
    }
})
  