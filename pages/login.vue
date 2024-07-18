<template>
    <main class="h-screen flex items-center justify-center w-full bg-slate-100">
        <div class="bg-white min-h-4/5 md:w-2/5 md:items-center flex flex-col gap-2 w-4/5 shadow-md rounded-md">
        <div class="flex flex-col md:w-4/5 md:items-center items-center gap-2 p-2" >
            <div class="flex flex-col items-center gap-2" >
                <h1 class="text-gray-700 text-2xl font-bold" >
                    Log in
                </h1>
                <p class="text-gray-500 text-sm" >
                    Let's get started 
                    with yours 30 days 
                    free trial
                </p>
            </div>
            <form @submit.prevent="login(emailInput, passawordInput)" class="flex flex-col gap-2 w-full p-2" >
                    <input v-model="emailInput" class="w-full border-2 focus:outline-none rounded-md p-1 text-base"  type="text" placeholder="Email">
                    <p v-if="errorEmail" class="text-red-700 font-normal text-xs text-left">{{ errorMessageEmail }}</p>
                    <div class="w-full border-2 rounded-md p-1 text-base flex justify-between">
                        <input v-if="isHide" v-model="passwordInput" class="focus:outline-none" type="password" placeholder="Password">
                        <input v-else v-model="passwordInput" class="focus:outline-none " type="text" placeholder="Password">
                        <span v-if="isHide" @click="showPassword">
                            <img class="w-6" src="../public/showPassword.png" alt="Mostrar senha">
                        </span>
                        <span v-else @click="showPassword" class="flex items-center p-1">
                            <img class="w-4" src="../public/hidePassword.png" alt="Mostrar senha">
                        </span>
                    </div>
                    <p v-if="errorPassword" class="text-red-700 font-normal text-xs">{{ errorMessagePassword }}</p>
                    <button type="submit" class="w-full mt-2 bg-cyan-950 text-white rounded-md p-2 text-sm" NuxtLinkT >Login</button>
                    <button class="text-gray-500 text-sm">Forgotten Password?</button>
                </form>
            <div class="w-full flex flex-col items-center gap-2 p-2">
                <p class="text-gray-500 font-medium"> Or log with </p>
                <button class="w-full border-2 rounded-md p-2 text-base font-medium flex items-center justify-center gap-2"><img class="w-4" src="../public/googleLogo.png" /> Sing up with Google</button>
                <button class="w-full border-2 rounded-md p-2 text-base font-medium flex items-center justify-center gap-2"> <img class="w-4" src="../public/microsoftLogo.png" /> Sing up with Microsoft</button>
                <button class="w-full border-2 rounded-md p-2 text-base font-medium flex items-center justify-center gap-2"> <img class="w-4" src="../public/XLogo.png" />Sing up with X</button>
                <button class="w-full border-2 rounded-md p-2 text-base font-medium flex items-center justify-center gap-2"> <img class="w-4" src="../public/gitHubLogo.png" />Sing up with GitHub</button>
            </div>
        </div>
        <div class="flex justify-center p-2">
                <span class="text-gray-500 text-sm">Don't have an account yet? <button class="text-gray-700 font-medium">Sing up</button></span>
            </div>
        </div>
    </main>
</template>

<script setup>
import { navigateTo } from 'nuxt/app';
import { onMounted, ref } from 'vue';
import { map, z } from 'zod';
import { useUserStore } from '~/stores/userStore';
import { useUuidStore } from '~/stores/uuidStore'
const user = useUserStore()
const uuid = useUuidStore()
let isHide = ref(true)
let emailInput = ref('')
let passwordInput = ref('')
let errorEmail = ref(false)
let errorPassword = ref(false)
let errorMessageEmail = ref('aa')
let errorMessagePassword = ref('')

const showPassword = () => {
    if(isHide.value === true){
        isHide.value = false
    }else{
        isHide.value = true
    }
}

onMounted(() => {
    uuid.generateUuid()
})

const LoginSchema = z.object({
    uuid: z.string(),
    email: z.string({required_error: "Email is required"}).email(),
    password: z.string().regex((/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/), "Password must have 8 or more, at least one capital letter, one number and one special figure!"),
})

const validateEmail = () => {
    const emailResult = LoginSchema.pick({ email: true }).safeParse({ email: emailInput.value });

    if (!emailResult.success) {
        errorEmail.value = true;
        errorMessageEmail.value = emailResult.error.errors[0].message;
    } else {
        errorEmail.value = false;
        errorMessageEmail.value = '';
    }
};

const validatePassword = () => {
    const passwordResult = LoginSchema.pick({ password: true }).safeParse({ password: passwordInput.value });

    if (!passwordResult.success) {
        errorPassword.value = true;
        errorMessagePassword.value = passwordResult.error.errors[0].message;
    } else {
        errorPassword.value = false;
        errorMessagePassword.value = '';
    }
};

watch(emailInput, validateEmail);
watch(passwordInput, validatePassword);


const login = (email, password) => {
    const userLogin = {
        uuid: uuid.userUuid,
        email: email,
        password: password
    }
    
    if(!errorEmail.value && !errorPassword.value){
        console.log('works')
        uuid.isLogged = true
        user.userInfo = userLogin
        localStorage.setItem("uuid", uuid.userUuid)
        navigateTo("/")
    }else{
        alert('Fill in the right informations!')
    }
    
}

</script>