
const request = require('request');
const moment = require('moment');
export class Fetch{
	
	endpoint = "https://api.pro.coinbase.com"

	static fetch(endpoint){
	console.log(moment(Date.now()).format() + this.endpoint + endpoint)
	fetch(this.endpoint + endpoint)
	.then(response => response.json())
	.then(response => {
console.log(response)
	})

	.catch((error) => {
		console.error('Error:', error);
		return error
	})


 }


}