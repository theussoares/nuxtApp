<template>
  <div>
    <div :class="styleToContainer">
      <div v-if="type === 'password'" class="w-full flex justify-between items-center">
        <input
          :class="styleToInput"
          :type="isHide ? 'password' : 'text'"
          :placeholder="placeholder"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          required
        />
        <span @click="togglePassword" class="flex items-center p-1 cursor-pointer">
          <img :class="isHide ? 'w-6' : 'w-4'" :src="isHide ? show : hide" :alt="isHide ? 'Mostrar senha' : 'Esconder senha'">
        </span>
      </div>
    
      <input v-else 
        :class="styleToInput" 
        :type="type" 
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        required />
    </div>
    <p v-if="error" class="text-red-700 font-normal text-xs"> {{ errorMessage }} </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import show from '../../public/showPassword.png';
import hide from '../../public/hidePassword.png';

let isHide = ref(true);

const togglePassword = () => {
  isHide.value = !isHide.value;
};

const props = defineProps<{
  type: string,
  required?: boolean,
  placeholder: string,
  styleToInput: string,
  styleToContainer: string,
  modelValue: string,
  error: boolean,
  errorMessage: string
}>();

const emit = defineEmits(['update:modelValue']);
</script>
