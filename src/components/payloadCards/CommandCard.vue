
  <template>
  <v-card class="mx-auto" max-width="700">
    <v-card-title>
      <v-card-title> Commands </v-card-title>
    </v-card-title>
    <v-container>
      <v-row v-for="item in cards.cards[1].items" :key="item.fieldName">
        <!-- Value command-->
        <template v-if="item.itemType == 'value'">
          <v-col>
            {{ item.displayName }}
          </v-col>
          <v-col>
            <commandValueField :cardItem="item" />
          </v-col>
        </template>
        <!-- Select command-->
        <template v-if="item.itemType == 'select'">
          <v-col>
            {{ item.displayName }}
          </v-col>
          <v-col>
            <v-card-actions>
              <commandSelectBtn :cardItem="item" />
            </v-card-actions>
          </v-col>
        </template>
        <!------------------>
        <!-- Status command-->
        <template v-if="item.itemType == 'status'">
          <v-col>
            {{ item.displayName }}
          </v-col>
          <v-col>
            <v-card-actions>
              <commandStatusBtn :cardItem="item" />
            </v-card-actions>
          </v-col>
        </template>
        <!------------------>
      </v-row>
    </v-container>
  </v-card>
</template>
    
<script setup lang="ts">
//import { mapState2Way } from 'nuxt-socket-io/utils/common';
import { RouterLink, RouterView } from "vue-router";
import { ref, onMounted, watchEffect } from "vue";
import { cardsStore } from "../../stores/cards";
import { tmtcStore } from "../../stores/tmtc";
import commandValueField from "./commandValueField.vue";
import commandSelectBtn from "./commandSelectBtn.vue";
import commandStatusBtn from "./commandStatusBtn.vue"

const cards = cardsStore();
const tmtc = tmtcStore();
const channelName = "default";
const { testCard } = cards;
let text = "center";

// text field
const numberInput = ref(0);
const textFieldLoading = ref(false);

const props = defineProps({
  i: Number,
  content: Object,
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