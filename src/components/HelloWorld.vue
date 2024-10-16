<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
    <div style="display: flex; justify-content: center; gap: 2em;">
    <a href="https://appwrite.io" target="_blank">
      <img src="../assets/appwrite.svg" class="logo" alt="Appwrite logo" style="height: 75px;" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" style="height: 75px;" />
    </a>
  </div>
  <h1>{{ msg }}</h1>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
