<template>
    <v-data-table
      :headers="headers"
      :items="table_data"
      item-key="name"
      class="elevation-1"
      items-per-page="100"
    >
    </v-data-table>
</template>

<script>
import { type } from "os";

export default {
  props: { table_data: Array },
  data() {
    return {
      tableData: [{ name: "test" }],
    };
  },
  computed: {
    headers() {
      return [
        { text: "Name", value: "name" },
        { text: "Position", value: "pos" },
        { text: "Length", value: "length" },
        { text: "Byte-Order", value: "byte_order" },
        { text: "Bit-Position", value: "bit_pos" },
        { text: "Bit-Length", value: "bit_len" },
        { text: "Signed", value: "signed" },
        { text: "Offset", value: "offset" },
        { text: "Slope", value: "slope" },
        { text: "Exponent", value: "exp" },
      ];
    },
  },
  methods: {},
  watch: {
    table_data: {
      handler: function (newVal, oldval) {
        console.log("new Tabledata received");
        console.log(newVal);
        if (type(newVal) == type([])) {
          this.tableData = newVal;
        } else console.log(type(newVal));
        this.tableData = [];
      },
      deep: true,
    },
  },
};
</script>