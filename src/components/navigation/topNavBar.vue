<template>
  <v-app-bar :order="localOrder" flat title="Application bar">
    <template v-slot:append>
      <v-switch v-model="localOrder" hide-details inset label="Toggle order" @change="emitToggleOrder"></v-switch>
      <v-menu offset-y>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props" icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in dropdownItems" :key="index" :value="index"
            @click="handleMenuItemClick(item)">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const dropdownItems = [
  { title: 'Firebase' },

];

const localOrder = ref(-1);

function handleMenuItemClick(item: any) {
  // Handle menu item click here
  console.log(`Clicked on ${item}`);
};

function emitToggleOrder() {
  console.log("local order")
  if (localOrder.value == 0) localOrder.value = -1;
  else localOrder.value = 0;
  console.log(localOrder.value)
}

</script>

<style scoped>
/* Add your custom styles here */
</style>