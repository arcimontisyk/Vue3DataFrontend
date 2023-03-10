import { ref, computed } from "vue";
import { defineStore } from "pinia";
import io from "socket.io-client";
// import { Api } from "../services/api_ws";
import { cardsStore } from "./cards"
import { tmtcStore } from "./tmtc"
import { CreateReadStreamOptions } from "fs/promises";

export const apiStore = defineStore("api", () => {

    const tmtc = tmtcStore();
    const cards = cardsStore();
    const port = 5000;
    const socket = io("localhost:" + port)
    requestConfig()

    socket.on("data", (data) => {
    //    console.log("tm data received")
    //    console.log(data)
        tmtc.setData(data["channel"], "tm", data.index, data.address, data.data)
    });

    function initSocket(port: number) {
      //  const socket = ref(io("localhost:" + port));
    }

    function requestConfig() {
        console.log("request config")
        socket.emit("requestConfig", "default")
    }

    function createChannel(config: any) {
        console.log("chreate Channel")
    //    socket.emit("createChannel", config)
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

    function requestCards(){
        socket.emit("request_cards")
    }

    function sendCards(cards:any){
        socket.emit("cards", cards)
    }

    socket.on("config", (data) => {
        console.log("config received");
        tmtc.setConfig(data);
      cards.processCards();
    });

    socket.on("cards", (data) => {
        cards.setCards(data)
    });



    return { initSocket, requestConfig, createChannel, newChannel, restartChannel, sendCommand, requestCards, sendCards };
})