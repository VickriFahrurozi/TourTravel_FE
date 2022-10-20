/** @format */

import { combineReducers } from 'redux';

import AuthLogin from './AuthLogin';
import GetAllPackage from './Package';
import GetSinglePackage from './SinglePackage';
import { FetchAddOrder, FetchDeleteOrder, FetchUpdateOrder } from './Order';
import GetSingleOrder from './SingleOrder';
import { Fetch, FetchDeletePackage, FetchEditPackage } from './AddPackage';
import GetAllOrder from './GetAllOrder';
import { FetchGetAccount, FetchDeleteAccount } from './Account';

const rootReducer = combineReducers({
	auth: AuthLogin,
	getallpackage: GetAllPackage,
	getsinglepackage: GetSinglePackage,
	addorder: FetchAddOrder,
	getsingleorder: GetSingleOrder,
	addpackage: Fetch,
	deletepackage: FetchDeletePackage,
	editpackage: FetchEditPackage,
	getallorder: GetAllOrder,
	deleteorder: FetchDeleteOrder,
	updateorder: FetchUpdateOrder,
	getallaccount: FetchGetAccount,
	deleteaccount: FetchDeleteAccount,
});

export default rootReducer;
