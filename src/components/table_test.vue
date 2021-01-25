 <template id="my-component">
  <div>
    <button @click="dispatchDataStream">get Stream</button>
    <v-data-table
      :headers="headers"
      :items="getStreamConfig"
      item-key="value_id"
      class="elevation-1"
    >
    </v-data-table>
    <a> {{ this.$store.state.streamConfig }} </a>
  </div>
</template>

<script>
//import axios from "axios";

export default {
  name: "tabletest",
  data: function () {
    return {
      joint_nr: 1,
      headers: [
        { text: "ID", value: "config.value_id" },
        { text: "Payloaditem", value: "config.payloaditem.name" },
        { text: "signed", value: "config.calibration.signed" },
        { text: "Offset", value: "config.calibration.offset" },
        { text: "x", value: "config.calibration.factor" },
        { text: "x²", value: "config.calibration.factor_2" },
        { text: "x³", value: "config.calibration.factor_3" },
      ],
    };
  },
  props: {
    jointNr: Number,
  },
  computed: {
    getAll() {
      var config = this.getStreamConfig;
      var data = this.$store.state.streamData;
      var x = [];

      for (var conf in config) {
        var tempObj = {};
        tempObj["config"] = config[conf];
        tempObj["data"] = data[config[conf].stream_id];
        x.push(tempObj);
        //   var all = {};
        //   all.data = config[conf];
        //   if (data != null) {
        //     all.data = data[conf.value_id];
        //   }
        //   x.push(all);
      }
      return x;
    },
    getStreamConfig() {
      return this.$store.state.streamConfig;
    },
    getStreamData() {
      return this.$store.state.streamData;
    },
  },
  methods: {
    dispatchStreamConfig() {
      this.$store.dispatch("getStreamConfig");
    },
    dispatchDataStream() {
      //this.$store.dispatch("getValues", { jointNr: 1 });
      this.$store.dispatch("getDataStream");
    },
  },
  created() {
    console.log("created")
    this.joint_nr = this.jointNr;
    this.dispatchStreamConfig();
    this.dispatchDataStream();
/*
    axios
      .get("http://localhost:5000/datastream")
      .then((response) => {
        // JSON responses are automatically parsed.
        this.$store.state.streamData = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
      */
  },
};
</script>