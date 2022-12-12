import { ref, computed } from "vue";
import { defineStore } from "pinia";
import io from "socket.io-client";
// import { Api } from "../services/api_ws";
import { cardsStore } from "./cards"
import { tmtcStore } from "./tmtc"

export const apiStore = defineStore("api", () => {

    const tmtc = tmtcStore();
    const cards = cardsStore();
    const port = 5000;
    const socket = io("localhost:" + port)

    socket.on("data", (data) => {
        console.log("tm data received")
        console.log(data)
        tmtc.setData(data["channel"], "tm", data.index, data.address, data.data)
    });

    socket.on("count", (data) => {
        console.log("count received")
        console.log(data)
    })

    function initSocket(port: number) {
      //  const socket = ref(io("localhost:" + port));
    }

    function requestConfig() {
        console.log("request config")
        socket.emit("requestConfig", "default")
    }

    function createChannel(config: any) {
        console.log("chreate Channel")
        socket.emit("createChannel", config)
    }

    function newChannel() {
        console.log("new Channel")
        socket.emit("newChannel")
    }

    function restartChannel(){
        console.log("restart channel")
        socket.emit("restart_channel")
    }

    function sendCommand(name:string, value:any, channel:string, index:number){
        socket.emit("command", {name:name, value:value, channel:channel, index:index})
    }

    socket.on("config", (data) => {
        console.log("config received");
        console.log(data);
        tmtc.setConfig(data);
        cards.processCard();
        cards.processTcCard();
    });

    socket.on("cards", (data) => {
        cards.setCards(data)
    });



    return { initSocket, requestConfig, createChannel, newChannel, restartChannel, sendCommand };
})