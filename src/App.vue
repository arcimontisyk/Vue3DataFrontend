<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <axiostest/>
    </v-main>
  </v-app>
</template>

<script>
import axiostest from '@/components/axios_test_component.vue';

export default {
  name: 'App',

  components: { axiostest },

  data: () => ({
    //
    drawer: null,
  }),
  methods: {
    getMessageStream() {
      this.$store.dispatch('receiveMessageStream');
    },
  },
};
</script>
