<script setup>
import { ref } from 'vue'
import { account } from '../appwrite'
import router from '../router'

const email = ref('')
const password = ref('')

const handleLogin = async () => {
    console.log(email.value, password.value)
    try {
      const session = await account.createEmailPasswordSession(email.value, password.value)
      router.push('/')
  } catch (error) {
    console.error('Login failed:', error.message)
  }
}

</script>

<template>
    <form @submit.prevent="handleLogin">
        <div>
            <label>Email:</label>
            <input type="email" v-model="email" />
        </div>

        <div>
            <label>Password:</label>
            <input type="password" v-model="password" />
        </div>

        <input type="submit" value="Login" class="btn"/>
    </form>
</template>

<style scoped>
.login-form {
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input[type="text"], input[type="email"], input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
}

button:hover {
  opacity: 0.8;
}
</style>
