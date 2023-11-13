<template>
  <div class="d-flex align-center flex-column">
    <v-card width="400">

      <v-img cover height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
      <v-card-title class="green darken-4">Chocolate cheesecake recipe</v-card-title>
      <v-card-text>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-row>
              <v-col cols="4">
                800 ml
              </v-col>
              <v-col cols="8">
                Sahne Sahne
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            <v-chip class="ma-2" color="orange-darken-1" text-color="black">
              500 kcal
            </v-chip>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider class="mx-4 mb-1"></v-divider>
      <div class="px-4">
        <v-chip-group v-model="selection">
          <v-chip>500 kcal</v-chip>
          <v-chip>0,1 g Fett </v-chip>
          <v-chip>10 g Vitamine</v-chip>
        </v-chip-group>
      </div>
      <v-card-actions>
        <v-btn color="deep-purple-lighten-2" variant="text" @click="reserve">
          Add to favourites
        </v-btn>
      </v-card-actions>
    </v-card>

  </div>
</template>