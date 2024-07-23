<template>
    <main class="h-screen flex items-center justify-center w-full bg-slate-100">
        <div class="bg-white min-h-4/5 md:w-2/5 md:items-center flex flex-col gap-2 w-4/5 shadow-md rounded-md p-4">
        <div class="flex flex-col md:w-4/5 items-center gap-2 p-2" >
            <Header />
            <Form />
            <SocialLogin />
        </div>
            <span class="text-gray-500 text-sm">Don't have an account yet? <button class="text-gray-700 font-medium">Sing up</button></span>
        </div>
    </main>
</template>