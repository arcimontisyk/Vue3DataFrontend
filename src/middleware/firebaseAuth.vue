// ExampleComponent.vue
<template>
  <div>
    <h1>Login Page</h1>
    <div v-if="!isAuthenticated">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
    <div v-else>
      <p>Welcome, {{ user.email }}!</p>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuth } from './useAuth';

export default {
  setup() {
    const { user, signIn, signOut, isAuthenticated } = useAuth();
    const email = ref('');
    const password = ref('');

    const login = () => {
      signIn(email.value, password.value);
    };

    const logout = () => {
      signOut();
    };

    return { user, email, password, login, logout, isAuthenticated };
  }
};
</script>
