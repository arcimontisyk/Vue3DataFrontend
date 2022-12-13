    
<template>

<v-btn
      :loading="waitingForResponse"
      :disabled="waitingForResponse"
      color="blue-grey"
      prepend-icon="mdi-cloud-upload"
      size="x-large"
      @click="btn_clicked(cardItem.fieldName)"
    >
  Send</v-btn>

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
  api.sendCommand(props.cardItem.fieldName, 1, props.cardItem.channel, props.cardItem.index);
};

//watchEffect(() => console.log(numberInput.value));
</script>
  
  
  