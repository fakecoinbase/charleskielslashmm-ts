"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Api = void 0;
var Api = /** @class */ (function () {
    function Api() {
    }
    //socket = new WebSocket("wss://ws-feed.pro.coinbase.com");
    Api.connect = function () {
        console.log("Connecting TDA socket");
    };
    return Api;
}());
exports.Api = Api;
//# sourceMappingURL=api.js.map