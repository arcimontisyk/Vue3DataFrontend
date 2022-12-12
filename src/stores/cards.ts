import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { tmtcStore } from "./tmtc";

export interface DataLookup {
  position: number,
  address: number,
}

export class defaultDataLookup implements DataLookup{
  position = -1;
  address = -1;
}

export interface CardItem {
  channel: string,
  index: number,
  type: string,
  input: string | null
  fieldName: string,
  datalookup: DataLookup
  items: Array<String>
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
  const cards = ref(null)

  // --------------------------------
  // ------- cards ------------------
  // --------------------------------
  function setCards(data: any) {
    cards.value = data
  };

  type LooseObject = {
    [key: string]: any
  }

  const testCard: any = ref(
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

  const cmdCard = ref<Card>(
    {
      header: "cmd_test",
      style: "rows",
      items: [
        { channel: "default", index: 0, type: "tc", input: "value", datalookup: {position:0, address:0}, fieldName: "torque_desired", items: [] },
       { channel: "default", index: 0, type: "tc", input: "value", datalookup:  {position:0, address:0}, fieldName: "tau_desired", items: [] },
       { channel: "default", index: 0, type: "tc", input: "value", datalookup:  {position:0, address:0}, fieldName: "motor_fault_over_current", items: [] },
       { channel: "default", index: 0, type: "tc", input: "select", datalookup:  {position:0, address:0}, fieldName: "motor-state", items: ["Btn:Left", "Btn_Right"] },
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
    if (card != null) {
      for (let cardItem of card.value.items) {
        console.log("-----process TC card------")
        console.log(JSON.stringify(cardItem))
        // process tm card
        let obj = tmtc.getDetail(cardItem.channel, cardItem.type, cardItem.index, cardItem.fieldName)
        console.log(JSON.stringify(obj))
        //card.value.items[i_cardItem].datalookup = obj
        card.value.items[i_cardItem].datalookup = obj
        console.log(JSON.stringify(card.value.items[i_cardItem].datalookup))
        card.value.items[i_cardItem]["items"] = tmtc.getSelectDetails(cardItem)
        i_cardItem++
      }
    }
  }

  return { testCard, processCard, setCards, cards, cmdCard, processTcCard };
});
