"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coinbase = void 0;
var coinbaseSocket_1 = require("./coinbaseSocket");
var api_1 = require("./api");
var Coinbase = /** @class */ (function () {
    function Coinbase() {
    }
    Coinbase.init = function () {
        console.log("Init Coinbase");
        api_1.Api.products().then(function (products) {
            Coinbase.products = products;
            console.log(Coinbase.products);
        });
        coinbaseSocket_1.Socket.connect();
    };
    return Coinbase;
}());
exports.Coinbase = Coinbase;
//# sourceMappingURL=coinbase.js.map