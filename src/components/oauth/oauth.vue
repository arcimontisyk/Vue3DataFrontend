<template>
    <div>
      <p v-if="authStore.user">Logged in as {{ authStore.user.name }}</p>
      <button @click="login">Login</button>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useAuthStore } from '@/store/auth';
  
  const authStore = useAuthStore();
  
  const login = () => {
    authStore.login();
  };
  
  const logout = () => {
    authStore.logout();
  };
  </script>