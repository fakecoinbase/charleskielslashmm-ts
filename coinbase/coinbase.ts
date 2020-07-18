import {Socket} from './coinbaseSocket'
import {Api} from './api'
import { CONNREFUSED } from 'dns'

export class Coinbase {
	static products: {}
	static init = () => {
		console.log("Init Coinbase")
		Api.products().then(products => {
			Coinbase.products = products
			console.log(Coinbase.products)
		})

		Socket.connect()
	}
}