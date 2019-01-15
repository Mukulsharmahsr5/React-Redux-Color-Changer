const mainReducer = (state, action) => {
	switch(action.type){
		case 'COLOR_RED_ACTION' :
		return {
			...state,
			color : action.value,
		}

		case 'COLOR_YELLOW_ACTION' :
		return {
			...state,
			color : action.value,
		}

		case 'COLOR_GREEN_ACTION' :
		return {
			...state,
			color : action.value,
		}
		default:
		return state;
	}
}
export default mainReducer;