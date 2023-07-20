// store.js
import { createStore } from "redux";

const initialState = {
    isMainPage: false,
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_MAIN_PAGE":
            return { ...state, isMainPage: action.payload };
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;
