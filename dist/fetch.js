"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fetch = void 0;
var request = require('request');
var moment = require('moment');
var Fetch = /** @class */ (function () {
    function Fetch() {
        this.endpoint = "https://api.pro.coinbase.com";
    }
    Fetch.fetch = function (endpoint) {
        console.log(moment(Date.now()).format() + this.endpoint + endpoint);
        fetch(this.endpoint + endpoint)
            .then(function (response) { return response.json(); })
            .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
            console.error('Error:', error);
            return error;
        });
    };
    return Fetch;
}());
exports.Fetch = Fetch;
//# sourceMappingURL=fetch.js.map