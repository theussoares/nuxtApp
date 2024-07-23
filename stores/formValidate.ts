import { defineStore } from "pinia";
import { ref } from "vue";
import { z } from "zod";

export const useFormValidation = defineStore('validation', () => {
  const FormValidate = ref({
    email: false,
    password: false
  });

  const LoginSchema = z.object({
    uuid: z.string(),
    email: z.string().email(),
    password: z.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/),
  });

  const validateEmail = (emailInput: string) => {
    const emailResult = LoginSchema.pick({ email: true }).safeParse({ email: emailInput });
    FormValidate.value.email = !emailResult.success;
  };

  const validatePassword = (passwordInput: string) => {
    const passwordResult = LoginSchema.pick({ password: true }).safeParse({ password: passwordInput });
    FormValidate.value.password = !passwordResult.success;
  };

  const login = (email: string, password: string, uuid: string) => {
        const userLogin = {
            uuid: uuid,
            email: email,
            password: password
        }
        return userLogin
    }
    
  return { validateEmail, validatePassword, FormValidate, login };
});
