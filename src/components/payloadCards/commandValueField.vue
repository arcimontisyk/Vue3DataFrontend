    
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
interface CardProps {
  cardItem: CardItem
}
</script>

<script  lang="ts" setup>
//import { mapState2Way } from 'nuxt-socket-io/utils/common';
import { RouterLink, RouterView } from "vue-router";
import { ComponentObjectPropsOptions } from "vue";
import { ref, onMounted, watchEffect, PropType } from "vue";
import { cardsStore } from "../../stores/cards";
import { CardItem } from "../../stores/cards";
import { tmtcStore } from "../../stores/tmtc";
import { apiStore } from "../../stores/api";

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
  console.log("event value: " + numberInput);
  api.sendCommand(props.cardItem.fieldName, numberInput, "default", 0);
};

const btn_clicked = function (name: string) {
  console.log("Clicked: " + name);
};

watchEffect(() => console.log(numberInput.value));

const btn_submit = function (name: string) {
  console.log("Btn submit " + name + " : " + numberInput);
};
</script>


