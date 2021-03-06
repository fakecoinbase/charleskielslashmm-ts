"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socket = void 0;
var fs = require('fs');
var WebSocket = require('websocket').w3cwebsocket;
var Socket = /** @class */ (function () {
    function Socket() {
    }
    Socket.connect = function () {
        var _this = this;
        var keys = JSON.parse(fs.readFileSync('/var/www/charleskiel.dev/mm-ts/auth/coinbase.json'));
        console.log("Connecting Coinbase socket");
        this.socket.onopen = function (ws) {
            //console.log(keys)
            //console.log(ws)
            console.log("Connected");
            _this.socket.send(JSON.stringify(keys));
            _this.socket.send(JSON.stringify({
                type: "subscribe",
                product_ids: [
                    "ETH-USD",
                    "BTC-USD"
                ],
                channels: [
                    {
                        name: "full",
                        product_ids: [
                            "ETH-USD"
                        ]
                    },
                    "heartbeat",
                    {
                        name: "ticker",
                        product_ids: [
                            "ETH-BTC",
                            "ETH-USD"
                        ]
                    }
                ]
            }));
        };
        this.socket.addEventListener("message", function (event) {
            var tick = JSON.parse(event.data);
            _this.packetCount += 1;
            switch (tick.type) {
                case "snapshot":
                    //console.log(tick)
                    if (_this.packetCount < 200)
                        console.log(tick);
                    break;
                case "ticker":
                    console.log(tick);
                    //if (!cryptoList[tick.product_id]){this.getCrypto()}
                    _this.cryptoTick(tick);
                    break;
                case "open":
                    //document.getElementById("tick").innerHTML = tick.price;//console.log(`Default Message ${message}`)
                    break;
                default:
                    //if (this.packetCount < 1000) console.log(tick)
                    //console.log(tick)
                    break;
            }
        });
    };
    Socket.cryptoTick = function (tick) {
        //console.log(tick)
        // if (cryptoList[tick.product_id]){
        // 	cryptoList[tick.product_id].data = [...cryptoList[tick.product_id].data, tick]
        // }
        // else
        // {
        // 	cryptoList[tick.key] = tick
        // 	cryptoList[tick.key].data = [{...tick}]
        // 	let el = document.createElement("div")
        // 	el.innerHTML = `
        // 	<div class="ibox-content stock-card" id=\"${tick.product_id}_card\" >
        // 		<h3>${tick.product_id}</h3>
        // 		<span  style="font-size: 1.3em" class="m-r" id=\"${tick.product_id}_last\"></span>
        // 		<div class='float-right text-right' ">
        // 			<span class=\"bar_dashboard\" id=\"${tick.product_id}_chart\" style="height: 30px">0</span>
        // 			<br/>
        // 			<small class="font-bold" id=\"${tick.product_id}_bid\">Bid - $</small>
        // 			<small class="font-bold" id=\"${tick.product_id}_ask\">Ask - $</small>
        // 		</div>
        // 		<br/>
        // 		<small class="m-r" id=\"${tick.product_id}_volume\"></small>
        // 	<div>`
        // 	document.getElementById("watchlist").appendChild(el)
        // 	cryptoList[tick.product_id] = tick
        // 	cryptoList[tick.product_id].data = [{ ...tick}]
        // }
        // document.getElementById(`${tick.product_id}_bid`).innerText = cryptoList[tick.product_id].data[cryptoList[tick.product_id].data.length - 1].best_bid
        // document.getElementById(`${tick.product_id}_ask`).innerText = cryptoList[tick.product_id].data[cryptoList[tick.product_id].data.length - 1].best_ask
        // if (document.getElementById(`${tick.product_id}_last`).innerText !== cryptoList[tick.product_id].data[cryptoList[tick.product_id].data.length - 1].price){
        // 	if (document.getElementById(`${tick.product_id}_last`).innerHTML <= cryptoList[tick.product_id].data[cryptoList[tick.product_id].data.length - 1].price)
        // 	{
        // 		document.getElementById(`${tick.product_id}_last`).classList.add("blink-red")
        // 		setTimeout(function () { document.getElementById(`${tick.product_id}_last`).classList.remove("blink-red"); },500);
        // 	}
        // 	if (document.getElementById(`${tick.product_id}_last`).innerHTML >= cryptoList[tick.product_id].data[cryptoList[tick.product_id].data.length - 1].price)
        // 	{
        // 		document.getElementById(`${tick.product_id}_last`).classList.add("blink-green")
        // 		setTimeout(function () { document.getElementById(`${tick.product_id}_last`).classList.remove("blink-green"); },500);
        // 	}
        // 	if(cryptoList[tick.product_id].data.length > 1){document.getElementById(`${tick.product_id}_chart`).innerText = cryptoList[tick.product_id].data.map(t =>{
        // 		if (t[3]) {return t[3]}
        // 	}).join()
        // }
        // document.getElementById(`${tick.product_id}_last`).innerText = cryptoList[tick.product_id].data[cryptoList[tick.product_id].data.length - 1].price
        // }
        // if(tick["14"]){
        // } 
        // return cryptoList[tick.product_id]
    };
    Socket.socket = new WebSocket("wss://ws-feed.pro.coinbase.com");
    Socket.packetCount = 0;
    return Socket;
}());
exports.Socket = Socket;
//# sourceMappingURL=coinbaseSocket.js.map