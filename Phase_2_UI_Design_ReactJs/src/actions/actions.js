import { INCREMENT, DECREMENT, LOADDATA } from "./actionTypes";

export const increase = payload => ({
	type: INCREMENT,
	payload
});

export const decrease = payload => ({
	type: DECREMENT,
	payload
});

export const loadData = payload => ({
	type: LOADDATA,
	payload
});