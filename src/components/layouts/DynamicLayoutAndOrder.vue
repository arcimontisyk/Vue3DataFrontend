<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer>
    <TNB/>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <slot>

      </slot>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import TNB from "@/components/navigation/topNavBar.vue";

</script>