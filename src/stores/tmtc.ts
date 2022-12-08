import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type internal from "stream";

export const tmtcStore = defineStore("tmtc", () => {

  // interface TmData {
  //   [key: string]: any
  // }
  //
  // const tmData: TmData = ref({
  //   // key: {}
  // });
  //const channels = ref({});
  interface Channels {
    [key: string]: any
  }
  const channels: Channels = ref({
    // key: {}
  });

  interface TMTC_Item {
    [key: string]: any
  }

  type LooseObject = {
    [key: string]: any
  }

  const currentChannelName = "default"
  const channel: any = computed((name: string) => channels.value["default"])

  function printObject(obj: any) {
    console.log(JSON.stringify(obj))
  }

  function test() {
    console.log("test tmtc2")
  }

  function getTmTc(channelName: string) {
    const tmConfig = channels.value[channelName as keyof Channels].config["deviceChain"];
  }

  function setDataDefault(channelName: string) {
    const selector = ["tm", "tc"]
    //let selected = selector[1]
    if (channelName in channels.value) {
      // create key value pair in data
      //   tmData.value[channelName as keyof TmData] = {}
      let i_TMTC = 0
      let newChannel: LooseObject = {} //{"tm":<TMTC_Item>[],"tc":<TMTC_Item>[]}
      newChannel["tm" as keyof LooseObject] = []
      newChannel["tc" as keyof LooseObject] = []

      const tmConfig = channels.value[channelName as keyof Channels].config["deviceChain"];
      for (const TMTC_item of tmConfig) { // for each device in chain
        for (const selected of selector) {
          let tmtc_items: TMTC_Item = {}
          for (const tm_collection of TMTC_item[selected]) { // tm only
            let address = tm_collection.address.toString()
            //console.log("address: " + address)
            tmtc_items[address] = []
            for (const payloadItem of tm_collection.payload) {
              tmtc_items[address].push(null)
            }
          }
          newChannel[selected as keyof LooseObject].push(tmtc_items)
          //      console.log("chainIndex: " + i_TMTC)
          i_TMTC++
        }
      }
      //    console.log(newChannel)
      channels.value[channelName as keyof Channels].data = newChannel
    }
    console.log("tmData:")
    //    printObject(channels.value["default"].data)
  }

  function setData(channelName: string, type: string, index: number, address: number, data: Array<Number>) {
    //tmtc.channels[channelName].data[0]["128"]
 //   console.log(index)
 //   console.log(address)
 //   console.log("type: " + type)
 //   printObject(channels.value["default"].data)//[type][index][address.toString()])
    //    console.log(data)
    channels.value["default"].data[type][index][address.toString()] = data
  }

  function setConfig(config: any) {
    if ("channelName" in config) {
 //     console.log(JSON.stringify(channels.value))
 //     console.log("set config by name: " + config["channelName"])
 //     console.log(config)
      const channelName = config["channelName"];
 //     console.log("channelname = " + channelName)
      channels.value[channelName as keyof Channels] = {};
//      console.log(channels.value)
      channels.value[channelName as keyof Channels].config = config
   //   console.log(JSON.stringify(channels.value))
      if ("deviceChain" in config) {
        setDataDefault(channelName);
      }
    }
  }

  function getDetail(channelName: string, type: string, index: number, fieldName: string) {
    let paramObj = { position: -1, address: -1, }
    console.log("---------- get detail -------------------")
    //   console.log(JSON.stringify(channels.value))
    //   printObject(channels.value)//.[channelName as keyof Channels].config["TMTC"][index])
    //    console.log(channelName)
    //  console.log(JSON.stringify(channels.value[channelName as keyof Channels].config["deviceChain"][index]))
    const tmConfig = channels.value[channelName as keyof Channels].config["deviceChain"][index];
    console.log(JSON.stringify(tmConfig))
    for (const tm_collection of tmConfig.tm) { // tm only
      let address = tm_collection.address.toString()
      let i_position = 0
      for (const payloadItem of tm_collection.payload) {
        //  printObject(payloadItem)
        if (payloadItem.name == fieldName) {
          paramObj.position = i_position
          paramObj.address = address
          return paramObj
        }
        i_position++
      }
    }
    console.log("---------- get detail END-------------------")
  }

  function getPayloadItem(channelName: string, type: string, index: number, fieldName: string) {
    let paramObj = { position: -1, address: -1, }
  //  console.log("---------- get detail -------------------")
 //   console.log("Type: " + type)
    if(channels.value[channelName as keyof Channels] != null){
      //   printObject(channels.value)//.[channelName as keyof Channels].config["TMTC"][index])
      const tmConfig = channels.value[channelName as keyof Channels].config["deviceChain"][index];
  
      for (const tm_collection of tmConfig[type]) { // tm only
        let address = tm_collection.address.toString()
        let i_position = 0
        for (const payloadItem of tm_collection.payload) {
          //  printObject(payloadItem)
          if (payloadItem.name == fieldName) {
            return [payloadItem, i_position]
          }
          i_position++
        }
      }
    }
    return [null, null]
  }

  function getSelectDetails(cardItem: any) {
    console.log("!!!!!!!!!!!!!!!!")
    console.log(JSON.stringify(cardItem))
    const [payloadItem, pl_position] = getPayloadItem(cardItem.channel, cardItem.type, cardItem.index, cardItem.fieldName)
    printObject(payloadItem)
    let out:Array<string> = []
    if (payloadItem != null && "values" in payloadItem) {
      for(const item of payloadItem.values){
        out.push(item.name)      
      } 
    }
    console.log(out)
    return out
  }


  return { channel, channels, test, setDataDefault, setConfig, getDetail, setData, getSelectDetails }
});

