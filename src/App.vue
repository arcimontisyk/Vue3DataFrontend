<template>
  <v-app id="inspire">
    <DynamicLayoutAndOrder>
      <RouterView />
    </DynamicLayoutAndOrder>
  </v-app>
</template>

<script setup lang="ts">
import { tmtcStore } from "./stores/tmtc";
import { apiStore } from "./stores/api";
import { cardsStore } from "./stores/cards";
import DynamicLayoutAndOrder from "@/components/layouts/DynamicLayoutAndOrder.vue";
import TNB from "@/components/navigation/topNavBar.vue";
//import TheWelcome from "../components/TheWelcome.vue";
const tmtc = tmtcStore();
const api = apiStore();
const cards = cardsStore();
const channelName = "default";
const zoom = screen.width;
let drawer = true;
</script>
