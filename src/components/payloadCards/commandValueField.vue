    
<template>
  <v-form>
    <v-text-field
      v-model="numberInput"
      @keydown.enter="textFieldSubmit"
      required
      color="success"
      :loading="textFieldLoading"
    ></v-text-field>
  </v-form>
</template>
  
<script setup lang="ts">
//import { mapState2Way } from 'nuxt-socket-io/utils/common';
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted, watchEffect } from "vue";
import { cardsStore } from "../../stores/cards";
import { tmtcStore } from "../../stores/tmtc";

const cards = cardsStore();
const tmtc = tmtcStore();
const channelName = "default";
let text = "center";

// text field
const numberInput = ref(0);
const textFieldLoading = ref(false);

const props = defineProps({
  cardItem: Object
});

const textFieldSubmit = function (event: any) {
  event.preventDefault();
  textFieldLoading.value = true;
  console.log("event value: " + numberInput);
};

const btn_clicked = function (name: string) {
  console.log("Clicked: " + name);
};

watchEffect(() => console.log(numberInput.value));

const btn_submit = function (name: string) {
  console.log("Btn submit " + name + " : " + numberInput);
};
</script>


