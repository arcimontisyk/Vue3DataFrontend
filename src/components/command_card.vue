<template>
  <v-card class="mx-auto" max-width="300" tile>
    <v-list rounded>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, key, i) in cmd_config.commands" :key="i">
        
            <v-btn depressed> {{ key }} </v-btn>
   
            <v-list-item-title v-text="1"></v-list-item-title>
      
        </v-list-item>
      </v-list-item-group>
    </v-list>
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