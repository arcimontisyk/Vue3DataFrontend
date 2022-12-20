<template>
  <v-layout>
    <v-main>
      <section>
        <!-- <DragResize ref="objProduct" :y="0" :x="0"  :childComponent="currentComponent" /> -->
        <DragCard
          v-for="(card, index) in cards"
          :key="index"
          :cardIndex="index"
          :inCard="card"
        />
      </section>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { tmtcStore } from "../stores/tmtc";
import { apiStore } from "../stores/api";
import { cardsStore } from "../stores/cards";
import DragCard from "@/components/payloadCards/DragCard.vue";
import DataCard from "@/components/payloadCards/DataCard.vue";
import CommandCard from "@/components/payloadCards/CommandCard.vue";
import D3Card from "@/components/payloadCards/D3Card.vue";
//import TheWelcome from "../components/TheWelcome.vue";
const tmtc = tmtcStore();
const api = apiStore();
const cards = cardsStore();
const channelName = "default";
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
