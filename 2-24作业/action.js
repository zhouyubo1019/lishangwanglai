import {
	getUser,
	getAddressList
} from '../service/getData'
import {
	GET_USERINFO,
	SAVE-ADDRESS
} from './mutation-type.js'

export default {
	async getUserInfo({
		commit,
		state
	}) {
		let res= await getUser();
		commit(GET_USERINFO, res)
	},
	async saveAddress({
		commit,
		state
	}) {
		if(state.removeAddress.length>0) return;
		let addres =await getAddressList(state.userIndo.user_id);
		commit(SAVE_ADDRESS,addres)
	},
}