<template>
    <div>
      <header class="bg-green-900 w-full flex justify-center">
        <div class="w-4/5 flex justify-between items-center p-2">
          <h1 class="text-white font-semibold">
          Wellcome
        </h1>
        <Button type="button" text="Logout" @click="logout" styled="bg-white p-1 rounded-md font-medium" />
        </div>
      </header>
      <main class="flex justify-center flex-wrap gap-1 p-1">
        <Card v-for="(card, i) in cards" v-bind:key="i"
          styled="w-full h-40 mb-2 rounded-md shadow-2xl flex items-center justify-center"
          :text="card.name"
        />
      </main>
    </div>
</template>

<script setup lang="ts">
import { navigateTo } from 'nuxt/app';

  definePageMeta({
    middleware: "auth"
  })

  const cards = [
    {
      name:  'Find Patients'
    },
    {
      name: 'Active Visits'
    },
    {
      name: 'Register Patient'
    },
    {
      name: 'Form Entry'
    },
    {
      name: 'Manage Providers'
    }
  ]

  const logout = () => {
    localStorage.removeItem('uuid')
    navigateTo("/login")
  }
</script>