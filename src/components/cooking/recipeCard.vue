<template>
  <div class="d-flex align-center flex-column">
    <v-card width="600" title="This is a title" subtitle="This is a subtitle" text="This is content">
      <template v-slot:text>
        <v-row>
          <v-col cols="8">
            <v-row>
              <v-col cols="3">
                800
              </v-col>
              <v-col cols="3">
                ml
              </v-col>
              <v-col cols="6">
                Sahne Sahne
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="4">
            500 kcal
          </v-col>
        </v-row>
      </template></v-card>

  </div>
</template>