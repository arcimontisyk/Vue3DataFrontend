<template>
  <v-layout>
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <DataCard />
          </v-col>
          <v-col>
            <CommandCard />
          </v-col>
          <v-col>
            <v-row>
              <v-container>
                <D3Card />
              </v-container>
            </v-row>
            <v-row>
              <v-container>
                <D3Card />
              </v-container>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { tmtcStore } from "../stores/tmtc";
import { apiStore } from "../stores/api";
import { cardsStore } from "../stores/cards";
import DataCard from "../components/payloadCards/DataCard.vue";
import CommandCard from "../components/payloadCards/CommandCard.vue";
import D3Card from "../components/payloadCards/D3Card.vue";
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
