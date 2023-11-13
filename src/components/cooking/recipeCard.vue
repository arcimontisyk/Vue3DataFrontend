<template>
  <div class="d-flex align-center flex-column">
    <v-card width="400" title="This is a title" subtitle="This is a subtitle" text="This is content">
      <template v-slot:text>
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
      </template></v-card>

  </div>
</template>