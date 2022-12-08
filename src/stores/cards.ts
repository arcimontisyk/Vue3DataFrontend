import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { tmtcStore } from "./tmtc";

export const cardsStore = defineStore("cards", () => {
  const tmtc = tmtcStore();
  const cards = ref(null)

  // --------------------------------
  // ------- cards ------------------
  // --------------------------------
  function setCards(data: any) {
    cards.value = data
  };

  function test() {
    console.log("test card")
  }

  type DataLookup = {
    position: number,
    address: number
  }
  type Card = {
    channel: string,
    index: number,
    fieldName: string,
    datalookup: DataLookup | null
  }
  type LooseObject = {
    [key: string]: any
  }

  //   { channel: string, index: 0, fieldName: "test_value_1", datalookup:{
  //     position:number=0,
  //     address:number=0
  //   } },
  //
  // }

  const testCard: LooseObject = ref(
    {
      header: "tm_test",
      style: "table",
      items: [
        { channel: "default", index: 0, type: "tm", fieldName: "i_phase_a" },
        { channel: "default", index: 0, type: "tm", fieldName: "u_3v3d" },
        { channel: "default", index: 0, type: "tm", fieldName: "temp_ana_1" },
        { channel: "default", index: 0, type: "tm", fieldName: "temp_motor" },
      ]
    })
  const cmdCard: LooseObject = ref(
    {
      header: "cmd_test",
      style: "rows",
      items: [
        { channel: "default", index: 0, type: "tc", input: "value", fieldName: "torque_desired" },
        { channel: "default", index: 0, type: "tc", input: "value", fieldName: "tau_desired" },
        { channel: "default", index: 0, type: "tc", input: "value", fieldName: "motor_fault_over_current" },
        { channel: "default", index: 0, type: "tc", input: "select", fieldName: "motor-state", items: ["Btn:Left", "Btn_Right"] },
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
    for (let cardItem of testCard.value.items) {
      //   console.log("-----process card------")
      // process tm card
      let obj = tmtc.getDetail(cardItem.channel, cardItem.type, cardItem.index, cardItem.fieldName)
      testCard.value.items[i_cardItem]["datalookup"] = obj
      i_cardItem++
    }
    //console.log(JSON.stringify(testCard.value))
  }
  //console.log(testCard)

  function processTcCard() {
    const card = cmdCard
    let i_cardItem = 0
    for (let cardItem of card.value.items) {
      console.log("-----process TC card------")
      console.log(JSON.stringify(cardItem))
      // process tm card
      let obj = tmtc.getDetail(cardItem.channel, cardItem.type, cardItem.index, cardItem.fieldName)
      console.log(JSON.stringify(obj))
      card.value.items[i_cardItem]["datalookup"] = obj
      console.log(JSON.stringify(card.value.items[i_cardItem]["datalookup"]))
      card.value.items[i_cardItem]["items"] = tmtc.getSelectDetails(cardItem)
      i_cardItem++
    }
  }

  return { test, testCard, processCard, setCards, cards, cmdCard, processTcCard };
});
