 <template id="my-component">
  <div>
    <v-data-table
      :headers="headers"
      :items="getStreamConfig"
      item-key="value_id"
      class="elevation-1"
    >
    </v-data-table>
    <a> {{ getStreamConfig }} </a>
  </div>
</template>

<script>
export default {
  name: "tabletest",
  data: function () {
    return {
      joint_nr: 1,
      streamconfig: this.$store.state.streamconfig,
      headers: [
        { text: "ID", value: "value_id" },
        { text: "Payloaditem", value: "payloaditem.name" },
        { text: "signed", value: "calibration.signed" },
        { text: "Offset", value: "calibration.offset" },
        { text: "x", value: "calibration.factor" },
        { text: "x²", value: "calibration.factor_2" },
        { text: "x³", value: "calibration.factor_3" },
      ],
      replyHeaders: [
        { text: "Position in Stream", value: "payloaditem.position" },
        { text: "Length in bytes", value: "payloaditem.length" },
        { text: "byte-order", value: "payloaditem.byte_order" },
      ],
    };
  },
  props: {
    jointNr: Number,
  },
  computed: {
    post() {
      return this.$store.state.post;
    },
    getStreamConfig() {
      return this.$store.state.streamconfig;
    },
    values() {
      return this.$store.state.values[this.joint_nr - 1];
    },
  },
  methods: {
    getPost() {
      this.$store.dispatch("getPost", { id: 1 });
    },
    getMessage() {
      this.$store.dispatch("receiveMessageStream");
    },
    getValues() {
      this.$store.dispatch("getValues", { jointNr: 1 });
    },
  },
  created() {
    this.joint_nr = this.jointNr;
    this.getMessage();
  },
};
</script>