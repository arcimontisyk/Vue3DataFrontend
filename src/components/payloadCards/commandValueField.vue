    
<template>
  <v-form>
    <v-text-field
      v-model="numberInput"
      @keydown.enter="textFieldSubmit"
      required
      color="success"
      :loading="waitingForResponse"
    ></v-text-field>
  </v-form>
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
let text = "center";

// text field
const numberInput = ref(0);
const waitingForResponse = ref(false);

const props = withDefaults(defineProps<CardProps>(), {});

const textFieldSubmit = function (event: any) {
  event.preventDefault();
  waitingForResponse.value = true;
  console.log("event value: " + numberInput.value);
  console.log(typeof(Number(numberInput.value)))
  api.sendCommand(props.cardItem.fieldName, Number(numberInput.value), props.cardItem.channel, props.cardItem.index);
};

watchEffect(() => console.log(numberInput.value));

</script>


