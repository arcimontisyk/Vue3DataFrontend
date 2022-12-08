<template>
  <v-card class="mx-auto" max-width="400">
    <v-table>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cards.testCard.items" :key="item.name">
          <td>{{ item.fieldName }}</td>
          <td v-if="tmtc.channels[channelName] != null">
            
            <div v-if="item.datalookup != null">
              {{
                tmtc.channels[channelName].data[item.type][item.index][
                  item.datalookup.address
                ][item.datalookup.position]
              }}
            </div>
            
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup lang="ts">
//import { mapState2Way } from 'nuxt-socket-io/utils/common';
import { RouterLink, RouterView } from "vue-router";
import { cardsStore } from "../../stores/cards";
import { tmtcStore } from "../../stores/tmtc";

const cards = cardsStore();
const tmtc = tmtcStore();
const channelName = "default";
const { testCard } = cards;

const props = defineProps({
  i: Number,
  content: Object,
});
</script>