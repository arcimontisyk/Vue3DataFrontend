    
<template>
  <v-btn-toggle v-model="text" rounded="0" color="info" group>
    <template v-for="name in cardItem.items" :key="name">
      <v-btn value="null"  @click="btn_clicked(name)">
        {{ name }}
      </v-btn>
    </template>
  </v-btn-toggle>
</template>
    
  <script  lang="ts">
import { ref, onMounted, watchEffect, PropType } from "vue";
import { cardsStore } from "../../stores/cards";
import { CardItem } from "../../stores/cards";
import { tmtcStore } from "../../stores/tmtc";
import { apiStore } from "../../stores/api";

interface CardProps {
  cardItem: CardItem;
}
</script>
  
  <script  lang="ts" setup>
const cards = cardsStore();
const tmtc = tmtcStore();
const api = apiStore();
const channelName = "default";
const text = "null";

// text field

const waitingForResponse = ref(false);

const props = withDefaults(defineProps<CardProps>(), {});

const btn_clicked = function (name:string) {

  waitingForResponse.value = true;
  console.log("Clicked: " + name);
  //   console.log("event value: " + numberInput);
  console.log(JSON.stringify(props.cardItem))
  api.sendCommand(props.cardItem.fieldName, name, props.cardItem.channel, props.cardItem.index);
};

//watchEffect(() => console.log(numberInput.value));
</script>
  
  
  