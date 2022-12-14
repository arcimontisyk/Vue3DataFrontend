import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { tmtcStore } from "./tmtc";

export interface DataLookup {
  position: number,
  address: number,
}

export class defaultDataLookup implements DataLookup {
  position = -1;
  address = -1;
}

export interface CardItem {
  channel: string,
  index: number,
  type: string,
  itemType: string | null
  fieldName: string,
  displayName: string,
  datalookup: DataLookup
  items: Array<string>
}

export interface Card {
  header: string,
  style: string,
  items: Array<CardItem>
}

export type Test = {
  x: number;
  y: string
}

export const cardsStore = defineStore("cards", () => {
  const tmtc = tmtcStore();
  //  const cards = ref(null)

  // --------------------------------
  // ------- cards ------------------
  // --------------------------------
  function setCards(data: any) {
    cards.value = data
  };

  type LooseObject = {
    [key: string]: any
  }

  const cards = ref<Array<Card>>([
    {
      header: "tm_test",
      style: "table",
      items: [
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "i_phase_a", fieldName: "i_phase_a", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "i_phase_b", fieldName: "i_phase_b", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "i_phase_c", fieldName: "i_phase_c", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "temp_ana_1", fieldName: "temp_ana_1", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "temp_ana_2", fieldName: "temp_ana_2", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "temp_ana_3", fieldName: "temp_ana_3", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "temp_motor", fieldName: "temp_motor", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "pwr_m", fieldName: "pwr_m", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "i_power_m", fieldName: "i_power_m", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "i_12vd", fieldName: "i_12vd", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "i_5v", fieldName: "i_5v", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "u_5vd", fieldName: "u_5vd", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "u_3v3d", fieldName: "u_3v3d", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "u_3v3a", fieldName: "u_3v3a", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "u_2v5a", fieldName: "u_2v5a", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "t_2v5ref", fieldName: "t_2v5ref", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "resolver_position", fieldName: "resolver_position", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "res_velocity", fieldName: "res_velocity", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "res_fault", fieldName: "res_fault", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "res_out_db", fieldName: "res_out_db", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "res_status", fieldName: "res_status", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "radmonitor", fieldName: "radmonitor", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "dms", fieldName: "dms", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "dms_ref", fieldName: "dms_ref", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "temp_struktur", fieldName: "temp_struktur", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "temp_amp", fieldName: "temp_amp", items: [] },
//        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "", fieldName: "", items: [] },

      ]
    },
    {
      header: "cmd_test",
      style: "rows",
      items: [
        { channel: "default", index: 0, type: "tc", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "torque desired", fieldName: "torque_desired", items: [] },
        { channel: "default", index: 0, type: "tc", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "tau desired", fieldName: "tau_desired", items: [] },
        { channel: "default", index: 0, type: "tc", itemType: "select", datalookup: { position: -1, address: -1 }, displayName: "motor-state", fieldName: "motor-state", items: ["Btn:Left", "Btn_Right"] },
        { channel: "default", index: 0, type: "tc", itemType: "status", datalookup: { position: -1, address: -1 }, displayName: "overcurrent_reset", fieldName: "overcurrent_reset", items: [] },
        { channel: "default", index: 0, type: "tc", itemType: "status", datalookup: { position: -1, address: -1 }, displayName: "spw_timeout_reset", fieldName: "spw_timeout_reset", items: [] },
        { channel: "default", index: 0, type: "tc", itemType: "status", datalookup: { position: -1, address: -1 }, displayName: "emergency_stop_reset", fieldName: "emergency_stop_reset", items: [] },
        { channel: "default", index: 0, type: "tc", itemType: "status", datalookup: { position: -1, address: -1 }, displayName: "hall_sectorseq_fault_reset", fieldName: "hall_sectorseq_fault_reset", items: [] },
        { channel: "default", index: 0, type: "tc", itemType: "status", datalookup: { position: -1, address: -1 }, displayName: "hall_invalid_sig_reset", fieldName: "hall_invalid_sig_reset", items: [] },
        { channel: "default", index: 0, type: "tc", itemType: "status", datalookup: { position: -1, address: -1 }, displayName: "hall_invalid_sig_reset", fieldName: "hall_invalid_sig_reset", items: [] },
        { channel: "default", index: 0, type: "tc", itemType: "status", datalookup: { position: -1, address: -1 }, displayName: "drv_otw_reset", fieldName: "drv_otw_reset", items: [] },
        { channel: "default", index: 0, type: "tc", itemType: "status", datalookup: { position: -1, address: -1 }, displayName: "no_fault_reset", fieldName: "no_fault_reset", items: [] },
        { channel: "default", index: 0, type: "tc", itemType: "status", datalookup: { position: -1, address: -1 }, displayName: "motor_power_min", fieldName: "motor_power_min", items: [] },
//        { channel: "default", index: 0, type: "tc", itemType: "status", datalookup: { position: -1, address: -1 }, displayName: "", fieldName: "", items: [] },

      ]
    }
  ]

  )
  const testCard: any = ref(
    {
      header: "tm_test",
      style: "table",
      items: [
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "i_phase_a", fieldName: "i_phase_a", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "u_3v3d", fieldName: "u_3v3d", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "temp_ana_1", fieldName: "temp_ana_1", items: [] },
        { channel: "default", index: 0, type: "tm", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "temp_motor", fieldName: "temp_motor", items: [] },
      ]
    })

  const cmdCard = ref<Card>(
    {
      header: "cmd_test",
      style: "rows",
      items: [
        { channel: "default", index: 0, type: "tc", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "torque desired", fieldName: "torque_desired", items: [] },
        { channel: "default", index: 0, type: "tc", itemType: "value", datalookup: { position: -1, address: -1 }, displayName: "tau desired", fieldName: "tau_desired", items: [] },
        { channel: "default", index: 0, type: "tc", itemType: "select", datalookup: { position: -1, address: -1 }, displayName: "", fieldName: "motor-state", items: ["Btn:Left", "Btn_Right"] },
        { channel: "default", index: 0, type: "tc", itemType: "status", datalookup: { position: -1, address: -1 }, displayName: "overcurrent_reset", fieldName: "overcurrent_reset", items: [] },
      ]
    })


  // function getDetailsFromConfig(card: any) {//channel:string, fieldName:string){
  //
  //   //   const tmConfig = tmtc.getTmTc(card.channel)
  //   //   card.generated = {"test": "test"}
  // }

  function processSelect(cardItem: LooseObject) {
    const values = tmtc.getSelectDetails(cardItem)

  }

  function processCard() {
    let i_cardItem = 0
    for (let cardItem of cards.value[0].items) {
      //   console.log("-----process card------")
      // process tm card
      let obj = tmtc.getDetail(cardItem.channel, cardItem.type, cardItem.index, cardItem.fieldName)
      cards.value[0].items[i_cardItem]["datalookup"] = obj
      i_cardItem++
    }
    //console.log(JSON.stringify(testCard.value))
  }
  //console.log(testCard)

  function processTcCard() {
    const card = cards.value[1]
    let i_cardItem = 0
    if (card != null) {
      for (let cardItem of card.items) {
        console.log("-----process TC card------")
        console.log(JSON.stringify(cardItem))
        // process tm card
        let obj = tmtc.getDetail(cardItem.channel, cardItem.type, cardItem.index, cardItem.fieldName)
        console.log(JSON.stringify(obj))
        //card.value.items[i_cardItem].datalookup = obj
        card.items[i_cardItem].datalookup = obj
        console.log(JSON.stringify(card.items[i_cardItem].datalookup))
        card.items[i_cardItem]["items"] = tmtc.getSelectDetails(cardItem)
        i_cardItem++
      }
    }
  }

  return { testCard, processCard, setCards, cards, cmdCard, processTcCard };
});
