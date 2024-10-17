<script setup>
import { computed } from 'vue'
import { account } from '../appwrite'
import { useUserStore } from '../store'
import router from '../router'

const store = useUserStore()
const user = computed(() => store.user)

const handleSignOut = async () => {
    console.log('handle sign out clicked')
    account.deleteSession('current')
    router.push('/login')
}
</script>

<template>

    <div  style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
        <h3>Welcome {{user ? (user.name) : (user.email)}} 👋!</h3>
         <button @click="handleSignOut">Logout</button>
    </div>

</template>
