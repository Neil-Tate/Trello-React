import * as types from '../constants/type-constant';
import setAuthToken from "../utils/setAuthToken";

export function loginRequest(userdata, history) {
	return {
		type:types.LOG_IN_REQUEST,
		payload: {
			data: userdata,
			history: history
		}
	}
} 

export function setCurrentUser(data) {
	return {
		type: types.LOG_IN_SUCCESS,
		data: data
	}
}

export function logoutUser() {
	return {
		type: types.LOG_OUT
	}
}

export function errors(data) {
	return {
		type: types.GET_ERRORS,
		data: data
	}
}

export function saveEmailUrl(email) {
	return {
		type: types.EMAIL_SAVE,
		data: email
	}
}

export function signUpRequest(userdata, history) {
	return {
		type: types.SIGN_UP_REQUEST,
		payload: {
			data: userdata,
			history: history
		}
	}
}

export function changeStarred(starred) {
	return {
		type: types.CHANGE_STARRED,
		payload: starred
	}
}

export function getThemeRequest() {
	return {
		type: types.GET_THEME_REQUEST
	}
}

export function getThemeSuccess(data) {
	return {
		type: types.GET_THEME_SUCCESS,
		payload: data
	}
}

export function addList(data) {
	return {
		type: types.ADD_LIST,
		payload: data
	}
}

export function closeList(showFlag) {
	return {
		type: types.CLOSE_LIST,
		payload: showFlag
	}
}

export function saveCompareId(id) {
	return {
		type: types.SAVE_ID,
		payload: id
	}
}

export function addCard(data) {
	return {
		type: types.ADD_CARD,
		payload: data
	}
}

export function recentedUpdate(data) {
	return {
		type: types.RECENTED_UPDATE,
		payload: data
	}
}

export function updateWindowFlag(flag) {
	return {
		type: types.UPDATE_WINDOW_FLAG,
		payload: flag
	}
}

export function toggleFlag(data) {
	return {
		type: types.TOGGLE_FLAG,
		payload: data
	}
}

export function createNewBoard(data) {
	return {
		type: types.CREATE_NEW_BOARD,
		payload: data
	}
}

export function saveNewCreatedId(id) {
	return {
		type: types.SAVE_CREATED_ID,
		payload: id
	}
}

export function saveSearchTopId(id) {
	return {
		type: types.SAVE_TOP_ID,
		payload: id
	}
}

export function saveTemplateType(type) {
	return {
		type: types.SAVE_TEMPLATE_TYPE,
		payload: type
	}
}

export function saveTemplateAuth(data) {
	return {
		type: types.SAVE_TEMPLATE_AUTH,
		payload: data
	}
}