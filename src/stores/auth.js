import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    setUser(newUser) {
      this.user = newUser;
    },
    // Oauth 
    async login() {
      // Implement OAuth login logic, redirect to the provider's login page
    },
    async handleCallback() {
      // Handle the callback from the OAuth provider
      // Extract the token or user information and update the store
    },
    logout() {
      // Implement logout logic, clear user information from the store
    },
  },
});

