import { composeWithDevTools } from "@redux-devtools/extension";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import {  applyMiddleware, combineReducers, createStore } from "redux";
import launchUser from './user/reducer';
import fractionalize from './fractionalize/reducer';
import modal_config from './modals/reducer';
import vault_config from './vault/reducer';
const combineReducer = combineReducers({
    launchUser,
    fractionalize,
    modal_config,
    vault_config
});

const reducer = (state, action)=>{
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return combineReducer(state, action);
    }
};

const initStore = () => {
    return createStore(reducer, composeWithDevTools(
        applyMiddleware()
    ))
}

export const wrapper = createWrapper(initStore);
