<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-container>
        <v-list>
          <v-list-item>
            <v-btn @click="api.requestConfig" variant="flat" color="primary">
              request Config
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
              @click="api.createChannel(tmtc.channels[channelName].config)"
              variant="flat"
              color="secondary"
            >
              create Channel
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn @click="api.newChannel" variant="flat" color="secondary">
              new Channel
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn @click="api.restartChannel" variant="flat" color="secondary">
              restart Channel
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn @click="cards.saveCards" variant="flat" color="primary">
              save Cards
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn @click="api.requestCards" variant="flat" color="secondary">
              request Cards
            </v-btn>
          </v-list-item>
          
        </v-list>
      </v-container>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { tmtcStore } from "./stores/tmtc";
import { apiStore } from "./stores/api";
import { cardsStore } from "./stores/cards";
//import TheWelcome from "../components/TheWelcome.vue";
const tmtc = tmtcStore();
const api = apiStore();
const cards = cardsStore();
const channelName = "default";
const zoom = screen.width
let drawer = true;
</script>