import { LOADDATA } from "./../actions/actionTypes";

const initialState = {
	data: null
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
		case LOADDATA:
			return {
				...state,
				data: action.payload
			};
        default:
			return state;
	}
};

export default dataReducer;
