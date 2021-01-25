<template>
  <v-card class="mx-auto" max-width="350px" tile>
      <v-card-title>Tina commands Joint 1</v-card-title>
    <v-container fill-height fluid cursor:off>
      <template v-for="(item, key, i) in cmd_config.commands">
        <v-row :key="i" dense justify="center" align="center">
          <v-col cols="12" sm="6" md="8" >
            <v-btn depressed> {{ key }} </v-btn>
          </v-col>
          <v-col cols="6" md="4" align="right">
            <v-chip class="ma-2" color="primary" text-color="white">
              ON
            </v-chip>
          </v-col>
        </v-row>
      </template>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 1,
    cmd_config: {
      address: 32,
      length: 8,
      commands: {
        tau: {
          type: "value",
          position: 2,
          length: 2,
          byte_order: "big",
          signed: 0,
        },
        BREAK_HOLD_RELEASED: {
          type: "status",
          byte_pos: 7,
          bit_pos: 4,
        },
        BREAK_RELEASE: {
          type: "status",
          byte_pos: 7,
          bit_pos: 3,
        },
        enable_DRV: {
          type: "status",
          byte_pos: 7,
          bit_pos: 2,
        },
        clear_flags: {
          type: "status",
          byte_pos: 7,
          bit_pos: 1,
        },
        reset_theta: {
          type: "status",
          byte_pos: 7,
          bit_pos: 0,
        },
      },
    },
    items: [
      { text: "Real-Time", icon: "mdi-clock" },
      { text: "Audience", icon: "mdi-account" },
      { text: "Conversions", icon: "mdi-flag" },
    ],
  }),
};
</script>