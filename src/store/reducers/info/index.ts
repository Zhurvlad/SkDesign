import {InfoActionEnum, InfoActions, InfoState} from "./types";

import produce from 'immer'


const initialState:InfoState = {
    info: []
}

export default function infoReducer (state = initialState, actions:InfoActions ):InfoState {
    return produce (state, draft => {
        switch (actions.type) {
            case InfoActionEnum.ADD_INFO:

                draft.info.push(actions.payload)
                break;

            default:
                return state
        }
    })
}