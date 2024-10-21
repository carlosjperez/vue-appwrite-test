<template>
    <button id="logout-btn" @click="handleSignOut">Logout</button>
</template>

<script setup>
    import { account } from '../appwrite';
    import router from '../router';

    const handleSignOut = async () => {
        console.log('handle sign out clicked')
        await account.deleteSession('current')
        store.user = null
        router.push('/login')
    }
</script>
