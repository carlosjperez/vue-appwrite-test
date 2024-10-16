<script setup>
import { account } from '../appwrite';
import  store  from '../store'
import router from '../router'

const {name, email} = store.state.user

const handleSignOut = async () => {
    console.log('handle sign out clicked')
    account.deleteSession('current')
    router.push('/login')
}

</script>

<template>

    <div  style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
        <h3>Welcome {{name ? (name) : (email)}} 👋!</h3>
         <button @click="handleSignOut">Logout</button>
    </div>
    
</template>