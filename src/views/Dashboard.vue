
<template>
  <v-layout>
    <v-app-bar>
      <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
        <v-btn @click="api.requestConfig" variant="flat" color="secondary">
        request Config
      </v-btn>
      <v-btn @click="api.createChannel(tmtc.channels[channelName].config)" variant="flat" color="secondary">
        create Channel
      </v-btn>
      <v-btn @click="api.newChannel" variant="flat" color="secondary">
        new Channel
      </v-btn>
      <v-btn @click="api.restartChannel" variant="flat" color="secondary">
        restart Channel
      </v-btn>

      </div>
    </v-app-bar>
 <!--   <v-navigation-drawer color="grey-darken-2" permanent></v-navigation-drawer> -->
    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <DataCard/>
          </v-col>
          <v-col>
            <CommandCard/>
          </v-col>
        </v-row>
      </v-container>


<div v-if="tmtc.channels[channelName] != null">


  {{ cards.cmdCard }}
</div>
    </v-main>
  </v-layout>
</template>


<script setup lang="ts">
import { tmtcStore } from "../stores/tmtc";
import { apiStore } from "../stores/api";
import { cardsStore } from "../stores/cards";
import DataCard from "../components/payloadCards/DataCard.vue";
import CommandCard from "../components/payloadCards/CommandCard.vue";
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