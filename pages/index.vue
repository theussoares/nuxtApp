<template>
    <div>
      <header class="bg-green-900 flex justify-between items-center p-4">
        <h1 class="text-white font-semibold">
          Wellcome
        </h1>
        <button @click="logout" class="bg-white p-2 rounded-md font-medium">
          Logout
        </button>
      </header>
      <main class="flex justify-center flex-wrap gap-1 p-1">
        <div class="w-44 h-40 mb-2 rounded-md shadow-xl flex items-center justify-center">
          Find Patients
        </div>
        <div class="w-44 h-40 mb-2 rounded-md shadow-xl flex items-center justify-center">
          Active Visits
        </div>
        <div class="w-44 h-40 mb-2 rounded-md shadow-xl flex items-center justify-center">
          Register Patient
        </div>
        <div class="w-44 h-40 mb-2 rounded-md shadow-xl flex items-center justify-center">
          Form Entry
        </div>
        <div class="w-96 h-40 mb-2 rounded-md shadow-xl flex items-center justify-center">
          Manage Providers
        </div>
      </main>
    </div>
</template>

<script setup lang="ts">
import { navigateTo } from 'nuxt/app';

  definePageMeta({
    middleware: "auth"
  })

  const logout = () => {
    localStorage.removeItem('uuid')
    navigateTo("/login")
  }
</script>