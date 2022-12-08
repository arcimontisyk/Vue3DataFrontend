
  <template>
  <v-card class="mx-auto" max-width="10000">
    <v-card-header>
      <v-card-text> Commands </v-card-text>
    </v-card-header>
    <v-container>
      <v-row v-for="item in cards.cmdCard.items" :key="item.fieldName">
        <!-- Value command-->
        <template v-if="item.input == 'value'">
          <v-col>
            {{ item.fieldName }}
          </v-col>
          <v-col>
            <commandValueField :cardItem="item"/>
          </v-col>
        </template>
        <!-- Select command-->
        <template v-if="item.input == 'select'">
          <v-col>
            {{ item.fieldName }}
          </v-col>
          <v-col>
            <v-card-actions>
              <v-btn-toggle v-model="text" rounded="0" color="info" group>
                <template v-for="name in item.items" :key="name">
                  <v-btn value="center" @click="btn_clicked(name)">
                    {{ name }}
                  </v-btn>
                </template>
              </v-btn-toggle>
            </v-card-actions>
          </v-col>
        </template>
        <!------------------>
      </v-row>
      {{ numberInput }}
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