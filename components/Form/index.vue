<template>
    <form @submit.prevent="Login" class="flex flex-col gap-2 w-full p-2">
      <Input v-for="i in inputArray" v-bind:key="i.id"
        :type="i.type"
        :requerire="i.required"
        :placeholder="i.placeholder"
        :verification="i.verification"
        v-model="FormData[i.verification]"
        styleToInput="w-full focus:outline-none rounded-md p-1 text-base"
        styleToContainer="w-full border-2 rounded-md p-1 text-base flex justify-between"
        :error="validation.FormValidate[i.verification]"
        :errorMessage="i.errorMessage"
      />
      <Button 
      styled="w-full mt-2 bg-cyan-950 text-white rounded-md p-2 text-sm" 
      type="submit"
      text="Login"/>
    </form>
  </template>
  
<script setup lang="ts">
import { navigateTo } from 'nuxt/app';
import { ref, watch } from 'vue';
import { inputArray } from '~/data';
import { useFormValidation } from '~/stores/formValidate';
import { useUserStore } from '~/stores/userStore';
import { useUuidStore } from '~/stores/uuidStore';
  
const user = useUserStore()
const uuid = useUuidStore()

const FormData = ref({
  email: '',    
  password: ''
});
  
const validation = useFormValidation();

const Login = () => {
    validation.login(FormData.value.email, FormData.value.password, uuid.userUuid)
    uuid.isLogged = true
    user.userInfo = validation.login
    localStorage.setItem("uuid", uuid.userUuid)
    if(uuid.userUuid){
        navigateTo("/")
    }
}
  
watch(() => FormData.value.email, (newEmail) => {
    validation.validateEmail(newEmail);
});
  
watch(() => FormData.value.password, (newPassword) => {
    validation.validatePassword(newPassword);
});
</script>
  